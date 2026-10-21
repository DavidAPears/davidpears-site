import type { Metadata } from "next";
import Link from "next/link";

import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { BandHead, Chip } from "@/components/ui";
import { rost } from "@/content/site";

export const metadata: Metadata = {
  title: "RÖST case study",
  description:
    "A voice-first social platform built solo, end to end. The product promise is that nobody sees a face before a mutual reveal, and the architecture is what makes that true rather than a setting.",
  alternates: { canonical: "/work/rost" },
};

/** Renders the **bold** and *italic* spans the intro paragraphs use. */
function Emphasised({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
        if (part.startsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-paper">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*")) {
          return (
            <em key={i} className="text-paper not-italic">
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      })}
    </>
  );
}

/**
 * The solo exhibit.
 *
 * Structured around what the product had to do and what that forced, because
 * the reader is someone deciding whether to hire him. Counts of policies and
 * coverage figures were in an earlier draft and are deliberately gone: they
 * describe volume, and the question a reader is actually asking is how he
 * thinks.
 */
export default function RostCaseStudy() {
  return (
    <>
      <Masthead />

      <main className="flex-1">
        <section className="band gutter">
          <BandHead title={rost.name} meta={rost.period} />

          <div className="grid grid-cols-1 items-start gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div>
              {rost.intro.map((para) => (
                <p key={para} className="m-0 mb-[1.15rem] max-w-[58ch] text-body">
                  <Emphasised text={para} />
                </p>
              ))}
              <p className="mono mt-7 mb-0">{rost.team}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-[0.4rem]">
                {rost.stack.map((item) => (
                  <Chip key={item.label} label={item.label} tone={item.tone} />
                ))}
              </div>
              <p className="mono mt-6 mb-0 !text-paper">{rost.status}</p>
            </div>
          </div>
        </section>

        <section className="band gutter">
          <BandHead title="What the product had to do" meta="And what it forced" />

          <div className="grid grid-cols-1 gap-px bg-graticule lg:grid-cols-2">
            {rost.mechanisms.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 bg-ground p-[clamp(1.25rem,2.4vw,2rem)]"
              >
                <h3 className="display-sm m-0 max-w-[34ch] text-paper">{item.title}</h3>
                <p className="m-0 max-w-[56ch] text-[0.938rem] text-muted italic">
                  {item.problem}
                </p>
                <p className="m-0 max-w-[56ch] text-[0.938rem] text-body">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="band gutter">
          <BandHead title={rost.verification.title} meta="How it is checked" />
          <div className="flex max-w-[64ch] flex-col gap-4">
            {rost.verification.body.map((para) => (
              <p key={para} className="m-0 text-body">
                {para}
              </p>
            ))}
          </div>
        </section>

        <section className="band gutter">
          <BandHead
            title="Two failures, and the rules they produced"
            meta="Found by reading"
          />

          <div className="grid grid-cols-1 gap-px bg-graticule lg:grid-cols-2">
            {rost.failures.map((item) => (
              <div key={item.title} className="bg-ground p-[clamp(1.25rem,2.4vw,2rem)]">
                <h3 className="display-sm m-0 max-w-[34ch] text-paper">{item.title}</h3>
                <p className="m-0 mt-3 max-w-[56ch] text-[0.938rem] text-body">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="band gutter">
          <Link href="/#work" className="btn btn-ghost">
            Back to the work
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
