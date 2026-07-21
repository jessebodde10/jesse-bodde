"use client";

import { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { skills, skillGroups } from "@/lib/data";

function CountUp({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  return (
    <motion.span
      onViewportEnter={() => {
        const controls = animate(0, value, {
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setDisplay(Math.round(v)),
        });
        return () => controls.stop();
      }}
      viewport={{ once: true }}
    >
      {display}%
    </motion.span>
  );
}

export default function Skills() {
  const [active, setActive] = useState<(typeof skillGroups)[number] | "Alle">("Alle");

  const filtered =
    active === "Alle" ? skills : skills.filter((s) => s.group === active);

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-accent-cyan tracking-wide uppercase mb-4">
            Mijn vaardigheden
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-2xl">
            Wat ik meebreng, technisch en niet-technisch
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {["Alle", ...skillGroups].map((g) => (
            <motion.button
              key={g}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(g as typeof active)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === g
                  ? "bg-gradient-to-r from-accent-indigo to-accent-violet text-on-accent"
                  : "glass text-muted hover:text-foreground"
              }`}
            >
              {g}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group glass glass-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-foreground font-medium text-sm sm:text-base pr-2">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-accent-cyan tabular-nums shrink-0">
                    <CountUp value={skill.level} />
                  </span>
                </div>

                <div className="h-1.5 w-full rounded-full bg-foreground/8 overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-violet"
                  />
                </div>

                <p className="text-xs text-muted leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300">
                  {skill.detail}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
