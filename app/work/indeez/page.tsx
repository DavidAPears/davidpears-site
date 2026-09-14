import type { Metadata } from "next";
import Link from "next/link";

import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { BandHead, Chip, SlotNote } from "@/components/ui";
import { indeez } from "@/content/site";

export const metadata: Metadata = {
  title: "Indeez case study",
  description:
    "A social music app for grassroots artists, built in React Native and Expo. Swipe discovery over a live audio player, multi-identity profiles, and a feed the listener controls.",
  alternates: { canonical: "/work/indeez" },
};

/** Renders the single **bold** span the intro paragraphs use. */
function Emphasised({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-paper">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

/**
 * The mobile exhibit. Section order matches the NaviSavi page so the two read
 * as a contrasting pair rather than two different documents.
 */
export default function IndeezCaseStudy() {
  return (
    <>
      <Masthead />

      <main className="flex-1">
        <section className="band gutter">
          <BandHead title={indeez.name} meta={indeez.period} />

          <div className="grid grid-cols-1 items-start gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div>
              {indeez.intro.map((para) => (
                <p key={para} className="m-0 mb-[1.15rem] max-w-[52ch] text-body">
                  <Emphasised text={para} />
                </p>
              ))}

              <ul className="m-0 mt-8 flex list-none flex-col p-0">
                {indeez.owned.map((item, i) => (
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

              <p className="mono mt-6 mb-0">{indeez.team}</p>
            </div>

            <div>
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-amber/40 bg-ground-2">
                <span className="mono !text-amber">App screens to come</span>
              </div>

              <div className="mt-12 flex flex-wrap gap-[0.4rem]">
                {indeez.stack.map((item) => (
                  <Chip key={item.label} label={item.label} tone={item.tone} />
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-graticule bg-ground-2 p-[clamp(1rem,2vw,1.5rem)]">
                <span className="mono">{indeez.decision.label}</span>
                <h3 className="display-sm mt-3 mb-0 text-paper">
                  {indeez.decision.title}
                </h3>
                <p className="m-0 mt-3 text-[0.938rem] text-body">
                  {indeez.decision.body}
                </p>
              </div>

              <p className="mono mt-6 mb-0 !text-amber">{indeez.status}</p>

              <SlotNote>
                Portrait recordings of the swipe, the player skins, a profile and the
                feed, plus a still for the landing card.
              </SlotNote>
            </div>
          </div>
        </section>

        <section className="band gutter">
          <BandHead title="Live from the player" meta="Later" />
          <div className="flex min-h-[12rem] items-center justify-center rounded-lg border border-dashed border-amber/40 bg-ground-2">
            <span className="mono !text-amber">
              A working swipe player, pulling live music
            </span>
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
