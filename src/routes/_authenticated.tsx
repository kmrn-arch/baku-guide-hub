import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated")({
  component: AuthGate,
});

function AuthGate() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "in" | "out">("loading");

  useEffect(() => {
    let active = true;
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!active) return;
      setStatus(session ? "in" : "out");
    });
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setStatus(data.session ? "in" : "out");
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (status === "out") {
      const next = typeof window !== "undefined" ? window.location.pathname + window.location.search : "/";
      navigate({ to: "/auth", search: { next } });
    }
  }, [status, navigate]);

  if (status !== "in") {
    return (
      <div className="min-h-[60vh] grid place-items-center text-muted-foreground text-sm">
        Loading…
      </div>
    );
  }
  return <Outlet />;
}
