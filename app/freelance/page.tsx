import type { Metadata } from "next";
import Link from "next/link";

import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { ArrowIcon, BandHead, DownloadIcon } from "@/components/ui";
import { freelance, links } from "@/content/site";

export const metadata: Metadata = {
  title: "Freelance React Native developer",
  description:
    "David Pears is available for contract engineering and fractional CTO work from Stockholm. React Native, React and TypeScript, remote, hybrid or onsite.",
  alternates: { canonical: "/freelance" },
};

const email = links.find((link) => link.label === "Email")?.href ?? "#contact";

export default function Freelance() {
  return (
    <>
      <Masthead />

      <main className="flex-1">
        <section className="band gutter">
          <h1 className="display-lg m-0 max-w-[20ch]">Available for contract work.</h1>

          <div className="mt-8 flex max-w-[58ch] flex-col gap-5 text-body">
            {freelance.intro.map((para) => (
              <p key={para} className="m-0">
                {para}
              </p>
            ))}
          </div>
        </section>

        <section className="band gutter">
          <BandHead title="Two shapes" meta="Engagements" />

          <div className="grid grid-cols-1 gap-px bg-graticule lg:grid-cols-2">
            {freelance.shapes.map((shape) => (
              <div key={shape.title} className="bg-ground p-[clamp(1.25rem,2.4vw,2rem)]">
                <h2 className="display-sm m-0 text-paper">{shape.title}</h2>
                <p className="m-0 mt-3 max-w-[46ch] text-body">{shape.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band gutter">
          <BandHead title="The practical part" meta="Before you ask" />

          <dl className="m-0 grid max-w-[64ch] grid-cols-1 gap-0">
            {freelance.practical.map((item) => (
              <div
                key={item.label}
                className="rule-t grid grid-cols-1 gap-1 py-[0.9rem] sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-4"
              >
                <dt className="mono">{item.label}</dt>
                <dd className="m-0 text-body">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="band gutter">
          <BandHead title="Getting started" meta="Next" />

          <p className="m-0 max-w-[52ch] text-body">{freelance.next}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="btn btn-primary" href={email}>
              Email me
              <ArrowIcon />
            </a>
            <Link className="btn btn-ghost" href="/#work">
              See the work
              <ArrowIcon />
            </Link>
            <Link className="btn btn-ghost" href="/#cv">
              Download CV
              <DownloadIcon />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
