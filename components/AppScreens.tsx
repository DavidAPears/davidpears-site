"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { indeezScreens } from "@/content/site";

/** Native recording ratio, so every tile sits in one even grid. */
const RATIO = "aspect-[720/1560]";

/**
 * A silent looping screen recording.
 *
 * Autoplaying tiles only earn their weight if they behave: nothing downloads
 * until the tile is near the viewport, playback stops the moment it leaves, and
 * a reduced-motion preference gets the poster frame and nothing else.
 */
function Recording({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string;
  caption: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safari only honours autoplay when muted is set as a property.
    el.muted = true;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          // First approach is what triggers the download, not page load.
          if (!el.src) el.src = src;
          if (!still) void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={caption}
      className="absolute inset-0 size-full object-cover"
    />
  );
}

export default function AppScreens() {
  return (
    <div className="grid grid-cols-2 gap-[clamp(0.75rem,1.5vw,1.25rem)]">
      {indeezScreens.map((screen) => (
        <figure key={screen.caption} className="m-0 flex flex-col gap-3">
          <div
            className={`${RATIO} relative overflow-hidden rounded-xl border ${
              screen.src
                ? "border-graticule bg-ground-2"
                : "border-dashed border-amber/40"
            }`}
          >
            {screen.src && screen.kind === "video" ? (
              <Recording
                src={screen.src}
                poster={screen.poster}
                caption={screen.caption}
              />
            ) : screen.src ? (
              <Image
                src={screen.src}
                alt={screen.caption}
                fill
                sizes="(min-width: 1024px) 26vw, 45vw"
                className="object-cover"
              />
            ) : (
              <span className="mono absolute inset-0 flex items-center justify-center !text-amber">
                {screen.kind === "video" ? "Recording" : "Still"}
              </span>
            )}
          </div>

          <figcaption className="mono">{screen.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
