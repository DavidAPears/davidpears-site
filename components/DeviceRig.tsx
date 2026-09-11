import Image from "next/image";

/**
 * The licensing search page in a browser frame, beside the real React Native
 * app. The app shot arrives with its own device frame and a knocked-out
 * background, so it needs no chrome from us — just room to sit.
 *
 * Regenerate the web captures with `node tools/screenshots.mjs`.
 */
export default function DeviceRig() {
  return (
    <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-end">
      <figure className="m-0 min-w-0 flex-1 overflow-hidden rounded-lg border border-graticule bg-ground-2 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
        <div className="rule-b flex items-center gap-2 bg-ground-3 px-[0.7rem] py-[0.55rem]">
          <i className="block size-[7px] rounded-full bg-graticule" />
          <i className="block size-[7px] rounded-full bg-graticule" />
          <i className="block size-[7px] rounded-full bg-graticule" />
          <span className="ml-[0.4rem] truncate font-mono text-[0.625rem] tracking-[0.04em] text-muted-dim">
            navisavitravel.com/search
          </span>
        </div>

        <Image
          src="/images/work/b2b-search.jpg"
          alt="The NaviSavi licensing library's search page, showing the filter and AI search modes and the travel brands using it."
          width={1800}
          height={1013}
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="block h-auto w-full"
          priority
        />
      </figure>

      <figure className="m-0 w-40 shrink-0 self-start sm:-mb-6 sm:self-end">
        <Image
          src="/images/work/app-home.png"
          alt="The NaviSavi iOS app home screen: travel playlists, trending clips and featured travellers."
          width={560}
          height={1110}
          sizes="144px"
          className="block h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
        />
      </figure>
    </div>
  );
}
