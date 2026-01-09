import { Button } from "@/components/ui/button";

const segments = [
  {
    id: "clinicas",
    title: "Clínicas",
    bullets: [
      "Agendamento e confirmação sem ficar no manual",
      "Respostas rápidas para não perder pacientes",
      "Organização do atendimento da equipe",
    ],
  },
  {
    id: "imobiliarias",
      title: "Imobiliárias",
      bullets: [
      "Resposta imediata para não perder contatos",
      "Follow-up automático",
      "Distribuição/organização de contatos",
    ],
  },
  {
    id: "servicos",
    title: "Prestadores de serviço premium",
    bullets: [
      "Responder mesmo enquanto você está atendendo",
      "Ordem e padrão no atendimento",
      "Follow-up para fechar mais",
    ],
  },
];

type SegmentsProps = {
  primaryCtaHref?: string;
  onPrimaryCta?: () => void;
};

export function Segments({ primaryCtaHref = "#diagnostico", onPrimaryCta }: SegmentsProps) {
  return (
    <section id="segmentos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Para quem é a PonteCerta AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Priorizamos negócios que dependem do WhatsApp para atender e não podem perder contatos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment) => (
            <div
              key={segment.id}
              id={segment.id}
              className="bg-card p-6 rounded-lg border flex flex-col gap-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{segment.title}</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  {segment.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <Button className="bg-primary text-primary-foreground" asChild>
                <a href={primaryCtaHref} onClick={onPrimaryCta}>
                  Agendar diagnóstico
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
