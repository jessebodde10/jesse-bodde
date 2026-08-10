"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  /** Staggers siblings. Kept small so nothing stays invisible for long. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
};

/**
 * The single scroll-reveal used across the page: a short fade with a small
 * upward slide, transform and opacity only. MotionConfig turns the slide off
 * when the visitor asks for reduced motion, leaving a plain fade.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      // The hidden state is rendered server-side as inline opacity:0, so
      // without JS the text would never appear. data-reveal lets a <noscript>
      // rule in the layout force it back to visible.
      data-reveal=""
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
