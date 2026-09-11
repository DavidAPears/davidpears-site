import { slate } from "@/content/site";

export default function Slate() {
  return (
    <section aria-label="At a glance" className="rule-b grid grid-cols-2 md:grid-cols-4">
      {slate.map((item) => (
        <div
          key={item.label}
          className="gutter flex flex-col gap-2 border-r border-b border-graticule py-7 [&:nth-child(2n)]:border-r-0 md:border-b-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0"
        >
          <span className="mono">{item.label}</span>
          <span className="display-slate">
            {item.value.map((part, j) => (
              <span key={part}>
                {j > 0 && <span className="font-normal text-muted-dim"> · </span>}
                {part}
              </span>
            ))}
          </span>
        </div>
      ))}
    </section>
  );
}
