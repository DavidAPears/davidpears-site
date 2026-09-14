#!/usr/bin/env bash
#
# Compress the Indeez screen recordings for the web.
#
# Originals live in media-source/ (gitignored, tens of MB each). This writes a
# small H.264 copy and a poster still into public/images/indeez/, which is what
# the site actually serves.
#
# Each clip is trimmed to a window chosen by eye: these are silent looping
# tiles, so ten seconds of the interesting part beats a minute of everything.
#
# Usage: tools/encode-recordings.sh

set -euo pipefail

SRC="media-source/indeez"
OUT="public/images/indeez"
FFMPEG="${FFMPEG:-$(node -e "process.stdout.write(require('ffmpeg-static'))")}"

# Windows chosen by eye from contact sheets of each source clip.
#
#   profile  the confetti header, the profile, then a playlist opening
#   swipe    past the settling-in at the start, into the run of swipes
#   skins    longer, because the point is the full cycle: cassette, vinyl,
#            default, each chosen from the personalisation sheet
#   feed     the scrapbook scroll. Stops short of 22s, where the cards render
#            empty mid-load, and nowhere near the 40s post reading "Oh Fuck"
#
# name  start  duration
CLIPS=(
  "profile 0  12"
  "swipe   3  12"
  "skins   0  24"
  "feed    0  13"
)

# 540px wide is ~1.4x the largest size the tile is ever displayed at, which is
# the point where more pixels stop being visible and only cost bandwidth.
WIDTH=540

for clip in "${CLIPS[@]}"; do
  read -r name start dur <<<"$clip"

  "$FFMPEG" -hide_banner -loglevel error -y \
    -ss "$start" -t "$dur" -i "$SRC/$name.mp4" \
    -vf "scale=$WIDTH:-2:flags=lanczos,fps=30" \
    -c:v libx264 -crf 30 -preset slow \
    -profile:v main -pix_fmt yuv420p \
    -movflags +faststart -an \
    "$OUT/$name.mp4"

  # Poster: first frame of the same window, so nothing jumps when it starts.
  "$FFMPEG" -hide_banner -loglevel error -y \
    -ss "$start" -i "$SRC/$name.mp4" -frames:v 1 \
    -vf "scale=$WIDTH:-2:flags=lanczos" -q:v 5 \
    "$OUT/$name-poster.jpg"

  printf '%-8s %s  poster %s\n' "$name" \
    "$(du -h "$OUT/$name.mp4" | cut -f1)" \
    "$(du -h "$OUT/$name-poster.jpg" | cut -f1)"
done
