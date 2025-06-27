import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-[4px] border border-zinc-400 transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50",
        // States
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
        "dark:bg-zinc-400/30 dark:data-[state=checked]:bg-primary",
        // Focus & Active
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus-visible:ring-primary dark:focus:ring-blue-400",
        "active:bg-primary/80",
        // Invalid state
        "aria-invalid:ring-destructive aria-invalid:ring-offset-2 aria-invalid:ring-2 dark:aria-invalid:ring-destructive/30",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
