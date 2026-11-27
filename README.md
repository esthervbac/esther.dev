# Esther.dev — Portfólio Fullstack & Frontend

Portfólio pessoal desenvolvido para apresentar minha trajetória profissional, stacks tecnológicas, projetos sincronizados diretamente com o GitHub e canais de contato direto.

---

## Preview & Identidade Visual

- **Paleta de cores:** Base escura em `slate-950` / `slate-900` com destaques em tons de lilás e roxo (`purple-400`, `purple-500`, `violet-500`).
- **Design Responsivo:** Layout adaptado para desktop, tablet e mobile, com navegação fixa no topo e drawer lateral (abrindo pela esquerda) em dispositivos menores.
- **Arquitetura Modular:** Componentes reutilizáveis separados por domínio (`ui`, `layout`, `about`, `contact` e `sections`).

---

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (App Router & Server Components)
- **[React](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Lucide React](https://lucide.dev/)** & SVGs customizados
- **[Nodemailer](https://nodemailer.com/)** (envio de e-mails via API Route)
- **GitHub REST API** (sincronização automática de repositórios com revalidação ISR)

---

## Funcionalidades

- **Navegação Responsiva:** Barra superior com rolagem suave (`smooth scroll`) para as seções `Home`, `Sobre mim` e `Contato`, além de menu hambúrguer lateral esquerdo para mobile e tablet.
- **Seção Sobre Mim Modular:**
  - **Minha Vida Profissional:** Resumo de atuação e foco técnico.
  - **Stacks & Tecnologias:** Categorização entre Frontend, Backend & APIs e Dados & Deploy.
  - **Experiência Profissional:** Linha do tempo com histórico e formação.
  - **Meus Projetos (GitHub Sync):** Busca automática dos repositórios públicos de [`esthervbac`](https://github.com/esthervbac), exibindo nome, descrição, tópicos/linguagens, link de demonstração e imagem de preview (`preview.png` do repositório ou Open Graph do GitHub como fallback).
- **Formulário de Contato Funcional:** Envio de mensagens diretamente para `esther.v.bacelar@gmail.com` através da rota `/api/contact` utilizando SMTP do Gmail.

---

## Estrutura de Pastas

```text
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Endpoint de envio de e-mails (Nodemailer)
│   ├── globals.css               # Estilos globais e rolagem suave
│   ├── icon.svg                  # Favicon customizado (Esther.dev)
│   ├── layout.tsx                # Layout principal com Navbar e Footer
│   └── page.tsx                  # Página inicial (Hero, About, Contact)
├── components/
│   ├── about/
│   │   ├── AboutCard.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── GitHubProjectsGrid.tsx
│   │   ├── ProfessionalBio.tsx
│   │   └── StacksList.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── ContactInfo.tsx
│   ├── layout/
│   │   ├── CopyrightYear.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Hero.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Logo.tsx
│       ├── ProjectCard.tsx
│       └── SocialIcons.tsx
├── data/
│   └── portfolioData.ts          # Links de navegação, stacks e experiências
└── lib/
    └── github.ts                 # Integração e tipagem da API do GitHub
```

## Como Rodar o Projeto Localmente

1. Clonar o repositório

```
git clone https://github.com/esthervbac/esther-dev-portfolio.git
cd esther-dev-portfolio
```

2. Instalar as dependências

```
npm install
```

3. Configurar as variáveis de ambiente. Crie um arquivo .env.local na raiz do projeto com as credenciais para envio de e-mail:

```
EMAIL_USER=seuemail@email.com
EMAIL_PASS=sua_senha_de_app_do_google
```

4. Iniciar o servidor de desenvolvimento

```
npm run dev
```

Acesse http://localhost:3000 no navegador.
