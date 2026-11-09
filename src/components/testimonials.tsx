"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Icon, Stars } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/cn";

const avatarStyles = [
  "from-brand-500 to-brand-800",
  "from-aqua-400 to-brand-500",
  "from-brand-700 to-brand-950",
  "from-aqua-500 to-aqua-600",
  "from-brand-400 to-brand-700",
  "from-brand-600 to-aqua-500",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => /[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function Testimonials() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const items = testimonials[locale];

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const node = scrollerRef.current;
    if (!node) return;
    setCanPrev(node.scrollLeft > 8);
    setCanNext(node.scrollLeft + node.clientWidth < node.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const node = scrollerRef.current;
    if (!node) return;
    node.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      node.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : node.clientWidth * 0.8;
    node.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-y border-brand-100/80 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-aqua-200/40 blur-3xl" />
      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow={isPt ? "Avaliações Reais" : "Customer Reviews"}
            title={
              isPt ? (
                <>
                  Quem experimenta em Lagos,
                  <br className="hidden sm:block" /> confia e recomenda.
                </>
              ) : (
                <>
                  Loved by drivers &amp; owners
                  <br className="hidden sm:block" /> across Lagos.
                </>
              )
            }
            description={
              isPt
                ? "340+ clientes atendidos, classificação média de 4.9 estrelas. Leia o que dizem sobre o nosso serviço com recolha de chaves e acabamentos na oficina."
                : "Over 340 cars detailed, 4.9 average rating. Read honest feedback about our key pickup and dedicated workshop in Lagos."
            }
          />

          <Reveal delay={140} className="flex items-center gap-4">
            <div className="rounded-2xl border border-brand-100 bg-mist px-4 py-3 text-center">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-brand-950">4.9</p>
              <Stars rating={5} size={11} className="mt-1 justify-center" />
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">
                340+ {isPt ? "avaliações" : "reviews"}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label={isPt ? "Ver avaliações anteriores" : "Show previous reviews"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 disabled:pointer-events-none disabled:opacity-35"
              >
                <Icon name="chevron-left" size={17} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label={isPt ? "Ver mais avaliações" : "Show more reviews"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 disabled:pointer-events-none disabled:opacity-35"
              >
                <Icon name="chevron-right" size={17} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-10">
          <div
            ref={scrollerRef}
            className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:-mx-1 sm:px-1"
            tabIndex={0}
            aria-label="Carrossel de avaliações de clientes"
            role="region"
          >
            {items.map((testimonial, index) => (
              <article
                key={testimonial.id}
                data-card
                className={cn(
                  "card-hover group relative flex min-w-[86%] snap-start flex-col rounded-3xl border p-5 sm:min-w-[46%] sm:p-6 lg:min-w-[31.6%]",
                  testimonial.featured
                    ? "border-brand-900/30 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white shadow-glow"
                    : "border-white/80 bg-mist/70 text-brand-950 shadow-soft backdrop-blur hover:border-brand-200",
                )}
              >
                {testimonial.featured ? (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-aqua-400/25 blur-3xl" />
                  </div>
                ) : null}

                <div className="relative flex items-center justify-between">
                  <Stars rating={testimonial.rating} size={13} />
                  <span
                    className={cn(
                      "flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em]",
                      testimonial.featured
                        ? "bg-white/10 text-aqua-200"
                        : "bg-white text-slate-600 font-semibold",
                    )}
                  >
                    <Icon name="check" size={9} strokeWidth={2.6} className="text-[#22c15e]" />
                    {isPt ? "Verificado" : "Verified"}
                  </span>
                </div>

                <blockquote
                  className={cn(
                    "relative mt-4 flex-1 text-[13.5px] leading-relaxed",
                    testimonial.featured ? "text-white/85" : "text-slate-700",
                  )}
                >
                  <Icon
                    name="quote"
                    size={22}
                    className={cn(
                      "mb-2 opacity-40",
                      testimonial.featured ? "text-aqua-300" : "text-brand-300",
                    )}
                  />
                  {testimonial.quote}
                </blockquote>

                <div
                  className={cn(
                    "relative mt-5 flex items-center gap-3 border-t pt-4",
                    testimonial.featured ? "border-white/15" : "border-brand-100",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br text-[11px] font-semibold text-white ring-2",
                      avatarStyles[index % avatarStyles.length],
                      testimonial.featured ? "ring-white/20" : "ring-white",
                    )}
                  >
                    {initials(testimonial.name)}
                  </span>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "truncate text-[12.5px] font-semibold",
                        testimonial.featured ? "text-white" : "text-brand-950",
                      )}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={cn(
                        "truncate text-[11px]",
                        testimonial.featured ? "text-white/70" : "text-slate-500",
                      )}
                    >
                      {testimonial.location} · {testimonial.vehicle}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11.5px] text-slate-500">
            {isPt
              ? "Deslize ou utilize as setas para ver mais. Avaliações de clientes reais em Lagos."
              : "Swipe or use arrows to read more. Real customer feedback in Lagos, Algarve."}
          </p>
          <div className="flex items-center gap-1.5 rounded-full border border-brand-100 bg-mist px-3 py-1.5 text-[11px] font-medium text-brand-800">
            <Icon name="sparkle" size={12} className="text-aqua-500" />
            <span>96% {isPt ? "de clientes voltam ou recomendam" : "rebook or refer us"}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
