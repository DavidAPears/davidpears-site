import FootageStrip from "@/components/FootageStrip";
import { BandHead, SlotNote } from "@/components/ui";
import { getPlaylist } from "@/lib/navisavi";

/** NaviSavi's own "Featured Playlist", newest first. */
const PLAYLIST_ID = 1415;

export default async function Craft() {
  const clips = await getPlaylist(PLAYLIST_ID, 8, "end");

  return (
    <section id="craft" className="band gutter">
      <BandHead title="Live from the catalogue" meta="NaviSavi commercial API" />

      <div className="grid grid-cols-1 items-start gap-[clamp(2rem,4vw,3.5rem)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="m-0 max-w-[46ch] text-body">
            These clips are not screenshots. They are pulled at build time from the
            NaviSavi commercial API, the one I oversaw the creation of, and streamed from
            the same infrastructure that serves the product.
          </p>
          <p className="m-0 mt-4 max-w-[46ch] text-sm text-muted">
            Nothing streams until you press play, playback is capped, and the player
            library only loads on the first click. Bandwidth costs money. A portfolio is
            not a good enough reason to spend it.
          </p>
          {clips.length === 0 ? (
            <SlotNote>
              The API returned nothing, so this section is empty rather than faked. Check
              that NAVISAVI_API_KEY is set.
            </SlotNote>
          ) : null}
        </div>

        <FootageStrip clips={clips} />
      </div>
    </section>
  );
}
