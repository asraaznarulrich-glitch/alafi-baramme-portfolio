import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Video, Sparkles, Mail, Github, Instagram, Youtube, X } from "lucide-react";

import { checkApiHealth } from "@/lib/api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codecontenu — Alafi Baramme | Créateur & développeur" },
      { name: "description", content: "Le portfolio d'Alafi Baramme : développement web, création de contenu et projets numériques." },
      { property: "og:title", content: "Codecontenu — Alafi Baramme" },
      { property: "og:description", content: "Développement web, création de contenu et projets numériques." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "contact@codecontenu.com";
const GITHUB = "https://github.com/asraaznarulrich-glitch";
const CHANNEL = "https://youtube.com/@codecontenu";
const REEL = "https://www.facebook.com/share/r/1DuzDqNbik/";
const STORE = "https://codecontenu.mychariow.store/";
const socials = [
  { name: "Instagram", handle: "@codecontenu", url: "https://www.instagram.com/codecontenu/", Icon: Instagram },
  { name: "TikTok", handle: "@codecontenu", url: "https://www.tiktok.com/@codecontenu", Icon: Video },
  { name: "YouTube", handle: "@codecontenu", url: CHANNEL, Icon: Youtube },
  { name: "Facebook", handle: "IAF Plateforms", url: "https://www.facebook.com/IAFPLATEFORMS", Icon: Video },
  { name: "GitHub", handle: "asraaznarulrich-glitch", url: GITHUB, Icon: Github },
];
const projects = [
  {
    type: "Application web",
    name: "Orbitacle",
    tagline: "Le travail d'équipe, avec une vue claire.",
    description: "Une application pour organiser les tâches, suivre l'avancement de l'équipe et garder les priorités visibles.",
    url: "https://orbitacle.base44.app",
    host: "orbitacle.base44.app",
    tags: ["Gestion de tâches", "Collaboration"],
  },
  {
    type: "Site web",
    name: "LivingArch",
    tagline: "Un atelier d'architecture en ligne.",
    description: "Un espace pour découvrir des projets d'architecture, explorer des terrains et prendre contact avec l'atelier.",
    url: "https://livingarch.base44.app",
    host: "livingarch.base44.app",
    tags: ["Architecture", "Portfolio"],
  },
  {
    type: "Portfolio client",
    name: "Alex Martin",
    tagline: "Un portfolio clair pour valoriser un parcours informatique.",
    description: "Un site réalisé pour un ami afin de présenter son profil, ses compétences techniques, ses projets et ses objectifs professionnels.",
    url: "https://joyful-biscotti-4b8889.netlify.app/",
    host: "joyful-biscotti-4b8889.netlify.app",
    tags: ["Portfolio", "Développement web", "Projet réalisé pour un ami"],
  },
  {
    type: "Projet numérique",
    name: "Tchad Tech",
    tagline: "Une réalisation numérique signée Codecontenu.",
    description: "Découvrez Tchad Tech directement sur son site et explorez cette réalisation parmi les projets développés par Codecontenu.",
    url: "https://tchad-tech.base44.app",
    host: "tchad-tech.base44.app",
    tags: ["Projet web", "Base44"],
  },
  {
    type: "Application web",
    name: "LeftSend",
    tagline: "Une autre idée mise en ligne.",
    description: "Découvrez LeftSend directement sur son site et explorez cette réalisation parmi les projets développés par Codecontenu.",
    url: "https://leftsend.base44.app",
    host: "leftsend.base44.app",
    tags: ["Application web", "Base44"],
  },
];
const services = [
  { Icon: Code2, title: "Développement web", text: "Des sites et applications rapides, accessibles et adaptés à ton activité." },
  { Icon: Video, title: "Création vidéo", text: "Des vidéos courtes et des présentations qui rendent la technologie plus simple." },
  { Icon: Sparkles, title: "Visibilité de marque", text: "Des contenus créatifs pour présenter un produit à une audience intéressée par la tech." },
];
const questions = [
  { q: "Combien de temps faut-il pour créer un site ?", a: "Cela dépend du projet. Une première version peut être prête en quelques jours, puis évoluer selon les retours." },
  { q: "Tu peux présenter ma marque dans tes vidéos ?", a: "Oui, si le produit correspond à l'univers tech et créatif de Codecontenu. Contacte-moi pour en discuter." },
  { q: "Tu travailles à distance ?", a: "Oui. Les échanges et le suivi du projet peuvent se faire entièrement en ligne." },
];

function Index() {
  const [apiOnline, setApiOnline] = useState<boolean | null>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isMobileDeck, setIsMobileDeck] = useState(false);

  useEffect(() => {
    const updateDeckSize = () => setIsMobileDeck(window.innerWidth <= 600);
    updateDeckSize();
    window.addEventListener("resize", updateDeckSize);
    return () => window.removeEventListener("resize", updateDeckSize);
  }, []);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveProjectIndex((current) => (current + 1) % projects.length);
    }, 5000);
    return () => window.clearInterval(rotation);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    checkApiHealth(controller.signal)
      .then((health) => setApiOnline(health.status === "ok"))
      .catch(() => setApiOnline(false));
    return () => controller.abort();
  }, []);

  return (
    <main className="site-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Navigation principale">
          <Link to="/" className="brand-lockup" aria-label="Codecontenu, accueil">
            <img src="/codecontenu-logo.svg" alt="Logo Codecontenu" className="brand-logo" />
            <span>codecontenu<span className="brand-dot">.</span></span>
          </Link>
          <div className="nav-links">
            <a href="#projets">Projets</a>
            <a href="#presentation">À propos</a>
            <a href="#services">Services</a>
            <a href="#liens">Réseaux</a>
          </div>
          <a className="nav-contact" href={"mailto:" + EMAIL}>Me contacter <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="content-width hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> CRÉATION · CODE · TRANSMISSION</div>
            <h1>Je transforme les idées en <span>expériences numériques.</span></h1>
            <p className="hero-lead">Je suis Alafi, créateur de contenu et développeur web. Je conçois des projets utiles et je partage ce que j'apprends autour de la technologie.</p>
            <div className="hero-actions">
              <a href="#projets" className="button-primary">Découvrir mes projets <ArrowUpRight size={17} /></a>
              <a href={"mailto:" + EMAIL} className="button-secondary">Parlons de ton idée</a>
            </div>
            <div className="api-status" aria-live="polite">
              <span className={"status-dot " + (apiOnline === null ? "status-pending" : apiOnline ? "status-online" : "status-offline")} />
              {apiOnline === null ? "Vérification du serveur…" : apiOnline ? "Services en ligne" : "Service momentanément indisponible"}
            </div>
          </div>
          <div className="hero-art" aria-label="Identité visuelle Codecontenu">
            <div className="hero-orb hero-orb-one" />
            <div className="hero-orb hero-orb-two" />
            <img src="/codecontenu-logo.svg" alt="" className="hero-logo" />
            <div className="hero-art-caption"><span>CODECONTENU</span><span>01 / DIGITAL STUDIO</span></div>
          </div>
        </div>
        <div className="content-width hero-bottom">
          <span>Développement web</span><i /> <span>Création de contenu</span><i /> <span>Projets numériques</span>
        </div>
      </section>

      <section id="presentation" className="section-block intro-section">
        <div className="content-width intro-grid">
          <div>
            <p className="section-kicker">01 — QUI SUIS-JE ?</p>
            <h2>La technologie devient plus forte quand on la partage.</h2>
          </div>
          <div className="intro-copy">
            <p>Codecontenu est mon espace de création. J'y rassemble le développement web, l'expérimentation et la pédagogie pour rendre les outils numériques plus accessibles.</p>
            <p>Mon approche : comprendre le besoin, construire une solution claire, puis documenter et partager le chemin.</p>
            <div className="stats-row">
              <div><strong>05</strong><span>projets présentés</span></div>
              <div><strong>03</strong><span>domaines de création</span></div>
              <div><strong>01</strong><span>objectif : créer utile</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projets" className="section-block projects-section">
        <div className="content-width">
          <div className="section-heading">
            <div><p className="section-kicker">02 — SÉLECTION DE TRAVAUX</p><h2>Des idées mises en ligne.</h2></div>
            <p>Chaque projet part d’un besoin : présenter une activité, simplifier une organisation ou donner vie à une idée. Explore les réalisations et parlons de la tienne.</p>
          </div>
          <div className="project-deck" aria-label="Éventail des cinq projets, rotation automatique toutes les cinq secondes">
            {projects.map((project, index) => {
              const relativeIndex = (index - activeProjectIndex + projects.length) % projects.length;
              const center = (projects.length - 1) / 2;
              const position = relativeIndex - center;
              return (
                <article
                  className={`project-card project-deck-card${relativeIndex === 0 ? " is-front" : ""}`}
                  key={project.name}
                  style={{
                    zIndex: projects.length - relativeIndex,
                    transform: `translateX(${position * (isMobileDeck ? 48 : 215)}px) translateY(${Math.abs(position) * 5}px) rotate(${position * (isMobileDeck ? 7 : 4)}deg)`,
                  }}
                  aria-hidden={relativeIndex !== 0}
                >
                  <div className="project-topline"><span>0{index + 1}</span><span>{project.type}</span></div>
                  <div className="project-symbol">{index === 0 ? <Code2 size={27} /> : index === 1 ? <Sparkles size={27} /> : <Code2 size={27} />}</div>
                  <h3>{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-footer"><span>{project.host}</span><div className="project-actions"><button type="button" className="project-details-button" onClick={() => setSelectedProject(project)} tabIndex={relativeIndex === 0 ? 0 : -1}>Découvrir ce projet <ArrowUpRight size={15} /></button><a href={project.url} target="_blank" rel="noreferrer" tabIndex={relativeIndex === 0 ? 0 : -1}>Ouvrir le site <ArrowUpRight size={16} /></a></div></div>
                </article>
              );
            })}
          </div>
          <p className="project-deck-hint"><span className="project-deck-indicator" /> Les projets défilent automatiquement toutes les 5 secondes</p>
        </div>
      </section>

      <section className="video-section">
        <div className="content-width video-grid">
          <div className="video-copy">
            <p className="section-kicker">03 — EN IMAGES</p>
            <h2>Je construis. Je teste. Je partage.</h2>
            <p>Une présentation de mon univers et de ma démarche, entre création numérique et transmission.</p>
            <a href={CHANNEL} target="_blank" rel="noreferrer" className="text-link">Retrouver mes vidéos <ArrowUpRight size={17} /></a>
          </div>
          <div className="video-frame">
            <video
              src="/videos/codecontenu-presentation.mp4"
              controls
              playsInline
              preload="metadata"
              className="presentation-video"
              aria-label="Vidéo de présentation Codecontenu"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section-block services-section">
        <div className="content-width">
          <div className="section-heading">
            <div><p className="section-kicker">04 — CE QUE JE FAIS</p><h2>De l'idée au résultat.</h2></div>
            <p>Un accompagnement simple, avec une attention portée à l'utilité et à la qualité.</p>
          </div>
          <div className="service-grid">
            {services.map(({ Icon, title, text }, index) => (
              <article className="service-item" key={title}>
                <div className="service-icon"><Icon size={23} /></div>
                <span className="service-number">0{index + 1}</span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="service-cta"><div><strong>Tu as une idée à concrétiser ?</strong><span>Décrivons ensemble la prochaine étape.</span></div><a href={"mailto:" + EMAIL + "?subject=Parlons%20de%20mon%20projet"}>Démarrer une conversation <ArrowUpRight size={17} /></a></div>
        </div>
      </section>

      <section className="section-block learning-section">
        <div className="content-width learning-grid">
          <div><p className="section-kicker">05 — APPRENDRE & PARTAGER</p><h2>La curiosité en mouvement.</h2></div>
          <div><p>Je publie des contenus autour du développement web, des outils numériques et du vibe coding. L'objectif : apprendre en construisant et aider d'autres personnes à se lancer.</p><div className="learning-links"><a href={CHANNEL} target="_blank" rel="noreferrer"><Youtube size={18} /> YouTube <ArrowUpRight size={15} /></a><a href={REEL} target="_blank" rel="noreferrer"><Video size={18} /> Facebook Reels <ArrowUpRight size={15} /></a><a href={STORE} target="_blank" rel="noreferrer"><Code2 size={18} /> Boutique de cours <ArrowUpRight size={15} /></a></div></div>
        </div>
      </section>

      <section className="faq-section">
        <div className="content-width faq-grid">
          <div><p className="section-kicker">06 — FAQ</p><h2>Quelques réponses.</h2></div>
          <div className="faq-list">{questions.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>

      <section id="liens" className="contact-section">
        <div className="content-width contact-inner">
          <img src="/codecontenu-logo.svg" alt="" className="contact-logo" />
          <p className="section-kicker">ON CRÉE QUELQUE CHOSE ?</p>
          <h2>Une bonne idée mérite<br />de prendre forme.</h2>
          <a href={"mailto:" + EMAIL} className="contact-button"><Mail size={18} /> Me contacter <ArrowUpRight size={17} /></a>
          <div className="social-list">{socials.map(({ name, handle, url, Icon }) => <a href={url} key={name} target="_blank" rel="noreferrer"><Icon size={17} /><span>{name}</span><small>{handle}</small><ArrowUpRight size={15} /></a>)}</div>
        </div>
      </section>

      <footer className="site-footer"><div className="content-width footer-inner"><Link to="/" className="footer-brand"><img src="/codecontenu-logo.svg" alt="" /> codecontenu.</Link><span>© {new Date().getFullYear()} Alafi Baramme. Tous droits réservés.</span><a href={GITHUB} target="_blank" rel="noreferrer">Code source <ArrowUpRight size={14} /></a></div></footer>
      {selectedProject && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button type="button" className="project-modal-close" aria-label="Fermer" onClick={() => setSelectedProject(null)}><X size={20} /></button>
            <p className="section-kicker">APERÇU DE LA RÉALISATION · {selectedProject.type.toUpperCase()}</p>
            <h2 id="project-modal-title">{selectedProject.name}</h2>
            <p className="project-modal-tagline">{selectedProject.tagline}</p>
            <p className="project-modal-description">{selectedProject.description}</p>
            <div className="project-modal-label">Compétences et points clés</div>
            <div className="tag-list">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-modal-actions">
              <a className="button-primary" href={selectedProject.url} target="_blank" rel="noreferrer">Explorer le site <ArrowUpRight size={16} /></a>
              <a className="button-secondary" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Discutons de mon projet web")}`}>Créer un projet similaire</a>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
