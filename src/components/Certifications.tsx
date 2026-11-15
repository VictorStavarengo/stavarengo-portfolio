import { graduation } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certificacoes" className="about">
      <p className="about-eyebrow">certificações</p>
      <div className="about-body">
        <p className="about-lead">
          Formação acadêmica em desenvolvimento de software, em fase final de
          conclusão.
        </p>

        <div className="cert-graduation">
          <span className="cert-graduation-label">
            graduação em andamento
          </span>
          <p className="cert-graduation-course">{graduation.course}</p>
          <span className="cert-graduation-institution">
            {graduation.institution}
          </span>
          <span className="cert-graduation-meta">{graduation.expected}</span>
        </div>
      </div>
    </section>
  );
}
