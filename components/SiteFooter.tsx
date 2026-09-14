import Link from "next/link";

import { links, profile } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="gutter flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8 pb-12"
    >
      <span className="mono">
        {profile.name} · {profile.location}
      </span>

      <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <Link
          href="/work/navisavi"
          className="mono no-underline transition-colors hover:text-signal-soft"
        >
          NaviSavi
        </Link>
        <span className="mono !text-muted-dim">·</span>
        <Link
          href="/work/indeez"
          className="mono no-underline transition-colors hover:text-signal-soft"
        >
          Indeez
        </Link>
        <span className="mono !text-muted-dim">·</span>
        <Link
          href="/about"
          className="mono no-underline transition-colors hover:text-signal-soft"
        >
          About
        </Link>
        <span className="mono !text-muted-dim">·</span>

        {links.map((link, i) => (
          <span key={link.label} className="flex items-center gap-2">
            {i > 0 && <span className="mono !text-muted-dim">·</span>}
            <a
              href={link.href}
              className={`mono no-underline transition-colors hover:text-signal-soft ${
                link.pending ? "!text-amber" : ""
              }`}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {link.label}
              {link.pending ? " ?" : ""}
            </a>
          </span>
        ))}
      </span>
    </footer>
  );
}
