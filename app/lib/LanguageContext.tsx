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

const SUPPORTED_LANGUAGES: Language[] = ["en", "es"];
const DEFAULT_LANGUAGE: Language = "en";

const detectLanguage = (): Language => {
  const browserLanguage = navigator.language.split("-")[0];
  return (
    SUPPORTED_LANGUAGES.find((lang) => lang === browserLanguage) ??
    DEFAULT_LANGUAGE
  );
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;

    setLanguage(stored ?? detectLanguage());
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
