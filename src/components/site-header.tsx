"use client";

import { useCallback, useEffect, useState } from "react";

import { CallButton, WhatsAppButton } from "@/components/contact-actions";
import { Icon } from "@/components/icons";
import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/cn";
import { contact, navLinks } from "@/lib/content";

export function SiteHeader() {
  const { locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const links = navLinks[locale];

  const handleScroll = useCallback(() => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    setScrolled(doc.scrollTop > 14);
    setProgress(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand-900/5">
        <div
          className="h-full bg-gradient-to-r from-brand-600 via-brand-400 to-aqua-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={cn(
          "container-page transition-all duration-500",
          scrolled ? "pt-1.5 sm:pt-2" : "pt-2 sm:pt-4",
        )}
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            "relative flex items-center justify-between gap-2 rounded-xl px-2 py-1.5 transition-all duration-500 sm:gap-2.5 sm:rounded-2xl sm:px-4 sm:py-2",
            scrolled || open
              ? "glass border-white/70 shadow-[0_18px_44px_-28px_rgba(11,26,68,0.45)]"
              : "border border-transparent bg-white/30 backdrop-blur-[4px]",
          )}
        >
          <a
            href="#top"
            aria-label="CleanEffect — voltar ao topo / back to top"
            className="shrink-0 rounded-xl px-0.5 py-0.5 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Logo size="sm" priority />
          </a>

          <div className="hidden items-center gap-0.5 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-[13px] font-medium text-slate-700 transition-colors duration-300 hover:text-brand-950",
                  active === link.href && "text-brand-950 font-semibold",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-gradient-to-r from-brand-500 to-aqua-400 transition-transform duration-300",
                    active === link.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageToggle />

            <a
              href={contact.phoneHref}
              aria-label={`Ligar para a CleanEffect em ${contact.phone}`}
              className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-medium text-brand-900 transition-colors hover:bg-brand-50 lg:inline-flex"
            >
              <Icon name="phone" size={14} className="text-aqua-500" />
              {contact.phone}
            </a>

            <div className="hidden sm:block">
              <WhatsAppButton showArrow={false} label="WhatsApp" />
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200/80 bg-white/90 text-brand-900 transition-all duration-300 hover:border-brand-300 hover:bg-white active:scale-95 xl:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={17} />
            </button>
          </div>

          <div
            id="mobile-nav"
            hidden={!open}
            className={cn(
              "absolute inset-x-0 top-[calc(100%+0.5rem)] max-h-[calc(100dvh-5.25rem)] origin-top overflow-y-auto overscroll-contain rounded-2xl border border-white/70 bg-white/95 p-3 shadow-float backdrop-blur-xl sm:p-4 xl:hidden",
              open && "animate-[rise_0.4s_var(--ease-spring)_both]",
            )}
          >
            <div className="mb-2 flex items-center justify-between border-b border-brand-100 pb-2">
              <span className="text-[12px] font-medium text-slate-500">
                {locale === "pt" ? "Idioma / Language:" : "Language / Idioma:"}
              </span>
              <LanguageToggle />
            </div>

            <ul className="grid gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-[14px] font-medium text-brand-900 transition-colors hover:bg-brand-50"
                  >
                    {link.label}
                    <Icon name="chevron-right" size={16} className="text-brand-300" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 grid gap-2 border-t border-brand-100 pt-3">
              <WhatsAppButton
                size="md"
                className="w-full"
                label={locale === "pt" ? "Falar no WhatsApp" : "Message on WhatsApp"}
              />
              <CallButton
                size="md"
                className="w-full"
                label={locale === "pt" ? `Ligar ${contact.phone}` : `Call ${contact.phone}`}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
