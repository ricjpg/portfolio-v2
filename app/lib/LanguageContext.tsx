"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import type { Language } from "../interfaces/interface";
import { translations } from "../content/db";

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: typeof translations.en;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Obtener idioma del localStorage o del navegador
    const stored = localStorage.getItem("language") as Language | null;
    const browserLang = navigator.language.split("-")[0] as Language;
    const initialLang = stored || (browserLang === "es" ? "es" : "en");

    setLanguage(initialLang);
    setMounted(true);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
