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
                  platform into a mobile app at Beatchain. Earlier still I spent a decade
                  in music, television and digital media, including Endemol and Guardian
                  Media Group, and worked as an adjudicator in pensions and investments at
                  the Financial Ombudsman Service. That background is why I am comfortable
                  translating between engineering and the people paying for it.
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
