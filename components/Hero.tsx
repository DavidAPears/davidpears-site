import ClusterField from "@/components/ClusterField";
import { ArrowIcon, DownloadIcon } from "@/components/ui";
import { profile } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="rule-b relative overflow-hidden">
      <ClusterField />

      {/* Sized to what it holds, not to the viewport — the next section stays
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
          I&rsquo;m David Pears. I run engineering at{" "}
          <strong className="font-semibold text-paper">NaviSavi</strong>, a travel-video
          licensing marketplace &mdash; and I build the storefront and the iOS and Android
          apps that sit on top of it. Architecture on Monday, pixels on Friday.
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
      </div>

      <div className="gutter relative z-10 flex max-w-[34rem] items-baseline gap-[0.6rem] pb-5 md:absolute md:bottom-5 md:pb-0">
        <span className="mono !text-muted-dim">Above &mdash;</span>
        <span className="font-mono text-[0.688rem] tracking-[0.08em] text-aqua">
          live cluster field · the grouping model behind NaviSavi map search
        </span>
      </div>
    </section>
  );
}
