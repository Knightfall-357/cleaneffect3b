"use client";

import { useState } from "react";

import { WhatsAppButton } from "@/components/contact-actions";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";
import { contact, faqs } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const items = faqs[locale];
  const [openId, setOpenId] = useState<number | null>(items[0]?.id ?? 1);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-brand-100/80 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="container-page relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/70 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-700 shadow-soft backdrop-blur font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua-500" />
              {isPt ? "Tire as suas Dúvidas" : "Good to Know"}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-950 sm:text-[2.6rem]">
              {isPt ? (
                <>
                  Perguntas
                  <br /> frequentes em Lagos.
                </>
              ) : (
                <>
                  Questions,
                  <br /> answered directly.
                </>
              )}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-slate-700">
              {isPt
                ? "Tudo o que os clientes costumam perguntar sobre a recolha de chaves, lavagem de motor, vitrificação e a oficina em Lagos."
                : "Everything you need to know about key pickup, engine detailing, ceramic coatings and our workshop in Lagos."}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass mt-8 rounded-3xl p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white">
                  <Icon name="pin" size={18} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-brand-950">
                    {isPt ? "Oficina CleanEffect Lagos" : "CleanEffect Garage"}
                  </p>
                  <p className="text-[11.5px] text-slate-500">{contact.hours[locale]}</p>
                </div>
              </div>
              <p className="mt-3 text-[12px] text-slate-600">
                {contact.address}
              </p>
              <div className="mt-4 grid gap-2">
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-brand-100 bg-white px-3.5 py-2.5 text-[12.5px] font-medium text-brand-900 transition-colors hover:border-[#25d366]"
                >
                  <span className="flex items-center gap-2">
                    <Icon name="whatsapp" size={15} className="text-[#25d366]" />
                    WhatsApp {contact.whatsapp}
                  </span>
                  <Icon name="arrow" size={14} className="text-aqua-500" />
                </a>
                <a
                  href={contact.phoneHref}
                  className="flex items-center justify-between rounded-xl border border-brand-100 bg-white px-3.5 py-2.5 text-[12.5px] font-medium text-brand-900 transition-colors hover:border-aqua-300"
                >
                  <span className="flex items-center gap-2">
                    <Icon name="phone" size={15} className="text-brand-600" />
                    {contact.phone}
                  </span>
                  <Icon name="arrow" size={14} className="text-aqua-500" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <div className="grid gap-3" role="list">
            {items.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <Reveal key={faq.id} delay={Math.min(index * 55, 280)}>
                  <div
                    role="listitem"
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-400",
                      isOpen
                        ? "border-brand-200 bg-mist/80 shadow-soft"
                        : "border-brand-100 bg-white hover:border-brand-200 hover:bg-mist/40",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${faq.id}`}
                        id={`faq-button-${faq.id}`}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left"
                      >
                        <span className="text-[14px] font-semibold leading-snug text-brand-950 sm:text-[15px]">
                          {faq.question}
                        </span>
                        <span
                          className={cn(
                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-400",
                            isOpen
                              ? "rotate-180 border-brand-900 bg-brand-900 text-white"
                              : "border-brand-200 bg-white text-brand-700",
                          )}
                        >
                          <Icon name="chevron-down" size={14} strokeWidth={2} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-button-${faq.id}`}
                      className={cn(
                        "grid transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pr-12 text-[13px] leading-relaxed text-slate-700">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-2xl border border-brand-100 bg-gradient-to-r from-brand-50 to-aqua-50/60 p-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[13.5px] font-semibold text-brand-950">
                  {isPt
                    ? "Ainda com dúvidas? Envie uma foto do seu carro no WhatsApp."
                    : "Still deciding? Send a quick photo of your car on WhatsApp."}
                </p>
                <p className="mt-1 text-[12px] text-slate-600">
                  {isPt
                    ? "Avaliamos na hora e damos o orçamento exato para Lagos."
                    : "We review it instantly and give you an exact price for Lagos."}
                </p>
              </div>
              <WhatsAppButton
                label={isPt ? "Falar no WhatsApp" : "Chat on WhatsApp"}
                className="shrink-0"
                message={
                  isPt
                    ? "Olá CleanEffect! Tenho uma questão sobre os serviços de detalhe em Lagos."
                    : "Hello CleanEffect! I have a question about car detailing in Lagos."
                }
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
