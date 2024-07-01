"use client";

import { Circle, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const iconSize = 48;

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <Circle size={iconSize} className="animate-pulse text-neutral-50" />;

  if (resolvedTheme === "dark") {
    return (
      <Moon
        onClick={() => setTheme("light")}
        className="cursor-pointer text-slate-400 active:drop-shadow-illuminate-moon hover-hover:hover:drop-shadow-illuminate-moon"
        size={iconSize}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Sun
        onClick={() => setTheme("dark")}
        className="cursor-pointer text-yellow-200 active:drop-shadow-illuminate-sun hover-hover:hover:drop-shadow-illuminate-sun"
        size={iconSize}
      />
    );
  }

  return <Circle size={iconSize} className="animate-pulse text-neutral-50" />;
}
