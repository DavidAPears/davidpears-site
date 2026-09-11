import { BandHead, Chip } from "@/components/ui";
import { roster, type RosterEntry } from "@/content/site";

function RowBody({ entry }: { entry: RosterEntry }) {
  return (
    <>
      <span className="font-mono text-xs tracking-[0.08em] text-muted-dim">
        {entry.years}
      </span>

      <div>
        <h3 className={`display-sm m-0 mb-1 ${entry.pending ? "text-muted" : ""}`}>
          {entry.name}
        </h3>
        <p className="m-0 mb-1.5 text-[0.813rem] text-paper/80">{entry.role}</p>
        <p className="m-0 max-w-[46ch] text-sm text-muted">{entry.detail}</p>
      </div>

      <div className="flex flex-wrap gap-[0.35rem] max-md:col-start-2">
        {entry.tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </div>
    </>
  );
}

export default function Roster() {
  const cols =
    "grid grid-cols-[5rem_minmax(0,1fr)] md:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1fr)] items-baseline gap-8 py-[1.4rem] rule-t last:border-b last:border-graticule";

  return (
    <section id="roster" className="band gutter">
      <BandHead title="Before that" meta="Roles &amp; projects" />

      <div className="flex flex-col">
        {roster.map((entry) =>
          entry.pending ? (
            <div
              key={entry.name}
              className={`${cols} border-l-2 border-l-amber/55 pl-[0.85rem]`}
            >
              <RowBody entry={entry} />
            </div>
          ) : (
            <a
              key={entry.name}
              href={entry.href}
              className={`${cols} row-link no-underline`}
            >
              <RowBody entry={entry} />
            </a>
          ),
        )}
      </div>
    </section>
  );
}
