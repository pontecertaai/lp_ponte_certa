import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const features = [
  "Automação de atendimento no WhatsApp",
  "Triagem simples, agendamento e follow-up",
  "Integrações: Google Sheets / CRM simples / webhooks",
  "Suporte e ajustes contínuos",
];

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            O que entregamos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Recursos simples para organizar seu atendimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automação essencial com acompanhamento, sem promessas exageradas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Quando fizer sentido, adicionamos IA no atendimento inicial — sempre de forma simples e segura.
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium max-w-full mx-auto">
            <span>Integrações práticas:</span>
            <Badge variant="secondary" className="text-xs">
              Google Sheets
            </Badge>
            <Badge variant="secondary" className="text-xs">
              CRM simples
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Webhooks
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
