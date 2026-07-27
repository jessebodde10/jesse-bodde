"use client";

import { MotionConfig } from "framer-motion";

/**
 * Honours the OS "reduce motion" setting for every Framer Motion animation on
 * the page: transforms are dropped, opacity transitions are kept, so elements
 * still appear and state changes stay legible.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
