import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { HomeServices } from "@/components/home-services";
import { MobileCta } from "@/components/mobile-cta";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { Showcase } from "@/components/showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialProof } from "@/components/social-proof";
import { Testimonials } from "@/components/testimonials";
import { contact, faqs } from "@/lib/content";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoDetailing",
        "@id": "https://cleaneffect.pt/#business",
        name: "CleanEffect — Detalhe Automóvel Lagos",
        description:
          "Oficina de detalhe automóvel em Lagos, Portugal. Especialistas em Vitrificação Cerâmica 9H, polimento técnico, lavagem de motor, higienização de ar-condicionado com ozono e estofos. Serviço com recolha de chaves e viatura ou diretamente na oficina na R. Dr. Joaquim Sacramento Pagarete 3.",
        url: "https://cleaneffect.pt",
        telephone: contact.phone,
        image: "https://cleaneffect.pt/images/hero-cabin.jpg",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        areaServed: [
          "Lagos",
          "Meia Praia",
          "Praia da Luz",
          "Porto de Mós",
          "Odiáxere",
          "Burgau",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Dr. Joaquim Sacramento Pagarete 3",
          addressLocality: "Lagos",
          addressRegion: "Faro",
          postalCode: "8600-353",
          addressCountry: "PT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.1028,
          longitude: -8.6742,
        },
        availableLanguage: ["pt", "en"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: contact.phone,
            contactType: "customer service",
            availableLanguage: ["Portuguese", "English"],
          },
          {
            "@type": "ContactPoint",
            telephone: contact.whatsapp,
            contactType: "reservations",
            url: contact.whatsappHref,
            availableLanguage: ["Portuguese", "English"],
          },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "08:30",
          closes: "19:00",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "340",
          bestRating: "5",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://cleaneffect.pt/#faq",
        mainEntity: faqs.pt.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Results />
        <HomeServices />
        <Process />
        <Testimonials />
        <Pricing />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
