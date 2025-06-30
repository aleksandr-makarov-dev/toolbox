import { cn } from "@/utils/cn";
import type { HtmlHTMLAttributes } from "react";

export type GridProps<T> = {
  items?: T[] | null | undefined;
  loading?: boolean;
  empty?: boolean;
  emptyState?: React.ReactNode;
  placeholderCount: number;
  render: (item: T, index: number) => React.ReactNode;
  renderPlaceholder: (index: number) => React.ReactNode;
} & HtmlHTMLAttributes<HTMLDivElement>;

export function Grid<T>({
  items,
  loading,
  empty,
  emptyState,
  placeholderCount,
  className,
  render,
  renderPlaceholder,
  ...props
}: GridProps<T>) {
  if (loading)
    return (
      <div className={cn("grid gap-1", className)} {...props}>
        {Array(placeholderCount)
          .fill(0)
          .map((_, i) => renderPlaceholder(i))}
      </div>
    );

  if (empty) return emptyState;

  return (
    <div className={cn("grid gap-1", className)} {...props}>
      {items?.map((item, i) => render(item, i))}
    </div>
  );
}
