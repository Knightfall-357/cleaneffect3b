import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
  id,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.22em]",
              isLight
                ? "border-white/20 bg-white/10 text-aqua-200"
                : "border-brand-200/70 bg-white/70 text-brand-700 shadow-[0_8px_20px_-16px_rgba(11,26,68,0.6)] backdrop-blur",
            )}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aqua-500" />
            </span>
            {eyebrow}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={80}>
        <h2
          id={id}
          className={cn(
            "mt-6 max-w-3xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.6rem] lg:text-[3.15rem]",
            isLight ? "text-white" : "text-brand-950",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={150}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base",
              isLight ? "text-white/70" : "text-slate-600",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
