import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "@/components/gl/UI";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — GoLocal Free & Premium plans" },
      { name: "description", content: "Free for travelers. Premium unlocks no ads, AI personalization, full offline access and priority support." },
      { property: "og:title", content: "Pricing — GoLocal" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { t } = useLang();
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SectionHeading kicker={t("gl.pricing.kicker")} title={t("gl.pricing.title")} sub={t("gl.pricing.sub")} align="center" />

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        {/* FREE */}
        <div className="rounded-3xl bg-card border border-border p-8">
          <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">{t("gl.pricing.free")}</div>
          <div className="mt-2 font-display text-5xl">{t("gl.pricing.free.price")}</div>
          <p className="text-muted-foreground mt-2">{t("gl.pricing.free.desc")}</p>
          <ul className="mt-6 space-y-2.5">
            {["f1","f2","f3","f4"].map((k) => (
              <li key={k} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-mint mt-0.5 shrink-0" /> {t(`gl.pricing.free.${k}`)}
              </li>
            ))}
          </ul>
          <Link to="/download" className="mt-8 inline-flex w-full justify-center rounded-lg border border-border px-5 py-3 font-semibold hover:bg-secondary">
            {t("gl.pricing.cta.free")}
          </Link>
        </div>

        {/* PREMIUM */}
        <div className="relative rounded-3xl p-8 text-primary-foreground" style={{ background: "var(--gradient-trust)" }}>
          <div className="absolute -top-3 right-6 rounded-full bg-[var(--gradient-orange)] text-accent-foreground px-3 py-1 text-xs font-semibold shadow-[var(--shadow-glow-orange)]">
            {t("gl.pricing.popular")}
          </div>
          <div className="text-sm uppercase tracking-widest opacity-80 font-semibold">{t("gl.pricing.premium")}</div>
          <div className="mt-2 font-display text-5xl">{t("gl.pricing.premium.price")}</div>
          <p className="opacity-80 mt-2">{t("gl.pricing.premium.desc")}</p>
          <ul className="mt-6 space-y-2.5">
            {["f1","f2","f3","f4","f5"].map((k) => (
              <li key={k} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 mt-0.5 shrink-0" /> {t(`gl.pricing.premium.${k}`)}
              </li>
            ))}
          </ul>
          <Link to="/download" className="mt-8 inline-flex w-full justify-center rounded-lg bg-[var(--gradient-orange)] text-accent-foreground px-5 py-3 font-semibold hover:opacity-90 shadow-[var(--shadow-glow-orange)]">
            {t("gl.pricing.cta.premium")}
          </Link>
        </div>
      </div>
    </div>
  );
}
