"use client";

import { useLayoutEffect } from "react";

export function ThemeInitializer() {
  useLayoutEffect(() => {
    try {
      const theme =
        localStorage.getItem("fp-theme") ||
        (window.matchMedia("(prefers-color-scheme:dark)").matches
          ? "dark"
          : "light");
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } catch (e) {
      // Silently fail if localStorage is not available
    }
  }, []);

  return null;
}
