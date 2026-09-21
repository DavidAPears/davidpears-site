import { featuredTestimonial } from "@/content/site";

/**
 * The lead testimonial, shared by the homepage and the freelance page rather
 * than duplicated. The closing line is set heavier because it is the line that
 * does the work.
 */
export default function FeaturedQuote() {
  const { paragraphs, name, role, country } = featuredTestimonial;

  return (
    <figure className="m-0 rounded-lg border border-graticule bg-ground-2 p-[clamp(1.5rem,3vw,2.75rem)]">
      <blockquote className="m-0">
        <span className="mb-4 block font-display text-4xl leading-none text-signal [font-variation-settings:'wdth'_100,'wght'_700]">
          &ldquo;
        </span>

        <div className="flex max-w-[68ch] flex-col gap-4">
          {paragraphs.map((para, i) => (
            <p
              key={para}
              className={
                i === paragraphs.length - 1
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
        <span className="text-sm font-semibold text-paper">{name}</span>
        <span className="mono">{role}</span>
        <span className="mono !text-muted-dim">{country}</span>
      </figcaption>
    </figure>
  );
}
