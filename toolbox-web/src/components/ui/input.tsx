import * as React from "react";
import { cn } from "@/utils/cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base layout
        "flex h-8 w-full min-w-0 rounded-md border bg-background px-3 py-1 text-sm shadow-xs transition-all outline-none",

        // Border and background
        "border-input dark:bg-input/30",

        // File input style
        "file:inline-flex file:h-7 file:border-0 file:bg-background file:text-sm file:font-medium",
        "file:text-foreground",

        // Placeholder & selection
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",

        // Focus ring (same as Button, Checkbox, etc.)
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
        "dark:focus:ring-primary/30",

        // Active/pressed state
        "active:shadow-inner",

        // Invalid state
        "aria-invalid:ring-destructive aria-invalid:ring-offset-2 aria-invalid:ring-2",
        "dark:aria-invalid:ring-destructive/30",

        // Disabled
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    />
  );
}

export { Input };
