"use client";

import { WhatsAppButton } from "@/components/contact-actions";
import { Icon, Stars } from "@/components/icons";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/context/language-context";
import { contact, lagosAreas, navLinks } from "@/lib/content";

const serviceLinks = {
  pt: [
    { label: "Vitrificação Cerâmica (9H)", href: "#services" },
    { label: "Lavagem de Motor Detalhada", href: "#services" },
    { label: "Higienização de Ar-Condicionado", href: "#services" },
    { label: "Polimento Técnico & Swirls", href: "#services" },
    { label: "Lavagem de Bancos (Interior)", href: "#services" },
    { label: "Estofos, Sofás e Tapetes (Casa)", href: "#casa" },
    { label: "Preços & Pacotes", href: "#pricing" },
  ],
  en: [
    { label: "9H Ceramic Coating (Vitrificação)", href: "#services" },
    { label: "Engine Bay Deep Clean", href: "#services" },
    { label: "A/C Sanitisation & Ozone", href: "#services" },
    { label: "Machine Polishing & Swirls", href: "#services" },
    { label: "Car Seat Washing (Interior)", href: "#services" },
    { label: "Home Upholstery, Sofas & Rugs", href: "#casa" },
    { label: "Pricing & Packages", href: "#pricing" },
  ],
};

const socials = [
  { name: "Instagram", icon: "instagram" as const, href: "https://instagram.com" },
  { name: "Facebook", icon: "facebook" as const, href: "https://facebook.com" },
  { name: "WhatsApp", icon: "whatsapp" as const, href: contact.whatsappHref },
];

export function SiteFooter() {
  const { locale } = useLanguage();
  const isPt = locale === "pt";
  const links = serviceLinks[locale];
  const companyNav = navLinks[locale].filter((link) => link.href !== "#services");

  return (
    <footer className="relative isolate overflow-hidden bg-brand-950 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-400/60 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-aqua-500/15 blur-3xl" />

      <div className="container-page py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-8 lg:grid-cols-[1.3fr_0.8fr_0.7fr_1.2fr]">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <a href="#top" aria-label="CleanEffect — voltar ao topo" className="inline-flex">
              <Logo tone="light" size="sm" />
            </a>
            <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-white/70 sm:mt-4 sm:text-[13px]">
              {isPt
                ? "Oficina de detalhe automóvel em Lagos, Algarve. Vitrificação cerâmica, polimento, lavagem de motor, higienização de AC e estofos. Recolhemos o carro e as chaves na sua morada ou rececionamo-lo na nossa oficina."
                : "Professional car detailing in Lagos, Algarve. Ceramic coating, polishing, engine bay detailing, A/C sanitisation and upholstery. Key & car pickup at your door or visit our garage."}
            </p>

            <div className="mt-3 flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 sm:mt-5 sm:max-w-xs sm:px-3.5 sm:py-2.5">
              <Stars rating={5} size={12} />
              <span className="text-[12px] font-medium text-white">4.9/5</span>
              <span className="h-3 w-px bg-white/15" aria-hidden="true" />
              <span className="text-[11.5px] text-white/70">340+ {isPt ? "avaliações" : "reviews"}</span>
            </div>

            <div className="mt-3 flex items-center gap-2 sm:mt-5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CleanEffect no ${social.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua-300/50 hover:text-aqua-200"
                >
                  <Icon name={social.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          <nav className="min-w-0" aria-label={isPt ? "Serviços em Lagos" : "Lagos Services"}>
            <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-aqua-200/80 sm:text-[10px] sm:tracking-[0.22em]">
              {isPt ? "Serviços Auto & Casa" : "Car & Home Services"}
            </h2>
            <ul className="mt-3 grid gap-1 sm:mt-4 sm:gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex min-h-7 min-w-0 items-start gap-1.5 py-1 text-[11.5px] leading-snug text-white/70 transition-colors duration-300 hover:text-white sm:text-[12.5px]"
                  >
                    <span className="mt-1.5 h-px w-0 shrink-0 bg-aqua-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="min-w-0" aria-label={isPt ? "Navegação" : "Navigation"}>
            <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-aqua-200/80 sm:text-[10px] sm:tracking-[0.22em]">
              CleanEffect
            </h2>
            <ul className="mt-3 grid gap-1 sm:mt-4 sm:gap-2.5">
              {companyNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex min-h-7 min-w-0 items-start gap-1.5 py-1 text-[11.5px] leading-snug text-white/70 transition-colors duration-300 hover:text-white sm:text-[12.5px]"
                  >
                    <span className="mt-1.5 h-px w-0 shrink-0 bg-aqua-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-aqua-200/80 sm:text-[10px] sm:tracking-[0.22em]">
              {isPt ? "Oficina & Contacto" : "Garage & Contact"}
            </h2>
            <ul className="mt-3 grid gap-2.5 text-[12px] sm:mt-4 sm:gap-3 sm:text-[12.5px]">
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-white/80 transition-colors hover:text-white font-medium"
                >
                  <Icon name="whatsapp" size={15} className="mt-0.5 shrink-0 text-[#25d366]" />
                  <span>WhatsApp: {contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-start gap-2.5 text-white/80 transition-colors hover:text-white"
                >
                  <Icon name="phone" size={14} className="mt-0.5 shrink-0 text-aqua-300" />
                  <span>Chamadas: {contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/80">
                <Icon name="pin" size={14} className="mt-0.5 shrink-0 text-aqua-300" />
                <span>
                  <strong className="text-white block font-medium">Oficina CleanEffect:</strong>
                  {contact.address}
                  <span className="mt-1 block text-[11px] text-white/60">
                    {isPt
                      ? "Recolha de chaves e carro em Lagos ou receção na oficina"
                      : "Car & key pickup in Lagos or drop-off at garage"}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-white/80">
                <Icon name="clock" size={14} className="mt-0.5 shrink-0 text-aqua-300" />
                <span>{contact.hours[locale]}</span>
              </li>
            </ul>

            <WhatsAppButton
              className="mt-4 w-full"
              label={isPt ? "Falar no WhatsApp" : "Contact on WhatsApp"}
            />
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 sm:mt-12 sm:pt-7">
          <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-aqua-200/80 sm:text-[10px] sm:tracking-[0.22em]">
            {isPt ? "Zonas Atendidas em Lagos e Arredores" : "Lagos & Nearby Areas Served"}
          </h2>
          <ul className="mt-3.5 flex flex-wrap gap-1.5">
            {lagosAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10.5px] text-white/70 transition-colors duration-300 hover:border-aqua-300/40 hover:text-white sm:py-1 sm:text-[11px]"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 sm:mt-8 sm:flex-row sm:gap-4 sm:pt-6">
          <p className="text-center text-[11px] text-white/60 sm:text-left">
            © {new Date().getFullYear()} CleanEffect Detailing · Lagos, Portugal
            <span className="hidden sm:inline"> · {contact.addressShort} · Tel/WhatsApp: {contact.phone}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/65">
            <a href="/privacy" className="transition-colors hover:text-white">
              {isPt ? "Privacidade" : "Privacy"}
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              {isPt ? "Termos" : "Terms"}
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 transition-colors hover:border-aqua-300/50 hover:text-white"
            >
              {isPt ? "Voltar ao topo" : "Back to top"}
              <Icon name="arrow-up" size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
