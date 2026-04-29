import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { EMERGENCY } from "@/data/places";
import { Phone, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Numbers in Baku — Police, Ambulance, Fire | Baku.guide" },
      { name: "description", content: "Tap-to-call emergency numbers for tourists in Baku: police, ambulance, fire, gas, and tourist police." },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  const { t } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-10">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">Public · No login · Works offline</div>
        <h1 className="font-display text-5xl mt-2">{t("emergency.title")}</h1>
        <p className="text-lg text-muted-foreground mt-4">{t("emergency.lead")}</p>
      </header>

      <div className="rounded-lg border border-accent/40 bg-accent/10 p-4 flex gap-3 mb-8">
        <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <p className="text-sm">
          In a life-threatening emergency, dial <strong>112</strong> — the unified Azerbaijani emergency line. English support is limited; speak slowly and give your location first.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {EMERGENCY.map((e) => (
          <a
            key={e.key}
            href={`tel:${e.number.replace(/\s/g, "")}`}
            className="group flex items-center justify-between gap-4 rounded-xl bg-card border border-border p-5 hover:border-accent hover:shadow-[var(--shadow-soft)] transition-all"
          >
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{t(e.key)}</div>
              <div className="font-display text-3xl mt-1 text-primary">{e.number}</div>
            </div>
            <span className="w-12 h-12 rounded-full grid place-items-center bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
              <Phone className="w-5 h-5" />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 text-sm text-muted-foreground">
        <p>📌 Bookmark this page or save it to your home screen — it loads without internet once cached.</p>
      </div>
    </div>
  );
}
