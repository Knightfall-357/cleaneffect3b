"use client";

import { BeforeAfter } from "@/components/before-after";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { contact } from "@/lib/content";

const highlights = {
  pt: [
    {
      title: "Vitrificação Cerâmica 9H",
      detail: "Verniz espelhado protegido contra o sol forte de Lagos e salitre",
      time: "Proteção até 24 meses",
    },
    {
      title: "Lavagem Detalhada de Motor",
      detail: "Compartimento do motor descontaminado e condicionado a acetinado",
      time: "100% seguro para eletrónica",
    },
    {
      title: "Higienização de AC com Ozono",
      detail: "Condutas esterilizadas e eliminação total de odores a humidade",
      time: "Elimina 99% das bactérias",
    },
  ],
  en: [
    {
      title: "9H Ceramic Coating (Vitrificação)",
      detail: "Mirror clear coat protected against intense Algarve sun and coastal salt",
      time: "Up to 24 months protection",
    },
    {
      title: "Technical Engine Bay Detail",
      detail: "Decontaminated mechanics finished with non-conductive satin dressing",
      time: "Safe for electronics",
    },
    {
      title: "A/C Sanitisation with Ozone",
      detail: "Ducts sterilised and permanent elimination of damp, pet & tobacco smells",
      time: "Eliminates 99% bacteria",
    },
  ],
};

export function Results() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const items = highlights[locale];

  return (
    <section
      id="results"
      className="relative isolate overflow-hidden bg-brand-950 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_15%_0%,rgba(31,78,208,0.55),transparent_60%),radial-gradient(60%_50%_at_90%_20%,rgba(18,188,216,0.28),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-40" />
      <div
        className="orb left-1/4 top-1/2 h-80 w-80 bg-brand-500/30 [animation-delay:-6s]"
        aria-hidden="true"
      />

      <div className="container-page">
        <SectionHeading
          tone="light"
          align="left"
          eyebrow={isPt ? "Resultados Reais" : "Real Results"}
          title={
            isPt ? (
              <>
                Arraste o cursor.
                <br className="hidden sm:block" /> Veja o tecido voltar ao estado novo.
              </>
            ) : (
              <>
                Drag the slider.
                <br className="hidden sm:block" /> Watch tired fabric return to factory fresh.
              </>
            )
          }
          description={
            isPt
              ? "Sem filtros nem truques. Demonstração de extração a quente num banco familiar de Lagos marcado por café, areia e pó. Trabalhos efetuados na nossa oficina na R. Dr. Joaquim Sacramento Pagarete 3."
              : "No staging tricks — pure extraction on a family seat in Lagos with coffee and Meia Praia sand. All detailing carried out at our garage on R. Dr. Joaquim Sacramento Pagarete 3."
          }
          className="max-w-2xl"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_1fr] lg:items-stretch">
          <Reveal variant="scale">
            <BeforeAfter />
          </Reveal>

          <div className="grid gap-4">
            {items.map((result, index) => (
              <Reveal key={result.title} delay={index * 90} className="h-full">
                <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-aqua-300/40 hover:bg-white/[0.1] sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-white/15 to-white/5 text-aqua-300">
                    <Icon
                      name={index === 0 ? "shield" : index === 1 ? "steam" : "leaf"}
                      size={19}
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14.5px] font-semibold text-white">{result.title}</h3>
                      <span className="rounded-full bg-aqua-400/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-aqua-200">
                        {result.time}
                      </span>
                    </div>
                    <p className="mt-1 text-[12.5px] leading-snug text-white/70">
                      {result.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <div className="relative overflow-hidden rounded-2xl border border-aqua-300/30 bg-gradient-to-br from-aqua-400/20 via-white/[0.06] to-transparent p-5">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-aqua-400/25 blur-2xl" />
                <div className="flex items-center gap-2 text-aqua-200">
                  <Icon name="shield" size={16} />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em]">
                    {isPt ? "Garantia de 48 Horas em Lagos" : "48-Hour Guarantee in Lagos"}
                  </p>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/80">
                  {isPt ? (
                    <>
                      Recolhemos e entregamos o seu carro em Lagos, ou rececionamo-lo na{" "}
                      <strong>{contact.addressShort}</strong>. Se notar algum detalhe que não ficou perfeito, diga-nos no prazo de 48h e corrigimos de imediato.
                    </>
                  ) : (
                    <>
                      We pick up and return your car in Lagos, or welcome you at{" "}
                      <strong>{contact.addressShort}</strong>. Spot any imperfect spot within 48h and we&apos;ll re-touch it free of charge.
                    </>
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
