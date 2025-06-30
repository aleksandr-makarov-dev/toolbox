import { cn } from "@/utils/cn";
import type { HtmlHTMLAttributes } from "react";

export type KanbanColumnContentProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function KanbanColumnContent({
  children,
  className,
  ...props
}: KanbanColumnContentProps) {
  return (
    <div
      className={cn(
        "px-3 pb-3 flex flex-col gap-2 overflow-y-auto h-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type KanbanColumnHeaderProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function KanbanColumnHeader({
  children,
  className,
  ...props
}: KanbanColumnHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between h-12 p-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export type KanbanColumnProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function KanbanColumn({
  children,
  className,
  ...props
}: KanbanColumnProps) {
  return (
    <div
      className={cn(
        "border-border border w-full max-w-80 shrink-0 h-full flex flex-col bg-zinc-50 rounded",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type KanbanProps = {
  children?: React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function Kanban({ children, className, ...props }: KanbanProps) {
  return (
    <div
      className={cn(
        "flex flex-row gap-3 flex-1 h-full overflow-x-auto overflow-y-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
