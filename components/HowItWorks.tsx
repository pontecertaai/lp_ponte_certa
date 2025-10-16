import { Badge } from "@/components/ui/badge";
import { MessageSquare, Settings, BarChart3, Users } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Cliente entra em contato",
    description: "Via WhatsApp, site ou formulário. A IA responde instantaneamente, mesmo fora do horário comercial.",
    detail: "Atendimento 24/7 sem perder nenhum lead",
  },
  {
    step: "02", 
    icon: Settings,
    title: "Qualificação automática",
    description: "Roteiros personalizados fazem as perguntas certas para identificar intenção e coletar informações relevantes.",
    detail: "Configuração específica para seu segmento",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Análise e pontuação",
    description: "IA analisa conversas, pontua leads e identifica oportunidades prontas para avançar no funil.",
    detail: "MQL → SQL com dados completos",
  },
  {
    step: "04",
    icon: Users,
    title: "Hand-off para vendas",
    description: "Leads qualificados são enviados automaticamente para seu CRM com todas as informações coletadas.",
    detail: "Integração com HubSpot, Pipedrive, planilhas",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Como Funciona
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            De lead frio a oportunidade quente em 4 passos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso processo automatizado transforma cada contato em uma oportunidade qualificada
            para seu time de vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <Badge variant="outline" className="text-xs">
                    {step.detail}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium max-w-full mx-auto">
            <span>Tempo médio de implantação:</span>
            <Badge variant="secondary" className="text-xs">
              3-5 dias úteis
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
