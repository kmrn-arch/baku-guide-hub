import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "@/components/gl/UI";
import { DemoBadge } from "@/components/gl/Visual";
import { PLACES } from "@/data/places";
import { PlaceImage } from "@/components/PlaceImage";
import { BookOpen, Phone, MapPin, Camera, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/demo/baku")({
  head: () => ({
    meta: [
      { title: "Live Demo · Baku — GoLocal" },
      { name: "description", content: "Try the GoLocal experience with real Baku data: emergency numbers, metro routes, and curated landmarks — works offline." },
      { property: "og:title", content: "GoLocal — Live Baku demo" },
    ],
  }),
  component: DemoBakuHome,
});

function DemoBakuHome() {
  const { t, lang } = useLang();
  const top = PLACES.slice(0, 6);

  const cards = [
    { to: "/tourist-info", icon: Camera, title: t("nav.tourist") },
    { to: "/transport", icon: MapPin, title: t("nav.transport") },
    { to: "/emergency", icon: Phone, title: t("nav.emergency") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Demo banner */}
      <div className="rounded-2xl border border-mint/40 bg-[oklch(0.95_0.04_165)] p-5 flex items-start gap-4 mb-12">
        <DemoBadge />
        <p className="text-sm text-foreground/80 flex-1">{t("demo.subbanner")}</p>
      </div>

      <SectionHeading kicker={t("demo.title")} title="Discover Baku, the city of fire and sea" sub={t("hero.sub")} />

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.to}
              to={c.to}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--gradient-orange)] grid place-items-center text-accent-foreground">
                <Icon className="w-5 h-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-1 group-hover:text-accent">
                Open <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          );
        })}
        <Link
          to="/about"
          className="group rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] transition-all"
        >
          <div className="w-11 h-11 rounded-xl bg-secondary grid place-items-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="mt-4 font-display text-lg font-semibold">About GoLocal</div>
          <div className="mt-1 text-sm text-muted-foreground">Back to main site</div>
        </Link>
      </div>

      <section className="mt-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <h2 className="font-display text-3xl">{t("home.places.title")}</h2>
          <Link to="/tourist-info" className="text-sm font-semibold text-accent hover:underline">See all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {top.map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="aspect-[4/3] bg-secondary">
                <PlaceImage src={p.image} alt={p.name[lang]} />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-accent font-bold">{p.district}</div>
                <h3 className="font-display text-xl mt-1">{p.name[lang]}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.short[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
