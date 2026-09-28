"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useLanguage } from "../lib/LanguageContext";

const VISIBILITY_THRESHOLD = 400;

export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setVisible(window.scrollY > VISIBILITY_THRESHOLD);
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const handleClick = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    document.querySelector("h1")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t.projectPage.backToTop}
      inert={!visible}
      className={`fixed right-4 bottom-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-200 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:right-6 sm:bottom-6 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:focus-visible:outline-blue-400 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}>
      <ArrowUpIcon aria-hidden />
    </button>
  );
}
