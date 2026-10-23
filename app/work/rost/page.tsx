import type { Metadata } from "next";

import CaseStudyNav from "@/components/CaseStudyNav";
import Masthead from "@/components/Masthead";
import RostScreens from "@/components/RostScreens";
import SiteFooter from "@/components/SiteFooter";
import { BandHead, Chip } from "@/components/ui";
import { rost } from "@/content/site";

export const metadata: Metadata = {
  title: "RÖST case study",
  description:
    "Social built on the voice instead of the photograph. An open audio feed, dating where you hear somebody before you see them, and a creator layer where a voice can earn. Designed, architected and built solo.",
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
 * The solo exhibit. The product first, then the engineering: the reader is
 * deciding whether to hire him, and they cannot judge the work until they
 * understand what the work is for.
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
                <p
                  key={para}
                  className="m-0 mb-[1.15rem] max-w-[58ch] text-[clamp(1rem,1.2vw,1.0625rem)] text-body"
                >
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
          <BandHead title="The app" meta="Discover and Connect" />
          <RostScreens />
        </section>

        <section className="band gutter">
          <BandHead title="Three modes, one account" meta="The product" />

          <div className="grid grid-cols-1 gap-px bg-graticule md:grid-cols-3">
            {rost.modes.map((mode) => (
              <div key={mode.name} className="bg-ground p-[clamp(1.25rem,2.4vw,2rem)]">
                <span className="display-lg block text-paper">{mode.name}</span>
                <span className="mono mt-1 block !text-signal-soft">{mode.line}</span>
                <p className="m-0 mt-4 max-w-[38ch] text-[0.938rem] text-body">
                  {mode.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="band gutter">
          <BandHead title="The interesting problems" meta="Engineering" />

          <div className="grid grid-cols-1 gap-px bg-graticule lg:grid-cols-2">
            {rost.challenges.map((item) => (
              <div key={item.title} className="bg-ground p-[clamp(1.25rem,2.4vw,2rem)]">
                <h3 className="display-sm m-0 max-w-[30ch] text-paper">{item.title}</h3>
                <p className="m-0 mt-3 max-w-[56ch] text-[0.938rem] text-body">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="band gutter">
          <BandHead title={rost.method.title} meta="Worth a mention" />
          <p className="m-0 max-w-[64ch] text-body">{rost.method.body}</p>
        </section>

        <CaseStudyNav slug="rost" />
      </main>

      <SiteFooter />
    </>
  );
}
