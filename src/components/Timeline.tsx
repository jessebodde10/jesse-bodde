"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Bot, Flag } from "lucide-react";
import { timeline, type TimelineItem } from "@/lib/data";

/* Icon colour follows the badge's darkest stop: dark ink on the light amber
   pair, white on the deep amber pair. Both stay above 3:1. */
const categoryStyle: Record<
  TimelineItem["category"],
  { icon: typeof GraduationCap; color: string; ink: string }
> = {
  opleiding: {
    icon: GraduationCap,
    color: "from-accent-600 to-accent-400",
    ink: "text-on-accent",
  },
  werk: {
    icon: Briefcase,
    color: "from-accent-400 to-accent-500",
    ink: "text-on-accent",
  },
  ai: { icon: Bot, color: "from-accent-600 to-accent-700", ink: "text-white" },
  toekomst: { icon: Flag, color: "from-accent-700 to-accent-600", ink: "text-white" },
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-accent-600 tracking-wide uppercase mb-4">
            Tijdlijn
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight max-w-2xl">
            Mijn route naar AI, stap voor stap
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[19px] sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-600 via-accent-500 to-accent-700 opacity-40"
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const style = categoryStyle[item.category];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="relative pl-14 sm:pl-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 15, delay: i * 0.04 + 0.15 }}
                    className={`absolute left-0 sm:left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br ${style.color} flex items-center justify-center shadow-lg`}
                  >
                    <style.icon size={16} className={style.ink} />
                  </motion.div>

                  <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-medium text-accent-600">{item.year}</span>
                      {item.org && (
                        <>
                          <span className="text-muted text-xs">·</span>
                          <span className="text-xs text-muted">{item.org}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-foreground font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
