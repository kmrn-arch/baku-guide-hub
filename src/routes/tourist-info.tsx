import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { PLACES } from "@/data/places";
import { PlaceImage } from "@/components/PlaceImage";

export const Route = createFileRoute("/tourist-info")({
  head: () => ({
    meta: [
      { title: "Top Tourist Places in Baku — Read-only guide | Baku.guide" },
      { name: "description", content: "A curated, read-only list of Baku's top landmarks. No login required, works offline." },
    ],
  }),
  component: TouristInfo,
});

function TouristInfo() {
  const { t, lang } = useLang();
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <header className="mb-10 max-w-2xl">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">Public · No login</div>
        <h1 className="font-display text-5xl mt-2">{t("tourist.title")}</h1>
        <p className="text-lg text-muted-foreground mt-4">{t("tourist.lead")}</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PLACES.map((p) => (
          <article key={p.id} className="rounded-xl overflow-hidden bg-card border border-border">
            <div className="aspect-[4/3] bg-secondary">
              <PlaceImage src={p.image} alt={p.name[lang]} />
            </div>
            <div className="p-5">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold">{p.district}</div>
              <h3 className="font-display text-xl mt-1">{p.name[lang]}</h3>
              <p className="text-sm text-foreground/80 mt-2">{p.short[lang]}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.long[lang]}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
