import {
  KanbanCard,
  KanbanCardContent,
  KanbanCardFooter,
  KanbanCardHeader,
} from "@/components/ui/kanban-card";
import { Skeleton } from "@/components/ui/skeleton";

export function TaskCardPlaceholder() {
  return (
    <KanbanCard>
      <KanbanCardHeader className=" flex items-center justify-between">
        <Skeleton className="h-4 w-14" />
        <Skeleton className="h-4 w-18" />
      </KanbanCardHeader>
      <KanbanCardContent>
        <Skeleton className="h-8 w-full" />
      </KanbanCardContent>
      <KanbanCardFooter>
        <div className="text-sm flex flex-row items-center justify-end gap-2">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
        </div>
      </KanbanCardFooter>
    </KanbanCard>
  );
}
