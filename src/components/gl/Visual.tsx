import { useLang } from "@/i18n/LangProvider";

/** Stylized phone with a fake "GoLocal" map UI inside. Marked TODO(real-screenshot). */
export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* TODO(real-screenshot): replace inner SVG with real app screenshot */}
      <div className="absolute -inset-6 bg-[var(--gradient-orange)] rounded-[3rem] blur-3xl opacity-30" aria-hidden />
      <div className="relative mx-auto w-[280px] h-[560px] rounded-[2.5rem] bg-[oklch(0.16_0.04_260)] p-3 shadow-[var(--shadow-deep)] ring-1 ring-white/10">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[oklch(0.16_0.04_260)] rounded-b-2xl z-10" />
        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-card relative">
          {/* fake map */}
          <svg viewBox="0 0 280 560" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.96 0.008 250)" />
                <stop offset="100%" stopColor="oklch(0.92 0.02 230)" />
              </linearGradient>
            </defs>
            <rect width="280" height="560" fill="url(#mapBg)" />
            {/* roads */}
            <path d="M0 120 Q140 100 280 180" stroke="oklch(0.85 0.02 250)" strokeWidth="14" fill="none" />
            <path d="M0 280 Q140 320 280 260" stroke="oklch(0.85 0.02 250)" strokeWidth="10" fill="none" />
            <path d="M60 0 L80 560" stroke="oklch(0.85 0.02 250)" strokeWidth="8" fill="none" />
            <path d="M200 0 L220 560" stroke="oklch(0.85 0.02 250)" strokeWidth="8" fill="none" />
            {/* sea */}
            <path d="M0 420 Q120 380 280 440 L280 560 L0 560 Z" fill="oklch(0.78 0.06 220)" opacity="0.6" />
            {/* pins */}
            <g>
              <circle cx="120" cy="200" r="10" fill="oklch(0.72 0.19 50)" />
              <circle cx="120" cy="200" r="4" fill="white" />
            </g>
            <g>
              <circle cx="200" cy="320" r="8" fill="oklch(0.72 0.14 165)" />
              <circle cx="200" cy="320" r="3" fill="white" />
            </g>
            <g>
              <circle cx="80" cy="380" r="8" fill="oklch(0.36 0.16 265)" />
              <circle cx="80" cy="380" r="3" fill="white" />
            </g>
          </svg>

          {/* top bar */}
          <div className="relative z-10 px-4 pt-10 pb-3 flex items-center justify-between text-[10px] text-foreground/70">
            <span>9:41</span>
            <span className="font-semibold tracking-tight">GoLocal</span>
            <span>●●●</span>
          </div>

          {/* search */}
          <div className="relative z-10 mx-4 rounded-xl bg-white/90 backdrop-blur shadow-sm px-3 py-2 text-xs text-muted-foreground flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[var(--gradient-orange)]" />
            Search Baku…
          </div>

          {/* bottom card */}
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-card/95 backdrop-blur-md p-3 shadow-lg z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-accent font-bold">Verified</div>
                <div className="text-sm font-semibold">Old City Walk</div>
                <div className="text-[10px] text-muted-foreground">2.3 km · 28 min</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-[10px] text-muted-foreground line-through">$25</div>
                <div className="text-sm font-bold text-primary">$8</div>
              </div>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-2/3 bg-[var(--gradient-orange)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GoLocalMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="glm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.19 50)" />
          <stop offset="100%" stopColor="oklch(0.36 0.16 265)" />
        </linearGradient>
      </defs>
      <path
        d="M16 2 C9 2 4 7 4 14 c0 8 12 16 12 16 s12-8 12-16 C28 7 23 2 16 2 z"
        fill="url(#glm)"
      />
      <circle cx="16" cy="13" r="4.5" fill="white" />
    </svg>
  );
}

/** Reusable used on labels / disclaimers about the demo */
export function DemoBadge() {
  const { t } = useLang();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/15 text-[oklch(0.4_0.14_165)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
      {t("nav.demo")}
    </span>
  );
}
