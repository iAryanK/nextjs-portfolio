"use client";

import React, { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Fullscreen, Minimize, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setIsLight(true);
      setTheme("light");
    }
  }, [setTheme, theme]);

  const enableLightMode = () => {
    setTheme("light");
    setIsLight(true);
  };

  const enableDarkMode = () => {
    setTheme("dark");
    setIsLight(false);
  };

  return (
    <Toggle className="rounded-full">
      {!isLight ? (
        <Sun onClick={enableLightMode} />
      ) : (
        <Moon onClick={enableDarkMode} />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
