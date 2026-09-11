import ClusterField from "@/components/ClusterField";
import { ArrowIcon, DownloadIcon } from "@/components/ui";
import { profile } from "@/content/site";
import { getHeroPoints } from "@/lib/navisavi";

export default async function Hero() {
  const points = await getHeroPoints();

  return (
    <section id="top" className="rule-b relative overflow-hidden">
      <ClusterField points={points} />

      {/* Sized to what it holds, not to the viewport, so the next section stays
          visible in the first frame. */}
      <div className="gutter pointer-events-none relative z-10 max-w-[78rem] pt-[clamp(4rem,9vh,7rem)] pb-[clamp(3rem,6vh,4.5rem)]">
        <div className="mb-7 flex items-center gap-[0.6rem]">
          <span className="ping block size-1.5 rounded-full bg-aqua" />
          <span className="mono">{profile.standby}</span>
        </div>

        <h1 className="display-xl m-0 mb-6 max-w-[21ch]">
          {profile.headline.before}
          <em className="text-signal not-italic">{profile.headline.accent}</em>
          {profile.headline.after}
        </h1>

        <p className="m-0 mb-9 max-w-[46ch] text-[clamp(1rem,1.25vw,1.125rem)] text-body">
          I&rsquo;m David Pears, a hands-on engineering leader. I co-founded{" "}
          <strong className="font-semibold text-paper">NaviSavi</strong> in 2020 and have
          led its technical development: four products on one library of 250k+ UGC videos,
          on web and in React Native. I set the architecture, lead the team, and still
          write the frontend code.
        </p>

        <p className="m-0 mb-9 max-w-[46ch] text-[clamp(1rem,1.25vw,1.125rem)] font-semibold text-paper">
          {profile.availability}
        </p>

        <div className="pointer-events-auto flex flex-wrap items-center gap-3">
          <a className="btn btn-primary" href="#navisavi">
            See the work
            <ArrowIcon />
          </a>
          <a className="btn btn-ghost" href="#cv">
            Download CV
            <DownloadIcon />
          </a>
        </div>

        <p className="mt-14 mb-0 flex max-w-[40rem] flex-wrap items-baseline gap-x-[0.6rem] gap-y-1">
          <span className="mono !text-muted-dim">Above:</span>
          <span className="font-mono text-[0.688rem] tracking-[0.08em] text-aqua">
            {points.length > 0
              ? `${points.length} real locations from the NaviSavi API, clustered live`
              : "live cluster field · the grouping model behind NaviSavi map search"}
          </span>
        </p>
      </div>
    </section>
  );
}
