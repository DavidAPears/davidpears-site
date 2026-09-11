import { properties } from "@/content/site";

/**
 * The three public front ends, as links — the thing a visitor most wants from
 * this page is to go and look at the actual work.
 */
export default function Properties() {
  return (
    <div className="mt-[clamp(2.5rem,5vw,4rem)] grid grid-cols-1 gap-px bg-graticule md:grid-cols-3">
      {properties.map((item) => (
        <a
          key={item.domain}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col gap-3 bg-ground p-[clamp(1.25rem,2.2vw,1.75rem)] no-underline transition-colors hover:bg-ground-2"
        >
          <span className="flex items-baseline justify-between gap-3">
            <span className="mono !text-signal-soft">{item.audience}</span>
            <span className="font-mono text-[0.688rem] text-muted-dim transition-colors group-hover:text-aqua">
              ↗
            </span>
          </span>

          <span className="display-sm text-paper">{item.title}</span>
          <span className="text-sm text-muted">{item.detail}</span>

          <span className="mt-auto pt-2 font-mono text-[0.688rem] tracking-[0.04em] text-aqua">
            {item.domain}
          </span>
        </a>
      ))}
    </div>
  );
}
