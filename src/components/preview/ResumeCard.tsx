"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ResumeCardProps = {
  /** Employer logo. Falls back to initials when we have none. */
  logo?: string;
  initials: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
};

export function ResumeCard({
  logo,
  initials,
  title,
  subtitle,
  period,
  description,
}: ResumeCardProps) {
  const [expanded, setExpanded] = useState(false);
  const expandable = Boolean(description);
  const panelId = useId();

  const toggle = () => expandable && setExpanded(!expanded);

  return (
    <div
      // The row carries the description behind a disclosure, so it needs to be
      // operable by keyboard. A real <button> cannot legally wrap the heading,
      // hence the explicit button role plus key handling.
      {...(expandable
        ? {
            role: "button",
            tabIndex: 0,
            "aria-expanded": expanded,
            "aria-controls": panelId,
            onClick: toggle,
            onKeyDown: (e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle();
              }
            },
          }
        : {})}
      className={cn(
        "block rounded-lg p-3 transition-colors",
        expandable && "cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/5"
      )}
    >
      <div className="flex items-center gap-4">
        {/* Logos vary between square marks and wide lock-ups, so the image is
            contained inside the circle rather than cropped to fill it. */}
        <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white text-xs font-semibold text-neutral-600 dark:border-white/15 dark:bg-white dark:text-neutral-300">
          {logo ? (
            <Image
              src={logo}
              alt=""
              width={48}
              height={48}
              unoptimized
              className="size-9 object-contain"
            />
          ) : (
            <span className="dark:text-neutral-700">{initials}</span>
          )}
        </span>

        <div className="min-w-0 flex-grow flex-col items-center">
          {/* Wraps rather than overflowing once the title and period no longer
              fit side by side, which happens around 320px. */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
            <h3 className="flex min-w-0 items-center gap-2 text-sm font-semibold leading-tight text-neutral-900 sm:text-base dark:text-neutral-50">
              <span className="min-w-0 break-words">{title}</span>
              {expandable && (
                <ChevronRight
                  size={14}
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-neutral-500 opacity-60 transition-transform duration-300",
                    expanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </h3>
            <div className="shrink-0 text-xs tabular-nums text-neutral-500 sm:text-sm dark:text-neutral-400">
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
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden text-xs text-neutral-600 sm:text-sm dark:text-neutral-400"
          >
            <p className="mt-2 sm:pl-16">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
