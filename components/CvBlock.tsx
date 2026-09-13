import { DownloadIcon } from "@/components/ui";
import { cv } from "@/content/site";

export default function CvBlock() {
  return (
    <section id="cv" className="band gutter">
      <div className="grid grid-cols-1 items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <h2 className="display-lg m-0">The full CV</h2>
          <p className="mt-4 mb-0 max-w-[48ch] text-body">{cv.blurb}</p>

          <p className="mt-8 mb-0 max-w-[48ch] text-body">
            If any of it is useful to you, the fastest way to reach me is email:{" "}
            <a
              href="mailto:davidapears@gmail.com"
              className="font-semibold text-aqua no-underline hover:underline"
            >
              davidapears@gmail.com
            </a>
          </p>
        </div>

        <div className="flex min-w-[17rem] flex-col gap-4 rounded-lg border border-graticule bg-ground-2 p-6">
          <div className="flex flex-col gap-1">
            <span className="mono">Document</span>
            <span className="font-mono text-[0.813rem] text-paper">{cv.filename}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="mono">Updated</span>
            <span className="font-mono text-[0.813rem] text-paper">{cv.updated}</span>
          </div>
          <a className="btn btn-primary" href={cv.href} download>
            Download PDF
            <DownloadIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
