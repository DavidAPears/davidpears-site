import type { Metadata } from "next";
import Link from "next/link";

import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { BandHead, Chip } from "@/components/ui";
import { rost } from "@/content/site";

export const metadata: Metadata = {
  title: "RÖST case study",
  description:
    "A voice-first social platform built solo, end to end. React Native and Expo over Postgres with row-level security, where no photograph reaches another device before a mutual reveal.",
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
 * The solo exhibit. Section order matches the other two so the three read as a
 * set, but the right column carries the build's own numbers rather than screens:
 * there are no screenshots yet, and on a security-led product the table is the
 * more honest evidence anyway.
 */
export default function RostCaseStudy() {
  return (
    <>
      <Masthead />

      <main className="flex-1">
        <section className="band gutter">
          <BandHead title={rost.name} meta={rost.period} />

          <div className="grid grid-cols-1 items-start gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            <div>
              {rost.intro.map((para) => (
                <p key={para} className="m-0 mb-[1.15rem] max-w-[56ch] text-body">
                  <Emphasised text={para} />
                </p>
              ))}

              <ul className="m-0 mt-8 flex list-none flex-col p-0">
                {rost.owned.map((item, i) => (
                  <li
                    key={item.title}
                    className="rule-t grid grid-cols-[1.35rem_1fr] gap-[0.85rem] py-[0.8rem] text-[0.938rem] text-body last:border-b last:border-graticule"
                  >
                    <span className="pt-[0.15rem] font-mono text-xs text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <b className="font-semibold text-paper">{item.title}</b>
                      {": "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mono mt-6 mb-0">{rost.team}</p>
            </div>

            <div>
              <div className="rounded-lg border border-graticule bg-ground-2 p-[clamp(1rem,2vw,1.5rem)]">
                <span className="mono">The build, 21 October 2026</span>
                <dl className="m-0 mt-4 grid grid-cols-1">
                  {rost.numbers.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-t border-graticule py-[0.55rem] first:border-t-0 first:pt-0"
                    >
                      <dt className="mono">{item.label}</dt>
                      <dd className="m-0 text-right text-[0.875rem] font-semibold text-paper">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap gap-[0.4rem]">
                {rost.stack.map((item) => (
                  <Chip key={item.label} label={item.label} tone={item.tone} />
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-graticule bg-ground-2 p-[clamp(1rem,2vw,1.5rem)]">
                <h3 className="display-sm m-0 text-paper">{rost.computed.title}</h3>
                <p className="m-0 mt-3 text-[0.938rem] text-body">{rost.computed.body}</p>
              </div>

              <p className="mono mt-6 mb-0 !text-paper">{rost.status}</p>
            </div>
          </div>
        </section>

        <section className="band gutter">
          <BandHead title="Decisions worth naming" meta="Four of them" />

          <div className="grid grid-cols-1 gap-px bg-graticule md:grid-cols-2">
            {rost.decisions.map((item) => (
              <div key={item.title} className="bg-ground p-[clamp(1.25rem,2.4vw,2rem)]">
                <span className="mono !text-signal-soft">{item.label}</span>
                <h3 className="display-sm mt-3 mb-0 max-w-[32ch] text-paper">
                  {item.title}
                </h3>
                <p className="m-0 mt-3 max-w-[54ch] text-[0.938rem] text-body">
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
