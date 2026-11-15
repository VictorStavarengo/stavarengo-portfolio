export default function Seeking() {
  return (
    <section id="vaga" className="about">
      <p className="about-eyebrow">buscando vaga</p>
      <div className="about-body">
        <p className="about-lead">
          Busco minha primeira vaga como desenvolvedor júnior, com foco em{" "}
          <span className="no-break">front-end</span> ou{" "}
          <span className="no-break">full-stack</span>.
        </p>
        <p className="about-text">
          Procuro um time em startup, empresa ou{" "}
          <span className="no-break">e-commerce</span> onde eu possa aprender com
          pessoas mais experientes, assumir responsabilidade de verdade e
          crescer junto com o produto. No <span className="no-break">front-end</span>,
          levo React, TypeScript, CSS & Motion, acessibilidade e performance; no{" "}
          <span className="no-break">full-stack</span>, Python, FastAPI, APIs e
          banco de dados, do front ao back.
        </p>
        <p className="about-text">
          Estou disponível para começar e aberto a conversar sobre oportunidades
          que combinem com o seu time.
        </p>
        <div className="about-actions">
          <a className="about-cta" href="#contato">
            falar sobre oportunidades <span aria-hidden>↗</span>
          </a>
          <a
            className="about-cta about-cta--ghost"
            href="/curriculo-joao-victor-stavarengo.pdf"
            download
          >
            baixar currículo <span aria-hidden>↓</span>
          </a>
          <a className="about-link" href="mailto:joaovictorstavarengo@gmail.com">
            ou envie um e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
