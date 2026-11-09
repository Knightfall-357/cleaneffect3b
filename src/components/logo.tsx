import Image from "next/image";

import { cn } from "@/lib/cn";

/**
 * CleanEffect logo, rendered from the brand PNG.
 *
 * Source file: /public/brand/cleaneffect-logo.png (1920 × 1080, white background).
 * To update the logo, overwrite that file — no code changes needed.
 *
 * The artwork sits inside generous whitespace, so we crop to the artwork's
 * bounding box (x 150–1820, y 238–892 of the 1920 × 1080 canvas) with pure CSS.
 */
export const LOGO_SRC = "/brand/cleaneffect-logo.png";

const CANVAS = { width: 1920, height: 1080 };
const CROP = { x: 150, y: 238, width: 1670, height: 654 };

const imageStyle = {
  position: "absolute" as const,
  maxWidth: "none",
  height: "auto",
  width: `${(CANVAS.width / CROP.width) * 100}%`,
  left: `${(-CROP.x / CROP.width) * 100}%`,
  top: `${(-CROP.y / CROP.height) * 100}%`,
};

const heights = {
  sm: "h-8 sm:h-9",
  md: "h-10 sm:h-11",
  lg: "h-12 sm:h-14",
} as const;

type LogoProps = {
  className?: string;
  /** "light" places the logo on a white badge for dark backgrounds. */
  tone?: "dark" | "light";
  size?: keyof typeof heights;
  priority?: boolean;
};

export function Logo({ className, tone = "dark", size = "md", priority = false }: LogoProps) {
  const artwork = (
    <span
      className={cn("relative block overflow-hidden", heights[size])}
      style={{ aspectRatio: `${CROP.width} / ${CROP.height}` }}
    >
      <Image
        src={LOGO_SRC}
        alt="CleanEffect"
        width={CANVAS.width}
        height={CANVAS.height}
        priority={priority}
        unoptimized
        sizes="(max-width: 640px) 100px, 130px"
        style={imageStyle}
      />
    </span>
  );

  if (tone === "light") {
    return (
      <span
        className={cn(
          "inline-flex rounded-2xl bg-white px-2.5 py-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] ring-1 ring-white/60 sm:px-3.5 sm:py-2.5",
          className,
        )}
      >
        {artwork}
      </span>
    );
  }

  return <span className={cn("inline-flex", className)}>{artwork}</span>;
}
