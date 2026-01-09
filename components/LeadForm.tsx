"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

const LeadFormSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  segmento: z.string().min(1, "Selecione um segmento"),
  mensagem: z.string().optional(),
  lgpd: z.boolean().refine((val) => val === true, "Você deve aceitar os termos de privacidade"),
});

type LeadFormData = z.infer<typeof LeadFormSchema>;

const segmentos = [
  "Clínicas",
  "Imobiliárias",
  "Prestadores de serviço premium",
  "Outros",
];

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(LeadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success("Obrigado! Em breve entraremos em contato para agendar seu diagnóstico.");
        reset();
      } else {
        toast.error(result.message || "Ops, algo deu errado. Tente novamente ou fale conosco no WhatsApp.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Ops, algo deu errado. Tente novamente ou fale conosco no WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4 p-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h3 className="text-xl font-semibold">Formulário enviado com sucesso!</h3>
        <p className="text-muted-foreground">
          Em breve entraremos em contato para agendar seu diagnóstico.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="mt-4"
        >
          Enviar outro formulário
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-2">
            Nome *
          </label>
          <Input
            id="nome"
            {...register("nome")}
            placeholder="Seu nome"
            className={errors.nome ? "border-red-500" : ""}
          />
          {errors.nome && (
            <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium mb-2">
            WhatsApp *
          </label>
          <Input
            id="telefone"
            {...register("telefone")}
            placeholder="(11) 99999-9999"
            className={errors.telefone ? "border-red-500" : ""}
          />
          {errors.telefone && (
            <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="segmento" className="block text-sm font-medium mb-2">
            Segmento *
          </label>
          <select
            id="segmento"
            {...register("segmento")}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
          >
            <option value="">Selecione seu segmento</option>
            {segmentos.map((segmento) => (
              <option key={segmento} value={segmento}>
                {segmento}
              </option>
            ))}
          </select>
          {errors.segmento && (
            <p className="text-red-500 text-sm mt-1">{errors.segmento.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
            Mensagem (opcional)
          </label>
          <textarea
            id="mensagem"
            {...register("mensagem")}
            rows={4}
            placeholder="Qual o principal problema no atendimento hoje?"
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="lgpd"
            {...register("lgpd")}
            className="mt-1"
          />
          <label htmlFor="lgpd" className="text-sm text-muted-foreground">
            Concordo com o processamento dos meus dados pessoais conforme a{" "}
            <a href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </a>{" "}
            e autorizo o contato para fins comerciais. *
          </label>
        </div>
        {errors.lgpd && (
          <p className="text-red-500 text-sm">{errors.lgpd.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          "Agendar diagnóstico"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Diagnóstico focado no seu atendimento, sem promessas irreais
      </p>
    </form>
  );
}
