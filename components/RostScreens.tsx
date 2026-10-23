import Image from "next/image";

import { rost } from "@/content/site";

/** Native screenshot ratio, so the four sit in one even row. */
const RATIO = "aspect-[1049/2048]";

/**
 * The app itself, in the same framed treatment as the Indeez screens so the
 * two case studies read as a set.
 */
export default function RostScreens() {
  return (
    <div className="grid grid-cols-2 gap-[clamp(0.75rem,1.8vw,1.5rem)] lg:grid-cols-4">
      {rost.screens.map((screen) => (
        <figure key={screen.caption} className="m-0 flex flex-col gap-3">
          <div
            className={`${RATIO} relative overflow-hidden rounded-xl border border-graticule bg-ground-2`}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              sizes="(min-width: 1024px) 22vw, 45vw"
              className="object-cover"
            />
          </div>

          <figcaption className="flex flex-col gap-1">
            <span className="mono !text-signal-soft">{screen.caption}</span>
            <span className="text-[0.813rem] text-muted">{screen.note}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
