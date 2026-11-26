import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Video, Sparkles, Mail, Github, Instagram, Youtube } from "lucide-react";

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
              <div><strong>02</strong><span>applications présentées</span></div>
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
            <p>Quelques projets numériques conçus pour répondre à des besoins concrets.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline"><span>0{index + 1}</span><span>{project.type}</span></div>
                <div className="project-symbol">{index === 0 ? <Code2 size={27} /> : <Sparkles size={27} />}</div>
                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-footer"><span>{project.host}</span><a href={project.url} target="_blank" rel="noreferrer">Visiter le projet <ArrowUpRight size={16} /></a></div>
              </article>
            ))}
          </div>
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
            />>
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
    </main>
  );
}
