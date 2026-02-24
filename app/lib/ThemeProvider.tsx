"use client";

import { Theme } from "@radix-ui/themes";
import { createContext, useContext, useState } from "react";
import { ThemeContextType, Appearance } from "../interfaces/interface";

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearance] = useState<Appearance>("light");

  const toggleTheme = () => {
    setAppearance((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("appearance", appearance);
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
