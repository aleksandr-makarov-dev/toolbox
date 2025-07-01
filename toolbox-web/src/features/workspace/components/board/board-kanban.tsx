import {
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHeader,
  KanbanRoot,
} from "@/components/ui/kanban/kanban";
import { useKanban } from "@/context/kanban-context";
import { BoardKanbanEmptyState } from "./board-kanban-empty-state";
import { TaskCard } from "../task/task-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { MdFileCopy, MdAdd, MdMoreVert } from "react-icons/md";
import { TaskCreateDialog } from "../task/task-create-dialog";
import type { ListSummaryResponse } from "../../types/list";
import type { TaskSummaryResponse } from "../../types/task";

export type BoardKanbanColumnProps = {
  boardId: string;
  column: ListSummaryResponse;
  data: TaskSummaryResponse[];
};

export function BoardKanbanColumn({
  column,
  data,
  boardId,
}: BoardKanbanColumnProps) {
  return (
    <KanbanColumn key={column.id} className="max-w-96">
      <KanbanColumnHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={cn("size-3 rounded-full", "bg-green-400")} />
            <p>{column.title}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center gap-1 text-sm">
              <MdFileCopy className="size-4 text-muted-foreground" />
              <span>{data.length}</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <TaskCreateDialog
                boardId={boardId}
                listId={column.id}
                trigger={
                  <Button
                    className="bg-background"
                    variant="outline"
                    size="iconSm"
                  >
                    <MdAdd />
                  </Button>
                }
              />
              <Button className="bg-background" variant="outline" size="iconSm">
                <MdMoreVert />
              </Button>
            </div>
          </div>
        </div>
      </KanbanColumnHeader>
      <KanbanColumnContent>
        {data.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </KanbanColumnContent>
    </KanbanColumn>
  );
}

export function BoardKanban({ boardId }: { boardId: string }) {
  const { columns, data, loading } = useKanban();

  if (loading) {
    return <BoardKanbanEmptyState />;
  }

  return (
    <KanbanRoot>
      {columns.map((column) => (
        <BoardKanbanColumn
          key={column.id}
          boardId={boardId}
          column={column}
          data={data[column.id] || []}
        />
      ))}
    </KanbanRoot>
  );
}
