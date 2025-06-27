import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        // Base styles
        "aspect-square size-4 shrink-0 rounded-full border border-zinc-400 dark:border-zinc-400/30 transition-[color,box-shadow] outline-none",
        "dark:bg-input/30",

        // Focus ring (light/dark mode, accessible)
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus-visible:ring-primary dark:focus:ring-blue-400",

        // Invalid state
        "aria-invalid:ring-destructive aria-invalid:ring-offset-2 aria-invalid:ring-2 dark:aria-invalid:ring-destructive/30",

        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",

        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
