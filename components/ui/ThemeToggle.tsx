"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  // Don't render theme-dependent content until after hydration — prevents
  // the server/client mismatch caused by the anti-flash script setting dark
  // mode before React boots.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Same dimensions as the real toggle so layout doesn't shift
    return <div className="w-11 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700" />;
  }

  const dark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex items-center w-11 h-6 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
        dark ? "bg-accent" : "bg-neutral-200"
      }`}
    >
      <span
        className={`absolute flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
          dark ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      >
        {dark ? (
          <Moon size={11} className="text-accent" />
        ) : (
          <Sun size={11} className="text-neutral-500" />
        )}
      </span>
    </button>
  );
}
