import { KanbanRoot } from "@/components/ui/kanban";
import type { BoardDetailsResponse } from "../types/board";

export type BoardKanbanProps = {
  project?: BoardDetailsResponse;
  loading?: boolean;
};

export function BoardKanban({}: BoardKanbanProps) {
  return (
    <KanbanRoot>
      {/* {mockStageTasks.map(({ stage, tasks }) => (
        <KanbanColumn key={stage.id} className="max-w-96">
          <KanbanColumnHeader>
            <div className="flex items-center gap-2">
              <div className={cn("size-3 rounded-full", stage.color)} />
              <p>{stage.title}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                <MdFileCopy className="size-4 text-muted-foreground" />
                <span>{tasks.length}</span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <Button
                  className="bg-background"
                  variant="outline"
                  size="iconSm"
                >
                  <MdAdd />
                </Button>
                <Button
                  className="bg-background"
                  variant="outline"
                  size="iconSm"
                >
                  <MdMoreVert />
                </Button>
              </div>
            </div>
          </KanbanColumnHeader>
          <KanbanColumnContent>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                priority={task.priority}
                dueDate={task.dueDate}
                attachmentsCount={1}
                commentsCount={1}
                checkItemsCount={4}
              />
            ))}
            <TaskCardPlaceholder />
          </KanbanColumnContent>
        </KanbanColumn>
      ))} */}
    </KanbanRoot>
  );
}
