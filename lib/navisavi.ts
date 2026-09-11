import "server-only";

import { project } from "@/lib/projection";

/**
 * Reads the NaviSavi commercial API.
 *
 * The key is server-side only and never leaves this module. Everything here
 * runs during the build or on the server, so nothing about it reaches the
 * browser except the projected coordinates.
 */

const BASE = "https://api.navisavitravel.com/v1";

/** One page of locations is 100; these pages are spread across the full set. */
const PAGE_SIZE = 100;
const PAGES = [1, 73, 145, 217, 289, 361, 433, 505, 577, 649, 721, 793];

/** A day. The catalogue moves slowly and the quota is worth respecting. */
const REVALIDATE_SECONDS = 86_400;

type ApiLocation = {
  id: number;
  name: string;
  latitude: number | null;
  longitude: number | null;
  countryId: number | null;
};

export type HeroPoint = {
  /** Projected to 0..1, ready for the canvas. */
  x: number;
  y: number;
  name: string;
};

async function getPage(page: number): Promise<ApiLocation[]> {
  const key = process.env.NAVISAVI_API_KEY;
  if (!key) return [];

  const res = await fetch(`${BASE}/locations?limit=${PAGE_SIZE}&page=${page}`, {
    headers: { "x-api-key": key, accept: "application/json" },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) return [];

  const json = (await res.json()) as { data?: ApiLocation[] };
  return json.data ?? [];
}

/**
 * Real places from the catalogue, projected for the hero canvas.
 *
 * Returns an empty array if the key is missing or the API is unreachable, and
 * the canvas falls back to its own composed scatter. The page never breaks
 * because a third party is down.
 */
export async function getHeroPoints(): Promise<HeroPoint[]> {
  try {
    const pages = await Promise.all(PAGES.map(getPage));

    const seen = new Set<string>();
    const points: HeroPoint[] = [];

    for (const loc of pages.flat()) {
      if (loc.latitude == null || loc.longitude == null) continue;

      // Several venues share a building; one dot per spot is enough.
      const dedupe = `${loc.latitude.toFixed(2)},${loc.longitude.toFixed(2)}`;
      if (seen.has(dedupe)) continue;
      seen.add(dedupe);

      const { x, y } = project(loc.latitude, loc.longitude);
      points.push({ x, y, name: loc.name });
    }

    return points;
  } catch {
    return [];
  }
}

export type Clip = {
  id: string;
  title: string;
  /** Mux still, sized down; costs nothing until someone presses play. */
  poster: string;
  /** HLS, capped at 360p. Full resolution is wasted at this size. */
  stream: string;
  seconds: number | null;
  place: string | null;
};

type ApiVideo = {
  id: string;
  title?: string;
  playbackId?: string;
  thumbnailUrl?: string;
  streamUrl?: string;
  contentUrl?: string;
  duration?: number;
  location?: { name?: string } | null;
};

/**
 * A playlist of real footage from the catalogue.
 *
 * `/v1/videos` is forbidden to this key, but playlists return whole video
 * objects, which is where these come from.
 */
export async function getPlaylist(playlistId: number, take = 8): Promise<Clip[]> {
  const key = process.env.NAVISAVI_API_KEY;
  if (!key) return [];

  try {
    const res = await fetch(`${BASE}/playlists/${playlistId}`, {
      headers: { "x-api-key": key, accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];

    const json = (await res.json()) as { videos?: ApiVideo[] };

    return (json.videos ?? [])
      .filter((v) => v.playbackId)
      .slice(0, take)
      .map((v) => ({
        id: String(v.id),
        title: v.title ?? "Untitled",
        poster: `https://image.mux.com/${v.playbackId}/thumbnail.jpg?width=640&fit_mode=preserve`,
        stream: `https://stream.mux.com/${v.playbackId}.m3u8?max_resolution=360p`,
        seconds: typeof v.duration === "number" ? v.duration : null,
        place: v.location?.name ?? null,
      }));
  } catch {
    return [];
  }
}
