"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { playgroundQA, type PlaygroundQA } from "@/lib/data";

const fallback: PlaygroundQA = {
  id: "fallback",
  question: "",
  answer:
    "Die exacte vraag heb ik nog niet voorbereid. Stel hem gerust rechtstreeks via LinkedIn of e-mail hieronder, dan geef ik persoonlijk antwoord. Probeer ondertussen een van de vragen hierboven, die geven een goed beeld van hoe ik denk.",
};

function score(question: string, input: string) {
  const qWords = question.toLowerCase().split(/\W+/).filter((w) => w.length > 2);
  const iWords = input.toLowerCase().split(/\W+/).filter((w) => w.length > 2);
  let s = 0;
  for (const w of iWords) {
    if (qWords.some((qw) => qw.includes(w) || w.includes(qw))) s++;
  }
  return s;
}

function Typewriter({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduceMotion) return;
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 12);
    return () => clearInterval(id);
  }, [text, reduceMotion]);

  // Reduced motion gets the full answer at once, no typing.
  const shown = reduceMotion ? text : typed;

  return <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">{shown}</p>;
}

export default function Playground() {
  const [active, setActive] = useState<PlaygroundQA | null>(null);
  const [input, setInput] = useState("");
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && answerRef.current) {
      answerRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [active]);

  const handleAsk = (q: PlaygroundQA) => {
    setActive(q);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    let best: PlaygroundQA = fallback;
    let bestScore = 0;
    for (const qa of playgroundQA) {
      const s = score(qa.question, input);
      if (s > bestScore) {
        bestScore = s;
        best = qa;
      }
    }
    setActive(bestScore > 0 ? best : { ...fallback, question: input });
    setInput("");
  };

  return (
    <section id="playground" className="relative py-28 sm:py-36">
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-accent-600 tracking-wide uppercase mb-4">
            AI Playground
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Stel mij een vraag
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Een klein voorproefje van hoe ik AI inzet, kies een vraag of typ je eigen versie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 glass rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {playgroundQA.map((qa) => (
              <button
                key={qa.id}
                onClick={() => handleAsk(qa)}
                className={`inline-flex items-center min-h-11 text-xs sm:text-sm px-4 py-2 rounded-full transition-all ${
                  active?.id === qa.id
                    ? "bg-gradient-to-r from-accent-400 to-accent-500 text-on-accent"
                    : "bg-foreground/5 text-muted hover:text-foreground hover:bg-foreground/10"
                }`}
              >
                {qa.question}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Of typ je eigen vraag aan mij..."
              className="flex-1 bg-foreground/5 border border-foreground/10 rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent-500/60 transition-colors"
            />
            <button
              type="submit"
              aria-label="Verstuur vraag"
              className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 flex items-center justify-center text-on-accent hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
            </button>
          </form>

          <div ref={answerRef} className="min-h-[140px]">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id + active.answer.slice(0, 10)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-foreground/5 border border-foreground/10 p-5 sm:p-6"
                >
                  <Typewriter text={active.answer} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-[140px] text-muted text-sm gap-2"
                >
                  <Sparkles size={20} className="text-accent-600" />
                  Kies hierboven een vraag om te beginnen
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
