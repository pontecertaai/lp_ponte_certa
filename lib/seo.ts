import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pontecerta.ai"),
  title: {
    default: "PonteCerta AI — Qualificação de leads com IA no WhatsApp",
    template: "%s • PonteCerta AI",
  },
  description:
    "Acelere seu funil com um agente de IA que qualifica e responde 24/7. Agende um diagnóstico gratuito.",
  keywords: [
    "qualificação de leads",
    "IA no WhatsApp",
    "funil de vendas",
    "atendimento 24/7",
    "chatbot de vendas",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "PonteCerta AI",
    title: "PonteCerta AI — Qualificação de leads com IA no WhatsApp",
    description:
      "Acelere seu funil com um agente de IA que qualifica e responde 24/7.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PonteCerta AI - Qualificação de leads com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PonteCerta AI — Qualificação de leads com IA no WhatsApp",
    description:
      "Acelere seu funil com um agente de IA que qualifica e responde 24/7.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generatePageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    ...defaultMetadata,
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: path,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}


