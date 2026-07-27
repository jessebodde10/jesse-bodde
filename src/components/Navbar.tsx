"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "Over mij" },
  { href: "#skills", label: "Vaardigheden" },
  { href: "#projects", label: "Projecten" },
  { href: "#why", label: "Waarom dit traineeship" },
  { href: "#timeline", label: "Tijdlijn" },
  { href: "#playground", label: "AI Playground" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setProgress(Math.round(v * 100)));
  }, [scrollYProgress]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-6xl"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
          }`}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#top"
            className="inline-flex items-center min-h-11 font-display text-sm sm:text-base font-semibold tracking-tight text-foreground"
          >
            Jesse<span className="text-gradient">.dev</span>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <span className="text-xs text-muted tabular-nums w-9">{progress}%</span>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-on-accent hover:opacity-90 transition-opacity"
            >
              Neem contact op
            </motion.a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-foreground p-2 min-w-11 min-h-11 flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden mt-2 glass rounded-2xl"
            >
              <nav className="flex flex-col p-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={profile.cvUrl}
                  className="mt-1 px-4 py-3 text-sm font-medium text-center rounded-lg bg-gradient-to-r from-accent-400 to-accent-500 text-on-accent"
                >
                  Download CV
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
