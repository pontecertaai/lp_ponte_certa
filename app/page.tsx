"use client";
import { Button } from "@/components/ui/button";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadForm } from "@/components/LeadForm";
import { Problem } from "@/components/Problem";
import { Segments } from "@/components/Segments";

export default function Home() {
  const handlePrimaryCta = () => {
    try {
      // dynamic import to avoid SSR issues if GA disabled
      import("@/lib/analytics").then(({ trackEvent }) => trackEvent("click_primary_cta"));
    } catch {}
  };
  const primaryCtaHref = "#diagnostico";
  return (
    <main className="min-h-[calc(100dvh-0px)] bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            <span>Atendimento organizado no WhatsApp</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Automação simples para negócios que não podem perder clientes.
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            Organizamos seu atendimento para ele funcionar todos os dias, mesmo quando você não
            consegue responder.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-primary text-primary-foreground" asChild>
              <a href={primaryCtaHref} onClick={handlePrimaryCta}>
                Agendar diagnóstico
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary" asChild>
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>
        </div>
        <div
          className="rounded-xl bg-primary/5 aspect-video bg-[url('/images/mockup_home.png')] bg-cover bg-center"
          role="img"
          aria-label="Mockup do produto PonteCerta AI"
        />
      </section>

      {/* Problem Section */}
      <Problem />

      {/* Benefits Section */}
      <Benefits />

      {/* How It Works Section */}
      <HowItWorks primaryCtaHref={primaryCtaHref} onPrimaryCta={handlePrimaryCta} />

      {/* Features Section */}
      <Features />

      {/* Segments Section */}
      <Segments primaryCtaHref={primaryCtaHref} onPrimaryCta={handlePrimaryCta} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Lead Form Section */}
      <section id="diagnostico" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Agende um diagnóstico do seu atendimento
              </h2>
              <p className="text-lg text-muted-foreground">
                Conte rapidamente seu cenário e retornamos com os próximos passos.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA primaryCtaHref={primaryCtaHref} onPrimaryCta={handlePrimaryCta} />
    </main>
  );
}
