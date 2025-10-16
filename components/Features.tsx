import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const features = [
  "Roteiros personalizados por nicho (imobiliária, resort, e-commerce, etc.)",
  "Integrações com CRM (HubSpot, Pipedrive) e planilhas do Google",
  "Análise de conversas e relatórios básicos de performance",
  "Entrega de MQL → SQL para o time comercial",
  "Configuração guiada ao processo comercial do cliente",
  "Sem lock-in de plataforma: código e integrações abertas",
  "Atendimento 24/7 via WhatsApp, Instagram Direct e Facebook Messenger",
  "Compliance LGPD com consentimento explícito",
  "Dashboard com insights de gargalos do funil",
  "Suporte técnico durante implantação e ajustes",
];

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Recursos Principais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Tudo que você precisa para qualificar leads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agente de IA para WhatsApp que qualifica e encaminha leads prontos para venda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            <span>Integrações disponíveis:</span>
            <Badge variant="secondary" className="text-xs">
              WhatsApp API
            </Badge>
            <Badge variant="secondary" className="text-xs">
              HubSpot
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Pipedrive
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Google Sheets
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
