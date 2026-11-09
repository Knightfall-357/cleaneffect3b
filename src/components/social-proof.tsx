"use client";

import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";
import { partnerLogos, stats } from "@/lib/content";

export function SocialProof() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const marquee = [...partnerLogos, ...partnerLogos];
  const items = stats[locale];

  return (
    <section aria-label="Prova social / Social proof" className="relative border-y border-brand-100/80 bg-white/70">
      <div className="container-page py-12 sm:py-14">
        <Reveal className="flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
          <p className="max-w-xl text-[13.5px] font-medium leading-relaxed text-slate-600">
            {isPt ? (
              <>
                Oficina de detalhe automóvel na <strong className="text-brand-950">R. Dr. Joaquim Sacramento Pagarete 3</strong>, Lagos. Recolhemos a viatura e as chaves na sua morada ou pode trazê-la à nossa oficina.
              </>
            ) : (
              <>
                Car detailing garage at <strong className="text-brand-950">R. Dr. Joaquim Sacramento Pagarete 3</strong>, Lagos. We pick up your car &amp; keys or you can drop it at our workshop.
              </>
            )}
          </p>
          <div className="flex items-center gap-3 rounded-full border border-brand-100 bg-mist px-4 py-2 shadow-xs">
            <span className="text-[12.5px] font-bold text-brand-950">4.9 / 5</span>
            <span className="h-3 w-px bg-brand-200" aria-hidden="true" />
            <span className="text-[12px] text-slate-600">
              {isPt ? "340+ avaliações verificadas" : "340+ verified reviews"}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100} className="marquee mt-8">
          <div className="marquee-track items-center gap-10 sm:gap-16">
            {marquee.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="shrink-0 font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-brand-900/35 transition-colors duration-300 hover:text-brand-900/70 sm:text-[12px]"
                aria-hidden={index >= partnerLogos.length}
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-brand-100 pt-9 sm:gap-8 lg:grid-cols-4">
          {items.map((stat, index) => (
            <Reveal
              key={`${stat.label}-${index}`}
              delay={index * 80}
              className="group relative flex flex-col gap-1.5 lg:border-r lg:border-brand-100 lg:pr-6 lg:last:border-r-0"
            >
              <p className="text-[2rem] font-semibold tracking-[-0.04em] text-brand-950 sm:text-[2.4rem]">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  suffix={stat.suffix}
                  className="tabular-nums"
                />
              </p>
              <p className="text-[12.5px] leading-snug text-slate-600">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
