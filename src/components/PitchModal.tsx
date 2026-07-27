"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";
import { playgroundQA } from "@/lib/data";

const pitch = playgroundQA.find((q) => q.id === "hire-me")!;

export default function PitchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-pitch", handler);
    return () => window.removeEventListener("open-pitch", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-xl w-full glass rounded-3xl p-7 sm:p-9"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-muted hover:text-foreground transition-colors"
              aria-label="Sluiten"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.15 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center mb-5"
            >
              <Zap size={22} className="text-on-accent" />
            </motion.div>

            <h3 className="text-2xl font-semibold text-foreground mb-1">{pitch.question}</h3>
            <p className="text-xs text-accent-600 mb-5">De overtuigende versie</p>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">{pitch.answer}</p>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 text-on-accent text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Laten we praten
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
