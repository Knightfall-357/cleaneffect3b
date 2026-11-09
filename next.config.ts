import type { NextConfig } from "next";

// Photography is pre-optimized in public/ and rendered with unoptimized
// next/image, so both Next.js and vinext serve the same static asset URLs.
const nextConfig: NextConfig = {};

export default nextConfig;
