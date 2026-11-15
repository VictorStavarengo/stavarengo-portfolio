import { useEffect, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "início", href: "#inicio", index: "01" },
  { label: "sobre", href: "#sobre", index: "02" },
  { label: "jornada", href: "#jornada", index: "03" },
  { label: "certificações", href: "#certificacoes", index: "04" },
  { label: "competências", href: "#competencias", index: "05" },
  { label: "projetos", href: "#projetos", index: "06" },
  { label: "buscando vaga", href: "#vaga", index: "07" },
  { label: "contato", href: "#contato", index: "08" },
];

const socials = [
  { label: "github", href: "https://github.com/VictorStavarengo" },
  { label: "linkedin", href: "https://www.linkedin.com/in/jo%C3%A3o-victor-stavarengo-silva-78776a236/" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goTo = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 140);
  };

  return (
    <>
      <header className="site-header">
        <a href="#inicio" className="brand">
          stavarengo<span>.</span>
        </a>

        <button
          type="button"
          className="dot-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className="dot-grid" aria-hidden>
            {Array.from({ length: 9 }).map((_, index) => (
              <span key={index} />
            ))}
          </span>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="menu-top">
              <span className="brand">
                stavarengo<span>.</span>
              </span>
              <button type="button" className="menu-close" onClick={() => setOpen(false)}>
                fechar <span aria-hidden>×</span>
              </button>
            </div>

            <nav className="menu-nav">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={goTo(link.href)}
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.12 + index * 0.06, ease }}
                >
                  <span className="menu-index">{link.index}</span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="menu-foot">
              <a className="menu-mail" href="mailto:joaovictorstavarengo@gmail.com">
                joaovictorstavarengo@gmail.com
              </a>
              <div className="menu-socials">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
