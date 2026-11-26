import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, Video, Sparkles, Mail } from "lucide-react";

import videoAsset from "@/assets/codecontenu_presentation.mp4.asset.json";
import { checkApiHealth } from "@/lib/api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alafi Baramme — Créateur de contenu & développeur" },
      { name: "description", content: "Portfolio d'Alafi Baramme (Codecontenu) : vidéos, code, et les apps Orbitacle et LivingArch." },
      { property: "og:title", content: "Alafi Baramme — Codecontenu" },
      { property: "og:description", content: "Créateur de contenu et développeur : vidéos, cours en ligne et projets web (Orbitacle, LivingArch)." },
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
  { name: "Instagram", handle: "@codecontenu", url: "https://www.instagram.com/codecontenu/" },
  { name: "TikTok", handle: "@codecontenu", url: "https://www.tiktok.com/@codecontenu" },
  { name: "YouTube", handle: "@codecontenu", url: CHANNEL },
  { name: "Facebook", handle: "IAF Plateforms", url: "https://www.facebook.com/IAFPLATEFORMS" },
  { name: "Reel Facebook", handle: "reel récent", url: REEL },
  { name: "Boutique", handle: "cours en ligne", url: STORE },
  { name: "GitHub", handle: "asraaznarulrich-glitch", url: GITHUB },
];
const videos = [
  "Coder une app en 10 minutes",
  "3 outils gratuits pour développeurs",
  "Mon setup de créateur-dev",
];
const steps = [
  { t: "Comprendre avant de coder", d: "On parle de ton idée, de ta cible et de ce que le site doit vraiment faire pour toi.", tag: "idee.codecontenu" },
  { t: "Livré par étapes", d: "Une première version en ligne rapidement, puis des améliorations validées ensemble.", tag: "sprint.codecontenu" },
  { t: "Montré au monde", d: "Je peux présenter ton projet en vidéo à ma communauté pour lui donner de la visibilité.", tag: "reel.codecontenu" },
];
type Project = {
  type: string;
  t: string;
  r: string;
  d: string;
  url: string;
  host: string;
  tags: string[];
  video?: string;
};
const projects: Project[] = [
  {
    type: "Application web",
    t: "Orbitacle",
    r: "Tâches et équipe suivies au même endroit",
    d: "Une app pour suivre les tâches de chacun, voir l'équipe en un coup d'œil et garder le cap sur ce qui compte.",
    url: "https://orbitacle.base44.app",
    host: "orbitacle.base44.app",
    tags: ["Tâches", "Équipe", "Paramètres"],
    video: "#presentation",
  },
  {
    type: "Site d'atelier",
    t: "LivingArch",
    r: "Un atelier d'architecture en ligne",
    d: "Site d'un atelier d'architecture : archive de projets, exploration par terrain, chiffres clés et prise de contact.",
    url: "https://livingarch.base44.app",
    host: "livingarch.base44.app",
    tags: ["Archive", "Terrains", "Contact"],
  },
];
const stats = [
  { n: "2 apps", l: "en ligne aujourd'hui" },
  { n: "100%", l: "code sur mesure" },
  { n: "4", l: "réseaux actifs" },
];
const faq = [
  { q: "Combien de temps pour créer un site ?", r: "Une première version peut être prête en quelques jours selon la taille du projet." },
  { q: "Tu peux parler de ma marque dans tes vidéos ?", r: "Oui, si ton produit parle à ma communauté tech et créative. Écris-moi pour en discuter." },
  { q: "Tu travailles à distance ?", r: "Oui, je travaille avec des clients partout, en ligne." },
];
const services = [
  { icon: Code2, t: "Développement web", d: "Sites, apps et outils sur mesure, rapides et soignés." },
  { icon: Video, t: "Contenu vidéo", d: "Reels et vidéos tech rythmées, pensées pour retenir l'attention." },
  { icon: Sparkles, t: "Contenu pour ta marque", d: "Je montre ton produit à ma communauté, sans faire pub." },
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
    <main className="site-shell min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 font-mono text-sm">
        <Link to="/" className="flex items-center gap-3">
          <span className="size-10 shrink-0 overflow-hidden rounded-xl border-2 border-foreground shadow-[3px_3px_0_var(--color-primary)]">
            <img
              src="/codecontenu-logo.svg"
              alt="Logo Codecontenu : cœur en boucle bleu et violet"
              className="size-full object-cover"
            />
          </span>
          <span className="font-bold">codecontenu</span>
        </Link>
        <div className="flex gap-6 text-muted-foreground">
          <a href="#videos" className="hover:text-primary">vidéos</a>
          <a href="#projets" className="hidden hover:text-primary sm:inline">projets</a>
          <a href="#services" className="hover:text-primary">services</a>
          <a href="#boutique" className="hidden hover:text-primary sm:inline">boutique</a>
          <a href="#liens" className="hover:text-primary">liens</a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-primary">// bienvenue dans mon portfolio</p>
          <h1 className="font-display mt-4 text-5xl leading-tight md:text-7xl">
            Alafi, créateur de contenu <span className="text-primary">&amp; développeur</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Je code, je filme, et je te partage tout ce qu'il faut pour faire pareil.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground" aria-live="polite">
            <span className={`size-2 rounded-full ${apiOnline === null ? "bg-muted-foreground" : apiOnline ? "bg-green-500" : "bg-destructive"}`} />
            {apiOnline === null ? "Connexion au backend..." : apiOnline ? "Backend connecté" : "Backend temporairement indisponible"}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#videos" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">Voir mes vidéos</a>
            <a href={`mailto:${EMAIL}`} className="rounded-full border border-border px-6 py-3 font-medium hover:bg-muted">Me contacter</a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rotate-2 rounded-3xl border-2 border-foreground bg-card p-4 shadow-[8px_8px_0_var(--color-primary)]">
          <div className="flex h-full flex-col justify-between rounded-2xl bg-muted p-6 font-mono text-sm">
            <div className="flex gap-2"><span className="size-3 rounded-full bg-primary" /><span className="size-3 rounded-full bg-accent" /><span className="size-3 rounded-full bg-border" /></div>
            <pre className="whitespace-pre-wrap text-muted-foreground">{`const alafi = {
  pseudo: "Codecontenu",
  métiers: ["dev", "créateur"],
  passion: "partager",
};`}</pre>
            <a href={socials[0]!.url} target="_blank" rel="noreferrer" className="font-display text-2xl text-foreground">@codecontenu ↗</a>
          </div>
        </div>
      </section>

      <section id="presentation" className="mx-auto max-w-6xl px-6 py-12">
        <p className="font-mono text-sm text-primary">// présentation</p>
        <h2 className="font-display mt-2 text-4xl">Une idée, un site</h2>
        <div className="mt-8 overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-[8px_8px_0_var(--color-primary)]">
          <video src={videoAsset.url} controls playsInline preload="metadata" className="aspect-video w-full bg-muted" />
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <li key={s.l} className="rounded-2xl border border-border p-6">
              <p className="font-display text-4xl text-primary">{s.n}</p>
              <p className="mt-1 text-muted-foreground">{s.l}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Trois règles pour un site qui sert vraiment</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((st, i) => (
            <li key={st.t} className="rounded-2xl border-2 border-foreground bg-card p-6">
              <span className="font-mono text-xs text-muted-foreground">{st.tag}</span>
              <p className="font-display mt-4 text-5xl text-primary">0{i + 1}</p>
              <h3 className="font-display mt-2 text-2xl">{st.t}</h3>
              <p className="mt-2 text-muted-foreground">{st.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="projets" className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-sm text-primary">// réalisations</p>
        <h2 className="font-display mt-2 text-4xl">Réalisations & projets</h2>
        <p className="mt-2 max-w-lg text-muted-foreground">Deux apps que j'ai conçues et mises en ligne.</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.t} className="flex flex-col rounded-2xl border-2 border-foreground bg-card p-6 shadow-[8px_8px_0_var(--color-primary)]">
              <span className="w-fit rounded-full bg-background px-3 py-1 font-mono text-xs">{p.type}</span>
              <h3 className="font-display mt-6 text-3xl">{p.t}</h3>
              <p className="mt-1 text-primary">| {p.r}</p>
              <p className="mt-3 text-muted-foreground">{p.d}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <p className="break-all border-t border-border pt-4 font-mono text-xs text-muted-foreground">{p.host}</p>
                <div className="mt-4 flex flex-wrap items-center gap-5">
                  <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground">Voir le site <ArrowUpRight className="size-4" /></a>
                  {p.video && <a href={p.video} className="inline-flex items-center gap-1 text-sm text-primary">Vidéo explicative <ArrowUpRight className="size-4" /></a>}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-1 text-sm text-primary">Plus de code sur GitHub <ArrowUpRight className="size-4" /></a>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Sur YouTube</h2>
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/zb-OjhA8exE" title="Vidéo YouTube de Codecontenu" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
        </div>
        <a href={CHANNEL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm text-primary">Voir toute la chaîne <ArrowUpRight className="size-4" /></a>
      </section>

      <section id="videos" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Mes vidéos</h2>
        <p className="mt-2 text-muted-foreground">Le reste se passe sur Instagram et TikTok.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={REEL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-sm hover:border-primary hover:text-primary">Reel sur Facebook <ArrowUpRight className="size-4" /></a>
          <a href={CHANNEL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-sm hover:border-primary hover:text-primary">Chaîne YouTube <ArrowUpRight className="size-4" /></a>
          <a href={STORE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-sm hover:border-primary hover:text-primary">Boutique <ArrowUpRight className="size-4" /></a>
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <li key={v} className="group flex aspect-[9/14] flex-col justify-end rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary">
              <span className="font-mono text-xs text-primary">reel_0{i + 1}</span>
              <p className="font-display mt-2 text-2xl">{v}</p>
              <a href={socials[0]!.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary">Ouvrir sur Instagram <ArrowUpRight className="size-4" /></a>
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Travailler avec moi</h2>
        <p className="mt-2 text-muted-foreground">Tu as une marque ou un projet ? Voilà ce que je peux faire pour toi.</p>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, t, d }, i) => (
            <li key={t} className="rounded-2xl bg-muted p-8">
              <div className="flex items-center justify-between"><Icon className="size-7 text-primary" /><span className="font-mono text-sm text-muted-foreground">0{i + 1}</span></div>
              <h3 className="font-display mt-6 text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <a href={`mailto:${EMAIL}?subject=Projet`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground"><Mail className="size-4" /> M'écrire pour un projet</a>
      </section>

      <section id="boutique" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border-2 border-foreground bg-primary p-8 text-primary-foreground shadow-[8px_8px_0_var(--color-foreground)] md:p-12">
          <p className="font-mono text-sm opacity-80">// boutique</p>
          <h2 className="font-display mt-2 text-4xl">Boutique Codecontenu</h2>
          <p className="mt-3 max-w-lg opacity-90">Mes cours de programmation en ligne : pour coder plus vite et mieux.</p>
          <a href={STORE} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-medium text-foreground">Voir les cours <ArrowUpRight className="size-4" /></a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Questions fréquentes</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="font-display cursor-pointer text-xl group-open:text-primary">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.r}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="liens" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Mes liens</h2>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between py-5">
                <span className="font-display text-2xl group-hover:text-primary">{s.name}</span>
                <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">{s.handle}<ArrowUpRight className="size-4" /></span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-10 font-mono text-sm text-muted-foreground">
        <span className="size-8 shrink-0 overflow-hidden rounded-lg border-2 border-foreground shadow-[2px_2px_0_var(--color-primary)]">
          <img src="/codecontenu-logo.svg" alt="" className="size-full object-cover" />
        </span>
        <span>© 2026 Alafi Baramme · Codecontenu</span>
      </footer>
    </main>
  );
}
