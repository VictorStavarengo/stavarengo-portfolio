import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCover from "./ProjectCover";
import ProjectPreview from "./ProjectPreview";
import type { Project } from "../data/projects";

type Props = {
  project: Project | null;
  onClose: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectPanel({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="panel-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="panel-title"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 28, scale: 0.975 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.4, ease }}
          >
            <button
              ref={closeRef}
              type="button"
              className="panel-close"
              onClick={onClose}
              aria-label="Fechar case"
            >
              fechar <span aria-hidden>×</span>
            </button>

            <div className="panel-preview">
              {project.image || !project.url ? (
                <div className="panel-cover">
                  <ProjectCover project={project} variant="panel" />
                </div>
              ) : (
                <ProjectPreview
                  key={project.slug}
                  project={project}
                  url={project.url}
                />
              )}
            </div>

            <div className="panel-body">
              <span className="panel-kicker">
                {project.category} · {project.year}
              </span>
              <h2 className="panel-title" id="panel-title">
                {project.title}
              </h2>
              <p className="panel-desc">{project.description}</p>

              <ul className="panel-stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="panel-foot">
                {project.url ? (
                  <a className="panel-cta" href={project.url} target="_blank" rel="noreferrer">
                    abrir projeto ↗
                  </a>
                ) : (
                  <>
                    <span className="panel-note">case completo em breve</span>
                    <a className="panel-cta" href="#contato" onClick={onClose}>
                      falar sobre esse projeto ↗
                    </a>
                  </>
                )}
                {project.repo ? (
                  <a
                    className="panel-repo"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ver código ↗
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
