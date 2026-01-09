import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Processo claro: diagnóstico → implantação → acompanhamento",
    description: "Você sabe exatamente o que acontece em cada etapa.",
  },
  {
    title: "Sem promessas irreais",
    description: "Automação simples, aplicada ao seu dia a dia e ajustada com você.",
  },
  {
    title: "Você não fica sozinho",
    description: "Acompanhamos e ajustamos para manter tudo funcionando.",
  },
  {
    title: "Integrações práticas",
    description: "Trabalhamos com o que você já usa, sem complicação.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Por que confiar
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Por que confiar na PonteCerta AI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparência, acompanhamento e foco no que funciona no atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{reason.title}</h3>
              </div>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos no início e construindo casos reais. Quer ser um dos primeiros? Agende um
            diagnóstico.
          </p>
        </div>
      </div>
    </section>
  );
}
