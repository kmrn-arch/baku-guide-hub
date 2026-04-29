import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { type Lang, tr as translate } from "./dictionary";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("baku.lang")) as Lang | null;
    if (saved && ["en", "ru", "az", "tr"].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("baku.lang", l);
  };

  return (
    <LangCtx.Provider value={{ lang, setLang, t: (k) => translate(k, lang) }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be inside LangProvider");
  return ctx;
}
