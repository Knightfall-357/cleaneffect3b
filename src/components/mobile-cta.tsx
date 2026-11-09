"use client";

import { useEffect, useState } from "react";

import { Icon } from "@/components/icons";
import { useLanguage } from "@/context/language-context";
import { contact, whatsappLink } from "@/lib/content";
import { cn } from "@/lib/cn";

export function MobileCta() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const contactSection = document.getElementById("contact");
      const contactTop = contactSection
        ? contactSection.getBoundingClientRect().top
        : Number.POSITIVE_INFINITY;

      setVisible(window.scrollY > 600 && contactTop > window.innerHeight * 0.55);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div className="glass grid grid-cols-[auto_1fr] items-center gap-2 rounded-2xl p-2 shadow-float">
        <a
          href={contact.phoneHref}
          tabIndex={visible ? 0 : -1}
          aria-label={`Ligar para a CleanEffect em ${contact.phone}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-brand-200/80 bg-white px-4 text-[13px] font-semibold text-brand-900 transition-all duration-300 active:scale-95"
        >
          <Icon name="phone" size={16} className="text-aqua-500" />
          {isPt ? "Ligar" : "Call"}
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          aria-label="Pedir orçamento no WhatsApp"
          className="shine inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1faa59] to-[#25d366] px-4 text-[13.5px] font-semibold text-white shadow-[0_14px_30px_-16px_rgba(34,193,94,0.95)] transition-all duration-300 active:scale-[0.98]"
        >
          <Icon name="whatsapp" size={17} />
          {isPt ? "Orçamento no WhatsApp" : "Quote on WhatsApp"}
        </a>
      </div>
    </div>
  );
}
