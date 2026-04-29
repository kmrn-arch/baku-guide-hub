import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "@/components/gl/UI";
import { PartnerForm } from "@/components/gl/Forms";
import { TrendingUp, Eye, Sparkles, Megaphone } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner with GoLocal — Hotels, Restaurants, Taxis, Tours" },
      { name: "description", content: "Reach millions of travelers searching for trusted services in your city. Become a verified GoLocal partner." },
      { property: "og:title", content: "Partner with GoLocal" },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const { t } = useLang();
  const benefits = [
    { icon: TrendingUp, k: "gl.partners.b1" },
    { icon: Eye, k: "gl.partners.b2" },
    { icon: Sparkles, k: "gl.partners.b3" },
    { icon: Megaphone, k: "gl.partners.b4" },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionHeading kicker={t("gl.partners.kicker")} title={t("gl.partners.title")} sub={t("gl.partners.sub")} />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.k} className="rounded-2xl bg-card border border-border p-5">
              <div className="w-10 h-10 rounded-lg bg-[var(--gradient-orange)] grid place-items-center text-accent-foreground">
                <Icon className="w-5 h-5" />
              </div>
              <div className="mt-3 font-semibold">{t(b.k)}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 rounded-3xl bg-card border border-border p-6 md:p-10 max-w-3xl">
        <h2 className="font-display text-2xl mb-6">{t("gl.partners.form.title")}</h2>
        <PartnerForm />
      </div>
    </div>
  );
}
