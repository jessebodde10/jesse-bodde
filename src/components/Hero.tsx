"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-pink bg-[length:200%_100%] accent-shimmer"
        aria-hidden="true"
      />

      <div
        className="bg-glow animate-glow animate-drift w-[560px] h-[560px] -top-40 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 text-lg sm:text-xl text-gradient font-medium"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
          >
            {profile.tagline} Deze site is mijn motivatiebrief, alleen dan als werkend
            voorbeeld van hoe ik denk, bouw en leer.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.dispatchEvent(new Event("open-pitch"))}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-accent-indigo to-accent-violet text-on-accent font-medium text-sm sm:text-base hover:shadow-[0_0_40px_-10px_rgba(217,119,6,0.6)] transition-shadow"
            >
              Waarom ik?
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-6 py-3.5 rounded-full glass glass-hover text-foreground text-sm sm:text-base font-medium"
            >
              Bekijk mijn werk
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-64 sm:w-80 lg:w-full max-w-sm"
          style={{ perspective: 1000 }}
        >
          <div className="animate-float-soft">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-accent-indigo via-accent-violet to-accent-pink p-[3px]"
            >
              <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5]">
                <Image
                  src="/images/jesse-bodde.png"
                  alt={`Portretfoto van ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-xl"
          >
            <p className="text-xs text-muted">Solliciteert op</p>
            <p className="text-sm font-medium text-foreground">{profile.targetRole}</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
        aria-label="Scroll naar volgende sectie"
      >
        <span className="text-xs">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
