import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { PLACES } from "@/data/places";
import { PlaceImage } from "@/components/PlaceImage";
import { useState } from "react";

export const Route = createFileRoute("/_authenticated/browse")({
  component: BrowsePage,
});

function BrowsePage() {
  const { t, lang } = useLang();
  const [q, setQ] = useState("");
  const filtered = PLACES.filter((p) =>
    !q || p.name[lang].toLowerCase().includes(q.toLowerCase()) || p.district.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">Members area</div>
          <h1 className="font-display text-4xl mt-1">{t("browse.title")}</h1>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search places or districts…"
          className="rounded-md border border-input bg-background px-3 py-2 w-full sm:w-80"
        />
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to="/place/$placeId"
            params={{ placeId: p.id }}
            className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent transition-colors"
          >
            <div className="aspect-[4/3] bg-secondary">
              <PlaceImage src={p.image} alt={p.name[lang]} />
            </div>
            <div className="p-4">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold">{p.district}</div>
              <h3 className="font-display text-lg mt-1 group-hover:underline">{p.name[lang]}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{p.short[lang]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
