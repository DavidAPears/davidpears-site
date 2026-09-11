import type { ReactNode } from "react";

export function BandHead({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="rule-b mb-[clamp(2rem,4vw,3.25rem)] flex items-baseline justify-between gap-8 pb-6">
      <h2 className="display-lg m-0">{title}</h2>
      <span className="mono shrink-0 text-right">{meta}</span>
    </div>
  );
}

export function Chip({ label, tone }: { label: string; tone?: "hot" | "cool" }) {
  const toneClass = tone === "hot" ? "chip-hot" : tone === "cool" ? "chip-cool" : "";
  return <span className={`chip ${toneClass}`}>{label}</span>;
}

/** A visible, deliberate gap — never a silent placeholder. */
export function SlotNote({ children }: { children: ReactNode }) {
  return (
    <div className="mt-[1.1rem] flex items-start gap-[0.65rem] rounded-[5px] border border-dashed border-amber/40 bg-amber/[0.06] px-[0.85rem] py-[0.7rem]">
      <span className="mono shrink-0 pt-[0.1rem] text-amber">Slot</span>
      <p className="m-0 max-w-[58ch] text-[0.813rem] text-[#c9c2b4]">{children}</p>
    </div>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2v9m0 0L4.5 7.5M8 11l3.5-3.5M2.5 13.5h11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
