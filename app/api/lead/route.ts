import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  segmento: z.string().min(1, "Selecione um segmento"),
  mensagem: z.string().optional(),
  lgpd: z.boolean().refine((val) => val === true, "Você deve aceitar os termos de privacidade"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados com Zod
    const validatedData = LeadSchema.parse(body);
    
    // Detectar IP do cliente a partir dos cabeçalhos
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = (forwardedFor?.split(",")[0]?.trim()) || request.headers.get("x-real-ip") || undefined;
    
    // Log do lead (sempre funciona)
    console.log("Novo lead recebido:", {
      ...validatedData,
      timestamp: new Date().toISOString(),
      ip: clientIp || "unknown",
    });

    // Tentar enviar para webhook se configurado
    const webhookUrl = process.env.WEBHOOK_URL;
    
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "PonteCerta-AI-Landing/1.0",
          },
          body: JSON.stringify({
            ...validatedData,
            source: "landing-page",
            timestamp: new Date().toISOString(),
          }),
        });

        if (!webhookResponse.ok) {
          console.error("Erro no webhook:", webhookResponse.status, webhookResponse.statusText);
        }
      } catch (webhookError) {
        console.error("Erro ao enviar para webhook:", webhookError);
        // Não falha a requisição se o webhook der erro
      }
    } else {
      console.log("WEBHOOK_URL não configurado - lead apenas logado");
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Lead recebido com sucesso! Em breve entraremos em contato." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erro ao processar lead:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Dados inválidos", 
          errors: error.issues 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: "Erro interno do servidor. Tente novamente ou fale conosco no WhatsApp." 
      },
      { status: 500 }
    );
  }
}
