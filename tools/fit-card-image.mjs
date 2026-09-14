/**
 * Pad a card image out to exactly 16:9, the ratio the work cards render at.
 *
 * An image even slightly off-ratio gets letterboxed by `object-contain`, which
 * is invisible on its own and obvious the moment two cards sit side by side.
 *
 * Padding replicates the edge pixels rather than filling with a flat colour, so
 * there is no seam where the artwork bleeds to the edge. It pads the side whose
 * edge is flattest, since replicating a busy edge would streak.
 *
 * Usage: node tools/fit-card-image.mjs <image> [top|bottom|split]
 */
import sharp from "sharp";

const [file, where = "bottom"] = process.argv.slice(2);
if (!file) {
  console.error("usage: node tools/fit-card-image.mjs <image> [top|bottom|split]");
  process.exit(1);
}

const image = sharp(file);
const { width, height } = await image.metadata();
const target = Math.round(width * (9 / 16));
const short = target - height;

if (short <= 0) {
  console.log(`${file}: ${width}x${height} is already 16:9 or taller, nothing to do`);
  process.exit(0);
}

const extend =
  where === "top"
    ? { top: short }
    : where === "split"
      ? { top: Math.floor(short / 2), bottom: Math.ceil(short / 2) }
      : { bottom: short };

const out = await image
  .extend({ ...extend, extendWith: "copy" })
  .webp({ quality: 88 })
  .toBuffer();

await sharp(out).toFile(file);
console.log(
  `${file}: ${width}x${height} -> ${width}x${target}, padded ${short}px at ${where}`,
);
