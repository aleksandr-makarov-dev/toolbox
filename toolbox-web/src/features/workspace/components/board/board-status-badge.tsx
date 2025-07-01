import { Badge, badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import type { BoardStatus } from "../../types/board";

export type BoardStatusBadgeProps = {
  status: BoardStatus;
};

export function BoardStatusBadge({ status }: BoardStatusBadgeProps) {
  const { label, variant } = projectStatusMap[status];
  return <Badge variant={variant}>{label}</Badge>;
}

export const projectStatusMap: Record<
  BoardStatus,
  { label: string; variant: VariantProps<typeof badgeVariants>["variant"] }
> = {
  DRAFT: { label: "Draft", variant: "gray" },
  ACTIVE: { label: "Active", variant: "blue" },
  ARCHIVED: { label: "Archived", variant: "red" },
};
