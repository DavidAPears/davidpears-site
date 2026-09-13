import DeviceRig from "@/components/DeviceRig";
import Properties from "@/components/Properties";
import { BandHead, Chip } from "@/components/ui";
import { caseStudy, recognition } from "@/content/site";

/** Renders the single **bold** span the intro paragraphs use. */
function Emphasised({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-paper">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function CaseStudy() {
  return (
    <section id="navisavi" className="band gutter">
      <BandHead title={caseStudy.name} meta={caseStudy.period} />

      <div className="grid grid-cols-1 items-start gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div>
          {caseStudy.intro.map((para) => (
            <p key={para} className="m-0 mb-[1.15rem] max-w-[52ch] text-body">
              <Emphasised text={para} />
            </p>
          ))}

          <ul className="m-0 mt-8 flex list-none flex-col p-0">
            {caseStudy.owned.map((item, i) => (
              <li
                key={item.title}
                className="rule-t grid grid-cols-[1.35rem_1fr] gap-[0.85rem] py-[0.8rem] text-[0.938rem] text-body last:border-b last:border-graticule"
              >
                <span className="pt-[0.15rem] font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <b className="font-semibold text-paper">{item.title}</b>
                  {": "}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-[0.4rem]">
            {caseStudy.stack.map((item) => (
              <Chip key={item.label} label={item.label} tone={item.tone} />
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-graticule bg-ground-2 p-[clamp(1rem,2vw,1.5rem)]">
            <span className="mono">Recognition for NaviSavi</span>
            <ul className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
              {recognition.map((item) => (
                <li
                  key={`${item.title}-${item.event}`}
                  className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-[0.938rem]"
                >
                  <span className="font-semibold text-paper">{item.title}</span>
                  <span className="text-muted">{item.event}</span>
                  <span className="font-mono text-xs text-signal-soft tabular-nums">
                    {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <DeviceRig />
        </div>
      </div>

      <Properties />
    </section>
  );
}
