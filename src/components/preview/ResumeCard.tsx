"use client";

import { useState } from "react";
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

  return (
    <div
      onClick={() => expandable && setExpanded(!expanded)}
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
