import Image from "next/image";

/**
 * Real captures of the live sites, framed. Regenerate with
 * `node tools/screenshots.mjs` when the product moves on.
 */
export default function DeviceRig() {
  return (
    <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-end">
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
          alt="The NaviSavi licensing library's search page, showing the filter and AI search modes and the brands using it."
          width={1800}
          height={1125}
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="block h-auto w-full"
          priority
        />
      </figure>

      <figure className="m-0 w-32 shrink-0 self-start rounded-2xl border border-graticule bg-ground-2 p-[0.4rem] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] sm:self-end">
        <div className="mx-auto mt-[0.15rem] mb-2 h-1 w-[34px] rounded-[3px] bg-graticule" />
        <Image
          src="/images/work/b2c-mobile.jpg"
          alt="The NaviSavi consumer app home screen on a phone, with the video grid and bottom tab bar."
          width={416}
          height={900}
          sizes="128px"
          className="block h-auto w-full rounded-[11px]"
        />
      </figure>
    </div>
  );
}
