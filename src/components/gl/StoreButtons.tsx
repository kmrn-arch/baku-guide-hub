import { Apple, Play } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";

/** App Store / Google Play buttons with "Coming soon" ribbons.
 *  Currently link to /download — TODO: replace href with real store URLs at launch.
 */
export function StoreButtons({ size = "md" }: { size?: "md" | "lg" }) {
  const { t } = useLang();
  const isLg = size === "lg";
  return (
    <div className="flex flex-wrap gap-3">
      <ComingSoonButton
        href="/download"
        line1={t("gl.download.appstore.line1")}
        line2={t("gl.download.appstore")}
        Icon={Apple}
        large={isLg}
      />
      <ComingSoonButton
        href="/download"
        line1={t("gl.download.playstore.line1")}
        line2={t("gl.download.playstore")}
        Icon={Play}
        large={isLg}
      />
    </div>
  );
}

function ComingSoonButton({
  href,
  line1,
  line2,
  Icon,
  large,
}: {
  href: string;
  line1: string;
  line2: string;
  Icon: typeof Apple;
  large: boolean;
}) {
  const { t } = useLang();
  return (
    <a
      href={href}
      className={`relative inline-flex items-center gap-3 rounded-xl bg-foreground text-background hover:opacity-90 transition shadow-[var(--shadow-card)] ${
        large ? "px-6 py-4" : "px-5 py-3"
      }`}
    >
      <span className="coming-soon-ribbon">{t("comingSoon")}</span>
      <Icon className={large ? "w-7 h-7" : "w-6 h-6"} />
      <span className="text-left">
        <span className={`block ${large ? "text-[11px]" : "text-[10px]"} opacity-80 leading-none`}>{line1}</span>
        <span className={`block font-semibold ${large ? "text-lg" : "text-base"} leading-tight`}>{line2}</span>
      </span>
    </a>
  );
}
