import { BandHead, SlotNote } from "@/components/ui";

const CRAFT = [
  { label: "map clustering", wash: "linear-gradient(135deg, #1B3A4B, #2AEFE0)" },
  { label: "search", wash: "linear-gradient(135deg, #4A1E3C, #FF0080)" },
  { label: "checkout", wash: "linear-gradient(135deg, #22304A, #624FF7)" },
];

export default function Craft() {
  return (
    <section id="craft" className="band gutter">
      <BandHead title="Craft" meta="Details, pulled out of the product" />

      <div className="grid grid-cols-1 items-start gap-[clamp(2.5rem,5vw,5rem)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div>
          <p className="m-0 max-w-[52ch] text-body">
            A place for single interactions rather than full case studies &mdash; the map
            clustering as you zoom, the search-as-you-type behaviour, the checkout&rsquo;s
            error states, the video scrubber. Cheap to add to forever, and the section
            that actually signals how you work.
          </p>
          <SlotNote>
            Each entry is one short looping clip plus a sentence on what was hard about
            it.
          </SlotNote>
        </div>

        <div className="grid grid-cols-3 gap-[0.55rem]">
          {CRAFT.map((item) => (
            <div
              key={item.label}
              className="tile"
              style={{ "--tile-wash": item.wash } as React.CSSProperties}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
