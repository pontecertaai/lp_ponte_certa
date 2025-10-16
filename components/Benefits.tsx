import { Badge } from "@/components/ui/badge";
import { Clock, Target, Zap, BarChart3, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Resposta imediata 24/7",
    description: "Aumenta taxa de contato inicial com atendimento instantâneo, mesmo fora do horário comercial.",
    metric: "+85% taxa de resposta",
  },
  {
    icon: Target,
    title: "Roteiros de qualificação sob medida",
    description: "Perguntas certas para cada nicho, identificando intenção e coletando informações relevantes.",
    metric: "Personalizado por segmento",
  },
  {
    icon: Zap,
    title: "Integração com CRM/planilha",
    description: "Hand-off limpo para seu time de vendas com todos os dados coletados durante a conversa.",
    metric: "Integração automática",
  },
  {
    icon: BarChart3,
    title: "Relatórios e insights básicos",
    description: "Entenda gargalos do funil e otimize seu processo de qualificação de leads.",
    metric: "Dashboard completo",
  },
  {
    icon: TrendingUp,
    title: "Redução de CAC e velocidade",
    description: "Ganho de velocidade no MQL → SQL com leads já qualificados e prontos para venda.",
    metric: "-20% CAC médio",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Benefícios Comprovados
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Por que escolher a PonteCerta AI?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa solução foi desenvolvida especificamente para qualificação de leads,
            não apenas chatbots genéricos.
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
                <Badge variant="outline" className="text-xs">
                  {benefit.metric}
                </Badge>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            <span>Diferenciais únicos:</span>
            <Badge variant="secondary" className="text-xs">
              Foco em qualificação
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Configuração guiada
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Sem lock-in
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
