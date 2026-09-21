import { BandHead } from "@/components/ui";
import { featuredTestimonial, testimonials } from "@/content/site";

/**
 * Three named CEOs and tech leads vouching for him, carried over from the old
 * consulting site, which was the one asset on it worth keeping.
 */
export default function Testimonials() {
  return (
    <section id="praise" className="band gutter">
      <BandHead title="What they said" meta="Clients &amp; colleagues" />

      <figure className="m-0 mb-px rounded-lg border border-graticule bg-ground-2 p-[clamp(1.5rem,3vw,2.75rem)]">
        <blockquote className="m-0">
          <span className="mb-4 block font-display text-4xl leading-none text-signal [font-variation-settings:'wdth'_100,'wght'_700]">
            &ldquo;
          </span>

          <div className="flex max-w-[68ch] flex-col gap-4">
            {featuredTestimonial.paragraphs.map((para, i) => (
              <p
                key={para}
                className={
                  i === featuredTestimonial.paragraphs.length - 1
                    ? "m-0 text-[clamp(1.0625rem,1.35vw,1.25rem)] leading-relaxed font-semibold text-paper"
                    : "m-0 text-[clamp(1rem,1.2vw,1.0625rem)] leading-relaxed text-paper"
                }
              >
                {para}
              </p>
            ))}
          </div>
        </blockquote>

        <figcaption className="mt-7 flex flex-col gap-1">
          <span className="text-sm font-semibold text-paper">
            {featuredTestimonial.name}
          </span>
          <span className="mono">{featuredTestimonial.role}</span>
        </figcaption>
      </figure>

      <div className="mt-px grid grid-cols-1 gap-px bg-graticule md:grid-cols-3">
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

            <figcaption className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-paper">{item.name}</span>
              <span className="mono">{item.role}</span>
              <span className="mono !text-muted-dim">{item.country}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
