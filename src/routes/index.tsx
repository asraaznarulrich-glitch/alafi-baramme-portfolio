import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Video, Sparkles, Mail } from "lucide-react";

import logoAsset from "@/assets/codecontenu-logo.jpg.asset.json";
import videoAsset from "@/assets/codecontenu_presentation.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alafi Baramme — Créateur de contenu & développeur" },
      { name: "description", content: "Portfolio d'Alafi Baramme (Codecontenu) : vidéos, code et projets web." },
      { property: "og:title", content: "Alafi Baramme — Codecontenu" },
      { property: "og:description", content: "Je crée du contenu et je code. Portfolio, vidéos et projets." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "contact@codecontenu.com";
const socials = [
  { name: "Instagram", handle: "@codecontenu", url: "https://www.instagram.com/codecontenu/" },
  { name: "TikTok", handle: "@codecontenu", url: "https://www.tiktok.com/@codecontenu" },
  { name: "YouTube", handle: "@codecontenu", url: "https://www.youtube.com/@codecontenu" },
  { name: "Facebook", handle: "IAF Plateforms", url: "https://www.facebook.com/IAFPLATEFORMS" },
  { name: "GitHub", handle: "asraaznarulrich-glitch", url: "https://github.com/asraaznarulrich-glitch" },
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
const projects = [
  { type: "Site vitrine", t: "Une idée, un site", r: "Concept présenté en vidéo" },
  { type: "Application web", t: "IAF Plateforms", r: "Communauté et plateforme" },
  { type: "Open source", t: "Projets GitHub", r: "Code partagé publiquement", url: "https://github.com/asraaznarulrich-glitch" },
];
const stats = [
  { n: "1 idée", l: "= 1 site en ligne" },
  { n: "100%", l: "code sur mesure" },
  { n: "3+", l: "réseaux actifs" },
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
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 font-mono text-sm">
        <Link to="/" className="flex items-center gap-3">
          <span className="size-10 shrink-0 overflow-hidden rounded-xl border-2 border-foreground shadow-[3px_3px_0_var(--color-primary)]">
            <img
              src={logoAsset.url}
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

      <section className="mx-auto max-w-6xl px-6 py-12">
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
        <h2 className="font-display text-4xl">Réalisations & projets</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <li key={p.t} className="flex flex-col rounded-2xl bg-muted p-6">
              <span className="w-fit rounded-full bg-background px-3 py-1 font-mono text-xs">{p.type}</span>
              <h3 className="font-display mt-6 text-2xl">{p.t}</h3>
              <p className="mt-1 text-muted-foreground">| {p.r}</p>
              {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-primary">Découvrir <ArrowUpRight className="size-4" /></a>}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Sur YouTube</h2>
        <div className="mt-8 overflow-hidden rounded-3xl border border-border">
          <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/zb-OjhA8exE" title="Vidéo YouTube de Codecontenu" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
        </div>
      </section>

      <section id="videos" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-4xl">Mes vidéos</h2>
        <p className="mt-2 text-muted-foreground">Le reste se passe sur Instagram et TikTok.</p>
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
          <img src={logoAsset.url} alt="" className="size-full object-cover" />
        </span>
        <span>© 2026 Alafi Baramme · Codecontenu</span>
      </footer>
    </main>
  );
}
