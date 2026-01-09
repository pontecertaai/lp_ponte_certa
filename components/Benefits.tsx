import { Badge } from "@/components/ui/badge";
import { MessageCircle, Inbox, RefreshCcw, Plug, Handshake, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Resposta rápida no WhatsApp",
    description: "Seu cliente recebe retorno logo no primeiro contato, sem depender de horários.",
  },
  {
    icon: Inbox,
    title: "Atendimento organizado (sem perder mensagens)",
    description: "Centralizamos conversas e criamos um padrão simples para a equipe seguir.",
  },
  {
    icon: RefreshCcw,
    title: "Follow-up automático para quem não respondeu",
    description: "Lembretes e retornos automáticos para não deixar oportunidades pelo caminho.",
  },
  {
    icon: Plug,
    title: "Integrações simples (planilha/CRM)",
    description: "Conectamos com o que você já usa, sem projetos longos ou complexos.",
  },
  {
    icon: Handshake,
    title: "Acompanhamento mensal (você não fica sozinho)",
    description: "Ajustes recorrentes para manter o atendimento funcionando no dia a dia.",
  },
  {
    icon: CheckCircle,
    title: "Automação que funciona no dia a dia",
    description: "Fluxos simples, claros e fáceis de manter.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Benefícios
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Por que escolher a PonteCerta AI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automação simples com acompanhamento para organizar seu atendimento no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium max-w-full mx-auto">
            Clareza, consistência e mais agilidade no atendimento (sem promessas irreais).
          </div>
        </div>
      </div>
    </section>
  );
}
