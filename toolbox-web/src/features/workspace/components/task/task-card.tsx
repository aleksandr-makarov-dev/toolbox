import { MdChatBubble, MdInsertDriveFile, MdCheckBox } from "react-icons/md";
import {
  KanbanCard,
  KanbanCardContent,
  KanbanCardFooter,
  KanbanCardHeader,
} from "@/components/ui/kanban/kanban-card";
import { TaskCardPriorityBadge } from "./task-card-badge";
import { TaskCardDueDateBadge } from "./task-card-due-date-badge";
import type { TaskSummaryResponse } from "../../types/task";

export type TaskCardProps = {
  task: TaskSummaryResponse;
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <KanbanCard>
      <KanbanCardHeader className=" flex items-center justify-between">
        <TaskCardPriorityBadge value={task.priority} />
        {task.dueDate && <TaskCardDueDateBadge value={task.dueDate} />}
      </KanbanCardHeader>
      <KanbanCardContent>
        <h5 className="font-medium">{task.title}</h5>
      </KanbanCardContent>
      <KanbanCardFooter>
        <div className="text-sm flex flex-row items-center justify-end gap-2">
          <div className="flex flex-row items-center gap-1">
            <MdChatBubble className="size-5 text-muted-foreground" />
            <span>{0}</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <MdInsertDriveFile className="size-5 text-muted-foreground" />
            <span>{0}</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <MdCheckBox className="size-5 text-muted-foreground" />
            <span>{0}</span>
          </div>
        </div>
      </KanbanCardFooter>
    </KanbanCard>
  );
}
