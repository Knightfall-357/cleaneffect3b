"use client";

import Image from "next/image";
import type { PointerEvent } from "react";

import { ContactActions } from "@/components/contact-actions";
import { Icon, Stars } from "@/components/icons";
import { useLanguage } from "@/context/language-context";
import { contact } from "@/lib/content";

const avatars = [
  { initials: "MS", className: "from-brand-500 to-brand-700" },
  { initials: "CN", className: "from-aqua-400 to-brand-500" },
  { initials: "HW", className: "from-brand-700 to-brand-900" },
  { initials: "TF", className: "from-aqua-500 to-aqua-600" },
];

export function Hero() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";

  const handlePointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${((event.clientX - rect.left) / rect.width) * 100}%`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${((event.clientY - rect.top) / rect.height) * 100}%`,
    );
  };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_-10%,#ffffff_0%,#f3f7ff_38%,#eaf2ff_70%,#f5f8fe_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />
      <div
        className="orb -left-24 top-10 h-72 w-72 bg-aqua-300/60 sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="orb -right-20 top-40 h-80 w-80 bg-brand-300/50 [animation-delay:-8s]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <div className="max-w-xl">
            <div className="hero-rise inline-flex flex-wrap items-center gap-2 rounded-full border border-white/80 bg-white/85 py-1.5 pl-2 pr-4 shadow-[0_10px_30px_-22px_rgba(11,26,68,0.7)] backdrop-blur">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#25d366] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                {isPt ? "Aberto" : "Open"}
              </span>
              <span className="text-[12.5px] font-medium text-brand-900">
                {isPt ? "Lagos, Portugal" : "Lagos, Portugal"}
              </span>
              <span className="hidden text-[12px] text-slate-400 sm:inline">·</span>
              <span className="hidden text-[12px] text-slate-600 sm:inline">
                {isPt ? "Recolha de chaves & oficina própria" : "Car pickup & dedicated workshop"}
              </span>
            </div>

            <h1
              className="hero-rise mt-6 text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.045em] text-brand-950 sm:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.9rem]"
              style={{ animationDelay: "80ms" }}
            >
              {isPt ? (
                <>
                  Detalhe automóvel,
                  <br />
                  <span className="relative inline-block">
                    <span className="text-gradient">vitrificação &amp; polimento</span>
                    <svg
                      className="absolute -bottom-2 left-0 h-3 w-full text-aqua-400/70"
                      viewBox="0 0 300 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 8.5C56 3.5 111 2 149.5 3.5 199 5.5 252 7 298 3"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br /> com oficina em Lagos.
                </>
              ) : (
                <>
                  Car detailing,
                  <br />
                  <span className="relative inline-block">
                    <span className="text-gradient">ceramic coating &amp; polish</span>
                    <svg
                      className="absolute -bottom-2 left-0 h-3 w-full text-aqua-400/70"
                      viewBox="0 0 300 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 8.5C56 3.5 111 2 149.5 3.5 199 5.5 252 7 298 3"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br /> with garage in Lagos.
                </>
              )}
            </h1>

            <p
              className="hero-rise mt-6 max-w-lg text-[15.5px] leading-[1.7] text-slate-700 sm:text-[17px]"
              style={{ animationDelay: "160ms" }}
            >
              {isPt ? (
                <>
                  Especialistas em <strong>Vitrificação Cerâmica</strong>,{" "}
                  <strong>Polimento Técnico</strong>, <strong>Lavagem de Motor</strong> e{" "}
                  <strong>Higienização de Ar-Condicionado</strong>. Recolhemos o carro e as
                  chaves na sua morada em Lagos ou rececionamos na nossa oficina na{" "}
                  <span className="text-brand-950 underline decoration-aqua-400 decoration-2 underline-offset-2">
                    R. Dr. Joaquim Sacramento Pagarete 3
                  </span>
                  .
                </>
              ) : (
                <>
                  Specialists in <strong>Ceramic Coating (Vitrificação)</strong>,{" "}
                  <strong>Paint Correction &amp; Machine Polishing</strong>,{" "}
                  <strong>Engine Bay Detailing</strong>, and <strong>A/C Sanitisation</strong>.
                  We collect your car &amp; keys anywhere in Lagos or welcome you at our garage on{" "}
                  <span className="text-brand-950 underline decoration-aqua-400 decoration-2 underline-offset-2">
                    R. Dr. Joaquim Sacramento Pagarete 3
                  </span>
                  .
                </>
              )}
            </p>

            <div className="hero-rise mt-8" style={{ animationDelay: "240ms" }}>
              <ContactActions
                size="lg"
                whatsappLabel={
                  isPt ? "Pedir Orçamento no WhatsApp" : "Get a Quote on WhatsApp"
                }
                callLabel={isPt ? `Ligar ${contact.phoneDisplayShort}` : `Call ${contact.phoneDisplayShort}`}
              />

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-slate-600">
                <a
                  href="#services"
                  className="inline-flex items-center gap-1.5 font-medium text-brand-700 underline-offset-4 hover:text-brand-950 hover:underline"
                >
                  <Icon name="sparkle" size={13} className="text-aqua-500" />
                  {isPt ? "Ver todos os serviços" : "Explore all services"}
                </a>
                <span className="text-slate-300">·</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-brand-950"
                >
                  <Icon name="pin" size={13} className="text-brand-600" />
                  {isPt ? "Onde estamos em Lagos" : "Our Lagos location"}
                </a>
              </div>
            </div>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
              style={{ animationDelay: "320ms" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2.5">
                  {avatars.map((avatar) => (
                    <span
                      key={avatar.initials}
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${avatar.className} text-[10px] font-semibold text-white ring-2 ring-white`}
                    >
                      {avatar.initials}
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  <Stars rating={5} size={12} />
                  <p className="mt-1 text-[11.5px] font-medium text-slate-600">
                    4.9/5 · 340+ {isPt ? "clientes satisfeitos" : "happy clients"}
                  </p>
                </div>
              </div>
              <div className="hidden h-9 w-px bg-brand-200/70 sm:block" aria-hidden="true" />
              <ul className="grid gap-1">
                <li className="flex items-center gap-1.5 text-[12px] text-slate-700">
                  <Icon name="check" size={13} className="text-[#22c15e]" />
                  {isPt ? "Recolha de chaves em Lagos" : "Key & car pickup in Lagos"}
                </li>
                <li className="flex items-center gap-1.5 text-[12px] text-slate-700">
                  <Icon name="check" size={13} className="text-[#22c15e]" />
                  {isPt ? "Garantia de 48 horas" : "48-hour re-clean guarantee"}
                </li>
              </ul>
            </div>
          </div>

          <div
            onPointerMove={handlePointer}
            className="hero-rise relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none"
            style={{ animationDelay: "200ms" }}
          >
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_var(--mx,70%)_var(--my,20%),rgba(47,214,239,0.35),transparent_62%)] opacity-80 blur-2xl transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 p-2 shadow-float backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] sm:aspect-[5/4] lg:aspect-[4/4.4]">
                <Image
                  src="/images/hero-cabin.jpg"
                  alt="Habitáculo de luxo tratado com detalhe automóvel em Lagos pela CleanEffect"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 540px"
                  className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,60%)_var(--my,30%),rgba(255,255,255,0.22),transparent_55%)]" />

                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/40 bg-brand-950/55 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md sm:left-4 sm:top-4">
                  <Icon name="shield" size={13} className="text-aqua-300" />
                  {isPt ? "Vitrificação 9H · Oficina Lagos" : "9H Ceramic · Lagos Garage"}
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="flex items-end justify-between gap-3 rounded-2xl border border-white/25 bg-white/15 p-3 backdrop-blur-xl sm:p-4">
                    <div>
                      <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-aqua-200">
                        CleanEffect Lagos
                      </p>
                      <p className="mt-1 text-[14.5px] font-semibold text-white sm:text-[15.5px]">
                        {isPt ? "Recolha de chaves na sua morada" : "Key & car pickup at your door"}
                      </p>
                      <p className="mt-0.5 text-[11.5px] text-white/80">
                        R. Dr. Joaquim Sacramento Pagarete 3, Lagos
                      </p>
                    </div>
                    <div className="shrink-0 rounded-xl bg-white/95 px-3 py-2 text-right shadow-lg">
                      <p className="text-[9.5px] font-medium uppercase tracking-[0.12em] text-slate-500">
                        WhatsApp
                      </p>
                      <p className="text-[13px] font-bold leading-tight text-[#1faa59]">
                        {contact.phoneDisplayShort}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ambient-float absolute -left-3 top-[22%] hidden rounded-2xl border border-white/80 bg-white/95 p-3 shadow-float backdrop-blur sm:-left-6 sm:block">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-400 to-brand-500 text-white">
                  <Icon name="van" size={17} />
                </span>
                <div>
                  <p className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    {isPt ? "Serviço Lagos" : "Lagos Service"}
                  </p>
                  <p className="text-[12.5px] font-semibold text-brand-950">
                    {isPt ? "Recolha e entrega" : "Pickup & return"}
                  </p>
                </div>
              </div>
            </div>

            <div className="ambient-float-delayed absolute -right-2 bottom-[16%] hidden rounded-2xl border border-white/80 bg-white/95 p-3 shadow-float backdrop-blur sm:-right-5 sm:block">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25d366] text-white shadow-sm">
                  <Icon name="whatsapp" size={17} />
                </span>
                <div>
                  <p className="text-[9.5px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    {isPt ? "Resposta rápida" : "Quick response"}
                  </p>
                  <p className="text-[12.5px] font-semibold text-brand-950">
                    {isPt ? "Orçamento em minutos" : "Quote in minutes"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
