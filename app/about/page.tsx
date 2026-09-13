import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About",
  description:
    "David Pears is a hands-on engineering leader based in Stockholm. Co-founder and CTO at NaviSavi, with seven years of commercial React Native, React and TypeScript work across travel, music, sport and fintech.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <Masthead />

      <main className="flex-1">
        <section className="band gutter">
          <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[auto_minmax(0,1fr)]">
            <div className="shrink-0">
              <Image
                src="/brand/david-pears.jpg"
                alt="David Pears"
                width={560}
                height={560}
                priority
                className="w-[clamp(9rem,22vw,14rem)] rounded-lg border border-graticule"
              />
            </div>

            <div>
              <h1 className="display-lg m-0">David Pears</h1>
              <p className="mono mt-3 mb-0">
                Co-founder &amp; CTO, NaviSavi · Stockholm, Sweden
              </p>

              <div className="mt-8 flex max-w-[62ch] flex-col gap-5 text-body">
                <p className="m-0">
                  I am a hands-on engineering leader based in Stockholm. I have spent
                  seven years building production software with React Native, React and
                  TypeScript, and I still write the code I am responsible for.
                </p>

                <p className="m-0">
                  Since 2020 I have been co-founder and CTO at{" "}
                  <a href="https://navisavitravel.com" className="text-aqua">
                    NaviSavi
                  </a>
                  , a travel video platform. I lead its technical development across four
                  products built on one library of more than 250,000 user generated
                  videos: a consumer discovery app, a licensing platform for business, a
                  B2C booking OTA, and a commercial API. That covers front-end
                  architecture, geospatial search, payments and licensing, iOS and Android
                  in React Native, and leading a distributed engineering team.
                </p>

                <p className="m-0">
                  Alongside that I consult as a senior React Native engineer. My current
                  project is a social music app built from the ground up with React
                  Native, Expo, TypeScript and Supabase.
                </p>

                <p className="m-0">
                  Before NaviSavi I worked as a mobile developer across sport, fintech and
                  music: streaming features at SolidSport, consumer fintech at LOQBOX, a
                  music fintech startup in Tangy Market, and a rebuild of a React web
                  platform into a mobile app at Beatchain.
                </p>

                <h2 className="display-sm mt-4 mb-0 text-paper">Before the code</h2>

                <p className="m-0">
                  I retrained as a software engineer in 2018, at CodeClan in Edinburgh.
                  Before that I spent about twenty years on the other side of the screen,
                  in television, digital media and the music business.
                </p>

                <p className="m-0">
                  At Endemol I worked on some of the earliest experiments in mobile-first
                  entertainment. I was part of the team behind{" "}
                  <a
                    href="https://www.c21media.net/news/endemol-sweet-on-sugarbabes/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-aqua"
                  >
                    Get Close To... The Sugababes
                  </a>
                  , an interactive reality format shot specifically for phones in 2006,
                  and part of the creative team on{" "}
                  <a
                    href="https://news.virginmediao2.co.uk/archive/o2-and-endemol-premiere-cell/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-aqua"
                  >
                    Cell
                  </a>
                  , a twenty part thriller commissioned by O2 and built around two minute
                  mobile episodes. Both ran on handsets before the iPhone existed.
                  Short-form video, made for a phone, with the audience contributing
                  footage. Two decades later I lead engineering on a platform built from
                  250,000 of exactly that.
                </p>

                <p className="m-0">
                  In between I founded and ran Wing Management, spending twelve years
                  developing and managing recording artists across labels, publishers,
                  touring, rights and audience growth. Clients included{" "}
                  <a
                    href="https://www.loudersound.com/features/kill-it-kid-hotshots-of-2014"
                    target="_blank"
                    rel="noreferrer"
                    className="text-aqua"
                  >
                    Kill It Kid
                  </a>
                  , who signed an EMI publishing deal and were later signed by{" "}
                  <a
                    href="https://www.grammy.com/news/seymour-stein-the-sire-of-punk-and-new-wave/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-aqua"
                  >
                    Seymour Stein
                  </a>{" "}
                  to Sire, part of Warner. I also worked in digital media at Guardian
                  Media Group, and earlier still as an adjudicator in pensions and
                  investments at the Financial Ombudsman Service.
                </p>

                <p className="m-0">
                  Rights, licensing, creators and audiences are what NaviSavi is made of,
                  and I spent a career in them before I wrote a line of production code.
                  It is also why I am comfortable in the room with both the engineers and
                  the people paying for the work.
                </p>

                <h2 className="display-sm mt-4 mb-0 text-paper">What I work with</h2>
                <p className="m-0">
                  React Native, Expo, React, Next.js, TypeScript and JavaScript on the
                  front end. Node.js, GraphQL and REST APIs, PostgreSQL, Supabase, Stripe,
                  Firebase and AWS behind them. Jest and React Testing Library, Git and
                  CI/CD throughout.
                </p>

                <h2 className="display-sm mt-4 mb-0 text-paper">What I am open to</h2>
                <p className="m-0">
                  Senior front-end and mobile leadership: CTO and fractional CTO work,
                  technical advisory, and hands-on React Native and React engineering. I
                  am based in Stockholm, where I can work onsite, hybrid or remotely, and
                  I work remotely across Europe and the UK.
                </p>

                <p className="m-0 pt-2">
                  <Link href="/" className="btn btn-primary">
                    See the work
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
