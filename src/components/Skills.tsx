import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="competencias" className="about">
      <p className="about-eyebrow">competências</p>
      <div className="about-body">
        <p className="about-lead">
          Tecnologias, ferramentas e vivências que trago dos projetos e da
          minha experiência em e-commerce.
        </p>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <span className="skill-group-label">{group.label}</span>
              <ul className="about-stack">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
