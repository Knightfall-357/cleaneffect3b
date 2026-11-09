"use client";

import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { contact, features } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Features() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const items = features[locale];

  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,#eef5ff,transparent)]" />
      <div className="container-page">
        <SectionHeading
          eyebrow={isPt ? "Porquê a CleanEffect" : "Why CleanEffect"}
          title={
            isPt ? (
              <>
                Detalhe automóvel de precisão,
                <br className="hidden sm:block" /> com oficina em Lagos.
              </>
            ) : (
              <>
                Precision car detailing,
                <br className="hidden sm:block" /> with a garage in Lagos.
              </>
            )
          }
          description={
            isPt
              ? "Cada máquina, produto e técnica foi selecionado para proteger a sua viatura do sol e salitre de Lagos. Sem atalhos, sem produtos agressivos — apenas acabamentos espelhados e habitáculos esterilizados."
              : "Every tool, chemical and technique is engineered to protect your vehicle from Algarve sun and coastal salt. No shortcuts — just flawless mirror paint and sterilised cabins."
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, index) => {
            const highlighted = index === 0;

            return (
              <Reveal key={feature.title} delay={index * 70} className="h-full">
                <article
                  className={cn(
                    "card-hover group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 sm:p-7",
                    highlighted
                      ? "border-brand-900/40 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white shadow-glow"
                      : "border-white/80 bg-white/85 shadow-soft backdrop-blur hover:border-brand-200",
                  )}
                >
                  {highlighted ? (
                    <>
                      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-aqua-400/25 blur-3xl" />
                      <div className="pointer-events-none absolute inset-0 dot-bg opacity-30" />
                    </>
                  ) : (
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-aqua-200/0 blur-2xl transition-all duration-700 group-hover:bg-aqua-200/50" />
                  )}

                  <div className="relative flex items-center justify-between">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3",
                        highlighted
                          ? "border border-white/20 bg-white/10 text-aqua-300"
                          : "bg-gradient-to-br from-brand-50 to-aqua-100/70 text-brand-700 ring-1 ring-inset ring-white",
                      )}
                    >
                      <Icon name={feature.icon} size={22} />
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.24em]",
                        highlighted ? "text-white/40" : "text-brand-900/30",
                      )}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "relative mt-6 text-[17px] font-semibold tracking-[-0.015em]",
                      highlighted ? "text-white" : "text-brand-950",
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-2.5 flex-1 text-[13.5px] leading-relaxed",
                      highlighted ? "text-white/70" : "text-slate-600",
                    )}
                  >
                    {feature.body}
                  </p>

                  {feature.stat ? (
                    <p
                      className={cn(
                        "relative mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em]",
                        highlighted
                          ? "bg-white/10 text-aqua-200"
                          : "bg-brand-50 text-brand-700",
                      )}
                    >
                      <span className="h-1 w-1 rounded-full bg-aqua-400" />
                      {feature.stat}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80} className="mt-6">
          <div className="glass flex flex-col gap-6 rounded-3xl p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-950 text-aqua-300 shadow-[0_16px_32px_-18px_rgba(11,26,68,0.9)]">
                <Icon name="pin" size={22} />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-brand-950">
                  {isPt ? "Oficina Própria em Lagos & Recolha ao Domicílio" : "Dedicated Lagos Garage & Home Pickup"}
                </h3>
                <p className="mt-1 max-w-xl text-[13.5px] leading-relaxed text-slate-600">
                  {isPt ? (
                    <>
                      Localizada na <strong>{contact.address}</strong>. Recolhemos as chaves e o carro onde estiver em Lagos, realizamos o serviço na nossa oficina e entregamos pronto.
                    </>
                  ) : (
                    <>
                      Located at <strong>{contact.address}</strong>. We can collect your car &amp; keys anywhere in Lagos, detail it at our garage and bring it back.
                    </>
                  )}
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:min-w-[440px]">
              <div className="rounded-2xl border border-white/80 bg-white/70 px-3.5 py-3">
                <dt className="text-[12px] font-semibold text-brand-900">
                  {isPt ? "Recolha de chaves" : "Key pickup"}
                </dt>
                <dd className="mt-0.5 text-[11px] text-slate-500">
                  {isPt ? "Em toda a zona de Lagos" : "Across all Lagos"}
                </dd>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/70 px-3.5 py-3">
                <dt className="text-[12px] font-semibold text-brand-900">
                  {isPt ? "Oficina fechada" : "Enclosed garage"}
                </dt>
                <dd className="mt-0.5 text-[11px] text-slate-500">
                  {isPt ? "Iluminação técnica 360°" : "360° technical lighting"}
                </dd>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/70 px-3.5 py-3">
                <dt className="text-[12px] font-semibold text-brand-900">
                  {isPt ? "Garantia 48h" : "48h guarantee"}
                </dt>
                <dd className="mt-0.5 text-[11px] text-slate-500">
                  {isPt ? "Sem custos extra" : "100% satisfaction"}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
