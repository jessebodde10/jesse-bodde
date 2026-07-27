"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, X } from "lucide-react";

const SEQUENCE = ["a", "i"];

export default function EasterEgg() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(
      "%cJesse Bodde, AI Automation Engineer",
      "font-size: 16px; font-weight: bold; color: #d97706;"
    );
    console.log(
      "%cAls je hier kijkt, kijk je verder dan de pixels. Precies de nieuwsgierigheid waar dit traineeship om vraagt.",
      "font-size: 12px; color: #5b5f6b;"
    );
    console.log(
      "%cTip: typ ergens op deze pagina de letters 'a' en 'i' achter elkaar.",
      "font-size: 12px; color: #b45309;"
    );

    let buffer: string[] = [];
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      buffer.push(e.key.toLowerCase());
      buffer = buffer.slice(-SEQUENCE.length);
      if (buffer.join("") === SEQUENCE.join("")) {
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[90] max-w-xs glass rounded-2xl p-5 shadow-2xl"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-muted hover:text-foreground"
            aria-label="Sluiten"
          >
            <X size={16} />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <TerminalSquare size={16} className="text-accent-600" />
            <span className="text-xs font-mono text-accent-600">easter_egg.found()</span>
          </div>
          <p className="text-sm text-foreground/85 leading-relaxed">
            Goed gezien. Als je code-shortcuts opmerkt, merk je ook procesoptimalisaties op,
            precies wat ik graag bouw met AI.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
