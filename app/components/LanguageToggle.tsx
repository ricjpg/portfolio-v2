"use client";

import { useLanguage } from "../lib/LanguageContext";
import { useTheme } from "../lib/ThemeProvider";

export function LanguageToggle() {
  const { language, changeLanguage, mounted } = useLanguage();
  const { appearance } = useTheme();
  const isDark = appearance === "dark";
  const unselectedTextClass = isDark ? "text-gray-200" : "text-gray-700";

  const handleClick = (): void => {
    changeLanguage(language === "es" ? "en" : "es");
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`relative inline-flex items-center rounded-full p-1 w-20 h-10 ${
          isDark ? "bg-gray-800" : "bg-gray-200"
        }`}
        role="group"
        aria-label="Language selector"
      >
        <div
          className={`absolute top-1 left-1 w-9 h-8 rounded-full transition-transform duration-300 ease-in-out hover:bg-blue-400 ${
            isDark ? "bg-blue-500" : "bg-blue-600"
          } ${language === "en" ? "translate-x-9" : "translate-x-0"}`}
        />

        <button
          type="button"
          onClick={handleClick}
          aria-label="Español"
          aria-pressed={language === "es"}
          className={`relative z-10 w-9 h-8 font-medium transition-colors ${
            language === "es" ? "text-white" : unselectedTextClass
          }`}
        >
          ES
        </button>

        <button
          type="button"
          onClick={handleClick}
          aria-label="English"
          aria-pressed={language === "en"}
          className={`relative z-10 w-9 h-8 font-medium transition-colors ${
            language === "en" ? "text-white" : unselectedTextClass
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
