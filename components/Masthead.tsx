import Image from "next/image";
import Link from "next/link";

// Absolute, so the nav still works from /about.
const NAV = [
  { label: "Work", href: "/#navisavi" },
  { label: "Catalogue", href: "/#craft" },
  { label: "Praise", href: "/#praise" },
  { label: "History", href: "/#roster" },
  { label: "Contact", href: "/#contact" },
];

export default function Masthead() {
  return (
    <header className="rule-b gutter sticky top-0 z-30 flex items-center justify-between gap-6 bg-ground/[0.78] py-[1.1rem] backdrop-blur-[14px]">
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/brand/dp-wordmark.png"
          alt=""
          width={328}
          height={256}
          priority
          className="h-7 w-auto shrink-0"
        />
        <span className="font-display text-[0.95rem] tracking-[0.04em] [font-variation-settings:'wdth'_125,'wght'_800]">
          DAVID PEARS<span className="text-signal">.</span>
        </span>
      </Link>

      <nav className="flex items-center gap-[clamp(1rem,2.4vw,2.25rem)]">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mono hidden no-underline transition-colors hover:text-paper sm:inline"
          >
            {item.label}
          </Link>
        ))}
        <Link href="/#cv" className="mono !text-amber no-underline">
          CV ↓
        </Link>
      </nav>
    </header>
  );
}
