"use client";

import Image from "next/image";
import { useState } from "react";

import { Icon } from "@/components/icons";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-brand-950 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] focus-within:ring-2 focus-within:ring-aqua-400 focus-within:ring-offset-2 focus-within:ring-offset-brand-950">
      <div className="relative aspect-[4/3] select-none sm:aspect-[5/3.6]">
        <Image
          src="/images/seat-after.jpg"
          alt="Car seat after a CleanEffect deep clean, fibres bright and spotless"
          fill
          sizes="(max-width: 1024px) 92vw, 620px"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src="/images/seat-before.jpg"
            alt="The same car seat before cleaning, marked with coffee stains and pet hair"
            fill
            sizes="(max-width: 1024px) 92vw, 620px"
            className="object-cover"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/20 bg-brand-950/70 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-aqua-300/40 bg-aqua-400/20 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.2em] text-aqua-50 backdrop-blur">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10"
          style={{ left: `${position}%` }}
        >
          <div className="absolute inset-y-0 -left-px w-0.5 bg-gradient-to-b from-white/50 via-white to-white/50 shadow-[0_0_18px_rgba(255,255,255,0.65)]" />
          <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-white/60 bg-white/95 text-brand-900 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.6)]">
            <Icon name="chevron-left" size={14} strokeWidth={2.2} />
            <Icon name="chevron-right" size={14} strokeWidth={2.2} />
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Reveal the before and after car seat cleaning results"
          aria-valuetext={`${position}% before, ${100 - position}% after`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />

        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-brand-950/70 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur">
            Hot-water extraction · 90 min
          </span>
          <span className="hidden items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-brand-900 sm:flex">
            <Icon name="sparkle" size={12} className="text-aqua-500" />
            Drag to reveal
          </span>
        </div>
      </div>
    </div>
  );
}
