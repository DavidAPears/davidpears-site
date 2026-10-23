import Link from "next/link";

import { ArrowIcon } from "@/components/ui";
import { work } from "@/content/site";

/**
 * Closes every case study the same way: back to the set, or out to the thing
 * itself. The live link is the primary action, because somebody who has read
 * to the bottom is being asked one question, which is whether this is real.
 */
export default function CaseStudyNav({ slug }: { slug: string }) {
  const live = work.find((item) => item.slug === slug)?.live;

  return (
    <section className="band gutter">
      <div className="flex flex-wrap items-center gap-3">
        {live ? (
          <a
            className="btn btn-primary"
            href={live.href}
            target="_blank"
            rel="noreferrer"
          >
            Visit {live.label}
            <span className="-rotate-45">
              <ArrowIcon />
            </span>
          </a>
        ) : null}

        <Link href="/#work" className="btn btn-ghost">
          Back to the work
        </Link>
      </div>
    </section>
  );
}
