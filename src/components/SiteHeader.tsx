import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { LANGS, type Lang } from "@/i18n/dictionary";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Menu, X } from "lucide-react";
import { GoLocalMark } from "@/components/gl/Visual";

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
    { to: "/features", key: "nav.features" },
    { to: "/safety", key: "nav.safety" },
    { to: "/partners", key: "nav.partners" },
    { to: "/pricing", key: "nav.pricing" },
    { to: "/about", key: "nav.about" },
    { to: "/demo/baku", key: "nav.demo" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <GoLocalMark className="h-8 w-8" />
          <span className="font-semibold">Go<span className="text-accent">Local</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-md hover:bg-secondary transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md bg-secondary font-medium" }}
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

          <Link
            to="/download"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--gradient-orange)] text-accent-foreground hover:opacity-90 shadow-[var(--shadow-glow-orange)]"
          >
            {t("nav.download")}
          </Link>

          {signedIn ? (
            <Link to="/profile" className="hidden md:inline-flex px-3 py-1.5 text-sm rounded-md border border-border hover:bg-secondary">
              {t("nav.profile")}
            </Link>
          ) : null}

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-2">
            <Link to="/" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-secondary">{t("nav.home")}</Link>
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
            <Link to="/contact" onClick={() => setOpen(false)} className="px-3 py-3 rounded-md hover:bg-secondary">{t("nav.contact")}</Link>
            <Link
              to="/download"
              className="mt-2 px-3 py-3 rounded-lg bg-[var(--gradient-orange)] text-accent-foreground text-center font-semibold"
              onClick={() => setOpen(false)}
            >
              {t("nav.download")}
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
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl">
            <GoLocalMark className="h-9 w-9" />
            <span className="font-semibold">Go<span className="text-accent">Local</span></span>
          </div>
          <p className="opacity-80 mt-3 text-sm max-w-xs">{t("footer.tagline")}</p>
        </div>
        <div className="text-sm space-y-2">
          <div className="opacity-60 mb-2 uppercase tracking-wider text-xs">{t("footer.product")}</div>
          <Link to="/features" className="block opacity-90 hover:opacity-100">{t("nav.features")}</Link>
          <Link to="/safety" className="block opacity-90 hover:opacity-100">{t("nav.safety")}</Link>
          <Link to="/pricing" className="block opacity-90 hover:opacity-100">{t("nav.pricing")}</Link>
          <Link to="/download" className="block opacity-90 hover:opacity-100">{t("nav.download")}</Link>
          <Link to="/demo/baku" className="block opacity-90 hover:opacity-100">{t("nav.demo")}</Link>
        </div>
        <div className="text-sm space-y-2">
          <div className="opacity-60 mb-2 uppercase tracking-wider text-xs">{t("footer.company")}</div>
          <Link to="/about" className="block opacity-90 hover:opacity-100">{t("nav.about")}</Link>
          <Link to="/partners" className="block opacity-90 hover:opacity-100">{t("nav.partners")}</Link>
          <Link to="/contact" className="block opacity-90 hover:opacity-100">{t("nav.contact")}</Link>
        </div>
        <div className="text-sm space-y-2">
          <div className="opacity-60 mb-2 uppercase tracking-wider text-xs">{t("footer.legal")}</div>
          <Link to="/legal/privacy" className="block opacity-90 hover:opacity-100">{t("footer.privacy")}</Link>
          <Link to="/legal/terms" className="block opacity-90 hover:opacity-100">{t("footer.terms")}</Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-xs text-center opacity-60">
        © {new Date().getFullYear()} GoLocal. {t("footer.rights")}
      </div>
    </footer>
  );
}
