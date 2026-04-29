import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { PhoneMockup } from "@/components/gl/Visual";
import { SectionHeading, FeatureCard, StepCard, TestimonialCard } from "@/components/gl/UI";
import { StoreButtons } from "@/components/gl/StoreButtons";
import { WaitlistForm } from "@/components/gl/Forms";
import {
  Languages, ShieldAlert, BadgeDollarSign, Compass, Search, AlertCircle,
  CheckCircle2, MapPin, Sparkles, ArrowRight, PhoneCall, Hotel, Utensils, Car,
  Camera, WifiOff, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GoLocal — Travel Smart. Travel Safe. Travel Local." },
      { name: "description", content: "GoLocal is the all-in-one travel assistant for tourists: trusted services, transparent prices, multilingual support, and offline access." },
      { property: "og:title", content: "GoLocal — Explore Like a Local" },
      { property: "og:description", content: "All-in-one travel app for trusted services and transparent prices." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {t("gl.hero.kicker")}
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.02]">
              {t("gl.hero.title")}
            </h1>
            <p className="mt-6 text-lg opacity-90 max-w-xl">{t("gl.hero.sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--gradient-orange)] text-accent-foreground px-6 py-3.5 font-semibold hover:opacity-90 shadow-[var(--shadow-glow-orange)]"
              >
                {t("cta.download")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/20"
              >
                {t("cta.exploreFeatures")}
              </Link>
              <Link
                to="/demo/baku"
                className="inline-flex items-center gap-2 rounded-lg bg-mint/20 border border-mint/30 px-6 py-3.5 font-semibold hover:bg-mint/30"
              >
                <Sparkles className="w-4 h-4" /> {t("cta.tryDemo")}
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-70 italic">{t("gl.hero.tagline")}</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <SectionHeading
          kicker={t("gl.problem.kicker")}
          title={t("gl.problem.title")}
          sub={t("gl.problem.sub")}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={<Languages className="w-5 h-5" />} title={t("gl.problem.1.title")} body={t("gl.problem.1.body")} />
          <FeatureCard icon={<ShieldAlert className="w-5 h-5" />} title={t("gl.problem.2.title")} body={t("gl.problem.2.body")} />
          <FeatureCard icon={<BadgeDollarSign className="w-5 h-5" />} title={t("gl.problem.3.title")} body={t("gl.problem.3.body")} />
          <FeatureCard icon={<Compass className="w-5 h-5" />} title={t("gl.problem.4.title")} body={t("gl.problem.4.body")} />
          <FeatureCard icon={<Search className="w-5 h-5" />} title={t("gl.problem.5.title")} body={t("gl.problem.5.body")} />
          <FeatureCard icon={<AlertCircle className="w-5 h-5" />} title={t("gl.problem.6.title")} body={t("gl.problem.6.body")} />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <SectionHeading
            kicker={t("gl.solution.kicker")}
            title={t("gl.solution.title")}
            sub={t("gl.solution.sub")}
            align="center"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard accent="orange" icon={<Sparkles className="w-5 h-5" />} title={t("gl.solution.p1.title")} body={t("gl.solution.p1.body")} />
            <FeatureCard accent="trust" icon={<CheckCircle2 className="w-5 h-5" />} title={t("gl.solution.p2.title")} body={t("gl.solution.p2.body")} />
            <FeatureCard accent="mint" icon={<BadgeDollarSign className="w-5 h-5" />} title={t("gl.solution.p3.title")} body={t("gl.solution.p3.body")} />
            <FeatureCard accent="default" icon={<WifiOff className="w-5 h-5" />} title={t("gl.solution.p4.title")} body={t("gl.solution.p4.body")} />
          </div>
        </div>
      </section>

      {/* FEATURES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionHeading kicker={t("gl.features.kicker")} title={t("gl.features.title")} sub={t("gl.features.sub")} />
          <Link to="/features" className="text-sm font-semibold text-accent hover:underline whitespace-nowrap">
            See all 12 →
          </Link>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={<Hotel className="w-5 h-5" />} title={t("gl.feat.hotels")} body={t("gl.feat.hotels.body")} />
          <FeatureCard icon={<Utensils className="w-5 h-5" />} title={t("gl.feat.restaurants")} body={t("gl.feat.restaurants.body")} />
          <FeatureCard icon={<Car className="w-5 h-5" />} title={t("gl.feat.taxis")} body={t("gl.feat.taxis.body")} />
          <FeatureCard icon={<Camera className="w-5 h-5" />} title={t("gl.feat.attractions")} body={t("gl.feat.attractions.body")} />
          <FeatureCard icon={<MapPin className="w-5 h-5" />} title={t("gl.feat.nav")} body={t("gl.feat.nav.body")} />
          <FeatureCard icon={<PhoneCall className="w-5 h-5" />} title={t("gl.feat.emergency")} body={t("gl.feat.emergency.body")} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <SectionHeading kicker={t("gl.how.kicker")} title={t("gl.how.title")} align="center" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StepCard n={1} title={t("gl.how.1.title")} body={t("gl.how.1.body")} />
            <StepCard n={2} title={t("gl.how.2.title")} body={t("gl.how.2.body")} />
            <StepCard n={3} title={t("gl.how.3.title")} body={t("gl.how.3.body")} />
            <StepCard n={4} title={t("gl.how.4.title")} body={t("gl.how.4.body")} />
          </div>
        </div>
      </section>

      {/* SAFETY TEASER */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl overflow-hidden relative" style={{ background: "var(--gradient-trust)" }}>
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="relative p-8 md:p-14 grid lg:grid-cols-3 gap-8 items-center text-primary-foreground">
            <div className="lg:col-span-2">
              <SectionHeading kicker={t("gl.trust.kicker")} title={t("gl.trust.title")} sub={t("gl.trust.sub")} light />
              <Link to="/safety" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/15 backdrop-blur border border-white/25 px-5 py-3 font-semibold hover:bg-white/25">
                Learn how we keep you safe <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["1", "2", "3", "4"].map((n) => (
                <div key={n} className="rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4">
                  <div className="text-sm font-semibold">{t(`gl.trust.${n}.title`)}</div>
                  <div className="text-xs opacity-80 mt-1">{t(`gl.trust.${n}.body`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <Link to="/demo/baku" className="block group">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 grid lg:grid-cols-3 gap-6 items-center hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-mint/15 text-[oklch(0.4_0.14_165)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                {t("nav.demo")}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mt-3">{t("gl.demo.banner.title")}</h3>
              <p className="text-muted-foreground mt-2">{t("gl.demo.banner.body")}</p>
            </div>
            <div className="flex lg:justify-end">
              <span className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3.5 font-semibold group-hover:opacity-90">
                {t("cta.tryDemo")} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <SectionHeading kicker={t("gl.test.kicker")} title={t("gl.test.title")} align="center" />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          <TestimonialCard quote={t("gl.test.1")} author={t("gl.test.1.author")} />
          <TestimonialCard quote={t("gl.test.2")} author={t("gl.test.2.author")} />
          <TestimonialCard quote={t("gl.test.3")} author={t("gl.test.3.author")} />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6 italic">{t("gl.test.disclaimer")}</p>
      </section>

      {/* REWARDS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center" style={{ background: "var(--gradient-mint-soft)" }}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[oklch(0.45_0.14_165)]">
              <Star className="w-4 h-4" /> {t("gl.rewards.kicker")}
            </div>
            <h3 className="font-display text-3xl md:text-4xl mt-3">{t("gl.rewards.title")}</h3>
            <p className="text-muted-foreground mt-3 max-w-md">{t("gl.rewards.body")}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-card border border-border grid place-items-center text-2xl shadow-sm">
                {i <= 4 ? <Star className="w-7 h-7 fill-[oklch(0.72_0.19_50)] text-[oklch(0.72_0.19_50)]" /> : <Star className="w-7 h-7 text-muted-foreground/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="rounded-3xl p-8 md:p-14 text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeading kicker={t("gl.download.kicker")} title={t("gl.download.title")} sub={t("gl.download.sub")} light />
              <div className="mt-8">
                <StoreButtons size="lg" />
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6">
              <div className="text-sm font-semibold mb-2">{t("cta.joinWaitlist")}</div>
              <p className="text-xs opacity-80 mb-4">We'll email you the moment GoLocal goes live.</p>
              <WaitlistForm source="home-hero-cta" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
