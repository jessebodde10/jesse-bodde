"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { DockButton } from "@/components/preview/Dock";

/**
 * The `dark` class on <html> is the single source of truth, so the button reads
 * it rather than mirroring it into state. A MutationObserver re-renders the
 * icon whenever the class changes, which keeps this in step even if something
 * else flips the theme.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");
const isDarkOnServer = () => false;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, isDarkOnServer);

  const toggle = () => {
    const next = !isDark();
    document.documentElement.classList.toggle("dark", next);
    // Key must match the pre-paint script in the root layout.
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <DockButton onClick={toggle} label={dark ? "Licht thema" : "Donker thema"}>
      {dark ? <Moon size={18} /> : <Sun size={18} />}
    </DockButton>
  );
}
