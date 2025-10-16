import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Diretora Comercial",
    company: "Imobiliária Premium",
    content: "A PonteCerta AI revolucionou nosso atendimento. Agora recebemos apenas leads realmente interessados em comprar. Nossa taxa de conversão aumentou 40%.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Gerente de Vendas",
    company: "Resort Paradise",
    content: "O atendimento 24/7 é fantástico. Não perdemos mais nenhum lead por estar fora do horário comercial. A integração com nosso CRM foi perfeita.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "CEO",
    company: "E-commerce Tech",
    content: "A qualificação automática nos poupou horas de trabalho manual. Agora nosso time foca apenas em oportunidades quentes. ROI incrível!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que já transformaram seu funil de vendas com a PonteCerta AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium max-w-full mx-auto">
            <span>Resultados médios dos clientes:</span>
            <Badge variant="secondary" className="text-xs">
              +35% agendamentos
            </Badge>
            <Badge variant="secondary" className="text-xs">
              -20% CAC
            </Badge>
            <Badge variant="secondary" className="text-xs">
              +40% conversão
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
