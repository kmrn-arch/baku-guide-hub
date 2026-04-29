import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { PLACES } from "@/data/places";
import { PlaceImage } from "@/components/PlaceImage";
import { Phone, MapPin, BookOpen, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baku.guide — Your offline travel companion for Baku" },
      { name: "description", content: "Essential Baku info, emergency numbers, transport routes and top landmarks. No login needed for the basics." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useLang();
  const top = PLACES.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-dusk)" }} />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flame_Towers_at_night_2017.jpg/1920px-Flame_Towers_at_night_2017.jpg')" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("hero.kicker")}
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-display font-semibold max-w-3xl leading-[1.05]">
            {t("hero.title")}
          </h1>
          <p className="mt-5 text-lg opacity-90 max-w-xl">{t("hero.sub")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/tourist-info"
              className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-5 py-3 font-medium hover:opacity-90"
            >
              {t("hero.cta.explore")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/emergency"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur border border-white/20 px-5 py-3 font-medium hover:bg-white/20"
            >
              <Phone className="w-4 h-4" /> {t("hero.cta.emergency")}
            </Link>
          </div>
        </div>
      </section>

      {/* No-login band */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Offline-ready</div>
            <h2 className="font-display text-2xl mt-1">{t("home.public.title")}</h2>
            <p className="text-muted-foreground text-sm mt-2">{t("home.public.sub")}</p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-3">
            {[
              { to: "/about", icon: BookOpen, key: "nav.about" },
              { to: "/transport", icon: MapPin, key: "nav.transport" },
              { to: "/emergency", icon: Phone, key: "nav.emergency" },
            ].map((it) => {
              const Icon = it.icon;
              return (
                <Link
                  key={it.to}
                  to={it.to}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background p-4 hover:border-accent transition-colors"
                >
                  <span className="w-10 h-10 rounded-md grid place-items-center bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="font-medium">{t(it.key)}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top landmarks */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{t("home.places.title")}</h2>
            <p className="text-muted-foreground mt-2">{t("home.places.sub")}</p>
          </div>
          <Link to="/tourist-info" className="text-sm text-accent font-medium hover:underline whitespace-nowrap">
            See all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {top.map((p) => (
            <article key={p.id} className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-soft)] transition-shadow">
              <div className="aspect-[4/3] bg-secondary">
                <PlaceImage src={p.image} alt={p.name[lang]} />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-accent font-semibold">{p.district}</div>
                <h3 className="font-display text-xl mt-1">{p.name[lang]}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.short[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
