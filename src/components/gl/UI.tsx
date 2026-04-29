import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  title,
  sub,
  align = "left",
  light = false,
}: {
  kicker?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${a}`}>
      {kicker && (
        <div className={`text-xs uppercase tracking-[0.2em] font-bold ${light ? "text-accent" : "text-accent"}`}>
          {kicker}
        </div>
      )}
      <h2 className={`mt-3 text-3xl md:text-5xl font-display font-semibold leading-[1.05] ${light ? "text-primary-foreground" : ""}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-base md:text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  body,
  accent = "default",
}: {
  icon: ReactNode;
  title: string;
  body: string;
  accent?: "default" | "orange" | "mint" | "trust";
}) {
  const accentBg =
    accent === "orange"
      ? "bg-[var(--gradient-orange)] text-accent-foreground"
      : accent === "mint"
      ? "bg-[oklch(0.72_0.14_165)] text-white"
      : accent === "trust"
      ? "bg-[var(--gradient-trust)] text-primary-foreground"
      : "bg-secondary text-foreground";

  return (
    <div className="group rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all">
      <div className={`w-11 h-11 rounded-xl grid place-items-center mb-4 ${accentBg}`}>{icon}</div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

export function StepCard({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6">
      <div className="absolute -top-4 left-6 w-10 h-10 rounded-full grid place-items-center bg-[var(--gradient-orange)] text-accent-foreground font-display text-lg font-bold shadow-[var(--shadow-glow-orange)]">
        {n}
      </div>
      <h3 className="font-display text-lg font-semibold mt-3">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

export function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="rounded-2xl border border-border bg-card p-6">
      <div className="text-4xl text-accent leading-none font-display">"</div>
      <blockquote className="text-base leading-relaxed mt-2">{quote}</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {author}</figcaption>
    </figure>
  );
}
