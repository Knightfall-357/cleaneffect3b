export type IconName =
  | "steam"
  | "shield"
  | "paw"
  | "leaf"
  | "van"
  | "clock"
  | "sparkle"
  | "check"
  | "arrow"
  | "star"
  | "phone"
  | "mail"
  | "pin"
  | "calendar"
  | "heart"
  | "bolt";

export const contact = {
  phone: "+351 914 327 302",
  phoneHref: "tel:+351914327302",
  whatsapp: "+351 914 327 302",
  whatsappHref: "https://wa.me/351914327302",
  phoneDisplayShort: "914 327 302",
  email: "cleaneffect.pt@gmail.com",
  emailHref: "mailto:cleaneffect.pt@gmail.com",
  address: "R. Dr. Joaquim Sacramento Pagarete 3, 8600-353 Lagos, Portugal",
  addressShort: "R. Dr. Joaquim Sacramento Pagarete 3, Lagos",
  hours: {
    pt: "Seg–Sáb · 8:30 – 19:00",
    en: "Mon–Sat · 8:30am – 7:00pm",
  },
  pickupPolicy: {
    pt: "Recolhemos e entregamos a sua viatura e chaves em Lagos, ou pode trazê-la à nossa oficina.",
    en: "We collect and return your car & keys in Lagos, or you can bring it to our garage.",
  },
};

export const WHATSAPP_NUMBER = "351914327302";

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Olá CleanEffect! Gostaria de pedir um orçamento para detalhe automóvel em Lagos.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function serviceMessage(serviceName: string, locale: "pt" | "en" = "pt") {
  if (locale === "pt") {
    return `Olá CleanEffect! Tenho interesse no serviço de ${serviceName}. Poderiam enviar orçamento e disponibilidade?`;
  }
  return `Hello CleanEffect! I'm interested in the ${serviceName} service. Could you send me a quote and availability?`;
}

export const navLinks = {
  pt: [
    { label: "Serviços Auto", href: "#services" },
    { label: "Estofos & Casa", href: "#casa" },
    { label: "Resultados", href: "#results" },
    { label: "Processo", href: "#process" },
    { label: "Avaliações", href: "#reviews" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contact" },
  ],
  en: [
    { label: "Car Services", href: "#services" },
    { label: "Home & Upholstery", href: "#casa" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export const partnerLogos = [
  "KOCH-CHEMIE",
  "GTECHNIQ",
  "RUPES",
  "MEGUIAR'S",
  "KÄRCHER",
  "MENZERNA",
];

export const stats = {
  pt: [
    { value: 2800, suffix: "+", label: "Automóveis detalhados em Lagos" },
    { value: 4.9, suffix: "/5", label: "Classificação média, 340+ avaliações", decimals: 1 },
    { value: 96, suffix: "%", label: "Voltam ou recomendam" },
    { value: 100, suffix: "%", label: "Serviço com recolha ou na oficina" },
  ],
  en: [
    { value: 2800, suffix: "+", label: "Cars detailed in Lagos" },
    { value: 4.9, suffix: "/5", label: "Average rating, 340+ reviews", decimals: 1 },
    { value: 96, suffix: "%", label: "Rebook or refer us" },
    { value: 100, suffix: "%", label: "Key pickup or at our garage" },
  ],
};

export type Feature = {
  icon: IconName;
  title: string;
  body: string;
  stat?: string;
};

export const features = {
  pt: [
    {
      icon: "shield" as IconName,
      title: "Vitrificação Cerâmica Profissional",
      body: "Camada nano-cerâmica de dureza 9H que cria uma barreira hidrofóbica contra o sol intenso do Algarve, dejetos de pássaros, salitre e riscos finos. O brilho fica espelhado e a lavagem torna-se incrivelmente fácil.",
      stat: "Proteção até 24 meses",
    },
    {
      icon: "bolt" as IconName,
      title: "Polimento & Correção de Pintura",
      body: "Polimento técnico com máquinas rotorbitais e compostos de alta precisão. Medição de espessura de verniz, eliminação de swirls, hologramas e marcas de lavagens erradas — sem queimar o verniz.",
      stat: "Recuperação até 90% do brilho",
    },
    {
      icon: "steam" as IconName,
      title: "Lavagem de Motor Detalhada",
      body: "Limpeza técnica do compartimento do motor com pincéis dedicados, desengordurantes seguros e proteção das partes elétricas. Acabamento acetinado não pegajoso que repele poeira e valoriza o veículo.",
      stat: "100% seguro para eletrónica",
    },
    {
      icon: "leaf" as IconName,
      title: "Higienização de Ar-Condicionado & Ozono",
      body: "Eliminação profunda de bactérias, ácaros e fungos no sistema de ventilação através de nebulização antibacteriana e choque de ozono. Adeus aos maus odores de humidade, tabaco e animais.",
      stat: "Ar puro e esterilizado",
    },
    {
      icon: "paw" as IconName,
      title: "Recolha de Chaves ou na Nossa Oficina",
      body: "Comodidade total em Lagos: recolhemos a viatura e as chaves na sua morada e levamos para a nossa oficina, ou pode deixar o carro na R. Dr. Joaquim Sacramento Pagarete 3.",
      stat: "Oficina própria em Lagos",
    },
    {
      icon: "clock" as IconName,
      title: "Preço Fixo & Garantia de 48 Horas",
      body: "Orçamento claro por WhatsApp ou telefone em minutos, sem taxas escondidas. Se notar algum detalhe que não ficou perfeito, corrigimos sem qualquer custo adicional.",
      stat: "Garantia 48h",
    },
  ],
  en: [
    {
      icon: "shield" as IconName,
      title: "Professional Ceramic Coating (Vitrificação)",
      body: "Nano-ceramic 9H layer creating an intense hydrophobic shield against Algarve sun, bird lime, coastal salt and micro-scratches. Deep candy gloss that makes regular washing effortless.",
      stat: "Up to 24 months protection",
    },
    {
      icon: "bolt" as IconName,
      title: "Machine Polishing & Paint Correction",
      body: "Dual-action machine polishing with paint-depth measurement. Removes swirl marks, holograms, oxidation and light scratches without burning through your clear coat.",
      stat: "Up to 90% gloss recovery",
    },
    {
      icon: "steam" as IconName,
      title: "Engine Bay Deep Detailing",
      body: "Safe technical engine cleaning with soft brushes, citrus degreasers and full electrical shielding. Finished with heat-resistant satin dressing that repels dust and adds resale value.",
      stat: "Safe for electronics",
    },
    {
      icon: "leaf" as IconName,
      title: "A/C Sanitisation & Ozone Treatment",
      body: "Deep bacterial and fungal decontamination of ventilation ducts with antibacterial fogging and ozone shock. Eliminates damp smells, tobacco, pet odours and cabin allergens.",
      stat: "Purified cabin air",
    },
    {
      icon: "paw" as IconName,
      title: "Car & Key Pickup or Garage Drop-Off",
      body: "Total convenience in Lagos: we pick up your car & keys at your home or work and take it to our garage, or you can drop it directly at R. Dr. Joaquim Sacramento Pagarete 3.",
      stat: "Dedicated Lagos workshop",
    },
    {
      icon: "clock" as IconName,
      title: "Fixed Price & 48-Hour Guarantee",
      body: "Fast WhatsApp or phone quote in minutes with zero surprise fees. If any area isn't completely spot-on, we re-do it free of charge under our 48-hour guarantee.",
      stat: "48-hour guarantee",
    },
  ],
};

export type ShowcaseItem = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  price: string;
  duration: string;
  bestFor: string;
  image: string;
  alt: string;
};

export const showcases = {
  pt: [
    {
      id: "vitrificacao",
      label: "Vitrificação Cerâmica",
      eyebrow: "Proteção Premium",
      title: "Blindagem e brilho espelhado contra o sol e o salitre",
      description:
        "A vitrificação cerâmica 9H cria uma camada vítrea sobre o verniz que protege contra a forte radiação UV de Lagos, excrementos de aves, seiva de árvores e micro-riscos. A água e sujidade simplesmente escorregam.",
      bullets: [
        "Descontaminação química e física prévia (clay bar)",
        "Polimento de refino para brilho máximo antes da aplicação",
        "Aplicação de revestimento cerâmico de alta densidade",
        "Efeito super-hidrofóbico (água e poeira não aderem)",
        "Proteção dos plásticos exteriores e faróis incluída",
      ],
      price: "desde 249 €",
      duration: "4–6 horas",
      bestFor: "Carros novos, cores escuras e quem vive perto do mar em Lagos",
      image:
        "/images/services/ceramic-coating.webp",
      alt: "Gotas de água a escorrer na pintura após vitrificação cerâmica",
    },
    {
      id: "motor",
      label: "Lavagem de Motor",
      eyebrow: "Mecânica Limpa",
      title: "Compartimento do motor impecável e protegido",
      description:
        "Lavagem técnica do motor com isolamento das zonas sensíveis, água a baixa pressão e desengordurantes seguros. Removemos óleo, gordura acumulada e poeiras, finalizando com condicionador de plásticos.",
      bullets: [
        "Isolamento rigoroso de alternador, bateria e eletrónica",
        "Pincelagem manual de todas as mangueiras e superfícies",
        "Secagem total por ar comprimido sem humidade residual",
        "Condicionamento acetinado dos plásticos e borrachas",
        "Essencial antes de inspeções periódicas ou venda do carro",
      ],
      price: "desde 45 €",
      duration: "60–90 min",
      bestFor: "Manutenção periódica, venda ou pré-inspeção automóvel",
      image:
        "/images/services/engine-bay.webp",
      alt: "Compartimento de motor limpo e condicionado com detalhe profissional",
    },
    {
      id: "ac",
      label: "Higienização de AC",
      eyebrow: "Saúde no Habitáculo",
      title: "Ar puro, livre de bactérias, fungos e maus odores",
      description:
        "Limpeza profunda do sistema de ventilação e ar-condicionado. Aplicação de produto germicida hospitalar nas condutas e tratamento de choque com gerador de ozono para esterilizar todo o habitáculo.",
      bullets: [
        "Desinfeção das condutas e evaporador do ar-condicionado",
        "Eliminação definitiva de odores de mofo, tabaco e animais",
        "Tratamento com máquina geradora de ozono medicinal",
        "Redução comprovada de 99% de ácaros e bactérias",
        "Recomendado pelo menos 1 vez por ano ou no início do verão",
      ],
      price: "desde 35 €",
      duration: "45–60 min",
      bestFor: "Quem sofre de alergias, fumadores, donos de pets e frotas de aluguer",
      image:
        "/images/services/ac-vents.webp",
      alt: "Grelhas de ventilação de ar condicionado higienizadas",
    },
    {
      id: "polishing",
      label: "Polimento Técnico",
      eyebrow: "Correção de Verniz",
      title: "Eliminação de swirls, riscos finos e opacidade",
      description:
        "Processo de polimento por etapas com máquina rotorbital para eliminar as marcas circulares (swirls) causadas por lavagens automáticas e recuperar a profundidade da cor original da pintura.",
      bullets: [
        "Medição de espessura de verniz por ultrassons",
        "Corte, refino e acabamento conforme o estado da pintura",
        "Remoção de riscos leves que não atingiram o primário",
        "Recuperação de faróis amarelados ou baços",
        "Acabamento selado com cera de carnaúba ou selante sintético",
      ],
      price: "desde 179 €",
      duration: "3–5 horas",
      bestFor: "Pinturas baças, carros pretos/cinzentos com riscos circulares",
      image:
        "/images/services/paint-polishing.webp",
      alt: "Polimento de pintura automóvel profissional em oficina",
    },
    {
      id: "bancos",
      label: "Lavagem de Bancos",
      eyebrow: "Interior Auto",
      title: "Bancos, alcatifas e teto como saídos de fábrica",
      description:
        "Lavagem profunda dos bancos do seu carro com injeção-extração a quente, ideal para tecido, alcântara ou pele. Removemos nódoas de café, areia da praia, suor e pó acumulado — e neutralizamos os odores.",
      bullets: [
        "Injeção e extração a quente em bancos e encostos",
        "Limpeza e hidratação pH neutro para bancos em pele",
        "Aspiração profunda anti-areia em alcatifas e tapetes",
        "Limpeza de teto e pilares sem deixar marcas de água",
        "Opcional: higienização de AC com ozono para eliminar odores",
      ],
      price: "desde 79 €",
      duration: "2–3 horas",
      bestFor: "Carros de praia, famílias, carros pós-verão e preparação para venda",
      image: "/images/seat-after.jpg",
      alt: "Banco de automóvel lavado e extraído pela CleanEffect em Lagos",
    },
  ],
  en: [
    {
      id: "vitrificacao",
      label: "Ceramic Coating (Vitrificação)",
      eyebrow: "Ultimate Protection",
      title: "Candy-gloss shield against Algarve sun, salt & scratches",
      description:
        "9H ceramic coating bonds directly to your clear coat to protect against intense Lagos UV radiation, bird droppings, tree sap and fine scratches. Water and dirt simply sheet off.",
      bullets: [
        "Full chemical & mechanical paint decontamination (clay bar)",
        "Gloss-refining machine polish prior to coating",
        "Multi-layer high-density ceramic application",
        "Extreme hydrophobic beading (dirt cannot stick)",
        "Exterior plastics & headlight protection included",
      ],
      price: "from €249",
      duration: "4–6 hours",
      bestFor: "New cars, dark paintwork and anyone living near the coast in Lagos",
      image:
        "/images/services/ceramic-coating.webp",
      alt: "Water beading on ceramic coated car paint",
    },
    {
      id: "motor",
      label: "Engine Bay Detailing",
      eyebrow: "Clean Mechanics",
      title: "Spotless and dressed engine bay, 100% safely done",
      description:
        "Technical engine bay wash with full isolation of sensitive electrics, low-pressure rinse and non-corrosive degreasers. Finished with heat-resistant satin dressing that repels dust.",
      bullets: [
        "Strict masking of alternator, battery, sensors and wiring",
        "Hand detailing with soft brushes on all hoses and covers",
        "Full compressed-air drying without residual moisture",
        "Factory-satin dressing on all rubbers and plastics",
        "Essential before resale or periodic vehicle inspection",
      ],
      price: "from €45",
      duration: "60–90 min",
      bestFor: "Car enthusiasts, pre-inspection and resale prep",
      image:
        "/images/services/engine-bay.webp",
      alt: "Clean and detailed car engine bay",
    },
    {
      id: "ac",
      label: "A/C Sanitisation",
      eyebrow: "Cabin Health",
      title: "Pure air, 100% free of bacteria, mould and foul odours",
      description:
        "Deep antimicrobial flush of ventilation vents and evaporator, combined with medical-grade ozone shock treatment to eliminate damp, smoke and pet smells.",
      bullets: [
        "Direct antibacterial flush of ducts and evaporator core",
        "Permanent elimination of damp, tobacco and pet odours",
        "Ozone generator treatment to sterilise the whole cabin",
        "Proven 99% reduction in bacteria, dust mites and pollen",
        "Recommended at least once a year or before summer",
      ],
      price: "from €35",
      duration: "45–60 min",
      bestFor: "Allergy sufferers, smokers, pet owners and rental fleets",
      image:
        "/images/services/ac-vents.webp",
      alt: "Clean car air conditioning vents",
    },
    {
      id: "polishing",
      label: "Paint Correction & Polishing",
      eyebrow: "Clear Coat Restoration",
      title: "Eliminate swirl marks, light scratches & sun fade",
      description:
        "Multi-stage dual-action machine polishing to remove circular scratches (swirl marks) from automatic car washes and restore mirror-like clarity and depth to your paint.",
      bullets: [
        "Electronic paint-depth measurement before cutting",
        "Compound cut, polish and ultra-fine jewel finish",
        "Removes light clear-coat scratches safely",
        "Headlight restoration included if cloudy",
        "Sealed with high-grade carnauba or synthetic sealant",
      ],
      price: "from €179",
      duration: "3–5 hours",
      bestFor: "Sun-faded paint, black/dark cars with swirl marks",
      image:
        "/images/services/paint-polishing.webp",
      alt: "Machine polishing on dark car paint",
    },
    {
      id: "bancos",
      label: "Car Seat Washing",
      eyebrow: "Car Interior",
      title: "Seats, carpets and headliner restored to factory fresh",
      description:
        "Deep hot-water injection-extraction for your car seats — safe on fabric, alcantara and leather. Lifts coffee stains, beach sand, sweat and embedded dust, then neutralises odours.",
      bullets: [
        "Hot-water injection & extraction on seats and backrests",
        "pH-balanced cleaning and conditioning for leather seats",
        "Deep sand extraction from carpets and floor mats",
        "Headliner and pillar cleaning without water marks",
        "Optional: ozone A/C sanitisation to remove lingering smells",
      ],
      price: "from €79",
      duration: "2–3 hours",
      bestFor: "Beach cars, family vehicles, post-summer and pre-sale prep",
      image: "/images/seat-after.jpg",
      alt: "Car seat deep washed and extracted by CleanEffect in Lagos",
    },
  ],
};

export const plans = {
  pt: [
    {
      id: "lavagem",
      name: "Lavagem Detalhada + Motor",
      tagline: "Limpeza profunda exterior, compartimento do motor e interiores.",
      price: 89,
      duration: "90–120 min",
      popular: false,
      features: [
        "Lavagem manual técnica dois baldes pH neutro",
        "Lavagem detalhada de motor com acabamento acetinado",
        "Descontaminação ligeira de jantes e cavas",
        "Aspiração e limpeza básica do habitáculo",
        "Vidros interiores e exteriores sem manchas",
        "Aplicação de cera rápida de brilho e repelência",
      ],
      cta: "Pedir Lavagem + Motor",
    },
    {
      id: "signature",
      name: "Detalhe Completo + Higienização AC",
      tagline: "O nosso serviço mais procurado. Carro limpo, ar puro e protegido.",
      price: 179,
      duration: "3–4 horas",
      popular: true,
      features: [
        "Tudo incluído no pacote Lavagem + Motor",
        "Lavagem de bancos com extração a quente",
        "Higienização de Ar-Condicionado com ozono incluída",
        "Hidratação e proteção UV de pele / plásticos",
        "Remoção completa de areia da praia e pelos de pets",
        "Polimento manual de brilho e selante sintético",
        "Recolha e entrega de chaves em Lagos incluída",
      ],
      cta: "Pedir Detalhe Completo",
    },
    {
      id: "vitrificacao",
      name: "Correção + Vitrificação Cerâmica",
      tagline: "O auge do detalhe automóvel. Pintura espelhada e blindada por 2 anos.",
      price: 299,
      duration: "5–7 horas",
      popular: false,
      features: [
        "Tudo do Detalhe Completo e Motor",
        "Polimento técnico 2 etapas (corte + refino de swirls)",
        "Aplicação de Vitrificação Cerâmica 9H (até 24 meses)",
        "Higienização profunda de AC e choque de ozono",
        "Proteção cerâmica de plásticos, borrachas e faróis",
        "Serviço na nossa oficina em Lagos com recolha de chaves",
      ],
      cta: "Pedir Vitrificação Cerâmica",
    },
  ],
  en: [
    {
      id: "lavagem",
      name: "Detail Wash + Engine Bay",
      tagline: "Technical exterior wash, detailed engine bay and clean cabin.",
      price: 89,
      duration: "90–120 min",
      popular: false,
      features: [
        "Two-bucket pH-neutral scratch-free hand wash",
        "Technical engine bay detail with satin finish",
        "Deep wheel and wheel-arch decontamination",
        "Full cabin vacuum and touchpoint wipe-down",
        "Streak-free glass inside and out",
        "Spray sealant for gloss and water beading",
      ],
      cta: "Ask about Wash + Engine",
    },
    {
      id: "signature",
      name: "Complete Detail + A/C Sanitise",
      tagline: "Our most popular package. Fresh cabin, purified air, glossy paint.",
      price: 179,
      duration: "3–4 hours",
      popular: true,
      features: [
        "Everything in Wash + Engine Bay",
        "Car seat washing with hot-water extraction",
        "A/C sanitisation and ozone shock included",
        "Leather conditioning & UV protection",
        "Full beach sand and pet hair extraction",
        "Gloss-enhancement machine polish & sealant",
        "Key & car pickup/return in Lagos included",
      ],
      cta: "Ask about Complete Detail",
    },
    {
      id: "vitrificacao",
      name: "Paint Correction + Ceramic Coating",
      tagline: "The ultimate detail. Flawless mirror paint protected for up to 2 years.",
      price: 299,
      duration: "5–7 hours",
      popular: false,
      features: [
        "Everything in Complete Detail + Engine",
        "Two-stage machine paint correction (swirl removal)",
        "Professional 9H Ceramic Coating (up to 24 months)",
        "Full A/C sanitisation and ozone shock",
        "Ceramic protection for exterior plastics and headlights",
        "Done at our Lagos garage with car pickup included",
      ],
      cta: "Ask about Ceramic Coating",
    },
  ],
};

export const planAddOns = {
  pt: [
    "Lavagem de motor avulso · 45 €",
    "Higienização de AC com ozono · 35 €",
    "Vitrificação de vidros / repelência · 30 €",
    "Restauração de faróis baços (par) · 40 €",
    "Remoção extra de pelos de pets / areia · 25 €",
    "Estofos em casa (sofá/colchão) · desde 39 €",
  ],
  en: [
    "Standalone engine bay detail · €45",
    "A/C sanitisation with ozone · €35",
    "Windscreen ceramic rain repellent · €30",
    "Headlight restoration (pair) · €40",
    "Excess beach sand / pet hair removal · €25",
    "Home upholstery (sofa/mattress) · from €39",
  ],
};

export const enquiryServices = {
  pt: [
    "Lavagem de Bancos (Interior Auto)",
    "Vitrificação Cerâmica (Proteção 9H)",
    "Polimento & Correção de Pintura",
    "Lavagem de Motor Detalhada",
    "Higienização de Ar-Condicionado & Ozono",
    "Pacote Detalhe Completo (Interior + Exterior)",
    "Estofos, Sofás e Tapetes (Casa)",
  ],
  en: [
    "Car Seat Washing (Interior)",
    "Ceramic Coating (Vitrificação 9H)",
    "Paint Correction & Polishing",
    "Engine Bay Deep Detailing",
    "A/C Sanitisation & Ozone Shock",
    "Complete Detail Package (Interior + Exterior)",
    "Home Upholstery, Sofas & Rugs",
  ],
};

/**
 * Household upholstery cleaning — intentionally separate from car detailing.
 * Rendered in its own section (#casa / #home).
 */
export const homeServices = {
  pt: {
    eyebrow: "Serviço para a sua casa",
    title: "Estofos, Sofás e Tapetes",
    description:
      "Serviço independente do detalhe automóvel: higienização de estofos domésticos em Lagos, praias e arredores. Sofás, cadeirões, colchões e tapetes tratados com extração de baixa humidade — secam em poucas horas e ficam prontos para usar.",
    badge: "Não é serviço automóvel",
    note: "Trabalhamos ao domicílio na sua casa, villa ou alojamento local. Ideais para trocas de hóspedes, casas com animais e sofás com anos de uso.",
    items: [
      {
        id: "sofas",
        icon: "heart" as IconName,
        title: "Sofás & Cadeirões",
        description:
          "Extração profunda em tecido, linho, veludo e microfibras. Retiramos café, vinho, protetor solar, tinta e acidentes de animais sem danificar a cor.",
        bullets: [
          "Higienização a vapor + extração de baixa humidade",
          "Tratamento localizado de nódoas difíceis",
          "Neutralização de odores de animais e humidade",
          "Secagem em 2 a 3 horas",
        ],
        price: "desde 59 €",
        duration: "60–120 min",
        image:
          "/images/services/sofa-cleaning.webp",
        alt: "Higienização profissional de um cadeirão estofado ao domicílio",
      },
      {
        id: "colchoes",
        icon: "leaf" as IconName,
        title: "Colchões",
        description:
          "Ácaros, suor e alergénios acumulam-se onde dorme. Limpamos o colchão nas duas faces com produtos certificados, sem encharcar e pronto para dormir no mesmo dia.",
        bullets: [
          "Desinfeção anti-ácaros e anti-alergénios",
          "Remoção de manchas de suor, urina e bebidas",
          "Produtos seguros para crianças e animais",
          "Recomendado a cada 6–12 meses",
        ],
        price: "desde 45 €",
        duration: "45–90 min",
        image:
          "/images/services/home-upholstery.webp",
        alt: "Quarto com colchão e almofadas preparados para higienização",
      },
      {
        id: "tapetes",
        icon: "steam" as IconName,
        title: "Tapetes & Alcatifas",
        description:
          "Tapetes persas, sintéticos e alcatifas de parede a parede. Aspiração profunda, shampoo com extração e proteção anti-mancha para prolongar a vida do tecido.",
        bullets: [
          "Aspiração profunda de areia e pó incrustado",
          "Shampoo com extração e enxaguamento limpo",
          "Tratamento anti-mancha opcional",
          "Secagem controlada para evitar odores",
        ],
        price: "desde 39 €",
        duration: "45–120 min",
        image:
          "/images/services/rug-cleaning.webp",
        alt: "Aspiração profunda de um tapete numa sala iluminada",
      },
    ],
    cta: "Pedir orçamento para casa",
  },
  en: {
    eyebrow: "Service for your home",
    title: "Upholstery, Sofas & Rugs",
    description:
      "A service separate from car detailing: household upholstery cleaning in Lagos and nearby beaches. Sofas, armchairs, mattresses and rugs treated with low-moisture extraction — dry within hours and ready to use.",
    badge: "Not a car service",
    note: "We work at your home, villa or holiday rental. Ideal for guest turnarounds, pet households and sofas with years of use.",
    items: [
      {
        id: "sofas",
        icon: "heart" as IconName,
        title: "Sofas & Armchairs",
        description:
          "Deep extraction on fabric, linen, velvet and microfibre. Lifts coffee, wine, sunscreen, ink and pet accidents without damaging colour.",
        bullets: [
          "Steam cleaning + low-moisture extraction",
          "Targeted treatment of stubborn stains",
          "Neutralises pet and damp odours",
          "Dry within 2–3 hours",
        ],
        price: "from €59",
        duration: "60–120 min",
        image:
          "/images/services/sofa-cleaning.webp",
        alt: "Professional upholstery cleaning of an armchair at home",
      },
      {
        id: "colchoes",
        icon: "leaf" as IconName,
        title: "Mattresses",
        description:
          "Dust mites, sweat and allergens build up where you sleep. We clean both sides with certified products, without soaking it through — sleep in it the same day.",
        bullets: [
          "Anti-mite and allergen disinfection",
          "Removes sweat, urine and drink stains",
          "Child and pet-safe products",
          "Recommended every 6–12 months",
        ],
        price: "from €45",
        duration: "45–90 min",
        image:
          "/images/services/home-upholstery.webp",
        alt: "Bedroom with mattress and pillows ready for cleaning",
      },
      {
        id: "tapetes",
        icon: "steam" as IconName,
        title: "Rugs & Carpeting",
        description:
          "Persian, synthetic and wall-to-wall carpeting. Deep vacuuming, shampoo extraction and an optional anti-stain shield to extend the life of the fibres.",
        bullets: [
          "Deep removal of embedded sand and dust",
          "Shampoo extraction and clean rinse",
          "Optional anti-stain protection",
          "Controlled drying to prevent odours",
        ],
        price: "from €39",
        duration: "45–120 min",
        image:
          "/images/services/rug-cleaning.webp",
        alt: "Deep vacuuming of an area rug in a bright living room",
      },
    ],
    cta: "Get a home quote",
  },
};

export const vehicleOptions = {
  pt: [
    "Ligeiro / Utilitário (ex: Fiat 500, VW Polo)",
    "Familiar / Sedan / Carrinha (ex: BMW Série 3, Golf)",
    "SUV / 4x4 (ex: Range Rover, Tiguan, Tucson)",
    "Monovolume / 7 Lugares",
    "Carrinha comercial / Furgão (ex: Vito, Transporter)",
    "Sofá / Estofos ao domicílio apenas",
  ],
  en: [
    "Hatchback / City Car (e.g. Fiat 500, Polo)",
    "Saloon / Estate (e.g. BMW 3 Series, Golf)",
    "SUV / 4x4 (e.g. Range Rover, Tiguan)",
    "7-Seater / MPV",
    "Van / Commercial (e.g. Vito, Transporter)",
    "Home sofa / upholstery only",
  ],
};

export const serviceDeliveryOptions = {
  pt: [
    "Recolha de chaves e carro na minha morada em Lagos",
    "Levo eu mesmo o carro à oficina (R. Dr. Joaquim Sacramento Pagarete 3)",
    "Serviço ao domicílio (apenas sofás/estofos)",
  ],
  en: [
    "Pick up my keys & car at my address in Lagos",
    "I'll drop off the car at the garage (R. Dr. Joaquim Sacramento Pagarete 3)",
    "Home service (sofas/upholstery only)",
  ],
};

export const lagosAreas = [
  "Lagos Centro / Marina",
  "Meia Praia",
  "Porto de Mós",
  "Praia da Luz",
  "Ponta da Piedade",
  "Ameijeira / Torraltinha",
  "Odiáxere",
  "Burgau",
  "Outra zona de Lagos",
];

export const testimonials = {
  pt: [
    {
      id: 1,
      name: "Mariana Sousa",
      location: "Lagos · Marina",
      vehicle: "VW T-Roc",
      quote:
        "Vieram buscar o carro e as chaves a minha casa de manhã e entregaram à tarde com a pintura espelhada e o ar condicionado sem qualquer cheiro. O serviço de vitrificação ficou perfeito!",
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      name: "Carlos Neves",
      location: "Lagos · Ameijeira",
      vehicle: "Mercedes Classe C",
      quote:
        "Deixei o carro na oficina na Rua Dr. Joaquim Sacramento Pagarete para polimento e lavagem de motor. O motor parecia saído de fábrica e os swirls da pintura desapareceram por completo.",
      rating: 5,
      featured: false,
    },
    {
      id: 3,
      name: "Hannah Whitfield",
      location: "Praia da Luz / Lagos",
      vehicle: "Land Rover Discovery",
      quote:
        "Dogs, beach sand from Meia Praia and a damp A/C smell. CleanEffect collected the keys, did the ozone sanitisation and seats extraction, and brought it back looking brand new.",
      rating: 5,
      featured: false,
    },
    {
      id: 4,
      name: "Tiago Ferreira",
      location: "Lagos · Odiáxere",
      vehicle: "BMW Série 4 Gran Coupé",
      quote:
        "Fiz a vitrificação cerâmica e higienização do AC. Vale cada cêntimo com o sol forte e o pó que temos aqui no Algarve. Atendimento impecável por WhatsApp.",
      rating: 5,
      featured: false,
    },
    {
      id: 5,
      name: "Sofia Mendes",
      location: "Lagos · Porto de Mós",
      vehicle: "Alojamento Local · Sofá e Colchão",
      quote:
        "Limparam o sofá de 4 lugares da nossa villa antes dos hóspedes chegarem. Ficou seco em 2 horas, sem cheiro e super higienizado. Pontuais e de total confiança.",
      rating: 5,
      featured: false,
    },
    {
      id: 6,
      name: "Mark Davies",
      location: "Lagos · Marina",
      vehicle: "Porsche Cayman",
      quote:
        "Super convenient that they pick up the car and take it to their workshop. The engine bay detail and paint correction were faultless. Truly professional work in Lagos.",
      rating: 5,
      featured: false,
    },
  ],
  en: [
    {
      id: 1,
      name: "Mariana Sousa",
      location: "Lagos · Marina",
      vehicle: "VW T-Roc",
      quote:
        "They picked up my car and keys from my apartment in the morning and brought it back by afternoon looking showroom fresh. The ceramic coating and clean cabin were faultless!",
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      name: "Carlos Neves",
      location: "Lagos · Ameijeira",
      vehicle: "Mercedes C-Class",
      quote:
        "Dropped the car at their garage on R. Dr. Joaquim Sacramento Pagarete for polishing and engine bay detailing. The engine looks straight out of the showroom.",
      rating: 5,
      featured: false,
    },
    {
      id: 3,
      name: "Hannah Whitfield",
      location: "Praia da Luz / Lagos",
      vehicle: "Land Rover Discovery",
      quote:
        "Dogs, beach sand from Meia Praia and damp A/C smell. CleanEffect collected the keys, did the ozone sanitisation and deep seats extraction, and returned it spotless.",
      rating: 5,
      featured: false,
    },
    {
      id: 4,
      name: "Tiago Ferreira",
      location: "Lagos · Odiáxere",
      vehicle: "BMW 4 Series Gran Coupé",
      quote:
        "Had the ceramic vitrificação and A/C sanitisation done. Worth every cent with the Algarve sun and coastal salt. Super responsive on WhatsApp.",
      rating: 5,
      featured: false,
    },
    {
      id: 5,
      name: "Sofia Mendes",
      location: "Lagos · Porto de Mós",
      vehicle: "Holiday Villa · Sofa & Mattress",
      quote:
        "Cleaned a 4-seater sofa and mattress at our rental villa before guest check-in. Completely dry in 2 hours, fresh scent and super clean. Highly recommend.",
      rating: 5,
      featured: false,
    },
    {
      id: 6,
      name: "Mark Davies",
      location: "Lagos · Marina",
      vehicle: "Porsche Cayman",
      quote:
        "Super convenient that they pick up the car and take it to their workshop. The engine bay detail and paint correction were faultless. Truly professional work in Lagos.",
      rating: 5,
      featured: false,
    },
  ],
};

export const faqs = {
  pt: [
    {
      id: 1,
      question: "Como funciona a recolha da viatura e das chaves?",
      answer:
        "Para sua máxima comodidade em Lagos, nós deslocamo-nos à sua morada (casa, hotel ou local de trabalho), recolhemos as chaves e o carro, levamo-lo para a nossa oficina equipada na R. Dr. Joaquim Sacramento Pagarete 3, realizamos o serviço com iluminação técnica e entregamos o veículo pronto no mesmo dia. Se preferir, pode também deixar o carro diretamente na oficina.",
    },
    {
      id: 2,
      question: "Onde fica a vossa oficina em Lagos?",
      answer:
        "A nossa oficina está situada na R. Dr. Joaquim Sacramento Pagarete 3, 8600-353 Lagos, Portugal. Um espaço fechado, limpo e seguro, equipado com elevador, iluminação técnica de inspeção de pintura, água tratada e produtos profissionais.",
    },
    {
      id: 3,
      question: "O que é a Vitrificação Cerâmica e quanto tempo dura?",
      answer:
        "A vitrificação é a aplicação de uma resina nano-cerâmica líquida que, ao curar, forma uma película de quartzo/sílica sobre o verniz. Confere proteção UV extrema contra o sol de Lagos, repelência à água e sujidade (efeito hidrofóbico), e brilho espelhado que dura entre 12 a 24 meses com as lavagens corretas.",
    },
    {
      id: 4,
      question: "A lavagem de motor é segura para os componentes elétricos?",
      answer:
        "Sim, 100% segura. Antes da lavagem, isolamos rigorosamente a bateria, alternador, caixas de fusíveis, centralinas e entradas de ar. Utilizamos água a baixa pressão e ar comprimido para secagem instantânea, além de produtos desengordurantes seguros e condicionador não condutor.",
    },
    {
      id: 5,
      question: "Como funciona a Higienização de Ar-Condicionado?",
      answer:
        "Utilizamos um processo em 2 etapas: primeiro aplicamos um produto germicida e bactericida hospitalar diretamente nas condutas de ventilação; em seguida, colocamos um gerador de ozono a funcionar dentro do habitáculo com o sistema em recirculação. O ozono esteriliza o ar, elimina ácaros e neutraliza fungos e maus odores na raiz.",
    },
    {
      id: 6,
      question: "Qual é o contacto para marcar?",
      answer:
        "Pode falar connosco diretamente por WhatsApp ou chamada telefónica para o +351 914 327 302. Respondemos em poucos minutos com o orçamento exato e disponibilidade de datas.",
    },
    {
      id: 7,
      question: "A limpeza de sofás e tapetes é feita na oficina?",
      answer:
        "Não. A lavagem de bancos é um serviço automóvel, realizado na nossa oficina. Já a higienização de estofos, sofás, colchões e tapetes é um serviço doméstico separado e é feita ao domicílio, na sua casa, villa ou alojamento local em Lagos e arredores. Tem preçário e equipa próprios — fale connosco pelo WhatsApp para agendar.",
    },
    {
      id: 8,
      question: "Falam português e inglês?",
      answer:
        "Sim, atendemos com toda a naturalidade em Português e Inglês, tanto por telefone como por WhatsApp.",
    },
    {
      id: 9,
      question: "E se não ficar satisfeito com o resultado?",
      answer:
        "Temos uma garantia de satisfação de 48 horas. Se reparar em algum pormenor que não esteja a 100%, basta avisar-nos por WhatsApp que corrigimos sem qualquer custo adicional.",
    },
  ],
  en: [
    {
      id: 1,
      question: "How does the car & key pickup work?",
      answer:
        "For your total convenience in Lagos, we can collect your car and keys directly at your home, hotel, or workplace, drive it to our dedicated workshop at R. Dr. Joaquim Sacramento Pagarete 3, perform the detailing under professional lighting, and return it spotless. Alternatively, you can drop off the vehicle directly at the garage.",
    },
    {
      id: 2,
      question: "Where is your garage in Lagos?",
      answer:
        "Our workshop is located at R. Dr. Joaquim Sacramento Pagarete 3, 8600-353 Lagos, Portugal. A secure, clean, enclosed facility equipped with specialist paint inspection lighting, filtered water and professional equipment.",
    },
    {
      id: 3,
      question: "What is Vitrificação (Ceramic Coating) and how long does it last?",
      answer:
        "Vitrificação is the application of a liquid nano-ceramic coating that cures into a permanent quartz/silica glass shield over the clear coat. It provides intense UV resistance against the Algarve sun, high hydrophobicity (water sheets right off), and a deep mirror gloss that lasts 12 to 24 months with proper care.",
    },
    {
      id: 4,
      question: "Is engine bay detailing safe for car electronics?",
      answer:
        "Yes, 100% safe. We carefully mask and seal the alternator, battery, fuse box, sensors and air intake before washing. We use low pressure, precision brushes, compressed air drying and non-conductive satin dressings that repel dust.",
    },
    {
      id: 5,
      question: "How does the A/C sanitisation work?",
      answer:
        "We use a two-stage medical-grade process: first an antimicrobial flush through the vents and evaporator core, followed by an ozone gas generator running inside the cabin on recirculation. Ozone eliminates 99.9% of bacteria, mould spores and persistent odours.",
    },
    {
      id: 6,
      question: "How do I book or request a quote?",
      answer:
        "Simply call or WhatsApp us on +351 914 327 302. Send a quick message with your car model, service of interest and address — we reply in minutes with a clear price and dates.",
    },
    {
      id: 7,
      question: "Do you speak English and Portuguese?",
      answer:
        "Yes, we are fully bilingual in Portuguese and English across phone calls and WhatsApp.",
    },
    {
      id: 8,
      question: "Are sofa and rug cleaning done at your garage?",
      answer:
        "No. Car seat washing is a car service carried out at our workshop. Cleaning settees, sofas, mattresses and rugs is a separate home service, done at your home, villa or holiday rental in Lagos and nearby beaches. It has its own pricing and equipment — message us on WhatsApp to arrange.",
    },
    {
      id: 9,
      question: "What is your 48-hour guarantee?",
      answer:
        "If you spot any detail that isn't 100% perfect, message us within 48 hours and we'll re-clean or re-touch it completely free of charge.",
    },
  ],
};
