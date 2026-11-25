import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Video, Sparkles, Mail } from "lucide-react";

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
  { name: "GitHub", handle: "codecontenu", url: "https://github.com/codecontenu" },
];
const videos = [
  "Coder une app en 10 minutes",
  "3 outils gratuits pour développeurs",
  "Mon setup de créateur-dev",
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
        <span className="font-bold">&lt;codecontenu /&gt;</span>
        <div className="flex gap-6 text-muted-foreground">
          <a href="#videos" className="hover:text-primary">vidéos</a>
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

      <footer className="mx-auto max-w-6xl px-6 py-10 font-mono text-sm text-muted-foreground">© 2026 Alafi Baramme · Codecontenu</footer>
    </main>
  );
}
