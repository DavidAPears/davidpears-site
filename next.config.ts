import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * 'unsafe-inline' on script-src is required by Next's hydration bootstrap
 * unless every page is made dynamic to carry a nonce, which would cost the
 * static prerendering this site depends on. Everything else is locked down:
 * the only third party allowed is Mux, which serves the video stills and the
 * HLS streams.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://image.mux.com",
  // Mux redirects HLS manifests and segments to regional edge hosts under
  // mux.com, so the wildcard is necessary rather than lazy.
  "media-src 'self' blob: https://*.mux.com",
  "connect-src 'self' blob: https://*.mux.com",
  "font-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  images: {
    // Mux serves the video stills. Routing them through next/image gets AVIF
    // and WebP at the size the tile actually renders, instead of full-size JPEG.
    remotePatterns: [{ protocol: "https", hostname: "image.mux.com" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
