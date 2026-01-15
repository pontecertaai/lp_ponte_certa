import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso vai complicar meu atendimento?",
    answer: "Não. A proposta é simplificar: fluxos curtos, claros e fáceis de manter.",
  },
  {
    question: "Preciso de equipe técnica?",
    answer: "Não. Cuidamos da configuração e seguimos com ajustes junto com você.",
  },
  {
    question: "Funciona no WhatsApp que eu já uso?",
    answer: "Sim. Trabalhamos com o seu canal atual e organizamos o atendimento por lá.",
  },
  {
    question: "Quanto tempo leva para colocar funcionando?",
    answer: "Após o diagnóstico, fazemos a implantação e seguimos ajustando até o fluxo ficar sólido.",
  },
  {
    question: "Vocês acompanham depois da implantação?",
    answer: "Sim. O acompanhamento mensal garante ajustes contínuos.",
  },
  {
    question: "Dá para integrar com planilha/CRM?",
    answer: "Sim. Integramos com planilhas, CRM simples e webhooks.",
  },
  {
    question: "Como vocês lidam com LGPD e consentimento?",
    answer: "Seguimos boas práticas e coletamos apenas o necessário com transparência.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre a PonteCerta AI e como organizamos seu atendimento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale conosco no WhatsApp ou agende um diagnóstico.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium max-w-full mx-auto">
            <span>Suporte especializado:</span>
            <a
              href="https://wa.me/5531990888159?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Ponte%20Certa%20AI%20e%20gostaria%20de%20entender%20melhor%20como%20funciona%20a%20automa%C3%A7%C3%A3o%20de%20atendimento.%20%F0%9F%98%8A"
              className="hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              +55 (31) 99088-8159
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
