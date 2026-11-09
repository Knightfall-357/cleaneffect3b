import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { SiteFooter } from "@/components/site-footer";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacidade & Cookies / Privacy",
  description:
    "Política de privacidade da CleanEffect em Lagos, Algarve (R. Dr. Joaquim Sacramento Pagarete 3).",
};

const sections = [
  {
    title: "O que este site recolhe",
    body: "Nada de natureza pessoal. Este website não possui formulários de submissão, contas de utilizador ou bases de dados. A ferramenta de pré-visualização de mensagem simplesmente monta o texto no seu próprio navegador para facilitar o envio no WhatsApp — nada é guardado nos nossos servidores.",
  },
  {
    title: "Quando nos contacta por Chamada ou WhatsApp",
    body: `Ao contactar-nos através do ${contact.phone} (chamada ou WhatsApp), recebemos o seu contacto telefónico, nome e os detalhes que nos enviar voluntariamente (fotos da viatura, morada em Lagos, matrícula ou notas do serviço). Estes dados destinam-se exclusivamente a apresentar orçamentos, agendar a recolha de chaves/viatura, realizar o detalhe na oficina (${contact.address}) e honrar a nossa garantia de satisfação de 48 horas.`,
  },
  {
    title: "Localização e Oficina",
    body: `A nossa oficina física situa-se na ${contact.address}. Os veículos são tratados em espaço fechado, protegido e seguro. O serviço de recolha e entrega de viaturas e chaves aplica-se a toda a área de Lagos.`,
  },
  {
    title: "Conservação e Direitos RGPD",
    body: "Os registos operacionais de serviço são mantidos por um período máximo de 24 meses para suporte a garantias e histórico de manutenção da viatura. Tem o direito de solicitar a consulta, retificação ou eliminação dos seus dados em qualquer altura através do WhatsApp ou por email. Pode também apresentar reclamação junto da CNPD.",
  },
  {
    title: "Cookies",
    body: "Este website não utiliza cookies de publicidade, redes sociais ou rastreio de terceiros. Apenas utiliza o armazenamento local do navegador para recordar a sua preferência de idioma (Português ou Inglês).",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main id="main" className="container-page py-16 sm:py-20">
        <Link href="/" aria-label="CleanEffect início" className="inline-flex">
          <Logo />
        </Link>
        <div className="mt-10 max-w-3xl">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand-600 font-semibold">
            Informação Legal · Lagos, Portugal
          </p>
          <h1 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.04em] text-brand-950 sm:text-[2.8rem]">
            Privacidade &amp; Cookies
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            A CleanEffect Detailing (Lagos, Algarve) atua em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD). Esta página explica de forma simples como tratamos os seus contactos.
          </p>

          <div className="mt-10 grid gap-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[17px] font-semibold text-brand-950">{section.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>

          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-medium text-brand-900 transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            ← Voltar à CleanEffect Lagos
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
