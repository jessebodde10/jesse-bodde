import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  variant = "secondary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "secondary" | "solid";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors",
        variant === "secondary" &&
          "border-transparent bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
        variant === "solid" &&
          "border-transparent bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900",
        className
      )}
    >
      {children}
    </span>
  );
}
