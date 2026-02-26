"use client";

import { Theme } from "@radix-ui/themes";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContextType, Appearance } from "../interfaces/interface";

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearance] = useState<Appearance>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Leer el valor del localStorage cuando el componente se monta
    const storedAppearance = localStorage.getItem("appearance") as Appearance;
    if (storedAppearance) {
      setAppearance(storedAppearance);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setAppearance((prev) => {
      const newAppearance = prev === "light" ? "dark" : "light";
      localStorage.setItem("appearance", newAppearance);
      return newAppearance;
    });
  };

  return (
    <Theme
      appearance={appearance}
      accentColor="indigo"
      grayColor="slate"
      panelBackground="translucent"
      radius="large"
    >
      <ThemeContext.Provider value={{ appearance, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </Theme>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
