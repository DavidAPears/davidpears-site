"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowIcon, BandHead, Chip } from "@/components/ui";
import { work } from "@/content/site";

/**
 * The case studies.
 *
 * Mobile stacks them vertically, because a phone scrolls down and fighting
 * that is pointless. From md up they become a horizontal snap scroller sized
 * so the next card is visibly cut off: the peek is the affordance, since a
 * desktop scroller with no visible scrollbar is otherwise easy to miss. The
 * arrows exist for mouse users, who have no swipe.
 */
export default function WorkCards() {
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    const el = scroller.current;
    if (!el) return;
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  const nudge = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    // One card, whatever a card currently measures.
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({
      left: direction * (card?.clientWidth ?? el.clientWidth * 0.4),
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="band gutter">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <BandHead title="Selected work" meta="Three case studies" />

        <div className="mb-[clamp(1.5rem,3vw,2.5rem)] hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={atStart}
            aria-label="Previous case study"
            className="grid size-9 place-items-center rounded-md border border-graticule text-paper transition-colors hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-30"
          >
            <span className="rotate-180">
              <ArrowIcon />
            </span>
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={atEnd}
            aria-label="Next case study"
            className="grid size-9 place-items-center rounded-md border border-graticule text-paper transition-colors hover:border-signal hover:text-signal disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        onScroll={sync}
        className="flex snap-x snap-mandatory flex-col gap-px overflow-visible bg-graticule md:flex-row md:overflow-x-auto md:[-ms-overflow-style:none] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      >
        {work.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group flex shrink-0 basis-full snap-start flex-col bg-ground no-underline transition-colors hover:bg-ground-2 md:basis-[calc(50%-0.5px)] lg:basis-[41%]"
          >
            <span className="relative block aspect-[16/9] overflow-hidden border-b border-graticule bg-ground-2">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 41vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain"
                />
              ) : (
                <span className="mono absolute inset-0 flex items-center justify-center border border-dashed border-amber/40 !text-amber">
                  Screen grabs to come
                </span>
              )}
            </span>

            <span className="flex flex-1 flex-col gap-4 p-[clamp(1.25rem,2.4vw,2rem)]">
              <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <span className="mono !text-signal-soft">{item.kind}</span>
                <span className="mono">{item.period}</span>
              </span>

              <span className="flex flex-col gap-1">
                <span className="display-lg text-paper">{item.name}</span>
                <span className="mono">{item.role}</span>
              </span>

              <span className="text-body">{item.summary}</span>

              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="grid grid-cols-[0.75rem_1fr] gap-2 text-[0.875rem] text-muted"
                  >
                    <span className="pt-[0.35rem] text-signal">
                      <span className="block size-1 rounded-full bg-current" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <span className="mt-auto flex flex-wrap gap-[0.35rem] pt-2">
                {item.stack.map((label) => (
                  <Chip key={label} label={label} />
                ))}
              </span>

              <span className="flex items-center gap-2 pt-1 text-sm font-semibold text-signal-soft">
                Read the case study
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
