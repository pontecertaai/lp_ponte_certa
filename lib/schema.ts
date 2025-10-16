export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PonteCerta AI",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pontecerta.ai",
    logo: "/logo.png",
  } as const;
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "PonteCerta AI",
    description:
      "Agente de IA para WhatsApp que qualifica e encaminha leads prontos para venda.",
    brand: {
      "@type": "Brand",
      name: "PonteCerta AI",
    },
  } as const;
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } as const;
}


