import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading, FeatureCard } from "@/components/gl/UI";
import { CheckCircle2, BadgeDollarSign, Star, Lock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title: "Safety & Trust — GoLocal" },
      { name: "description", content: "Verified businesses, transparent pricing, real reviews and privacy-first design — how GoLocal keeps travelers safe." },
      { property: "og:title", content: "No Scams. No Surprises. — GoLocal" },
    ],
  }),
  component: SafetyPage,
});

function SafetyPage() {
  const { t } = useLang();
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <SectionHeading kicker={t("gl.trust.kicker")} title={t("gl.trust.title")} sub={t("gl.trust.sub")} />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard accent="trust" icon={<CheckCircle2 className="w-5 h-5" />} title={t("gl.trust.1.title")} body={t("gl.trust.1.body")} />
        <FeatureCard accent="orange" icon={<BadgeDollarSign className="w-5 h-5" />} title={t("gl.trust.2.title")} body={t("gl.trust.2.body")} />
        <FeatureCard accent="mint" icon={<Star className="w-5 h-5" />} title={t("gl.trust.3.title")} body={t("gl.trust.3.body")} />
        <FeatureCard accent="default" icon={<Lock className="w-5 h-5" />} title={t("gl.trust.4.title")} body={t("gl.trust.4.body")} />
        <FeatureCard accent="default" icon={<ShieldCheck className="w-5 h-5" />} title={t("gl.trust.5.title")} body={t("gl.trust.5.body")} />
      </div>
    </div>
  );
}
