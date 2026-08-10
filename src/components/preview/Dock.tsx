"use client";

import { createContext, useContext, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/cn";

/** 44px is the minimum comfortable touch target, so the resting size matches it
 *  rather than the 40px the reference dock uses. */
const BASE_SIZE = 44;
const MAX_SIZE = 60;
const DISTANCE = 130;

/**
 * The pointer position is shared through context rather than by wrapping each
 * child. Wrapping broke across the server/client boundary: the page is a server
 * component, so element identity is not preserved and separators were being
 * sized as if they were icons.
 */
const MouseXContext = createContext<MotionValue<number> | null>(null);

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
    <MouseXContext.Provider value={mouseX}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          // Six 44px targets plus tighter spacing come to 294 on a 320px
          // screen. The gap and padding open up from the small breakpoint on.
          "mx-auto flex h-[60px] w-max items-end gap-1 rounded-2xl border border-black/10 bg-white/80 px-1 pb-2 backdrop-blur-md sm:gap-2 sm:px-3 sm:pb-3",
          "dark:border-white/10 dark:bg-neutral-900/80",
          className
        )}
      >
        {children}
      </motion.div>
    </MouseXContext.Provider>
  );
}

/** Square that grows toward the pointer. Used by the icon and button wrappers. */
function DockItem({ children }: { children: React.ReactNode }) {
  const shared = useContext(MouseXContext);
  const standalone = useMotionValue(Infinity);
  const mouseX = shared ?? standalone;

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
      style={
        reduceMotion ? { width: BASE_SIZE, height: BASE_SIZE } : { width: size, height: size }
      }
      className="flex aspect-square shrink-0 items-center justify-center rounded-full"
    >
      {children}
    </motion.div>
  );
}

/** Each icon sits in its own outlined circle, as in the reference dock. */
const itemClasses =
  "flex h-full w-full items-center justify-center rounded-full border border-black/10 bg-white text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black dark:border-white/15 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white";

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
    <DockItem>
      <a
        href={href}
        aria-label={label}
        title={label}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={itemClasses}
      >
        {children}
      </a>
    </DockItem>
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
    <DockItem>
      <button onClick={onClick} aria-label={label} title={label} className={itemClasses}>
        {children}
      </button>
    </DockItem>
  );
}

export function DockSeparator() {
  // Purely decorative, so it is the first thing to go when width is scarce.
  return (
    <div
      className="mx-1 hidden h-8 w-px self-center bg-black/10 sm:block dark:bg-white/15"
      aria-hidden="true"
    />
  );
}
