import Image from "next/image";
import Link from "next/link";

import { ArrowIcon, BandHead, Chip } from "@/components/ui";
import { work } from "@/content/site";

/**
 * The two case studies, side by side on the landing page.
 *
 * These carry enough evidence to stand on their own, because plenty of readers
 * never click through. The pair is deliberately contrasting: one is a platform
 * led as CTO, the other a mobile app built hands-on.
 */
export default function WorkCards() {
  return (
    <section id="work" className="band gutter">
      <BandHead title="Selected work" meta="Two case studies" />

      <div className="grid grid-cols-1 gap-px bg-graticule lg:grid-cols-2">
        {work.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group flex flex-col bg-ground no-underline transition-colors hover:bg-ground-2"
          >
            <span className="relative block aspect-[16/9] overflow-hidden border-b border-graticule bg-ground-2">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
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
