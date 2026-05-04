# Lacrei Saúde - Desafio Técnico Frontend

Projeto desenvolvido como parte do processo seletivo para pessoa voluntária de Front-end da [Lacrei Saúde](https://lacreisaude.com.br), plataforma de saúde inclusiva para a comunidade LGBTQIAPN+.

---

## Deploy

🔗 **[lacrei-saude-teste-tecnico-felipe-augusto.vercel.app](https://lacrei-saude-teste-tecnico-felipe-augusto.vercel.app)**

---

## Páginas

| Página               | Rota          | Descrição                                                           |
| -------------------- | ------------- | ------------------------------------------------------------------- |
| Home                 | `/`           | Apresentação da plataforma, ecossistema e profissionais em destaque |
| Quem Somos           | `/quem-somos` | História, missão, visão, valores e crenças da Lacrei                |
| Buscar Profissionais | `/buscar`     | Grid de profissionais com dados mockados via JSON local             |

---

## Tecnologias

- **Next.js 15** — App Router, Server Components, metadata API
- **TypeScript** — strict mode com regras extras (`noUncheckedIndexedAccess`, `noUnusedLocals`, etc.)
- **Styled-Components** — estilização com tema centralizado e design tokens
- **Embla Carousel** — carousel acessível na página Quem Somos
- **Lucide React** — ícones
- **Jest + Testing Library** — testes unitários

---

## Como rodar localmente

### Pré-requisitos

- Node.js 22+
- npm 10+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/felipedev90/lacrei-saude.git
cd lacrei-saude

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

---

## Build e Deploy

```bash
# Gera o build de produção
npm run build

# Inicia o servidor de produção localmente
npm start
```

### Deploy na Vercel

O projeto está configurado com deploy automático via Vercel. Todo push na branch `main` dispara um novo deploy.

Para fazer deploy manual:

```bash
# Instala a CLI da Vercel
npm i -g vercel

# Faz o deploy
vercel --prod
```

---

## Testes

### Rodar os testes

```bash
# Todos os testes
npm test

# Modo watch (desenvolvimento)
npm run test:watch

# Com cobertura
npm run test:coverage
```

### Componentes testados

| Componente         | Arquivo                     | O que é testado                                       |
| ------------------ | --------------------------- | ----------------------------------------------------- |
| `Button`           | `Button.test.tsx`           | Renderização como link e button, onClick, aria-label  |
| `Header`           | `Header.test.tsx`           | Logo, links de navegação, menu mobile (hamburguer)    |
| `ProfessionalCard` | `ProfessionalCard.test.tsx` | Nome, especialidade, localização, badge, rating, link |

---

## ♿ Acessibilidade

- HTML semântico (`header`, `main`, `footer`, `nav`, `article`, `section`)
- Atributos `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-controls` aplicados
- Contraste de cores validado
- Navegação por teclado funcional

### Teste com leitor de tela

Testado com **NVDA (NonVisual Desktop Access)** no Windows com Google Chrome.

Itens validados:

- Logo lido como "Lacrei Saúde - página inicial"
- Links de navegação anunciados corretamente
- Botão hamburguer anuncia "Abrir menu" e "Fechar menu"
- Headings em ordem lógica (H1 → H2 → H3) em todas as páginas
- Cards de profissionais lidos com nome, especialidade e localização
- Links de redes sociais com aria-label descritivo
- Imagens decorativas com alt vazio e aria-hidden

## Acessibilidade

- HTML semântico (`header`, `main`, `footer`, `nav`, `article`, `section`)
- Atributos `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-controls` aplicados
- Contraste de cores validado
- Navegação por teclado funcional
- Compatível com leitores de tela

**Lighthouse Accessibility:** 100

---

## Performance

- Imagens otimizadas via `next/image` com `lazy loading` e `priority` no LCP
- Fonte Nunito carregada via `next/font` (zero layout shift)
- Bundle otimizado pelo compilador do Next.js
- Server Components para páginas sem interatividade

**Lighthouse Performance:** 98

---

## Rollback

O projeto usa **Vercel Preview Deploys** - cada push gera uma URL de preview única.

### Como fazer rollback

**Via Vercel Dashboard:**

1. Acessa [vercel.com](https://vercel.com) → projeto `lacrei-saude`
2. Aba "Deployments"
3. Encontra o deploy anterior
4. Clica nos três pontos → "Promote to Production"

**Via Git:**

```bash
# Volta para um commit anterior
git revert HEAD
git push origin main
```

O revert cria um novo commit desfazendo as mudanças - mais seguro que um force push porque mantém o histórico.

---

## 📁 Estrutura de pastas

```
src/
├── app/                    # Rotas (App Router)
│   ├── page.tsx            # Home
│   ├── quem-somos/
│   │   └── page.tsx        # Quem Somos
│   ├── buscar/
│   │   └── page.tsx        # Buscar Profissionais
│   ├── layout.tsx          # Layout global
│   ├── sitemap.ts          # Sitemap automático
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header, Footer
│   ├── home/               # Componentes da Home
│   ├── quem-somos/         # Componentes da página Quem Somos
│   ├── buscar/             # Componentes da página Buscar
│   ├── ui/                 # Componentes reutilizáveis
│   └── seo/                # JSON-LD, Schema.org
├── data/                   # Mock de dados (JSON)
├── lib/                    # Funções utilitárias
├── styles/                 # Tema global, GlobalStyles
└── types/                  # Tipos TypeScript
```

---

## Decisões visuais e técnicas

### Design System

Seguindo o **Marsha Design System** da Lacrei Saúde - cores, tipografia e componentes extraídos do Figma oficial. Todos os tokens estão centralizados em `src/styles/theme.ts`.

### Styled-Components com App Router

O Next.js 15 com App Router renderiza componentes no servidor por padrão. Styled-Components gera CSS no browser, então foi necessário criar um `registry` (`src/lib/registry.tsx`) que coleta os estilos no servidor e os injeta no HTML antes de chegar ao browser - evitando o flash of unstyled content.

### Mock de API

Os dados de profissionais estão em `src/data/professionals.json`. A função `getProfessionals()` em `src/lib/getProfessionals.ts` usa `dynamic import` para simular uma chamada assíncrona - quando a API real estiver disponível, só essa função precisa mudar.

### Server vs Client Components

Páginas que apenas exibem dados são Server Components - sem JavaScript enviado ao browser, melhor performance e SEO. Componentes com interatividade ou Styled-Components são Client Components marcados com `'use client'`.

### CI/CD

GitHub Actions rodando em todo push e PR: formatação (Prettier), lint (ESLint), tipagem (TypeScript), testes (Jest) e build. Deploy automático na Vercel via integração com GitHub.

---

## Por que quero fazer parte da Lacrei Saúde

Acredito que tecnologia pode e deve ser usada como ferramenta de inclusão. A Lacrei Saúde representa isso: usar código para garantir que pessoas da comunidade LGBTQIAPN+ tenham acesso a cuidados de saúde seguros e acolhedores.

Como desenvolvedor em transição de carreira, venho de um histórico de mais de 10 anos na indústria onde aprendi que qualidade, atenção aos detalhes e trabalho em equipe fazem toda a diferença. Quero trazer essa mentalidade para contribuir com uma missão que vai muito além do código.

---

_Desenvolvido por Felipe Augusto - [devfelipeaugusto.com.br](https://devfelipeaugusto.com.br)_
