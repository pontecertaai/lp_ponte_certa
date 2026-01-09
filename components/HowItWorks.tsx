import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Settings, Users } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Diagnóstico rápido",
    description: "Entendemos seu atendimento atual e os pontos onde você perde clientes.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Implantação da automação essencial",
    description: "Configuramos fluxos simples no WhatsApp e integrações básicas.",
  },
  {
    step: "03",
    icon: Users,
    title: "Acompanhamento mensal",
    description: "Ajustes e melhorias contínuas para manter tudo funcionando.",
  },
];

type HowItWorksProps = {
  primaryCtaHref?: string;
  onPrimaryCta?: () => void;
};

export function HowItWorks({ primaryCtaHref = "#diagnostico", onPrimaryCta }: HowItWorksProps) {
  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Como Funciona
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Do caos do atendimento ao processo organizado, em 3 etapas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um caminho simples para organizar o atendimento sem promessas exageradas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10 bg-card p-6 rounded-lg border text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground" asChild>
            <a href={primaryCtaHref} onClick={onPrimaryCta}>
              Agendar diagnóstico
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
