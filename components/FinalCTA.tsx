import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Pronto para transformar seu funil?
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Agende seu diagnóstico gratuito
          </h2>
          
          <p className="text-lg mb-8 opacity-90">
            Descubra como a PonteCerta AI pode qualificar seus leads e acelerar suas vendas.
            <br />
            <strong>Diagnóstico gratuito de 30-45 minutos</strong> - sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar diagnóstico
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-sm opacity-80">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Agendamento flexível</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>✓</span>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>⚡</span>
              <span>Resposta em 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
