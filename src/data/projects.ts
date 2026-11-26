export type Project = {
  slug: string;
  title: string;
  word?: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  cover: {
    from: string;
    to: string;
    ink?: string;
  };
  image?: string;
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "encaixe",
    title: "Encaixe",
    word: "encaixe",
    category: "Full-stack",
    year: "2026",
    description:
      "Agendamento para pequenos negócios: página pública por slug, login com GitHub e confirmação por e-mail. Dois clientes não ficam com o mesmo horário — transação serializável e índice único parcial no Postgres.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Auth.js"],
    cover: { from: "#243252", to: "#111a2c", ink: "#eef2f8" },
    image: "/projetos/encaixe-dashboard.jpg",
    url: "https://encaixe-hazel.vercel.app",
    repo: "https://github.com/VictorStavarengo/encaixe",
  },
  {
    slug: "pulso",
    title: "Pulso",
    word: "pulso",
    category: "Full-stack",
    year: "2026",
    description:
      "Painel que recebe webhooks assinados (HMAC) de marketplaces como Mercado Livre e Shopify, consolida os pedidos por loja e alerta a equipe em tempo real sobre atrasos, cancelamentos e tickets altos. Demo pública no ar — login demo@pulso.dev.",
    stack: ["FastAPI", "React", "TypeScript", "SSE", "Docker"],
    cover: { from: "#3f3226", to: "#1a1310", ink: "#f4ecdf" },
    image: "/projetos/pulso-dashboard.png",
    url: "https://pulso-api-2uc9.onrender.com",
    repo: "https://github.com/VictorStavarengo/pulso-webhooks",
  },
  {
    slug: "catalogo-de-jogos",
    title: "Catálogo de Jogos",
    word: "jogos",
    category: "Web App",
    year: "2026",
    description:
      "Biblioteca pessoal de jogos com busca na RAWG, arrastar e soltar, filtros, ordenação e backup em arquivo. Refeito em TypeScript com testes automatizados e CI.",
    stack: ["React", "TypeScript", "Tailwind", "Vitest"],
    cover: { from: "#eadcc7", to: "#cfb189" },
    url: "https://crud-jogos-v2.vercel.app",
    repo: "https://github.com/VictorStavarengo/crud-jogos-v2",
  },
  {
    slug: "pokedex-kanto",
    title: "Pokédex Kanto",
    word: "pokedex",
    category: "Front-end",
    year: "2025",
    description:
      "Pokédex da primeira geração com busca por nome ou número, sprites shiny, estatísticas, ataques e cadeia evolutiva, consumindo a PokéAPI em JavaScript puro.",
    stack: ["JavaScript", "CSS", "PokéAPI"],
    cover: { from: "#e2c3a0", to: "#c19163" },
    url: "https://victorstavarengo.github.io/pokedex-kanto/",
    repo: "https://github.com/VictorStavarengo/pokedex-kanto",
  },
  {
    slug: "lista-de-tarefas",
    title: "Lista de Tarefas",
    word: "tarefas",
    category: "Front-end",
    year: "2024",
    description:
      "Gerenciador de tarefas com horário, nível de prioridade, filtros por status, ordenação, tema escuro e persistência no navegador.",
    stack: ["JavaScript", "CSS", "LocalStorage"],
    cover: { from: "#c49b74", to: "#8a6546", ink: "#f7f0e5" },
    url: "https://victorstavarengo.github.io/to-do-list/",
    repo: "https://github.com/VictorStavarengo/to-do-list",
  },
];