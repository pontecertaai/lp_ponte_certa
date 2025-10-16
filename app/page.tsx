"use client";
import { Button } from "@/components/ui/button";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  const handlePrimaryCta = () => {
    try {
      // dynamic import to avoid SSR issues if GA disabled
      import("@/lib/analytics").then(({ trackEvent }) => trackEvent("click_primary_cta"));
    } catch {}
  };
  return (
    <main className="min-h-[calc(100dvh-0px)] bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            <span>Atendimento 24/7 no WhatsApp</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Qualificação de leads com IA, direto no WhatsApp.
          </h1>
          <p className="text-lg text-muted-foreground max-w-prose">
            Mais conversas certas, menos desperdício de tempo — atendimento 24/7 que separa
            curiosos de reais compradores.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-primary text-primary-foreground" onClick={handlePrimaryCta}>
              Agendar diagnóstico
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary" asChild>
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>
        </div>
        <div className="rounded-xl bg-primary/5 aspect-video flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <span className="text-primary-foreground font-bold text-xl">PC</span>
            </div>
            <p className="text-muted-foreground">Mockup do produto em breve</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Lead Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Pronto para transformar seu funil?
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e agende seu diagnóstico gratuito de 30-45 minutos.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA />
    </main>
  );
}
