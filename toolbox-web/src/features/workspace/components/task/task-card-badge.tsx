import { Badge, badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import type { TaskPriority } from "../../types/task";

export function TaskCardPriorityBadge({ value }: { value: TaskPriority }) {
  const { label, variant } = taskPriorityMap[value];
  return <Badge variant={variant}>{label}</Badge>;
}

const taskPriorityMap: Record<
  TaskPriority,
  { label: string; variant: VariantProps<typeof badgeVariants>["variant"] }
> = {
  LOW: { label: "Low", variant: "green" },
  MEDIUM: { label: "Medium", variant: "yellow" },
  HIGH: { label: "High", variant: "orange" },
  CRITICAL: { label: "Critical", variant: "red" },
};
