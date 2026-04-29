import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "@/components/gl/UI";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GoLocal" },
      { name: "description", content: "GoLocal is built by travelers, for travelers. Our mission, story, and roadmap from Baku to the world." },
      { property: "og:title", content: "About GoLocal — Built by travelers, for travelers" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <SectionHeading kicker={t("gl.about.kicker")} title={t("gl.about.title")} />

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="font-display text-2xl border-b border-border pb-3 mb-4">{t("gl.about.mission.title")}</h2>
          <p className="text-foreground/90 leading-relaxed">{t("gl.about.mission.body")}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl border-b border-border pb-3 mb-4">{t("gl.about.scale.title")}</h2>
          <p className="text-foreground/90 leading-relaxed">{t("gl.about.scale.body")}</p>
          <div className="mt-6 rounded-2xl border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-widest text-accent font-bold mb-3">Roadmap</div>
            <ol className="space-y-2 text-sm">
              <li>📍 <strong>Baku</strong> — first launch city (live demo available)</li>
              <li>🌍 Tbilisi · Istanbul · Tashkent — next 12 months</li>
              <li>🚀 Global expansion — year two and beyond</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl border-b border-border pb-3 mb-4">{t("gl.about.team.title")}</h2>
          <p className="text-foreground/90 leading-relaxed">{t("gl.about.team.body")}</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary photo-placeholder text-[10px]">{}</div>
                <div className="mt-3 font-semibold">Founder {i}</div>
                <div className="text-xs text-muted-foreground">TODO(real-photo)</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
