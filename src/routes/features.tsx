import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading, FeatureCard } from "@/components/gl/UI";
import {
  Hotel, Utensils, Car, Camera, MapPin, Languages, BookOpen,
  PhoneCall, WifiOff, Sparkles, Star, BadgeDollarSign,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — GoLocal" },
      { name: "description", content: "All 12 features of GoLocal: hotels, restaurants, taxis, navigation, emergency, multilingual support, AI recommendations, offline access and more." },
      { property: "og:title", content: "Features — GoLocal" },
      { property: "og:description", content: "12 carefully chosen tools that replace 10 browser tabs and 5 sketchy apps." },
    ],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    label: "gl.featGroup.discover",
    items: [
      { icon: Hotel, k: "gl.feat.hotels" },
      { icon: Utensils, k: "gl.feat.restaurants" },
      { icon: Camera, k: "gl.feat.attractions" },
    ],
  },
  {
    label: "gl.featGroup.navigate",
    items: [
      { icon: MapPin, k: "gl.feat.nav" },
      { icon: Languages, k: "gl.feat.lang" },
      { icon: BookOpen, k: "gl.feat.translate" },
    ],
  },
  {
    label: "gl.featGroup.safe",
    items: [
      { icon: Car, k: "gl.feat.taxis" },
      { icon: PhoneCall, k: "gl.feat.emergency" },
      { icon: WifiOff, k: "gl.feat.offline" },
    ],
  },
  {
    label: "gl.featGroup.save",
    items: [
      { icon: Sparkles, k: "gl.feat.ai" },
      { icon: Star, k: "gl.feat.reviews" },
      { icon: BadgeDollarSign, k: "gl.feat.rewards" },
    ],
  },
];

function FeaturesPage() {
  const { t } = useLang();
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <SectionHeading kicker={t("gl.features.kicker")} title={t("gl.features.title")} sub={t("gl.features.sub")} />
      <div className="mt-16 space-y-14">
        {groups.map((g) => (
          <section key={g.label}>
            <h2 className="font-display text-2xl border-b border-border pb-3 mb-6">{t(g.label)}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {g.items.map((it) => {
                const Icon = it.icon;
                return (
                  <FeatureCard
                    key={it.k}
                    icon={<Icon className="w-5 h-5" />}
                    title={t(it.k)}
                    body={t(`${it.k}.body`)}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
