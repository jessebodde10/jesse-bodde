"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ResumeCardProps = {
  /** Initials stand in for a company logo, which we do not have. */
  initials: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
};

export function ResumeCard({
  initials,
  title,
  subtitle,
  period,
  description,
}: ResumeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const expandable = Boolean(description);

  return (
    <div
      onClick={() => expandable && setExpanded(!expanded)}
      className={cn(
        "block rounded-lg p-3 transition-colors",
        expandable && "cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/5"
      )}
    >
      <div className="flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-xs font-semibold text-neutral-600 dark:border-white/15 dark:bg-neutral-800 dark:text-neutral-300">
          {initials}
        </span>

        <div className="flex-grow flex-col items-center">
          <div className="flex items-center justify-between gap-2">
            <h3 className="inline-flex items-center justify-center gap-2 text-sm font-semibold leading-none text-neutral-900 sm:text-base dark:text-neutral-50">
              {title}
              {expandable && (
                <ChevronRight
                  size={14}
                  className={cn(
                    "shrink-0 text-neutral-500 transition-all duration-300",
                    expanded ? "rotate-90" : "rotate-0",
                    "opacity-60 group-hover:opacity-100"
                  )}
                />
              )}
            </h3>
            <div className="shrink-0 text-right text-xs tabular-nums text-neutral-500 sm:text-sm dark:text-neutral-400">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-xs text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden text-xs text-neutral-600 sm:text-sm dark:text-neutral-400"
          >
            <p className="mt-2 pl-16">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
