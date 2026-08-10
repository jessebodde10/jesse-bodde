"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#over-mij", label: "Over mij" },
  { href: "#projecten", label: "Projecten" },
  { href: "#ervaring", label: "Ervaring" },
  { href: "#vaardigheden", label: "Vaardigheden" },
  { href: "#documenten", label: "Documenten" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marks the section currently crossing the upper third of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
          <a
            href="#top"
            className="font-display text-lg sm:text-xl inline-flex items-center min-h-11 text-foreground"
          >
            {profile.name}
          </a>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Hoofdnavigatie">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative inline-flex items-center min-h-11 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-0 right-0 bottom-2.5 h-px bg-accent-600"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden -mr-2 min-w-11 min-h-11 flex items-center justify-center text-foreground"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-background border-b border-rule"
          >
            <nav className="mx-auto max-w-6xl px-5 py-2" aria-label="Mobiele navigatie">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center min-h-12 text-base text-foreground border-b border-rule last:border-0"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
