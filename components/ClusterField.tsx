"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's live cluster field.
 *
 * Points are bucketed into grid cells and drawn as one bubble per bucket,
 * labelled with its count — the same grouping idea as the supercluster layer
 * behind NaviSavi's map search. A slow breathing zoom changes the cell size,
 * so groups merge and split the way they do when you zoom a real map.
 */

type Cluster = {
  x: number;
  y: number;
  r: number;
  a: number;
  n: number;
  seen?: number;
};

// Loose regions, so clusters form the way real catalogue data does rather
// than as an even dust of dots.
const REGIONS = [
  { x: 0.16, y: 0.34, r: 0.11, n: 22 },
  { x: 0.3, y: 0.62, r: 0.09, n: 14 },
  { x: 0.47, y: 0.3, r: 0.13, n: 30 },
  { x: 0.58, y: 0.68, r: 0.1, n: 18 },
  { x: 0.72, y: 0.4, r: 0.12, n: 26 },
  { x: 0.86, y: 0.61, r: 0.08, n: 15 },
  { x: 0.38, y: 0.46, r: 0.2, n: 20 },
];

const GRATICULE = "#1E2A38";
const PAPER = "237,231,220";
const PINK = "255,0,128";
const AQUA = "42,239,224";

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function buildPoints() {
  // Deterministic, so the composition is the same on every load.
  const rnd = seeded(20260904);
  const points: { x: number; y: number; drift: number; phase: number }[] = [];

  for (const reg of REGIONS) {
    for (let j = 0; j < reg.n; j++) {
      const a = rnd() * Math.PI * 2;
      const d = Math.pow(rnd(), 0.62) * reg.r;
      points.push({
        x: reg.x + Math.cos(a) * d,
        y: reg.y + Math.sin(a) * d * 0.72,
        drift: 0.4 + rnd() * 0.9,
        phase: rnd() * Math.PI * 2,
      });
    }
  }

  return points;
}

export default function ClusterField() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsOut = useRef<HTMLSpanElement>(null);
  const clustersOut = useRef<HTMLSpanElement>(null);
  const zoomOut = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Canvas cannot resolve CSS custom properties in `ctx.font`, and next/font
    // hashes the family name, so read the resolved stack off :root once.
    const monoFamily =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-mono")
        .trim() || "monospace";

    const points = buildPoints();
    const live = new Map<string, Cluster>();
    const pointer = { x: 0.5, y: 0.5, on: false };

    let w = 0;
    let h = 0;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const graticule = () => {
      ctx.strokeStyle = GRATICULE;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.55;
      const step = 68;

      for (let x = step; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, h);
        ctx.stroke();
      }

      for (let y = step; y < h; y += step) {
        // Slight bow, so the grid reads as a projection rather than graph paper.
        ctx.beginPath();
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.quadraticCurveTo(
          w / 2,
          Math.round(y) + 0.5 + (y - h / 2) * 0.045,
          w,
          Math.round(y) + 0.5,
        );
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      graticule();

      const zoom = reduce ? 3.4 : 3.2 + Math.sin(t * 0.00012) * 1.9;
      const cell = Math.max(46, 250 / zoom);

      const px = (pointer.x - 0.5) * 26;
      const py = (pointer.y - 0.5) * 18;

      const cells = new Map<string, { sx: number; sy: number; n: number }>();

      for (const p of points) {
        const wob = reduce ? 0 : Math.sin(t * 0.00022 * p.drift + p.phase) * 5;
        const sx = p.x * w + wob + px * p.drift;
        const sy = p.y * h + wob * 0.5 + py * p.drift;
        const key = `${Math.floor(sx / cell)}:${Math.floor(sy / cell)}`;

        const c = cells.get(key) ?? { sx: 0, sy: 0, n: 0 };
        c.sx += sx;
        c.sy += sy;
        c.n++;
        cells.set(key, c);
      }

      // Reconcile against the animated set so appearing and merging eases
      // instead of popping.
      cells.forEach((c, key) => {
        const target = 7 + Math.sqrt(c.n) * 7.2;
        let l = live.get(key);

        if (!l) {
          l = { x: c.sx / c.n, y: c.sy / c.n, r: 0, a: 0, n: c.n };
          live.set(key, l);
        }

        l.x += (c.sx / c.n - l.x) * 0.16;
        l.y += (c.sy / c.n - l.y) * 0.16;
        l.r += (target - l.r) * 0.1;
        l.a += (1 - l.a) * 0.08;
        l.n = c.n;
        l.seen = t;
      });

      let nearest: Cluster | null = null;
      let nearestD = Infinity;
      const hoverX = pointer.x * w;
      const hoverY = pointer.y * h;

      live.forEach((l, key) => {
        if (l.seen !== t) {
          l.a += (0 - l.a) * 0.12;
          l.r += (0 - l.r) * 0.12;
          if (l.a < 0.02) {
            live.delete(key);
            return;
          }
        }

        if (pointer.on) {
          const d = Math.hypot(l.x - hoverX, l.y - hoverY);
          if (d < nearestD && d < 90) {
            nearestD = d;
            nearest = l;
          }
        }
      });

      live.forEach((l) => {
        const solo = l.n === 1;
        const hot = l === nearest;
        const col = solo ? AQUA : PINK;

        ctx.beginPath();
        ctx.arc(l.x, l.y, Math.max(l.r, 0.1), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${(l.a * (hot ? 0.26 : 0.13)).toFixed(3)})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${col},${(l.a * (hot ? 0.95 : 0.5)).toFixed(3)})`;
        ctx.lineWidth = hot ? 1.6 : 1;
        ctx.stroke();

        if (solo) {
          ctx.beginPath();
          ctx.arc(l.x, l.y, 2.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${AQUA},${(l.a * 0.9).toFixed(3)})`;
          ctx.fill();
        } else if (l.r > 12) {
          ctx.font = `500 ${Math.min(13, 8 + l.r * 0.16).toFixed(1)}px ${monoFamily}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = `rgba(${PAPER},${(l.a * 0.92).toFixed(3)})`;
          ctx.fillText(String(l.n), l.x, l.y);
        }
      });

      if (nearest) {
        const near = nearest as Cluster;
        ctx.font = `500 10px ${monoFamily}`;
        ctx.textAlign = "left";
        ctx.textBaseline = "alphabetic";
        ctx.fillStyle = `rgba(${PAPER},0.85)`;
        ctx.fillText(
          `${near.n} ${near.n === 1 ? "clip" : "clips"}`,
          near.x + near.r + 8,
          near.y + 3,
        );
      }

      if (pointsOut.current) pointsOut.current.textContent = String(points.length);
      if (clustersOut.current) clustersOut.current.textContent = String(cells.size);
      if (zoomOut.current) zoomOut.current.textContent = `z${zoom.toFixed(1)}`;
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();

    if (reduce) {
      // Settle the eased values, then hold one composed frame.
      for (let k = 0; k < 90; k++) draw(k);
      draw(90);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (reduce) draw(90);
    };

    // Tracked on the window, so the field never swallows clicks on the hero.
    const onPointerMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const inside = x >= 0 && x <= 1 && y >= 0 && y <= 1;

      pointer.x = inside ? x : 0.5;
      pointer.y = inside ? y : 0.5;
      pointer.on = inside && e.pointerType !== "touch";
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="hero-veil absolute inset-0" />

      <div className="absolute right-[var(--gutter)] bottom-5 hidden gap-7 text-right md:flex">
        <div className="flex flex-col gap-0.5">
          <span className="mono">clips</span>
          <span ref={pointsOut} className="font-mono text-sm tabular-nums text-paper">
            —
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="mono">clusters</span>
          <span ref={clustersOut} className="font-mono text-sm tabular-nums text-paper">
            —
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="mono">zoom</span>
          <span ref={zoomOut} className="font-mono text-sm tabular-nums text-paper">
            —
          </span>
        </div>
      </div>
    </div>
  );
}
