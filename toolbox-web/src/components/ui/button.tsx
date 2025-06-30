import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus-visible:ring-2 focus:ring-offset-1 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary dark:focus:ring-blue-400",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus:ring-red-500 dark:focus:ring-red-400 dark:bg-destructive/60",
        outline:
          "border border-border bg-zinc-50 hover:bg-accent hover:text-accent-foreground focus:ring-primary dark:focus:ring-blue-400 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-primary dark:focus:ring-blue-400",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 focus:ring-primary dark:focus:ring-blue-400",
        link: "text-primary focus:ring-primary dark:focus:ring-blue-400",
      },
      size: {
        default: "h-8 px-3.5 py-1.5 has-[>svg]:px-2.5",
        sm: "h-7 rounded-md gap-1.5 px-2.5 has-[>svg]:px-2",
        lg: "h-9 rounded-md px-5 has-[>svg]:px-3",
        icon: "size-8",
        iconSm: "size-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  children,
  disabled,
  asChild = false,
  loading = false,
  loadingText = "Loading...",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingText?: string;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled ?? loading}
      {...props}
    >
      {loading ? loadingText : children}
    </Comp>
  );
}

export { Button, buttonVariants };
