import { cn } from "@/utils/cn";
import type { HtmlHTMLAttributes } from "react";

export type KanbanCardHeaderProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function KanbanCardHeader({
  children,
  className,
  ...props
}: KanbanCardHeaderProps) {
  return (
    <div className={cn("p-3 pb-0", className)} {...props}>
      {children}
    </div>
  );
}

export type KanbanCardContentProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function KanbanCardContent({
  children,
  className,
  ...props
}: KanbanCardContentProps) {
  return (
    <div className={cn("p-3", className)} {...props}>
      {children}
    </div>
  );
}

export type KanbanCardFooterProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function KanbanCardFooter({
  children,
  className,
  ...props
}: KanbanCardFooterProps) {
  return (
    <div className={cn("p-3 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export type KanbanCardProps = {
  selected?: boolean;
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function KanbanCard({
  selected,
  children,
  className,
  ...props
}: KanbanCardProps) {
  return (
    <div
      className={cn(
        "bg-background border-border border rounded shrink-0",
        { "ring-2 ring-primary ring-offset-1": selected },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
