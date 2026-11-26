import { useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import ProjectCover from "../components/ProjectCover";
import ProjectPanel from "../components/ProjectPanel";
import Journey from "../components/Journey";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import Seeking from "../components/Seeking";
import { projects, type Project } from "../data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const tools = ["React", "TypeScript", "Next.js", "Tailwind CSS", "CSS & Motion"];

export default function Home() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);

  const activeProject = projects[active];
  const total = String(projects.length).padStart(2, "0");
  const position = String(active + 1).padStart(2, "0");

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 90, damping: 20, mass: 0.4 });
  const rotate = useTransform(x, [-22, 22], [-2.5, 2.5]);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    mx.set(relX * 40);
    my.set(relY * 40);
  };

  const resetMove = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <>
      <main id="inicio">
        <section id="sobre" className="about">
          <p className="about-eyebrow">sobre mim</p>
          <div className="about-body">
            <p className="about-lead">
              Sou João Victor, desenvolvedor{" "}
              <span className="no-break">front-end</span>. Transformo ideias em
              interfaces simples, rápidas e com personalidade.
            </p>
            <p className="about-text">
              Trabalho com React e TypeScript cuidando do detalhe visual e do
              comportamento: layout, animação, acessibilidade e performance. No
              back-end, meu ponto forte é o{" "}
              <span className="no-break">FastAPI</span>: APIs, webhooks
              assinados e dados em tempo real, como no Pulso. Os projetos deste
              portfólio mostram esse trabalho na prática.
            </p>
            <ul className="about-stack">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>

        <Journey />

        <Certifications />

        <Skills />

        <section id="projetos" className="work">
          <div className="work-head">
            <h1 className="work-title">Projetos</h1>
            <span className="work-count">{total}</span>
          </div>

          <div className="work-body">
            <div
              className="work-preview"
              onMouseMove={handleMove}
              onMouseLeave={resetMove}
            >
              <motion.div className="preview-float" style={{ x, y, rotate }}>
                <button
                  type="button"
                  className="preview-button"
                  onClick={() => setSelected(activeProject)}
                  aria-label={`Abrir o case ${activeProject.title}`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeProject.slug}
                      initial={{ opacity: 0, y: 18, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -14, scale: 0.98 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <ProjectCover project={activeProject} />
                    </motion.div>
                  </AnimatePresence>
                </button>
              </motion.div>

              <div className="preview-meta">
                <span>{activeProject.category}</span>
                <span>
                  {position} / {total}
                </span>
              </div>
              <p className="preview-hint">clique para abrir e testar ao vivo</p>
            </div>

            <ul className="work-list">
              {projects.map((project, index) => (
                <li key={project.slug}>
                  <button
                    type="button"
                    className="work-row"
                    aria-haspopup="dialog"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setSelected(project)}
                  >
                    <span className="row-arrow" aria-hidden>
                      →
                    </span>
                    <span className="row-title">{project.title}</span>
                    <span className="row-category">{project.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Seeking />
      </main>

      <ProjectPanel project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
