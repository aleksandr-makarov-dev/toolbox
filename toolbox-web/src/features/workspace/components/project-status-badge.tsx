import { Badge, badgeVariants } from "@/components/ui/badge";
import type { ProjectStatus } from "../types";
import type { VariantProps } from "class-variance-authority";

export type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  const { label, variant } = projectStatusMap[status];
  return <Badge variant={variant}>{label}</Badge>;
}

export const projectStatusMap: Record<
  ProjectStatus,
  { label: string; variant: VariantProps<typeof badgeVariants>["variant"] }
> = {
  DRAFT: { label: "Draft", variant: "gray" },
  ACTIVE: { label: "Active", variant: "blue" },
  ARCHIVED: { label: "Archived", variant: "red" },
};
