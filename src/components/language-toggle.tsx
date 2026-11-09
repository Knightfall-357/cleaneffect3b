"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/cn";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector / Seletor de idioma"
      className={cn(
        "inline-flex shrink-0 items-center gap-0.5 rounded-full border border-brand-200/90 bg-white/90 p-0.5 shadow-sm backdrop-blur",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-pressed={locale === "pt"}
        className={cn(
          "flex h-9 min-w-9 items-center justify-center gap-1 rounded-full px-2 text-[11px] font-semibold transition-all duration-300 sm:h-8 sm:min-w-0 sm:px-2.5 sm:text-[11.5px]",
          locale === "pt"
            ? "bg-brand-950 text-white shadow-sm"
            : "text-slate-600 hover:text-brand-950",
        )}
      >
        <span className="hidden text-[12px] sm:inline" aria-hidden="true">🇵🇹</span>
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "flex h-9 min-w-9 items-center justify-center gap-1 rounded-full px-2 text-[11px] font-semibold transition-all duration-300 sm:h-8 sm:min-w-0 sm:px-2.5 sm:text-[11.5px]",
          locale === "en"
            ? "bg-brand-950 text-white shadow-sm"
            : "text-slate-600 hover:text-brand-950",
        )}
      >
        <span className="hidden text-[12px] sm:inline" aria-hidden="true">🇬🇧</span>
        EN
      </button>
    </div>
  );
}
