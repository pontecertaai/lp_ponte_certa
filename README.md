# PonteCerta AI — Landing Page

Stack: Next.js 15 (App Router) + TypeScript + Tailwind v4 + shadcn/ui + RHF/Zod + Framer Motion + Vercel Analytics.

## Desenvolvimento

```bash
npm i
cp .env.example .env
npm run dev
```

Acesse: http://localhost:3000

## Variáveis de ambiente

Crie `.env` a partir de `.env.example`:

- `WEBHOOK_URL` (opcional): endpoint para receber leads. Se vazio, os leads são apenas logados no servidor.
- `GA_MEASUREMENT_ID` (opcional): GA4. Se vazio, métricas via GA ficam desabilitadas.
- `NEXT_PUBLIC_SITE_URL`: URL pública do site para SEO (ex.: https://pontecerta.ai).

## Deploy na Vercel

1. Faça login em `vercel` e importe este repositório.
2. Defina as variáveis de ambiente no projeto (Settings → Environment Variables).
3. Deploy automático na main.

## Endpoints / Rotas

- `/` — Landing com seções e formulário.
- `/api/lead` — Recebe POST JSON e repassa para `WEBHOOK_URL` (quando configurado).
- `/privacidade`, `/termos` — Páginas legais (placeholders).
- `/sitemap.xml` e `/robots.txt` — Gerados via App Router.

## Formulário de lead

- Validação com Zod.
- Campos: nome, email, empresa, telefone/WhatsApp, cargo, segmento, LGPD (obrigatório).
- Mensagens amigáveis com Sonner.

## SEO e Acessibilidade

- `metadata` padrão, OG/Twitter e imagem OG dinâmica (`app/opengraph-image.tsx`).
- Contraste e foco visível; tema escuro opcional.

## Métricas

- Vercel Analytics habilitado por padrão.
- GA4 opcional: carregado somente se `GA_MEASUREMENT_ID` existir.
- Eventos prontos: `view_hero` (via pageview), `click_primary_cta`, `scroll_depth_50`. Expanda em `lib/analytics.ts`.

## Personalização de Marca

- Cores em `app/globals.css` (primária #1E3A8A, secundária #06B6D4, acento #A3E635, neutros #F4F4F5/#18181B).
- Footer com dados fictícios para editar em `components/Footer.tsx`.

## Testes (opcional)

- Base com Vitest e Testing Library instalada. Adicione testes em `tests/` ou `__tests__/`.

## Checklist pré-go-live

- [ ] Subir logo e substituir OG se necessário.
- [ ] Preencher `.env` (WEBHOOK_URL, GA_MEASUREMENT_ID, NEXT_PUBLIC_SITE_URL).
- [ ] Conferir textos legais em `/privacidade` e `/termos`.
- [ ] Rodar `npm run build` e verificar Lighthouse (meta ≥ 95).
- [ ] Validar evento de lead no webhook/CRM.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
