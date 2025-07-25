import * as React from "react";

import { cn } from "@/utils/cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-background px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // Focus ring (same as Button, Checkbox, etc.)
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "dark:focus:ring-primary/30",

        className
      )}
      {...props}
    />
  );
}

export { Textarea };
