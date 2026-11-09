"use client";

import { Icon } from "@/components/icons";
import { WhatsAppButton } from "@/components/contact-actions";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { contact, planAddOns, plans } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Pricing() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const items = plans[locale];
  const addOns = planAddOns[locale];

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,#eaf2ff,transparent_70%)]" />
      <div className="container-page">
        <SectionHeading
          eyebrow={isPt ? "Preços Claros & Transparentes" : "Clear & Transparent Pricing"}
          title={
            isPt ? (
              <>
                Pacotes completos.{" "}
                <span className="text-gradient">Sem surpresas na fatura.</span>
              </>
            ) : (
              <>
                Complete packages.{" "}
                <span className="text-gradient">Zero surprise line items.</span>
              </>
            )
          }
          description={
            isPt
              ? "Todos os preços incluem recolha de chaves em Lagos ou receção na nossa oficina na R. Dr. Joaquim Sacramento Pagarete 3, produtos profissionais certificados e IVA. Sem taxas ocultas de deslocação."
              : "All prices include key pickup in Lagos or garage drop-off at R. Dr. Joaquim Sacramento Pagarete 3, professional products and VAT. No hidden call-out fees."
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {items.map((plan, index) => {
            return (
              <Reveal key={plan.id} delay={index * 100} className="h-full">
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border p-6 transition-all duration-500 sm:p-7",
                    plan.popular
                      ? "animated-ring border-brand-900/40 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white shadow-glow lg:-mt-3 lg:pb-9"
                      : "border-white/80 bg-white/90 shadow-soft backdrop-blur hover:-translate-y-1 hover:border-brand-200 hover:shadow-float",
                  )}
                >
                  {plan.popular ? (
                    <>
                      <div className="pointer-events-none absolute inset-0 dot-bg opacity-25" />
                      <div className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full bg-aqua-400/20 blur-3xl" />
                      <span className="relative mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-aqua-200">
                        <Icon name="star" size={10} />
                        {isPt ? "Mais Procurado" : "Most Popular"}
                      </span>
                    </>
                  ) : (
                    <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-brand-700 font-semibold">
                      {index === 0
                        ? isPt
                          ? "Manutenção Técnica"
                          : "Technical Maintenance"
                        : isPt
                          ? "Proteção Máxima 9H"
                          : "Ultimate 9H Shield"}
                    </span>
                  )}

                  <h3
                    className={cn(
                      "relative text-[19px] font-semibold tracking-[-0.02em]",
                      plan.popular ? "text-white" : "text-brand-950",
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-1.5 text-[12.5px] leading-relaxed",
                      plan.popular ? "text-white/70" : "text-slate-600",
                    )}
                  >
                    {plan.tagline}
                  </p>

                  <div className="relative mt-6 flex items-end gap-2">
                    <span
                      className={cn(
                        "text-[2.6rem] font-semibold leading-none tracking-[-0.04em] tabular-nums",
                        plan.popular ? "text-white" : "text-brand-950",
                      )}
                    >
                      {plan.price} €
                    </span>
                    <span
                      className={cn(
                        "pb-1 text-[12px]",
                        plan.popular ? "text-white/70" : "text-slate-500",
                      )}
                    >
                      {isPt ? "/ serviço" : "/ service"}
                    </span>
                  </div>
                  <div className="relative mt-1.5 flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.1em]",
                        plan.popular ? "bg-white/10 text-aqua-200" : "bg-mist text-brand-700",
                      )}
                    >
                      <Icon name="clock" size={10} />
                      {plan.duration}
                    </span>
                    <span
                      className={cn(
                        "text-[11px]",
                        plan.popular ? "text-white/60" : "text-slate-500",
                      )}
                    >
                      {isPt ? "Recolha de chaves em Lagos" : "Key pickup included"}
                    </span>
                  </div>

                  <ul className="relative mt-6 grid flex-1 gap-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-start gap-2 text-[12.5px] leading-snug",
                          plan.popular ? "text-white/85" : "text-slate-700",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                            plan.popular
                              ? "bg-aqua-400/20 text-aqua-200"
                              : "bg-aqua-100 text-aqua-700",
                          )}
                        >
                          <Icon name="check" size={9} strokeWidth={2.8} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-7 grid gap-2">
                    <WhatsAppButton
                      message={
                        isPt
                          ? `Olá CleanEffect! Tenho interesse no pacote ${plan.name} (${plan.price} €). Poderiam confirmar disponibilidade para Lagos?`
                          : `Hello CleanEffect! I'm interested in the ${plan.name} package (€${plan.price}). Could you confirm availability for Lagos?`
                      }
                      label={plan.cta}
                      className="w-full"
                    />
                    <a
                      href={contact.phoneHref}
                      className={cn(
                        "inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-medium transition-colors",
                        plan.popular
                          ? "text-white/80 hover:bg-white/10 hover:text-white"
                          : "text-brand-800 hover:bg-brand-50",
                      )}
                    >
                      <Icon name="phone" size={13} className="text-aqua-500" />
                      {isPt ? `ou ligar ${contact.phone}` : `or call ${contact.phone}`}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80} className="mt-8">
          <div className="glass flex flex-col gap-5 rounded-3xl p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name="sparkle" size={18} />
              </span>
              <div>
                <p className="text-[13px] font-semibold text-brand-950">
                  {isPt ? "Serviços Individuais & Extras" : "Individual Services & Add-ons"}
                </p>
                <p className="mt-0.5 text-[11.5px] text-slate-500">
                  {isPt
                    ? "Pode pedir qualquer serviço isolado ou combinar vários no seu pedido de WhatsApp."
                    : "Request any standalone service or combine several in your WhatsApp message."}
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {addOns.map((addOn) => (
                <li
                  key={addOn}
                  className="rounded-full border border-brand-100 bg-white px-3 py-1.5 text-[11.5px] font-medium text-slate-700 transition-colors duration-300 hover:border-aqua-300 hover:text-brand-950"
                >
                  {addOn}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
