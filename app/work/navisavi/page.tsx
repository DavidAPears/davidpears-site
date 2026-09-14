import type { Metadata } from "next";
import Link from "next/link";

import CaseStudy from "@/components/CaseStudy";
import Craft from "@/components/Craft";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "NaviSavi case study",
  description:
    "Co-founder and CTO at NaviSavi: video infrastructure for the travel industry. Four products over one library of 250k+ traveller videos, on web and in React Native.",
  alternates: { canonical: "/work/navisavi" },
};

/**
 * The platform exhibit. Keep the section order identical to the Indeez page,
 * so the two read as a contrasting pair rather than two different documents.
 */
export default function NaviSaviCaseStudy() {
  return (
    <>
      <Masthead />

      <main className="flex-1">
        <CaseStudy />
        <Craft />

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
