import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "@/components/gl/UI";
import { ContactForm } from "@/components/gl/Forms";
import { Mail, Globe } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GoLocal" },
      { name: "description", content: "Get in touch with the GoLocal team — questions, press, partnerships." },
      { property: "og:title", content: "Contact — GoLocal" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 grid lg:grid-cols-5 gap-10">
      <div className="lg:col-span-2">
        <SectionHeading kicker={t("gl.contact.kicker")} title={t("gl.contact.title")} sub={t("gl.contact.sub")} />
        <div className="mt-8 space-y-3 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-4 h-4 text-accent" /> hello@golocal.app
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Globe className="w-4 h-4 text-accent" /> Baku · Istanbul
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 md:p-8">
        <ContactForm />
      </div>
    </div>
  );
}
