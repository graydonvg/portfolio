"use client";

import { Circle, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const iconSize = 36;

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Circle
        size={iconSize}
        className="animate-pulse text-yellow-200 dark:to-slate-400"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <Moon
        onClick={() => setTheme("light")}
        className="active:drop-shadow-illuminate-dark-mode hover-hover:hover:drop-shadow-illuminate-dark-mode cursor-pointer text-slate-400"
        size={iconSize}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Sun
        onClick={() => setTheme("dark")}
        className="active:drop-shadow-illuminate-light-mode hover-hover:hover:drop-shadow-illuminate-light-mode cursor-pointer text-yellow-200"
        size={iconSize}
      />
    );
  }

  return <Circle size={iconSize} />;
}
