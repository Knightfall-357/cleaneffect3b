import type { NextConfig } from "next";

// All photography is bundled locally in public/ (see docs/image-sources.md)
// and rendered with next/image. Local files are optimized on demand by the
// Next.js image optimizer (/_next/image): on Cloudflare Workers that endpoint
// is wired to the Cloudflare Images binding (see vite.config.ts and
// cloudflare.config.ts), and plain `next build`/`next start` uses the
// built-in optimizer. No remote image hosts are used, so no remotePatterns
// are required.
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
