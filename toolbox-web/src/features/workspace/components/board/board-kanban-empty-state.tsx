import {
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHeader,
  KanbanRoot,
} from "@/components/ui/kanban/kanban";
import { Skeleton } from "@/components/ui/skeleton";
import { TaskCardPlaceholder } from "../task/task-card-placeholder";

export function BoardKanbanEmptyState() {
  return (
    <KanbanRoot>
      {Array(4)
        .fill(0)
        .map((_, ic) => (
          <KanbanColumn
            key={`kanban-column-placeholder-${ic}`}
            className="max-w-96"
          >
            <KanbanColumnHeader>
              <div className="flex flex-row w-full items-center gap-2 justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <Skeleton className="size-3 rounded-full" />
                  <Skeleton className="h-6 w-36" />
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <Skeleton className="size-7" />
                  <Skeleton className="size-7" />
                </div>
              </div>
            </KanbanColumnHeader>
            <KanbanColumnContent>
              {Array(4)
                .fill(0)
                .map((_, it) => (
                  <TaskCardPlaceholder
                    key={`kanban-task-placeholder-${ic}-${it}`}
                  />
                ))}
            </KanbanColumnContent>
          </KanbanColumn>
        ))}
    </KanbanRoot>
  );
}
