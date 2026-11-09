import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { SiteFooter } from "@/components/site-footer";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Termos de Serviço / Terms",
  description:
    "Condições de prestação de serviços de detalhe automóvel pela CleanEffect em Lagos (R. Dr. Joaquim Sacramento Pagarete 3).",
};

const sections = [
  {
    title: "1. Agendamento e Contacto",
    body: `Os pedidos e agendamentos são realizados diretamente por chamada ou WhatsApp para o ${contact.phone}. Não exigimos cartões de crédito nem depósitos adiantados. A data e hora da recolha de chaves ou entrega na oficina são confirmadas por mensagem escrita.`,
  },
  {
    title: "2. Oficina e Recolha de Viatura / Chaves em Lagos",
    body: `O cliente pode optar por duas modalidades em Lagos: (a) Recolha e entrega da viatura e chaves pela equipa CleanEffect na sua morada (casa, hotel ou trabalho), sendo o veículo conduzido em segurança até à nossa oficina; ou (b) Entrega e levantamento direto pelo próprio cliente na nossa oficina situada na ${contact.address}.`,
  },
  {
    title: "3. Serviços Especializados",
    body: "• Vitrificação Cerâmica: inclui descontaminação, polimento prévio e aplicação de revestimento 9H com cura adequada.\n• Lavagem de Motor: executada com isolamento prévio de componentes elétricos, baixa pressão e secagem a ar comprimido.\n• Higienização de Ar-Condicionado: desinfeção com germicida e tratamento de choque com gerador de ozono medicinal.",
  },
  {
    title: "4. Garantia de 48 Horas",
    body: "Se notar qualquer área que não tenha ficado 100% perfeita após a entrega, informe-nos no prazo de 48 horas. Re-tratamos ou corrigimos a zona em causa na nossa oficina sem qualquer custo adicional.",
  },
  {
    title: "5. Cancelamento e Remarcação",
    body: "Pode remarcar ou cancelar o serviço gratuitamente com aviso até 24 horas de antecedência. Em caso de imprevistos meteorológicos extremos que inviabilizem o transporte da viatura, remarcamos sem custos para a próxima data disponível.",
  },
  {
    title: "6. Preços e Pagamento",
    body: "Os orçamentos são fixos e apresentados antes do início dos trabalhos. O pagamento é efetuado após a inspeção da viatura pronta. Aceitamos MB WAY, cartão bancário, transferência imediata e numerário. Todos os valores incluem IVA à taxa legal.",
  },
];

export default function TermsPage() {
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
            Termos de Serviço
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            Resumo claro das nossas condições de prestação de serviços de detalhe automóvel, vitrificação, lavagem de motor e higienização em Lagos.
          </p>

          <div className="mt-10 grid gap-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[17px] font-semibold text-brand-950">{section.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-700 whitespace-pre-line">
                  {section.body}
                </p>
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
