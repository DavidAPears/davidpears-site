import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Mux serves the video stills. Routing them through next/image gets AVIF
    // and WebP at the size the tile actually renders, instead of full-size JPEG.
    remotePatterns: [{ protocol: "https", hostname: "image.mux.com" }],
  },
};

export default nextConfig;
