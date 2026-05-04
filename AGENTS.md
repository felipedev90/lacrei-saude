<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Guia para Agentes de IA

Este arquivo descreve a estrutura, convenções e regras do projeto para agentes de IA que trabalham neste repositório.

---

## Estrutura do projeto

```
src/
├── app/                    # Rotas — Next.js App Router
│   ├── page.tsx            # Home
│   ├── quem-somos/         # Página Quem Somos
│   ├── buscar/             # Página Buscar Profissionais
│   ├── layout.tsx          # Layout global (Header, Footer, ThemeProvider)
│   ├── sitemap.ts          # Sitemap gerado automaticamente
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header.tsx, Footer.tsx — aparecem em todas as páginas
│   ├── home/               # Componentes exclusivos da Home
│   ├── quem-somos/         # Componentes exclusivos da página Quem Somos
│   ├── buscar/             # Componentes exclusivos da página Buscar
│   ├── ui/                 # Componentes reutilizáveis (Button, CardLink, ProfessionalCard, etc.)
│   └── seo/                # JsonLd.tsx — Schema.org
├── data/                   # Dados mockados em JSON
├── lib/                    # Funções utilitárias (getProfessionals, registry)
├── styles/                 # theme.ts, GlobalStyles.ts
└── types/                  # Tipos TypeScript compartilhados
```

---

## Regras críticas

### Server vs Client Components

- Páginas (`app/**/page.tsx`) são **Server Components** por padrão — sem `'use client'`
- Todo componente que usa **Styled-Components**, hooks (`useState`, `useEffect`) ou eventos (`onClick`) **precisa** de `'use client'`
- O padrão correto: página Server Component busca dados → passa como prop para Client Component que cuida do visual

### Styled-Components

- Todo estilo usa o tema via `props.theme` — nunca valores hardcoded
- Todos os tokens estão em `src/styles/theme.ts`
- Props customizadas que não devem ir pro DOM usam prefixo `$` (ex: `$variant`, `$dark`, `$active`)
- O `ThemeProvider` e `GlobalStyles` estão no `src/lib/registry.tsx`

### TypeScript

- Strict mode ativado com regras extras — sem `any`, sem variáveis não usadas
- Acessar array por índice retorna `T | undefined` (`noUncheckedIndexedAccess`) — sempre verificar antes de usar
- Tipos compartilhados ficam em `src/types/`

### Responsividade

- Mobile-first obrigatório — estilos base para mobile, `media.*` para breakpoints maiores
- Helpers de media query em `src/styles/theme.ts` — usar `media.tablet`, `media.desktop`, `media.wide`, `media.desktopOnly`
- Nunca usar valores de breakpoint hardcoded nos componentes

### Acessibilidade

- HTML semântico obrigatório — `header`, `main`, `footer`, `nav`, `article`, `section`
- `aria-label` em elementos interativos sem texto visível
- `aria-labelledby` com IDs únicos por página — nunca duplicar IDs
- Imagens decorativas com `alt=""` e `aria-hidden`

---

## Design System

Cores, tipografia e espaçamentos centralizados em `src/styles/theme.ts`.

### Cores principais

- Primary: `#018762`
- Primary Dark: `#014C37`
- Primary Light: `#DFF2ED`
- Secondary: `#014687`

### Fonte

- Nunito (400, 600, 700, 800) — carregada via `next/font/google`
- Variável CSS: `var(--font-nunito)`

---

## Testes

- Framework: Jest + Testing Library
- Arquivos: `src/__tests__/*.test.tsx`
- Todo componente testado precisa de `renderWithTheme` — wrapper com `ThemeProvider`
- Mocks obrigatórios: `next/navigation`, `next/image`
- Rodar: `npm test`

---

## Convenções de código

- Idioma dos componentes: **inglês**
- Commits: Conventional Commits com scope obrigatório — `feat(hero): add cta button`
- Branches: `feature/*`, `fix/*`, `chore/*`
- Formatação: Prettier com semi=false, singleQuote=true, printWidth=100
- Lint: ESLint com preset Next.js + eslint-config-prettier

---

## Fluxo de trabalho

1. Cria branch a partir de `develop` — `git checkout -b feature/nome`
2. Desenvolve e commita seguindo Conventional Commits
3. Push e abre PR para `develop`
4. CI deve passar (format, lint, typecheck, test, build)
5. Merge na `develop`
6. PR de `develop` para `main` para deploy em produção

---

## O que nunca fazer

- Não usar `any` no TypeScript
- Não hardcodar cores ou tamanhos de fonte — sempre usar `theme.*`
- Não usar `style={{}}` inline — sempre styled components
- Não criar Server Component com Styled-Components
- Não duplicar IDs no HTML
- Não commitar direto na `main` ou `develop`
- Não usar `localStorage` ou `sessionStorage` — projeto é SSR
