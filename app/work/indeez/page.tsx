import type { Metadata } from "next";
import Link from "next/link";

import { BandHead, Chip, SlotNote } from "@/components/ui";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { indeez } from "@/content/site";

export const metadata: Metadata = {
  title: "Indeez case study",
  description:
    "A social music app built from the ground up in React Native and Expo: fans, artists, venues and record stores around a swipe-based discovery player.",
  alternates: { canonical: "/work/indeez" },
};

/**
 * The mobile exhibit, and deliberately a skeleton.
 *
 * Section order matches the NaviSavi page so the two read as a pair. Every gap
 * is a visible slot rather than filler, and nothing here claims anything that
 * has not been written by David.
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
                  {para.replace(/\*\*/g, "")}
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

              <SlotNote>
                Every line above is a placeholder. Needs David&rsquo;s own account of what
                the app does, what was hard about the swipe deck over a live player, and
                what he decided rather than what the stack is.
              </SlotNote>
            </div>

            <div>
              <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-amber/40 bg-ground-2">
                <span className="mono !text-amber">App screens and recordings</span>
              </div>

              <div className="mt-12 flex flex-wrap gap-[0.4rem]">
                {indeez.stack.map((item) => (
                  <Chip key={item.label} label={item.label} tone={item.tone} />
                ))}
              </div>

              <SlotNote>
                Portrait screen recordings of the swipe, the player, a profile and the
                feed, plus stills for the landing card.
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
