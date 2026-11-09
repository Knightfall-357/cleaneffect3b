"use client";

import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "scale";
  threshold?: number;
  style?: CSSProperties;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  threshold = 0.12,
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, once: true });

  return (
    <div
      ref={ref}
      className={cn(variant === "scale" ? "reveal-scale" : "reveal", inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
