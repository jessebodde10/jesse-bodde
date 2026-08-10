"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowDown, ArrowRight, FileDown } from "lucide-react";
import { profile } from "@/lib/data";

const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.09, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Portrait drifts a little slower than the page. Disabled outright under
  // reduced motion, since scroll-linked movement is the kind that causes
  // discomfort.
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.75fr] gap-14 lg:gap-20 items-center">
          <div>
            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0}
              className="eyebrow"
            >
              Portfolio
            </motion.p>

            <motion.h1
              variants={rise}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display mt-5 text-[3.25rem] sm:text-7xl lg:text-[5.5rem] leading-[0.95] text-foreground"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-lg text-lg sm:text-xl leading-snug text-accent-700"
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              variants={rise}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4"
            >
              <a
                href="#projecten"
                className="group inline-flex items-center gap-2 min-h-11 px-6 py-3 rounded bg-accent-600 text-white text-sm font-medium transition-colors hover:bg-accent-700"
              >
                Bekijk mijn projecten
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 min-h-11 px-6 py-3 rounded border border-border text-foreground text-sm font-medium transition-colors hover:border-accent-600"
              >
                <FileDown size={16} />
                Download mijn cv
              </a>
              <a
                href="#contact"
                className="link-underline inline-flex items-center min-h-11 px-1 text-sm text-muted transition-colors hover:text-foreground"
              >
                Neem contact op
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-first lg:order-none mx-auto w-56 sm:w-72 lg:w-full"
          >
            {/* Offset rule behind the portrait: an editorial frame, not a glow. */}
            <div
              className="absolute -left-3 -bottom-3 h-full w-full border-l border-b border-accent-600/40"
              aria-hidden="true"
            />
            <div className="relative aspect-4/5 overflow-hidden bg-surface">
              <motion.div
                style={reduceMotion ? undefined : { y: portraitY }}
                className="absolute inset-0 -bottom-[12%]"
              >
                <Image
                  src="/images/jesse-bodde.png"
                  alt="Portretfoto van Jesse Bodde"
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 420px"
                  className="object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#over-mij"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-20 mx-auto hidden w-fit items-center gap-2 text-xs text-muted transition-colors hover:text-foreground lg:flex"
      >
        <ArrowDown size={14} />
        Verder lezen
      </motion.a>
    </section>
  );
}
