"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { Clip } from "@/lib/navisavi";

/**
 * Real footage from the NaviSavi catalogue.
 *
 * Bandwidth is metered, so nothing streams until someone asks for it:
 *  - a still poster until the clip is clicked, and no <video> src before that
 *  - the player library is imported on first play, not on page load
 *  - 360p, which is plenty at this size
 *  - one clip plays at a time, and it stops when scrolled away or the tab hides
 *  - playback stops after MAX_LOOPS, so a forgotten tab cannot loop all day
 */

const MAX_LOOPS = 25;

export default function FootageStrip({ clips }: { clips: Clip[] }) {
  const [playing, setPlaying] = useState<string | null>(null);
  const [ended, setEnded] = useState<Set<string>>(new Set());

  if (clips.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-[0.55rem] sm:grid-cols-3 lg:grid-cols-4">
      {clips.map((clip) => (
        <ClipTile
          key={clip.id}
          clip={clip}
          isPlaying={playing === clip.id}
          hasEnded={ended.has(clip.id)}
          onPlay={() => {
            setEnded((prev) => {
              const next = new Set(prev);
              next.delete(clip.id);
              return next;
            });
            setPlaying(clip.id);
          }}
          onStop={(reachedLimit) => {
            setPlaying((current) => (current === clip.id ? null : current));
            if (reachedLimit) setEnded((prev) => new Set(prev).add(clip.id));
          }}
        />
      ))}
    </div>
  );
}

function ClipTile({
  clip,
  isPlaying,
  hasEnded,
  onPlay,
  onStop,
}: {
  clip: Clip;
  isPlaying: boolean;
  hasEnded: boolean;
  onPlay: () => void;
  onStop: (reachedLimit: boolean) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const loops = useRef(0);
  const [loading, setLoading] = useState(false);

  const stop = useCallback(
    (reachedLimit: boolean) => {
      videoRef.current?.pause();
      onStop(reachedLimit);
    },
    [onStop],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isPlaying) return;

    let hls: { destroy: () => void } | null = null;
    let cancelled = false;
    loops.current = 0;
    setLoading(true);

    const start = async () => {
      // Safari plays HLS directly; everything else needs the library, which is
      // only fetched at this point.
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = clip.stream;
      } else {
        const { default: Hls } = await import("hls.js");
        if (cancelled) return;
        if (!Hls.isSupported()) return;
        const instance = new Hls({ maxBufferLength: 10 });
        instance.loadSource(clip.stream);
        instance.attachMedia(video);
        hls = instance;
      }

      if (cancelled) return;
      setLoading(false);
      void video.play().catch(() => stop(false));
    };

    void start();

    const onEnded = () => {
      loops.current += 1;
      if (loops.current >= MAX_LOOPS) {
        stop(true);
        return;
      }
      video.currentTime = 0;
      void video.play().catch(() => stop(false));
    };

    const onHidden = () => {
      if (document.hidden) stop(false);
    };

    video.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onHidden);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) stop(false);
      },
      { threshold: 0.25 },
    );
    if (wrapRef.current) observer.observe(wrapRef.current);

    return () => {
      cancelled = true;
      video.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onHidden);
      observer.disconnect();
      hls?.destroy();
      video.removeAttribute("src");
      video.load();
    };
  }, [isPlaying, clip.stream, stop]);

  return (
    <div ref={wrapRef} className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => (isPlaying ? stop(false) : onPlay())}
        aria-label={isPlaying ? `Pause ${clip.title}` : `Play ${clip.title}`}
        className="group relative block aspect-[9/14] w-full overflow-hidden rounded-md border border-graticule bg-ground-2 p-0"
      >
        <Image
          src={clip.poster}
          alt=""
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
          className={`object-cover transition-opacity duration-300 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        />

        <span className="absolute inset-0 bg-gradient-to-t from-ground/85 via-transparent to-transparent" />

        <span className="absolute right-2 bottom-2 flex items-center gap-1.5">
          {clip.seconds ? (
            <span className="rounded-sm bg-ground/75 px-1.5 py-0.5 font-mono text-[0.563rem] text-paper">
              {clip.seconds}s
            </span>
          ) : null}
          <span className="flex size-6 items-center justify-center rounded-full bg-signal/90 text-white transition-transform group-hover:scale-110">
            {isPlaying ? (
              <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                <rect x="2" y="2" width="3" height="8" fill="currentColor" />
                <rect x="7" y="2" width="3" height="8" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
                <path d="M3 2l7 4-7 4z" fill="currentColor" />
              </svg>
            )}
          </span>
        </span>

        {loading && isPlaying ? (
          <span className="mono absolute top-2 left-2 !text-aqua">loading</span>
        ) : null}

        {hasEnded ? (
          <span className="mono absolute top-2 left-2 !text-amber">
            paused after {MAX_LOOPS}
          </span>
        ) : null}
      </button>

      <span className="flex flex-col gap-0.5">
        <span className="truncate text-[0.813rem] text-paper">{clip.title}</span>
        {clip.place ? <span className="mono truncate">{clip.place}</span> : null}
      </span>
    </div>
  );
}
