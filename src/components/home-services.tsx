"use client";

import Image from "next/image";

import { CallButton, WhatsAppButton } from "@/components/contact-actions";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";
import { homeServices, serviceMessage } from "@/lib/content";

export function HomeServices() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const content = homeServices[locale];

  return (
    <section
      id="casa"
      aria-labelledby="home-services-heading"
      className="relative isolate overflow-hidden border-y border-brand-100/80 bg-gradient-to-b from-[#fbf8f1] via-[#fdfbf6] to-mist py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30" />
      <div
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-[#e9dcc0]/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-aqua-200/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d9c9a6]/70 bg-white/80 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#8a6d33] shadow-soft backdrop-blur">
                  <Icon name="heart" size={12} />
                  {content.eyebrow}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200/70 bg-white/70 px-3 py-1.5 text-[10.5px] font-medium uppercase tracking-[0.12em] text-brand-800">
                  <span className="h-1 w-1 rounded-full bg-aqua-500" />
                  {content.badge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="home-services-heading"
                className="mt-5 text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-brand-950 sm:text-[2.6rem] lg:text-[2.9rem]"
              >
                {isPt ? (
                  <>
                    Estofos, Sofás e Tapetes.
                    <br className="hidden sm:block" />{" "}
                    <span className="text-gradient">Em sua casa.</span>
                  </>
                ) : (
                  <>
                    Upholstery, Sofas &amp; Rugs.
                    <br className="hidden sm:block" />{" "}
                    <span className="text-gradient">In your home.</span>
                  </>
                )}
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 text-[14.5px] leading-relaxed text-slate-700 sm:text-[15.5px]">
                {content.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={180}>
            <div className="flex flex-col gap-2 rounded-2xl border border-white/80 bg-white/80 p-3.5 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:gap-3">
              <div className="flex items-center gap-2 text-[12px] text-slate-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#efe4cb] text-[#8a6d33]">
                  <Icon name="pin" size={15} />
                </span>
                {isPt ? "Ao domicílio em Lagos e praias" : "At home in Lagos & beaches"}
              </div>
              <span className="hidden h-6 w-px bg-brand-100 sm:block" aria-hidden="true" />
              <div className="flex items-center gap-2 text-[12px] text-slate-700">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-aqua-100 text-aqua-700">
                  <Icon name="clock" size={15} />
                </span>
                {isPt ? "Seco em 2–3 horas" : "Dry in 2–3 hours"}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 90} className="h-full">
              <article className="card-hover group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/90 bg-white shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
                    className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/40 bg-white/85 text-brand-800 backdrop-blur">
                    <Icon name={item.icon} size={17} />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-brand-950 shadow-sm">
                    {item.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[16.5px] font-semibold tracking-[-0.015em] text-brand-950">
                      {item.title}
                    </h3>
                    <span className="shrink-0 rounded-full bg-mist px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.1em] text-brand-700">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  <ul className="mt-4 grid flex-1 gap-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-[12px] leading-snug text-slate-700"
                      >
                        <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-aqua-100 text-aqua-700">
                          <Icon name="check" size={8} strokeWidth={3} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <WhatsAppButton
                    className="mt-5 w-full"
                    size="md"
                    label={isPt ? `Pedir ${item.title.toLowerCase()}` : `Ask about ${item.title.toLowerCase()}`}
                    message={serviceMessage(`${item.title} (casa)`, locale)}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-6">
          <div className="glass flex flex-col gap-5 rounded-3xl p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#efe4cb] text-[#8a6d33]">
                <Icon name="heart" size={18} />
              </span>
              <div>
                <p className="text-[13.5px] font-semibold text-brand-950">
                  {isPt ? "Casas, villas e alojamento local" : "Homes, villas & holiday rentals"}
                </p>
                <p className="mt-1 max-w-xl text-[12px] leading-relaxed text-slate-600">
                  {content.note}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
              <WhatsAppButton
                label={content.cta}
                message={
                  isPt
                    ? "Olá CleanEffect! Gostaria de um orçamento para estofos/sofás/tapetes em casa."
                    : "Hello CleanEffect! I'd like a quote for home upholstery, sofas or rugs."
                }
              />
              <CallButton label={isPt ? "Ligar" : "Call us"} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
