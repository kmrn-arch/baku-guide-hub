import { useState, type ReactNode } from "react";
import { useLang } from "@/i18n/LangProvider";
import { useServerFn } from "@tanstack/react-start";
import { submitWaitlist, submitContactMessage, submitPartnerInquiry } from "@/server/forms.functions";
import { z } from "zod";

function FieldLabel({ children, optional }: { children: ReactNode; optional?: boolean }) {
  const { t } = useLang();
  return (
    <label className="text-sm font-medium text-foreground/80">
      {children}
      {optional && <span className="ml-1 text-xs text-muted-foreground font-normal">({t("gl.form.optional")})</span>}
    </label>
  );
}

const inputCls =
  "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ source, compact = false }: { source: string; compact?: boolean }) {
  const { t, lang } = useLang();
  const fn = useServerFn(submitWaitlist);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const parsed = z.string().trim().email().max(255).safeParse(email);
    if (!parsed.success) {
      setStatus("error");
      setMsg("Please enter a valid email.");
      return;
    }
    try {
      const r = await fn({ data: { email: parsed.data, language: lang, source } });
      if (r.ok) {
        setStatus("success");
        setMsg(r.already ? t("gl.waitlist.already") : t("gl.waitlist.thanks"));
        setEmail("");
      } else {
        setStatus("error");
        setMsg(r.error || t("gl.form.error"));
      }
    } catch {
      setStatus("error");
      setMsg(t("gl.form.error"));
    }
  };

  return (
    <form onSubmit={onSubmit} className={compact ? "flex flex-col sm:flex-row gap-2" : "max-w-md"}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("gl.waitlist.placeholder")}
        className={`${inputCls} ${compact ? "mt-0 flex-1" : ""}`}
        aria-label="Email"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`rounded-lg bg-[var(--gradient-orange)] text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition shadow-[var(--shadow-glow-orange)] ${compact ? "" : "mt-3"}`}
      >
        {status === "loading" ? "…" : t("cta.joinWaitlist")}
      </button>
      {msg && (
        <p className={`text-sm mt-2 sm:mt-0 sm:ml-3 self-center ${status === "success" ? "text-[oklch(0.45_0.14_165)]" : "text-destructive"}`}>
          {msg}
        </p>
      )}
    </form>
  );
}

export function ContactForm() {
  const { t } = useLang();
  const fn = useServerFn(submitContactMessage);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const r = await fn({ data: form });
      if (r.ok) {
        setStatus("success");
        setMsg(t("gl.form.success"));
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setMsg(r.error || t("gl.form.error"));
      }
    } catch {
      setStatus("error");
      setMsg(t("gl.form.error"));
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>{t("gl.form.name")}</FieldLabel>
          <input required maxLength={120} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
        </div>
        <div>
          <FieldLabel>{t("gl.form.email")}</FieldLabel>
          <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        </div>
      </div>
      <div>
        <FieldLabel optional>{t("gl.form.subject")}</FieldLabel>
        <input maxLength={160} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputCls} />
      </div>
      <div>
        <FieldLabel>{t("gl.form.message")}</FieldLabel>
        <textarea required maxLength={2000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} />
      </div>
      <div className="flex items-center justify-between gap-4">
        <button type="submit" disabled={status === "loading"} className="rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition">
          {status === "loading" ? "…" : t("cta.send")}
        </button>
        {msg && <p className={`text-sm ${status === "success" ? "text-[oklch(0.45_0.14_165)]" : "text-destructive"}`}>{msg}</p>}
      </div>
    </form>
  );
}

export function PartnerForm() {
  const { t } = useLang();
  const fn = useServerFn(submitPartnerInquiry);
  const [form, setForm] = useState({
    business_name: "",
    business_type: "Hotel",
    contact_name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const r = await fn({ data: form });
      if (r.ok) {
        setStatus("success");
        setMsg(t("gl.form.success"));
        setForm({ business_name: "", business_type: "Hotel", contact_name: "", email: "", phone: "", city: "", message: "" });
      } else {
        setStatus("error");
        setMsg(r.error || t("gl.form.error"));
      }
    } catch {
      setStatus("error");
      setMsg(t("gl.form.error"));
    }
  };

  const types = [
    { v: "Hotel", k: "gl.bizType.hotel" },
    { v: "Restaurant", k: "gl.bizType.restaurant" },
    { v: "Taxi / Transport", k: "gl.bizType.taxi" },
    { v: "Tour agency", k: "gl.bizType.tour" },
    { v: "Other", k: "gl.bizType.other" },
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>{t("gl.form.business")}</FieldLabel>
          <input required maxLength={120} value={form.business_name} onChange={(e) => setForm({ ...form, business_name: e.target.value })} className={inputCls} />
        </div>
        <div>
          <FieldLabel>{t("gl.form.type")}</FieldLabel>
          <select value={form.business_type} onChange={(e) => setForm({ ...form, business_type: e.target.value })} className={inputCls}>
            {types.map((tp) => (
              <option key={tp.v} value={tp.v}>{t(tp.k)}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel>{t("gl.form.contact")}</FieldLabel>
          <input required maxLength={120} value={form.contact_name} onChange={(e) => setForm({ ...form, contact_name: e.target.value })} className={inputCls} />
        </div>
        <div>
          <FieldLabel>{t("gl.form.email")}</FieldLabel>
          <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel optional>{t("gl.form.phone")}</FieldLabel>
          <input maxLength={40} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
        </div>
        <div>
          <FieldLabel optional>{t("gl.form.city")}</FieldLabel>
          <input maxLength={80} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
        </div>
      </div>
      <div>
        <FieldLabel optional>{t("gl.form.message")}</FieldLabel>
        <textarea maxLength={2000} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} />
      </div>
      <div className="flex items-center justify-between gap-4">
        <button type="submit" disabled={status === "loading"} className="rounded-lg bg-[var(--gradient-orange)] text-accent-foreground px-6 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition shadow-[var(--shadow-glow-orange)]">
          {status === "loading" ? "…" : t("cta.becomePartner")}
        </button>
        {msg && <p className={`text-sm ${status === "success" ? "text-[oklch(0.45_0.14_165)]" : "text-destructive"}`}>{msg}</p>}
      </div>
    </form>
  );
}
