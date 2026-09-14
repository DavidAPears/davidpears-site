import { ImageResponse } from "next/og";

import { profile } from "@/content/site";

export const alt = "David Pears, engineer, architect and technology lead, Stockholm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GROUND = "#0A0F16";
const GRATICULE = "#1E2A38";
const PAPER = "#EDE7DC";
const MUTED = "#8494A6";
const SIGNAL = "#FF0080";
const AQUA = "#2AEFE0";

/**
 * The hero's cluster field, frozen at one zoom level and kept clear of the
 * headline's column. The type is the point, the field is atmosphere.
 */
const CLUSTERS = [
  { x: 790, y: 170, r: 26, n: 7 },
  { x: 900, y: 300, r: 34, n: 12 },
  { x: 1030, y: 195, r: 20, n: 4 },
  { x: 1105, y: 355, r: 28, n: 8 },
  { x: 930, y: 455, r: 22, n: 5 },
  { x: 1120, y: 105, r: 17, n: 3 },
  { x: 800, y: 400, r: 14, n: 2 },
];

const SINGLES = [
  { x: 1010, y: 100 },
  { x: 1150, y: 480 },
  { x: 860, y: 520 },
  { x: 1040, y: 500 },
  { x: 740, y: 270 },
];

async function archivo() {
  // Google serves the binary from a stable URL; if it is unreachable at build
  // time the card still renders, just in the default face.
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Archivo:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());

    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const font = await archivo();

  // Satori lays this line out as flex items, so anything that must not be
  // split has to share one item. `tail` is the punctuation glued to the accent.
  const lead = profile.headline.before.trimEnd();
  const [tail = "", ...restWords] = profile.headline.after.split(" ");
  const rest = restWords.join(" ");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: GROUND,
        padding: "64px 72px",
        position: "relative",
      }}
    >
      {/* graticule */}
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={`h${i}`}
          style={{
            position: "absolute",
            left: 0,
            top: i * 70 + 35,
            width: 1200,
            height: 1,
            background: GRATICULE,
          }}
        />
      ))}
      {Array.from({ length: 17 }).map((_, i) => (
        <div
          key={`v${i}`}
          style={{
            position: "absolute",
            top: 0,
            left: i * 70 + 35,
            width: 1,
            height: 630,
            background: GRATICULE,
          }}
        />
      ))}

      {SINGLES.map((p, i) => (
        <div
          key={`s${i}`}
          style={{
            position: "absolute",
            left: p.x - 4,
            top: p.y - 4,
            width: 8,
            height: 8,
            borderRadius: 4,
            background: AQUA,
          }}
        />
      ))}

      {CLUSTERS.map((c, i) => (
        <div
          key={`c${i}`}
          style={{
            position: "absolute",
            left: c.x - c.r,
            top: c.y - c.r,
            width: c.r * 2,
            height: c.r * 2,
            borderRadius: c.r,
            border: `1px solid ${SIGNAL}`,
            background: "rgba(255,0,128,0.13)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: PAPER,
            fontSize: 15,
          }}
        >
          {c.n}
        </div>
      ))}

      {/* left-hand veil, so the type always has a clean ground */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,15,22,0.97) 46%, rgba(10,15,22,0.72) 62%, rgba(10,15,22,0) 82%)",
        }}
      />

      <div
        style={{
          display: "flex",
          position: "relative",
          color: MUTED,
          fontSize: 20,
          letterSpacing: 3,
        }}
      >
        REACT NATIVE · TYPESCRIPT · STOCKHOLM
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            color: PAPER,
            fontSize: 76,
            lineHeight: 1.02,
            letterSpacing: -2,
            maxWidth: 620,
            fontFamily: font ? "Archivo" : undefined,
          }}
        >
          {lead ? `${lead}\u00A0` : null}
          {/* Accent and the punctuation that follows it are one flex item, so
              satori cannot break the line between them. */}
          <div style={{ display: "flex" }}>
            <span style={{ color: SIGNAL }}>{profile.headline.accent}</span>
            <span>{rest ? `${tail}\u00A0` : tail}</span>
          </div>
          {rest || null}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          position: "relative",
          color: MUTED,
          fontSize: 22,
          letterSpacing: 1,
        }}
      >
        davidpears.com
      </div>
    </div>,
    {
      ...size,
      fonts: font
        ? [{ name: "Archivo", data: font, style: "normal", weight: 700 }]
        : undefined,
    },
  );
}
