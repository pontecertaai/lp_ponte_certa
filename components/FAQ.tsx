import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "A IA substitui o corretor?",
    answer: "Não. Ela faz o atendimento inicial e a triagem, qualificando o interesse do cliente e coletando informações antes de repassar o lead ao corretor. Assim, o profissional recebe apenas contatos realmente prontos para avançar.",
  },
  {
    question: "Como a IA sabe o que perguntar ao cliente?",
    answer: "Durante a implantação, configuramos roteiros de qualificação personalizados para o tipo de imóvel que sua imobiliária trabalha — locação, venda ou temporada. A IA aprende a identificar intenção (ex.: comprar, alugar, vender) e perguntar detalhes relevantes como faixa de preço, localização e tipo de imóvel.",
  },
  {
    question: "A IA responde em tempo real, mesmo fora do horário comercial?",
    answer: "Sim. O atendimento é 24 horas por dia, 7 dias por semana, garantindo que nenhum lead fique sem resposta — mesmo à noite, feriados ou finais de semana.",
  },
  {
    question: "Posso integrar com meu CRM ou planilha atual?",
    answer: "Sim. A PonteCerta AI envia os leads qualificados automaticamente para o seu CRM, planilha do Google ou sistema interno, com todas as informações coletadas durante a conversa.",
  },
  {
    question: "É possível personalizar o tom de voz da IA?",
    answer: "Totalmente. A linguagem pode ser mais formal ou mais próxima, conforme o perfil da imobiliária e do público. Você escolhe se ela fala como 'assistente da imobiliária' ou em nome de um corretor específico.",
  },
  {
    question: "A IA consegue enviar fotos ou links dos imóveis?",
    answer: "Sim. Ela pode compartilhar links do seu site, catálogo ou anúncios específicos, de acordo com o perfil de interesse que o lead informa.",
  },
  {
    question: "Preciso de equipe técnica para manter o sistema?",
    answer: "Não. Após a implantação inicial, a IA funciona de forma autônoma. Pequenos ajustes de fluxo ou mensagens podem ser feitos pela nossa equipe de suporte ou facilmente por você, conforme o plano contratado.",
  },
  {
    question: "A IA funciona apenas no WhatsApp?",
    answer: "O principal canal é o WhatsApp, mas também podemos integrar formulários do site, Instagram Direct e Facebook Messenger, centralizando tudo no mesmo fluxo de qualificação.",
  },
  {
    question: "É seguro coletar dados dos clientes por IA?",
    answer: "Sim. Todos os dados seguem a LGPD, e os contatos são armazenados apenas para fins comerciais da sua imobiliária. Há consentimento explícito no início da conversa.",
  },
  {
    question: "Quanto tempo leva para implantar a IA na minha imobiliária?",
    answer: "Em média, 3 a 5 dias úteis, incluindo a personalização das mensagens, integração e testes. Em uma semana, sua IA já pode estar atendendo clientes de forma automatizada.",
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
            Tire suas dúvidas sobre a PonteCerta AI e como ela pode transformar seu funil de vendas.
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
            Ainda tem dúvidas? Fale conosco no WhatsApp ou agende um diagnóstico gratuito.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium max-w-full mx-auto">
            <span>Suporte especializado:</span>
            <span>contato@pontecerta.ai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
