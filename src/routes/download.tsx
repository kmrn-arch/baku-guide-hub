import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "@/components/gl/UI";
import { StoreButtons } from "@/components/gl/StoreButtons";
import { WaitlistForm } from "@/components/gl/Forms";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download GoLocal — Coming soon to iOS & Android" },
      { name: "description", content: "GoLocal is coming soon to iOS and Android. Join the waitlist and we'll email you the moment it launches." },
      { property: "og:title", content: "Download GoLocal — Coming soon" },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  const { t } = useLang();
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative max-w-3xl mx-auto px-4 py-24 text-center text-primary-foreground">
        <SectionHeading
          kicker={t("gl.download.kicker")}
          title={t("gl.download.title")}
          sub={t("gl.download.sub")}
          align="center"
          light
        />
        <div className="mt-10 flex justify-center">
          <StoreButtons size="lg" />
        </div>
        <div className="mt-12 max-w-md mx-auto rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-6 text-left">
          <div className="text-sm font-semibold mb-3 text-center">{t("cta.joinWaitlist")}</div>
          <WaitlistForm source="download-page" />
        </div>
      </div>
    </div>
  );
}
