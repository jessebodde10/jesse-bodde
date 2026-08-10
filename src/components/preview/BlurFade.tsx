"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

type BlurFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  blur?: string;
  inView?: boolean;
};

/**
 * Magic UI's signature reveal: blur plus fade plus a short rise, staggered by
 * delay. MotionConfig drops the transform under reduced motion.
 */
export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 6,
  blur = "6px",
  inView = true,
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const show = inView ? isInView : true;

  const variants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      ref={ref}
      data-reveal=""
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay: 0.04 + delay, duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type BlurFadeTextProps = {
  text: string;
  className?: string;
  delay?: number;
  yOffset?: number;
  /** Animates each character separately, as the reference hero does. */
  animateByCharacter?: boolean;
};

export function BlurFadeText({
  text,
  className,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) {
  const characters = Array.from(text);

  const variants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  if (!animateByCharacter) {
    return (
      <motion.span
        data-reveal=""
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay, duration: 0.4, ease: "easeOut" }}
        className={className}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <span className={className}>
      {characters.map((char, i) => (
        <motion.span
          data-reveal=""
          key={i}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: delay + i * 0.03, duration: 0.4, ease: "easeOut" }}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
