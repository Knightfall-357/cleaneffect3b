"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

import { CallButton, WhatsAppButton } from "@/components/contact-actions";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { serviceMessage, showcases } from "@/lib/content";
import { cn } from "@/lib/cn";

const SERVICE_ORDER = ["vitrificacao", "polishing", "bancos", "motor", "ac"];

export function Showcase() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const items = [...showcases[locale]].sort(
    (a, b) => SERVICE_ORDER.indexOf(a.id) - SERVICE_ORDER.indexOf(b.id),
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? "vitrificacao");
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % items.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + items.length) % items.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = items.length - 1;

    setActiveId(items[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-brand-100/80 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-aqua-200/40 blur-3xl" />
      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow={isPt ? "Serviços Especializados" : "Specialist Services"}
            title={
              isPt ? (
                <>
                  Vitrificação, polimento, bancos,
                  <br className="hidden sm:block" /> motor &amp; ar-condicionado.
                </>
              ) : (
                <>
                  Ceramic, polishing, seats,
                  <br className="hidden sm:block" /> engine &amp; air conditioning.
                </>
              )
            }
            description={
              isPt
                ? "Serviços exclusivamente para o seu automóvel. Escolha um para ver o detalhe técnico — todos os trabalhos são realizados na nossa oficina em Lagos ou com recolha e entrega do carro na sua morada."
                : "Car-specific services only. Select one for full specifications — all work is completed at our Lagos workshop, with door-to-door car pickup available."
            }
          />
          <Reveal delay={140}>
            <div className="flex flex-col items-start gap-2 lg:items-end">
              <div className="flex items-center gap-2 rounded-full border border-brand-100 bg-mist px-4 py-2.5 text-[12px] text-slate-700">
                <Icon name="pin" size={14} className="text-aqua-600" />
                <span>R. Dr. Joaquim Sacramento Pagarete 3, Lagos</span>
              </div>
              <a
                href="#casa"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d9c9a6]/70 bg-[#fbf8f1] px-3.5 py-1.5 text-[11.5px] font-medium text-[#8a6d33] transition-colors hover:border-[#c9b489] hover:bg-[#f5eeda]"
              >
                <Icon name="heart" size={12} />
                {isPt ? "Procura estofos, sofás ou tapetes?" : "Looking for sofas, rugs or upholstery?"}
                <Icon name="chevron-right" size={12} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-10">
          <div
            role="tablist"
            aria-label="Serviços CleanEffect"
            className="no-scrollbar flex gap-1.5 overflow-x-auto rounded-2xl border border-brand-100 bg-mist/80 p-1.5 shadow-[inset_0_1px_2px_rgba(11,26,68,0.04)]"
          >
            {items.map((item, index) => {
              const selected = item.id === active.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={cn(
                    "relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-all duration-300 sm:text-[13.5px]",
                    selected
                      ? "bg-white text-brand-950 shadow-[0_10px_24px_-18px_rgba(11,26,68,0.6)] font-semibold"
                      : "text-slate-600 hover:bg-white/60 hover:text-brand-900",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                      selected ? "bg-aqua-500" : "bg-brand-200",
                    )}
                  />
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={active.id}
          role="tabpanel"
          id={`${baseId}-panel-${active.id}`}
          aria-labelledby={`${baseId}-tab-${active.id}`}
          tabIndex={0}
          className="mt-6 animate-[rise_0.6s_var(--ease-spring)_both] rounded-[2rem] border border-white/80 bg-gradient-to-br from-mist to-white p-3 shadow-soft sm:p-4"
        >
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.05fr_1fr]">
            <div className="group relative min-h-[280px] overflow-hidden rounded-[1.6rem] sm:min-h-[360px]">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                unoptimized
                sizes="(max-width: 1024px) 92vw, 560px"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-brand-950/10" />

              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                  {active.eyebrow}
                </span>
                <span className="rounded-full border border-white/25 bg-aqua-400/25 px-3 py-1 text-[11px] font-bold text-aqua-100 backdrop-blur-md">
                  {active.price}
                </span>
              </div>

              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3">
                <div className="rounded-2xl border border-white/25 bg-white/15 px-3.5 py-2.5 text-white backdrop-blur-xl">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-aqua-200">
                    {isPt ? "Duração média" : "Typical duration"}
                  </p>
                  <p className="mt-0.5 text-[13.5px] font-semibold">{active.duration}</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium text-brand-900 shadow-sm">
                  <Icon name="check" size={12} className="text-[#22c15e]" />
                  {isPt ? "Produtos certificados Koch-Chemie / Gtechniq" : "Koch-Chemie & Gtechniq certified"}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 px-3 py-4 sm:px-5 sm:py-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-600 font-semibold">
                  {active.label}
                </p>
                <h3 className="mt-3 text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] text-brand-950 sm:text-[1.85rem]">
                  {active.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-slate-700 sm:text-[14.5px]">
                  {active.description}
                </p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-1">
                  {active.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[13px] leading-snug text-slate-800"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-aqua-100 text-aqua-700">
                        <Icon name="check" size={10} strokeWidth={2.4} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="rounded-2xl border border-brand-100 bg-white/90 px-4 py-3">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                    {isPt ? "Recomendado para" : "Best for"}
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-brand-950">{active.bestFor}</p>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <WhatsAppButton
                    message={serviceMessage(active.label, locale)}
                    label={
                      isPt
                        ? `Pedir orçamento de ${active.label}`
                        : `Ask about ${active.label}`
                    }
                    className="w-full sm:w-auto"
                  />
                  <CallButton
                    label={isPt ? "Ligar para esclarecer" : "Call to ask"}
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
