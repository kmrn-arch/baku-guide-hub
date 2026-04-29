import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Baku — history, culture, when to visit | Baku.guide" },
      { name: "description", content: "An introduction to Baku, Azerbaijan: history, culture, and the best time of year to visit." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">Public · No login</div>
        <h1 className="font-display text-5xl mt-2">{t("about.title")}</h1>
        <p className="text-lg text-muted-foreground mt-4">{t("about.lead")}</p>
      </header>

      <div className="aspect-[16/9] rounded-xl overflow-hidden mb-10 bg-secondary">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Baku_old_city.jpg/1280px-Baku_old_city.jpg"
          alt="Baku Old City"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <section className="mb-10">
        <h2 className="font-display text-2xl border-b border-border pb-2 mb-3">{t("about.history.title")}</h2>
        <p className="text-foreground/90 leading-relaxed">{t("about.history.body")}</p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl border-b border-border pb-2 mb-3">{t("about.culture.title")}</h2>
        <p className="text-foreground/90 leading-relaxed">{t("about.culture.body")}</p>
      </section>

      <section>
        <h2 className="font-display text-2xl border-b border-border pb-2 mb-3">{t("about.when.title")}</h2>
        <p className="text-foreground/90 leading-relaxed">{t("about.when.body")}</p>
      </section>
    </article>
  );
}
