import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";

export default defineConfig({
  server: { allowedHosts: true },
  preview: { allowedHosts: true },
  plugins: [
    // All photos live in public/ and are deployed as Workers Static Assets.
    // next/image optimization is enabled: local images are routed through
    // /_next/image and resized/transcoded at the edge by the Cloudflare
    // Images binding (IMAGES, see cloudflare.config.ts).
    vinext({ images: { optimizer: imagesOptimizer() } }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
