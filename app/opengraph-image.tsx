import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  const primary = "#1E3A8A";
  const secondary = "#06B6D4";
  const accent = "#A3E635";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 60%)`,
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            width: 1040,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 16,
                background: accent,
                color: primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 32,
              }}
            >
              PC
            </div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>PonteCerta AI</div>
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
            Qualificação de leads com IA, direto no WhatsApp
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>
            Atendimento 24/7 que separa curiosos de reais compradores
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}


