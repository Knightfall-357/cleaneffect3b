import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ClientProviders } from "@/components/client-providers";
import "./globals.css";

const siteUrl = "https://cleaneffect.pt";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CleanEffect — Detalhe Automóvel, Vitrificação e Polimento em Lagos",
    template: "%s · CleanEffect Lagos",
  },
  description:
    "Detalhe automóvel profissional em Lagos, Algarve. Vitrificação cerâmica 9H, polimento técnico, lavagem de motor, higienização de ar-condicionado com ozono e estofos. Recolha e entrega de chaves na sua morada ou na nossa oficina na R. Dr. Joaquim Sacramento Pagarete 3, Lagos.",
  keywords: [
    "detalhe automóvel Lagos",
    "vitrificação Lagos",
    "polimento automóvel Lagos",
    "lavagem de motor Lagos",
    "higienização ar condicionado carros Lagos",
    "car detailing Lagos Portugal",
    "ceramic coating Lagos",
    "limpeza estofos Lagos",
    "CleanEffect",
  ],
  applicationName: "CleanEffect",
  authors: [{ name: "CleanEffect Lagos" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CleanEffect",
    locale: "pt_PT",
    title: "CleanEffect — Detalhe Automóvel, Vitrificação e Polimento em Lagos",
    description:
      "Vitrificação cerâmica, polimento, lavagem de motor e higienização de AC em Lagos. Serviço com recolha de chaves e viatura ou diretamente na oficina na R. Dr. Joaquim Sacramento Pagarete 3.",
    images: [
      {
        url: "/images/hero-cabin.jpg",
        width: 1200,
        height: 750,
        alt: "Habitáculo automóvel com detalhe profissional pela CleanEffect em Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanEffect — Detalhe Automóvel em Lagos",
    description:
      "Vitrificação, polimento, lavagem de motor e higienização de AC em Lagos.",
    images: ["/images/hero-cabin.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1a44",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-mist font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-800 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white focus:shadow-float"
        >
          Saltar para o conteúdo / Skip to content
        </a>
        <ClientProviders>{children}</ClientProviders>
        <noscript>
          <style>{`.reveal,.reveal-scale{opacity:1 !important;transform:none !important;filter:none !important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
