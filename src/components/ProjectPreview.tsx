import { useState } from "react";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
  url: string;
};

export default function ProjectPreview({ project, url }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="panel-frame">
      <div className="panel-frame-bar">
        <span className="panel-frame-live">
          <i aria-hidden /> prévia ao vivo
        </span>
        <a href={url} target="_blank" rel="noreferrer">
          abrir em nova aba ↗
        </a>
      </div>

      <div className="panel-frame-viewport">
        <iframe
          src={url}
          title={`${project.title} — projeto ao vivo`}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="panel-frame-loading" aria-live="polite">
            carregando prévia…
          </div>
        )}
      </div>
    </div>
  );
}
