import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/Footer";
import { Metrics } from "@/components/Metrics";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pontecerta.ai"),
  title: {
    default: "PonteCerta AI — Automação simples para negócios que não podem perder clientes",
    template: "%s • PonteCerta AI",
  },
  description:
    "Automação simples para organizar atendimento no WhatsApp. Diagnóstico, implantação e acompanhamento para pequenos negócios não perderem clientes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PonteCerta AI — Automação simples para negócios que não podem perder clientes",
    description:
      "Automação simples para organizar atendimento no WhatsApp. Diagnóstico, implantação e acompanhamento.",
    type: "website",
    url: "/",
    siteName: "PonteCerta AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PonteCerta AI",
    description:
      "Automação simples para organizar atendimento no WhatsApp. Diagnóstico, implantação e acompanhamento.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1E3A8A" },
    { media: "(prefers-color-scheme: dark)", color: "#06B6D4" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        ) : null}
        <Metrics />
        {children}
        <Footer />
        <Toaster richColors position="top-right" closeButton />
        <Analytics />
      </body>
    </html>
  );
}
