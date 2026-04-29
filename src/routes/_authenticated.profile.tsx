import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/i18n/LangProvider";

export const Route = createFileRoute("/_authenticated/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { t } = useLang();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl">{t("profile.title")}</h1>
      <div className="mt-6 rounded-xl border border-border bg-card p-6">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
        <div className="font-medium mt-1">{email ?? "…"}</div>
      </div>
      <div className="mt-6 flex gap-3">
        <Link to="/browse" className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm">Browse places</Link>
        <button onClick={signOut} className="rounded-md border border-border px-4 py-2 text-sm hover:bg-secondary">
          {t("nav.signout")}
        </button>
      </div>
    </div>
  );
}
