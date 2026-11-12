# Image sources & pipeline

Every image used by the website is **downloaded and stored in this project**
under `public/` — there are no hotlinked/remote images. At deploy time
`public/` is bundled into the Cloudflare Worker's Static Assets, and all
photos are rendered with `next/image` **with optimization enabled**
(no `unoptimized` anywhere):

- `next.config.ts` configures the optimizer (AVIF/WebP formats, device/image
  sizes, 30-day minimum cache TTL).
- On Cloudflare (vinext), `/_next/image` requests run in the Worker
  (`runWorkerFirst` in `cloudflare.config.ts`) and are resized/transcoded by
  the Cloudflare Images binding — `imagesOptimizer()` in `vite.config.ts` +
  the `IMAGES` binding in `cloudflare.config.ts`. The optimizer fetches the
  original files from the `ASSETS` static-assets binding.
- With a plain `next build` / `next start`, the built-in Next.js optimizer
  serves the same `/_next/image` URLs.

## Local files

| Local file | Source |
| --- | --- |
| `public/images/hero-cabin.jpg` | Pexels — https://www.pexels.com/photo/a-clean-car-interior-5288724/ |
| `public/images/seat-after.jpg` | Real CleanEffect job photo, supplied by the brand owner (the cleaned seat). Also used for the "Lavagem de Bancos" showcase in `src/lib/content.ts`. |
| `public/images/seat-before.jpg` | Real CleanEffect job photo, supplied by the brand owner (the same seat before cleaning). Displayed with `seat-after.jpg` in the before/after slider. Note the supplied "before" original is 540 × 360 px, so the optimizer upscales it slightly at large sizes. |
| `public/images/services/ceramic-coating.webp` | Pexels — https://www.pexels.com/photo/water-droplets-on-a-white-car-6873177/ |
| `public/images/services/engine-bay.webp` | Pexels — https://images.pexels.com/photos/8478228/pexels-photo-8478228.jpeg |
| `public/images/services/ac-vents.webp` | Pexels — https://www.pexels.com/photo/close-up-of-air-conditioning-in-car-7540410/ |
| `public/images/services/paint-polishing.webp` | Pexels — https://www.pexels.com/photo/a-person-buffing-a-car-6870296 |
| `public/images/services/sofa-cleaning.webp` | Pexels — https://www.pexels.com/photo/cleaner-vacuuming-a-sofa-chair-4401538/ |
| `public/images/services/home-upholstery.webp` | Pexels — https://www.pexels.com/photo/throw-pillows-on-gray-couch-13465905/ |
| `public/images/services/rug-cleaning.webp` | Pexels — https://www.pexels.com/photo/black-vacuum-cleaner-on-area-rug-4107284/ |
| `public/brand/cleaneffect-logo.png` | Official CleanEffect logo artwork, supplied by the brand owner (1920 × 1080, transparent background; artwork sits inside the crop box used by `src/components/logo.tsx`). To update it, overwrite this file — no code changes needed. |

Pexels license: https://www.pexels.com/license/

Downloaded originals were lightly re-encoded for the web (WebP q82 for
service photos, JPEG q84–86 for hero/seat) before commit; all further
resizing/format conversion happens at request time via the image optimizer
above.
