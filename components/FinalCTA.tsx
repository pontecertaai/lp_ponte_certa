import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

type FinalCTAProps = {
  primaryCtaHref?: string;
  onPrimaryCta?: () => void;
};

export function FinalCTA({ primaryCtaHref = "#diagnostico", onPrimaryCta }: FinalCTAProps) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Diagnóstico de atendimento
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Agende um diagnóstico do seu atendimento
          </h2>
          
          <p className="text-lg mb-8 opacity-90">
            Entendemos onde você perde clientes e organizamos o atendimento com automação simples
            e acompanhamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href={primaryCtaHref} onClick={onPrimaryCta}>
                <Calendar className="w-5 h-5 mr-2" />
                Agendar diagnóstico
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/80 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="#como-funciona">
                Ver como funciona
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-sm opacity-80">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Diagnóstico direto ao ponto</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>✓</span>
              <span>Implantação essencial</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>⚡</span>
              <span>Acompanhamento mensal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
