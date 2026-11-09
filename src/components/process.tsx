"use client";

import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/context/language-context";
import { contact } from "@/lib/content";

const processSteps = {
  pt: [
    {
      number: "01",
      title: "Contacto por WhatsApp ou Chamada",
      body: "Diga-nos o modelo do carro, os serviços pretendidos (Vitrificação, Motor, AC, Polimento ou Estofos) e a sua localização em Lagos. Enviar fotos ajuda-nos a dar o orçamento exato em minutos.",
      meta: "Resposta em minutos",
    },
    {
      number: "02",
      title: "Recolha de Chaves ou Entrega na Oficina",
      body: "Recolhemos o seu carro e as chaves na sua morada em Lagos e levamo-lo para a nossa oficina na R. Dr. Joaquim Sacramento Pagarete 3, ou pode deixá-lo diretamente connosco.",
      meta: "Comodidade total",
    },
    {
      number: "03",
      title: "Tratamento de Detalhe & Inspeção",
      body: "Realizamos os procedimentos com máquinas profissionais, produtos certificados e iluminação técnica. Inspecionamos tudo consigo na entrega com garantia de 48h.",
      meta: "Garantia 48 horas",
    },
  ],
  en: [
    {
      number: "01",
      title: "WhatsApp or Phone Contact",
      body: "Tell us your car model, preferred services (Ceramic, Engine, A/C, Polish or Upholstery) and location in Lagos. Sending a photo helps us quote exact prices in minutes.",
      meta: "Replies in minutes",
    },
    {
      number: "02",
      title: "Car Pickup or Garage Drop-Off",
      body: "We collect your car and keys from your Lagos address and drive it to our dedicated workshop at R. Dr. Joaquim Sacramento Pagarete 3, or you can drop it directly with us.",
      meta: "Maximum convenience",
    },
    {
      number: "03",
      title: "Detail Treatment & Handover",
      body: "We perform the detailing under specialist inspection lighting with certified products. We walk you through the finish upon handover, backed by our 48h guarantee.",
      meta: "48-hour guarantee",
    },
  ],
};

const benefits = {
  pt: [
    {
      icon: "shield" as const,
      title: "Proteção contra o Sol e Salitre de Lagos",
      body: "O clima do Algarve queima o verniz e resseca os plásticos. A vitrificação e condicionamento profissional blindam o exterior do veículo.",
    },
    {
      icon: "leaf" as const,
      title: "Ar Puro & Sem Odores no Habitáculo",
      body: "A higienização de ar-condicionado com ozono elimina bactérias, ácaros e cheiros a humidade/tabaco na raiz, sem perfumes que só disfarçam.",
    },
    {
      icon: "bolt" as const,
      title: "Motor Limpo & Seguro para Inspeção",
      body: "Lavagem técnica com produtos seguros e isolamento elétrico. Melhora a dissipação de calor e aumenta o valor comercial do veículo.",
    },
    {
      icon: "clock" as const,
      title: "Oficina Própria na R. Dr. Joaquim Sacramento Pagarete 3",
      body: "Espaço fechado, limpo e seguro em Lagos, com opção de recolha e entrega das chaves à sua porta para não perder o seu dia.",
    },
  ],
  en: [
    {
      icon: "shield" as const,
      title: "Protection from Lagos Sun & Coastal Salt",
      body: "The intense Algarve climate oxidises clear coats and fades plastics. Vitrificação and technical conditioning keep paint glossy.",
    },
    {
      icon: "leaf" as const,
      title: "Pure Air & Odour-Free Cabin",
      body: "Ozone A/C sanitisation eliminates bacteria, pollen, pet and damp smells at the molecular level without artificial chemical perfumes.",
    },
    {
      icon: "bolt" as const,
      title: "Clean Engine Bay Safe for Electronics",
      body: "Deep engine bay detailing with safe non-conductive dressings. Enhances heat dissipation and significantly boosts car resale value.",
    },
    {
      icon: "clock" as const,
      title: "Dedicated Workshop at R. Dr. Joaquim Sacramento Pagarete 3",
      body: "Enclosed, clean and secure facility in Lagos with key pickup & delivery right to your door so your day is uninterrupted.",
    },
  ],
};

const proofPoints = {
  pt: [
    { value: "9H", label: "dureza na vitrificação cerâmica" },
    { value: "+400 €", label: "valorização média na revenda" },
    { value: "0 esforço", label: "com recolha de chaves ao domicílio" },
    { value: "100%", label: "dedicado à zona de Lagos" },
  ],
  en: [
    { value: "9H", label: "hardness in ceramic vitrificação" },
    { value: "+€400", label: "average resale value uplift" },
    { value: "Zero hassle", label: "with door-to-door car pickup" },
    { value: "100%", label: "focused on Lagos area" },
  ],
};

export function Process() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const steps = processSteps[locale];
  const benefitItems = benefits[locale];
  const stats = proofPoints[locale];

  return (
    <section id="process" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,#eef5ff,transparent)]" />
      <div className="container-page">
        <SectionHeading
          eyebrow={isPt ? "Como Funciona" : "How It Works"}
          title={
            isPt ? (
              <>
                Três passos simples.{" "}
                <span className="text-gradient">Zero incómodo para si.</span>
              </>
            ) : (
              <>
                Three simple steps.{" "}
                <span className="text-gradient">Zero hassle for you.</span>
              </>
            )
          }
          description={
            isPt
              ? "Basta enviar uma mensagem no WhatsApp. Nós tratamos do resto — recolhemos o carro, detalhamos na nossa oficina em Lagos e devolvemo-lo impecável."
              : "Just send a quick WhatsApp message. We handle the rest — picking up your car in Lagos, detailing it in our garage and returning it spotless."
          }
        />

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[3.4rem] hidden border-t border-dashed border-brand-200 lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.number} className="h-full">
                <Reveal
                  delay={index * 100}
                  className="card-hover group relative flex h-full flex-col rounded-3xl border border-white/80 bg-white/85 p-6 shadow-soft backdrop-blur sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-950 font-mono text-[13px] font-medium text-aqua-300 shadow-[0_16px_32px_-18px_rgba(11,26,68,0.9)] transition-transform duration-500 group-hover:-translate-y-1">
                      {step.number}
                      <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                    </span>
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-brand-700 font-semibold">
                      {step.meta}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.015em] text-brand-950">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-700">
                    {step.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={60} className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-900/30 bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900 p-6 shadow-glow sm:p-9 lg:p-11">
            <div className="pointer-events-none absolute inset-0 dot-bg opacity-25" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-aqua-400/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-aqua-200">
                  <Icon name="sparkle" size={12} />
                  {isPt ? "Padrão CleanEffect Lagos" : "CleanEffect Lagos Standard"}
                </span>
                <h3 className="mt-5 max-w-lg text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.1rem]">
                  {isPt ? (
                    <>
                      Pintura protegida, motor limpo.{" "}
                      <span className="text-gradient-light">Ar saudável no habitáculo.</span>
                    </>
                  ) : (
                    <>
                      Protected paint, clean engine.{" "}
                      <span className="text-gradient-light">Pure, healthy cabin air.</span>
                    </>
                  )}
                </h3>
                <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-white/75">
                  {isPt
                    ? "O detalhe automóvel correto vai muito além de uma lavagem rápida de rua: recupera a profundidade da cor, protege a mecânica e esteriliza o ar que respira todos os dias."
                    : "Proper detailing goes far beyond a quick street wash: it restores color depth, shields mechanical components and sterilises the air you breathe every day."}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-3">
                  {stats.map((point) => (
                    <div
                      key={point.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur transition-colors duration-300 hover:border-aqua-300/40 hover:bg-white/[0.11]"
                    >
                      <dt className="text-[1.35rem] font-semibold tracking-[-0.03em] text-white">
                        {point.value}
                      </dt>
                      <dd className="mt-1 text-[11px] leading-snug text-white/70">
                        {point.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <ul className="grid gap-3">
                {benefitItems.map((benefit) => (
                  <li
                    key={benefit.title}
                    className="group flex gap-3.5 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-aqua-400/25 to-brand-500/20 text-aqua-200 transition-transform duration-500 group-hover:scale-105">
                      <Icon name={benefit.icon} size={18} />
                    </span>
                    <div>
                      <h4 className="text-[14px] font-semibold text-white">{benefit.title}</h4>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-white/70">
                        {benefit.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
