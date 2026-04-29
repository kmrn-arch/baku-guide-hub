import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { METRO_LINES, BUS_ROUTES, DISTRICTS } from "@/data/places";
import { Download, Train, Bus, Building2, Map } from "lucide-react";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Baku Transport — Metro, Buses, Districts | Baku.guide" },
      { name: "description", content: "Metro lines, key bus routes and a district overview for Baku — with an offline map." },
    ],
  }),
  component: TransportPage,
});

function TransportPage() {
  const { t, lang } = useLang();
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <header className="mb-10 max-w-2xl">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">Public · Works offline</div>
        <h1 className="font-display text-5xl mt-2">{t("transport.title")}</h1>
        <p className="text-lg text-muted-foreground mt-4">{t("transport.lead")}</p>
      </header>

      {/* Metro */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 font-display text-2xl mb-5">
          <Train className="w-6 h-6 text-accent" /> {t("transport.metro")}
        </h2>
        <div className="space-y-4">
          {Object.entries(METRO_LINES).map(([line, info]) => (
            <div key={line} className="rounded-xl bg-card border border-border p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full" style={{ background: info.color }} />
                <span className="font-semibold">{line}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-sm">
                {info.stations.map((s, i) => (
                  <span key={s} className="flex items-center gap-1.5">
                    <span className="px-2 py-1 rounded bg-secondary">{s}</span>
                    {i < info.stations.length - 1 && <span className="text-muted-foreground">→</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bus */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 font-display text-2xl mb-5">
          <Bus className="w-6 h-6 text-accent" /> {t("transport.bus")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {BUS_ROUTES.map((b) => (
            <div key={b.number} className="rounded-xl bg-card border border-border p-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl text-accent w-12">{b.number}</span>
                <div>
                  <div className="font-medium">{b.route}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{b.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Districts */}
      <section className="mb-12">
        <h2 className="flex items-center gap-2 font-display text-2xl mb-5">
          <Building2 className="w-6 h-6 text-accent" /> {t("transport.districts")}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {DISTRICTS.map((d) => (
            <div key={d.name.en} className="rounded-xl bg-card border border-border p-4">
              <div className="font-display text-lg">{d.name[lang]}</div>
              <p className="text-sm text-muted-foreground mt-1">{d.note[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section>
        <h2 className="flex items-center gap-2 font-display text-2xl mb-5">
          <Map className="w-6 h-6 text-accent" /> {t("transport.map")}
        </h2>
        <div className="rounded-xl overflow-hidden border border-border bg-card">
          <div className="photo-placeholder aspect-[16/9]">
            <div className="text-center">
              <div className="font-display text-2xl text-primary">Baku Metro & Districts Map</div>
              <p className="text-sm mt-2 max-w-md">High-quality offline map will appear here once you supply the asset. Save the page for offline access.</p>
            </div>
          </div>
          <div className="p-4 flex flex-wrap gap-3 border-t border-border">
            <a
              href="/baku-pocket-guide.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              <Download className="w-4 h-4" /> {t("transport.download")}
            </a>
            <a
              href="https://commons.wikimedia.org/wiki/File:Baku_metro_map.svg"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
            >
              View official metro map ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
