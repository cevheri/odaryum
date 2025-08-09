import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "neutral" | "success" | "warning";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-black text-white",
    neutral: "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
    success: "bg-emerald-500 text-white",
    warning: "bg-amber-500 text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}


