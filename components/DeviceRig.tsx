const WASHES = [
  "linear-gradient(135deg, #1B3A4B, #2AEFE0)",
  "linear-gradient(135deg, #4A1E3C, #FF0080)",
  "linear-gradient(135deg, #22304A, #624FF7)",
  "linear-gradient(135deg, #3A2A1B, #F0B429)",
  "linear-gradient(135deg, #14303A, #2AEFE0)",
  "linear-gradient(135deg, #341A2E, #FF4DA6)",
];

const CLIPS = [
  "00:14 · 4K",
  "00:22 · 4K",
  "00:09 · HD",
  "00:31 · 4K",
  "00:18 · 4K",
  "00:27 · HD",
];

/**
 * Stand-in frames for the real screen grabs. Abstract on purpose — a fake
 * screenshot would be worse than an obvious placeholder.
 */
export default function DeviceRig() {
  return (
    <div className="flex flex-col items-stretch gap-5 sm:flex-row sm:items-end">
      <div className="min-w-0 flex-1 overflow-hidden rounded-lg border border-graticule bg-ground-2 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
        <div className="rule-b flex items-center gap-2 bg-ground-3 px-[0.7rem] py-[0.55rem]">
          <i className="block size-[7px] rounded-full bg-graticule" />
          <i className="block size-[7px] rounded-full bg-graticule" />
          <i className="block size-[7px] rounded-full bg-graticule" />
          <span className="ml-[0.4rem] font-mono text-[0.625rem] tracking-[0.04em] text-muted-dim">
            navisavi.com/search?q=coastline
          </span>
        </div>

        <div className="flex flex-col gap-[0.7rem] p-[0.85rem]">
          <div className="flex items-center gap-2 rounded-[5px] border border-graticule bg-ground px-[0.65rem] py-2">
            <span className="font-mono text-[0.625rem] text-muted-dim">
              ◎ coastline, golden hour, 4K
            </span>
            <span className="ml-auto rounded-[3px] bg-signal px-[0.45rem] py-[0.2rem] font-mono text-[0.563rem] tracking-[0.1em] text-white">
              SEARCH
            </span>
          </div>

          <div className="grid grid-cols-2 gap-[0.55rem] sm:grid-cols-3">
            {CLIPS.map((clip, i) => (
              <div
                key={clip}
                className="tile"
                style={{ "--tile-wash": WASHES[i] } as React.CSSProperties}
              >
                <span>{clip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-32 shrink-0 self-start rounded-2xl border border-graticule bg-ground-2 p-[0.4rem] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] sm:self-end">
        <div className="mx-auto mt-[0.15rem] mb-2 h-1 w-[34px] rounded-[3px] bg-graticule" />
        <div className="flex flex-col gap-[0.3rem] rounded-[11px] bg-ground p-[0.35rem]">
          <div className="reel" />
          <div className="h-1 rounded-sm bg-ground-3" />
          <div className="h-1 w-[55%] rounded-sm bg-ground-3" />
        </div>
      </div>
    </div>
  );
}
