const NAV = [
  { label: "Work", href: "#navisavi" },
  { label: "Craft", href: "#craft" },
  { label: "Praise", href: "#praise" },
  { label: "History", href: "#roster" },
  { label: "Contact", href: "#contact" },
];

export default function Masthead() {
  return (
    <header className="rule-b gutter sticky top-0 z-30 flex items-center justify-between gap-6 bg-ground/[0.78] py-[1.1rem] backdrop-blur-[14px]">
      <a
        href="#top"
        className="font-display text-[0.95rem] tracking-[0.04em] no-underline [font-variation-settings:'wdth'_125,'wght'_800]"
      >
        DAVID PEARS<span className="text-signal">.</span>
      </a>

      <nav className="flex items-center gap-[clamp(1rem,2.4vw,2.25rem)]">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="mono hidden no-underline transition-colors hover:text-paper sm:inline"
          >
            {item.label}
          </a>
        ))}
        <a href="#cv" className="mono !text-amber no-underline">
          CV ↓
        </a>
      </nav>
    </header>
  );
}
