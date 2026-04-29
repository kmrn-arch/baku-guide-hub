import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { PLACES } from "@/data/places";
import { PlaceImage } from "@/components/PlaceImage";
import { ArrowLeft, MapPin } from "lucide-react";

export const Route = createFileRoute("/_authenticated/place/$placeId")({
  component: PlaceDetail,
  notFoundComponent: () => (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="font-display text-4xl">Place not found</h1>
      <Link to="/browse" className="text-accent mt-4 inline-block">Back to browse</Link>
    </div>
  ),
});

function PlaceDetail() {
  const { placeId } = useParams({ from: "/_authenticated/place/$placeId" });
  const { lang } = useLang();
  const place = PLACES.find((p) => p.id === placeId);
  if (!place) throw notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <Link to="/browse" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to browse
      </Link>

      <div className="aspect-[16/9] mt-6 rounded-xl overflow-hidden bg-secondary">
        <PlaceImage src={place.image} alt={place.name[lang]} />
      </div>

      <header className="mt-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
          <MapPin className="w-3.5 h-3.5" /> {place.district}
        </div>
        <h1 className="font-display text-5xl mt-2">{place.name[lang]}</h1>
        <p className="text-lg text-muted-foreground mt-3">{place.short[lang]}</p>
      </header>

      <section className="mt-8 prose prose-lg max-w-none">
        <p className="text-foreground/90 leading-relaxed text-lg">{place.long[lang]}</p>
      </section>

      <div className="mt-10 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
        Reviews & favorites coming in v2 — once your business model is finalized.
      </div>
    </article>
  );
}
