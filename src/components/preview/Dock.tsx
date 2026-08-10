"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/cn";

const BASE_SIZE = 40;
const MAX_SIZE = 60;
const DISTANCE = 130;

/**
 * macOS-style dock: each icon grows as the cursor approaches it. The scaling is
 * driven by the pointer's distance to the icon's centre, so the whole row eases
 * rather than snapping.
 */
export function Dock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-[58px] w-max items-end gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 pb-3 backdrop-blur-md",
        "dark:border-white/10 dark:bg-neutral-900/80",
        className
      )}
    >
      {/* Each child receives the shared pointer position. */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <DockItem key={i} mouseX={mouseX}>
              {child}
            </DockItem>
          ))
        : children}
    </motion.div>
  );
}

function DockItem({
  mouseX,
  children,
}: {
  mouseX: MotionValue<number>;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distance,
    [-DISTANCE, 0, DISTANCE],
    [BASE_SIZE, MAX_SIZE, BASE_SIZE]
  );
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? { width: BASE_SIZE, height: BASE_SIZE } : { width: size, height: size }}
      className="flex aspect-square items-center justify-center rounded-full"
    >
      {children}
    </motion.div>
  );
}

export function DockIcon({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-full w-full items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-black/5 hover:text-black dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

export function DockButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-full w-full items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-black/5 hover:text-black dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {children}
    </button>
  );
}

export function DockSeparator() {
  return <div className="h-8 w-px self-center bg-black/10 dark:bg-white/15" aria-hidden="true" />;
}
