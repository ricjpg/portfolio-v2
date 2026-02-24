"use client";

import { Button } from "@radix-ui/themes";
import { useTheme } from "@/app/lib/ThemeProvider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { appearance, toggleTheme } = useTheme();

  return (
    <div className="fixed top-20 right-4 z-50 ">
      <Button variant="soft" onClick={toggleTheme} size="4">
        {appearance === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
}
