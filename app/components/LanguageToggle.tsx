"use client";

import { useLanguage } from "../lib/LanguageContext";
import { Language } from "../interfaces/interface";

export function LanguageToggle() {
  const { language, changeLanguage, mounted } = useLanguage();
  const handleClick = (): void => {
    {
      language === "es" ? changeLanguage("en") : changeLanguage("es");
      console.log("Language set: ", { language });
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50 ">
      <div className="relative inline-flex items-center bg-gray-200 rounded-full p-1 w-20 h-10">
        {/* Fondo deslizante */}
        <div
          className={` absolute top-1 left-1 w-9 h-8 bg-blue-600 hover:bg-blue-400 rounded-full transition-transform duration-300 ease-in-out ${
            language === "es" ? "translate-x-9" : "translate-x-0"
          }`}
        />

        {/* Botón EN */}
        <button
          onClick={handleClick}
          className={`relative z-10 w-9 h-8 font-medium transition-colors${
            language === "es" ? "text-gray-700" : "text-white"
          }`}
        >
          ES
        </button>

        {/* Botón ES */}
        <button
          onClick={handleClick}
          className={`relative z-10 w-9 h-8 font-medium transition-colors ${
            language === "en" ? "text-gray-700" : "text-white"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
