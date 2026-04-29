import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { LANGS, type Lang } from "@/i18n/dictionary";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Menu, X, Flame } from "lucide-react";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSignedIn(!!data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSignedIn(!!s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const links: { to: string; key: string }[] = [
    { to: "/", key: "nav.home" },
    { to: "/about", key: "nav.about" },
    { to: "/tourist-info", key: "nav.tourist" },
    { to: "/transport", key: "nav.transport" },
    { to: "/emergency", key: "nav.emergency" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[oklch(0.97_0.02_80_/_0.85)] border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <span className="w-8 h-8 rounded-md grid place-items-center text-primary-foreground" style={{ background: "var(--gradient-flame)" }}>
            <Flame className="w-4 h-4" />
          </span>
          <span>Baku<span className="text-accent">.</span>guide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-md hover:bg-secondary transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md bg-secondary font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="text-sm bg-card border border-border rounded-md px-2 py-1.5 cursor-pointer"
            aria-label="Language"
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.flag} {l.code.toUpperCase()}
              </option>
            ))}
          </select>

          {signedIn ? (
            <Link to="/profile" className="hidden md:inline-flex px-3 py-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:opacity-90">
              {t("nav.profile")}
            </Link>
          ) : (
            <Link to="/auth" className="hidden md:inline-flex px-3 py-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:opacity-90">
              {t("nav.signin")}
            </Link>
          )}

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-3 rounded-md hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {t(l.key)}
              </Link>
            ))}
            <Link
              to={signedIn ? "/profile" : "/auth"}
              className="mt-2 px-3 py-3 rounded-md bg-primary text-primary-foreground text-center"
              onClick={() => setOpen(false)}
            >
              {signedIn ? t("nav.profile") : t("nav.signin")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl">Baku<span className="text-accent">.</span>guide</div>
          <p className="opacity-80 mt-2 text-sm">{t("footer.tagline")}</p>
        </div>
        <div className="text-sm space-y-1">
          <div className="opacity-60 mb-1 uppercase tracking-wider text-xs">Public</div>
          <Link to="/about" className="block opacity-90 hover:opacity-100">{t("nav.about")}</Link>
          <Link to="/tourist-info" className="block opacity-90 hover:opacity-100">{t("nav.tourist")}</Link>
          <Link to="/transport" className="block opacity-90 hover:opacity-100">{t("nav.transport")}</Link>
          <Link to="/emergency" className="block opacity-90 hover:opacity-100">{t("nav.emergency")}</Link>
        </div>
        <div className="text-sm space-y-1">
          <div className="opacity-60 mb-1 uppercase tracking-wider text-xs">Account</div>
          <Link to="/auth" className="block opacity-90 hover:opacity-100">{t("nav.signin")}</Link>
          <Link to="/browse" className="block opacity-90 hover:opacity-100">{t("nav.browse")}</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-xs text-center opacity-60">
        © {new Date().getFullYear()} Baku.guide
      </div>
    </footer>
  );
}
