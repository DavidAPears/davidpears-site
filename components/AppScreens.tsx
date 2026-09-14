import Image from "next/image";

import { indeezScreens } from "@/content/site";

/** Native screenshot ratio, so stills and recordings sit in one even strip. */
const RATIO = "aspect-[1049/2048]";

export default function AppScreens() {
  return (
    <div className="grid grid-cols-2 gap-[clamp(0.75rem,1.5vw,1.25rem)] lg:grid-cols-4">
      {indeezScreens.map((screen) => (
        <figure key={screen.caption} className="m-0 flex flex-col gap-3">
          <div
            className={`${RATIO} relative overflow-hidden rounded-xl border ${
              screen.src
                ? "border-graticule bg-ground-2"
                : "border-dashed border-amber/40"
            }`}
          >
            {screen.src ? (
              <Image
                src={screen.src}
                alt={screen.caption}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            ) : (
              <span className="mono absolute inset-0 flex items-center justify-center !text-amber">
                {screen.kind === "video" ? "Recording" : "Still"}
              </span>
            )}
          </div>

          <figcaption className="mono">{screen.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
