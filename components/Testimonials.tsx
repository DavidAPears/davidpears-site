import { BandHead } from "@/components/ui";
import { testimonials } from "@/content/site";

/**
 * Three named CEOs and tech leads vouching for him — carried over from the old
 * consulting site, which was the one asset on it worth keeping.
 */
export default function Testimonials() {
  return (
    <section id="praise" className="band gutter">
      <BandHead title="What they said" meta="Clients &amp; colleagues" />

      <div className="grid grid-cols-1 gap-px bg-graticule md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="m-0 flex flex-col justify-between gap-6 bg-ground p-[clamp(1.5rem,2.5vw,2rem)]"
          >
            <blockquote className="m-0">
              <span className="mb-3 block font-display text-2xl leading-none text-signal [font-variation-settings:'wdth'_100,'wght'_700]">
                &ldquo;
              </span>
              <p className="m-0 text-[0.938rem] leading-relaxed text-paper">
                {item.quote}
              </p>
            </blockquote>

            <figcaption className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-paper">{item.name}</span>
              <span className="mono">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
