"use client";

import { useMemo, useState } from "react";

import { CallButton } from "@/components/contact-actions";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/context/language-context";
import {
  contact,
  enquiryServices,
  lagosAreas,
  serviceDeliveryOptions,
  vehicleOptions,
  whatsappLink,
} from "@/lib/content";
import { buttonStyles } from "@/lib/ui";
import { cn } from "@/lib/cn";

export function ContactSection() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";

  const services = enquiryServices[locale];
  const vehicles = vehicleOptions[locale];
  const deliveryModes = serviceDeliveryOptions[locale];

  const [service, setService] = useState(services[0]);
  const [vehicle, setVehicle] = useState(vehicles[1]);
  const [delivery, setDelivery] = useState(deliveryModes[0]);
  const [area, setArea] = useState(lagosAreas[0]);
  const [note, setNote] = useState("");

  const message = useMemo(() => {
    if (isPt) {
      const lines = [
        "Olá CleanEffect! Gostaria de um orçamento para a minha viatura.",
        `• Serviço: ${service}`,
        `• Viatura: ${vehicle}`,
        `• Modalidade: ${delivery}`,
        `• Zona em Lagos: ${area}`,
      ];
      if (note.trim()) lines.push(`• Observações: ${note.trim()}`);
      return lines.join("\n");
    }

    const lines = [
      "Hello CleanEffect! I'd like a quote for my vehicle in Lagos.",
      `• Service: ${service}`,
      `• Vehicle: ${vehicle}`,
      `• Preference: ${delivery}`,
      `• Lagos area: ${area}`,
    ];
    if (note.trim()) lines.push(`• Notes: ${note.trim()}`);
    return lines.join("\n");
  }, [isPt, service, vehicle, delivery, area, note]);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-brand-950 py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_10%_0%,rgba(31,78,208,0.5),transparent_60%),radial-gradient(60%_60%_at_95%_10%,rgba(18,188,216,0.28),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 dot-bg opacity-30" />
      <div className="orb bottom-0 left-1/2 h-80 w-80 bg-aqua-500/25" aria-hidden="true" />

      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-aqua-200 backdrop-blur font-semibold">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25d366]" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#25d366]" />
                </span>
                {isPt ? "Contactos Diretos · Lagos" : "Direct Contact · Lagos"}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="contact-heading"
                className="mt-6 text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.8rem] lg:text-[3rem]"
              >
                {isPt ? (
                  <>
                    Recolha de chaves.
                    <br />
                    Oficina em Lagos.
                    <br />
                    <span className="text-gradient-light">Fale connosco hoje.</span>
                  </>
                ) : (
                  <>
                    Key &amp; car pickup.
                    <br />
                    Workshop in Lagos.
                    <br />
                    <span className="text-gradient-light">Message us today.</span>
                  </>
                )}
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/75">
                {isPt ? (
                  <>
                    Ligue ou envie mensagem no WhatsApp com o modelo do carro e o que precisa
                    (vitrificação, lavagem de motor, AC ou estofos). Recolhemos o carro na sua
                    morada em Lagos ou aguardamos por si na{" "}
                    <strong>{contact.addressShort}</strong>.
                  </>
                ) : (
                  <>
                    Call or message on WhatsApp with your car model and services needed (ceramic,
                    engine bay, A/C or interior). We can collect your car in Lagos or welcome you
                    at our garage on <strong>{contact.addressShort}</strong>.
                  </>
                )}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                <li className="flex items-start gap-2 text-[12.5px] text-white/80">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-200">
                    <Icon name="check" size={9} strokeWidth={2.8} />
                  </span>
                  {isPt ? "Recolha de chaves ao domicílio" : "Door-to-door car & key pickup"}
                </li>
                <li className="flex items-start gap-2 text-[12.5px] text-white/80">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-200">
                    <Icon name="check" size={9} strokeWidth={2.8} />
                  </span>
                  {isPt ? "Oficina fechada e segura" : "Secure, clean detailing workshop"}
                </li>
                <li className="flex items-start gap-2 text-[12.5px] text-white/80">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-200">
                    <Icon name="check" size={9} strokeWidth={2.8} />
                  </span>
                  {isPt ? "Garantia de 48 horas" : "48-hour satisfaction guarantee"}
                </li>
                <li className="flex items-start gap-2 text-[12.5px] text-white/80">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-aqua-400/20 text-aqua-200">
                    <Icon name="check" size={9} strokeWidth={2.8} />
                  </span>
                  {isPt ? "Atendimento PT & EN" : "English & Portuguese spoken"}
                </li>
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-[#25d366]/40 bg-gradient-to-br from-[#25d366]/25 via-[#25d366]/10 to-transparent p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[#25d366]/70"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#25d366]/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#25d366] text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,0.9)]">
                    <Icon name="whatsapp" size={19} />
                  </span>
                  <span className="relative mt-4 block font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/70">
                    WhatsApp
                  </span>
                  <span className="relative mt-1 flex items-center justify-between gap-2 text-[15px] font-semibold text-white">
                    {contact.whatsapp}
                    <Icon
                      name="arrow"
                      size={15}
                      className="text-[#25d366] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="relative mt-1 block text-[11.5px] text-white/65">
                    {isPt
                      ? "Envie fotos do carro para orçamento exato"
                      : "Send photos for instant exact quote"}
                  </span>
                </a>

                <a
                  href={contact.phoneHref}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-aqua-300/50 hover:bg-white/[0.1]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-900 shadow-[0_12px_28px_-14px_rgba(0,0,0,0.6)]">
                    <Icon name="phone" size={18} />
                  </span>
                  <span className="mt-4 block font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/70">
                    {isPt ? "Chamada direta" : "Direct phone"}
                  </span>
                  <span className="mt-1 flex items-center justify-between gap-2 text-[15px] font-semibold text-white">
                    {contact.phone}
                    <Icon
                      name="arrow"
                      size={15}
                      className="text-aqua-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="mt-1 block text-[11.5px] text-white/65">{contact.hours[locale]}</span>
                </a>
              </div>

              <div className="mt-4 rounded-2xl border border-white/15 bg-white/[0.04] p-3.5 backdrop-blur text-[12px] text-white/75 flex items-start gap-2.5">
                <Icon name="pin" size={15} className="mt-0.5 shrink-0 text-aqua-400" />
                <div>
                  <strong className="text-white block font-medium">Oficina CleanEffect Lagos:</strong>
                  {contact.address}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={120}>
            <div className="relative rounded-[1.9rem] border border-white/60 bg-white p-5 text-brand-950 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)] sm:p-7">
              <div className="pointer-events-none absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-full bg-aqua-400/40 blur-2xl" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-brand-600 font-semibold">
                    {isPt ? "Orçamento Rápido" : "Instant Quote"}
                  </p>
                  <h3 className="mt-1.5 text-[1.2rem] font-semibold tracking-[-0.02em] text-brand-950">
                    {isPt ? "Preparar Mensagem de WhatsApp" : "Build Your WhatsApp Message"}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-slate-500">
                    {isPt
                      ? "Escolha as opções e abrimos o WhatsApp com a sua mensagem pronta a enviar."
                      : "Pick your preferences and we'll open WhatsApp with your message pre-filled."}
                  </p>
                </div>
                <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/15 text-[#1faa59] sm:flex">
                  <Icon name="whatsapp" size={20} />
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Field
                  label={isPt ? "Serviço principal" : "Main service"}
                  htmlFor="enquiry-service"
                  className="sm:col-span-2"
                >
                  <select
                    id="enquiry-service"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="field"
                  >
                    {services.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label={isPt ? "Tipo de veículo" : "Vehicle type"}
                  htmlFor="enquiry-vehicle"
                >
                  <select
                    id="enquiry-vehicle"
                    value={vehicle}
                    onChange={(event) => setVehicle(event.target.value)}
                    className="field"
                  >
                    {vehicles.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label={isPt ? "Zona em Lagos" : "Area in Lagos"}
                  htmlFor="enquiry-town"
                >
                  <select
                    id="enquiry-town"
                    value={area}
                    onChange={(event) => setArea(event.target.value)}
                    className="field"
                  >
                    {lagosAreas.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label={isPt ? "Como prefere o serviço?" : "Service preference"}
                  htmlFor="enquiry-delivery"
                  className="sm:col-span-2"
                >
                  <select
                    id="enquiry-delivery"
                    value={delivery}
                    onChange={(event) => setDelivery(event.target.value)}
                    className="field"
                  >
                    {deliveryModes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label={isPt ? "Alguma nota específica? (opcional)" : "Specific notes? (optional)"}
                  htmlFor="enquiry-note"
                  className="sm:col-span-2"
                >
                  <textarea
                    id="enquiry-note"
                    rows={2}
                    maxLength={300}
                    placeholder={
                      isPt
                        ? "Ex: manchas nos bancos, cheiro a humidade no AC, lavagem de motor, dia pretendido…"
                        : "E.g. seat stains, damp A/C smell, engine bay wash, preferred day…"
                    }
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    className="field resize-none"
                  />
                </Field>
              </div>

              <div className="mt-5 rounded-2xl border border-[#25d366]/25 bg-[#25d366]/[0.06] p-4">
                <p className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#1a8f4b] font-semibold">
                  <Icon name="whatsapp" size={11} />
                  {isPt ? "Pré-visualização da mensagem" : "Message preview"}
                </p>
                <p
                  className="mt-2 whitespace-pre-line text-[12.5px] leading-relaxed text-slate-800"
                  aria-live="polite"
                >
                  {message}
                </p>
              </div>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-[1.4fr_1fr]">
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({
                    variant: "whatsapp",
                    size: "lg",
                    className: "w-full",
                  })}
                >
                  <Icon name="whatsapp" size={18} />
                  {isPt ? "Enviar no WhatsApp" : "Send on WhatsApp"}
                  <Icon
                    name="arrow"
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <CallButton
                  label={isPt ? "Ligar em vez disso" : "Prefer to call?"}
                  size="lg"
                  className="w-full"
                />
              </div>

              <p className="mt-4 text-center text-[11.5px] text-slate-500">
                {isPt
                  ? "Sem formulários nem base de dados. A mensagem segue direta para a nossa equipa em Lagos."
                  : "No databases or web forms. Message goes straight to our team in Lagos."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("grid gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-[11.5px] font-medium text-brand-900">
        {label}
      </label>
      {children}
    </div>
  );
}
