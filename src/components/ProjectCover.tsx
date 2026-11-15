import type { CSSProperties } from "react";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  variant?: "card" | "panel";
};

export default function ProjectCover({ project, variant = "card" }: Props) {
  const style = {
    background: `linear-gradient(145deg, ${project.cover.from}, ${project.cover.to})`,
    "--cover-ink": project.cover.ink ?? "var(--ink-strong)",
    "--cover-soft": project.cover.ink
      ? "rgba(246, 239, 228, 0.72)"
      : "rgba(29, 23, 18, 0.68)",
  } as CSSProperties;

  return (
    <div className={`cover cover--${variant}`} style={style}>
      {project.image ? (
        <img src={project.image} alt={`Capa do projeto ${project.title}`} />
      ) : (
        <>
          <span className="cover-mark" aria-hidden>
            {project.title.charAt(0)}
          </span>
          <span className="cover-index">{project.year}</span>
          <span className="cover-word">{project.word ?? project.title}</span>
        </>
      )}
    </div>
  );
}
