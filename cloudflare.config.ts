import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "cleaneffect-lagos",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-29",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      // /_next/image (next/image optimizer) must hit the Worker first; the
      // original photos under /images and /brand are Workers Static Assets
      // bundled from public/ and fetched by the optimizer via ASSETS.
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      // Backs the next/image optimizer (/_next/image) via imagesOptimizer()
      // in vite.config.ts: on-the-fly resize + AVIF/WebP negotiation.
      IMAGES: bindings.images(),
    },
  }),
});
