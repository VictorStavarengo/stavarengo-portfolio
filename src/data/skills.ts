export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "front-end",
    skills: [
      "React.js",
      "Angular 17+",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "estilização & build",
    skills: ["Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    label: "back-end & dados",
    skills: ["Python", "FastAPI", "APIs REST", "SQL", "Docker"],
  },
  {
    label: "ferramentas",
    skills: ["Git & GitHub", "VS Code", "Excel intermediário"],
  },
  {
    label: "e-commerce",
    skills: [
      "Gestão de marketplaces (Shopee, Mercado Livre, Amazon)",
      "Atendimento ao cliente",
      "Logística & expedição",
    ],
  },
  {
    label: "multimídia",
    skills: ["Photoshop", "Premiere", "CapCut"],
  },
  {
    label: "idiomas",
    skills: ["Português fluente", "Inglês intermediário"],
  },
];
