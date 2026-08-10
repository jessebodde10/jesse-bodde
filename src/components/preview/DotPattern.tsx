import { cn } from "@/lib/cn";

/** Tiled dot grid, masked so it fades out away from the top of the page. */
export function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
    >
      <defs>
        <pattern
          id="dot-pattern"
          width={16}
          height={16}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={1} cy={1} r={1} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#dot-pattern)" />
    </svg>
  );
}
