import { MdChatBubble, MdInsertDriveFile, MdCheckBox } from "react-icons/md";
import type { TaskPriority } from "../types";
import {
  KanbanCard,
  KanbanCardContent,
  KanbanCardFooter,
  KanbanCardHeader,
} from "@/components/ui/kanban-card";
import { TaskCardPriorityBadge } from "./task-card-badge";
import { TaskCardDueDateBadge } from "./task-card-due-date-badge";

export type TaskCardProps = {
  id: number;
  title: string;
  dueDate?: Date | undefined | null;
  priority: TaskPriority;
  commentsCount: number;
  attachmentsCount: number;
  checkItemsCount: number;
};

export function TaskCard({
  id,
  title,
  dueDate,
  priority,
  attachmentsCount,
  checkItemsCount,
  commentsCount,
}: TaskCardProps) {
  return (
    <KanbanCard>
      <KanbanCardHeader className=" flex items-center justify-between">
        <TaskCardPriorityBadge value={priority} />
        {dueDate && <TaskCardDueDateBadge value={dueDate} />}
      </KanbanCardHeader>
      <KanbanCardContent>
        <h5 className="font-medium">{title}</h5>
      </KanbanCardContent>
      <KanbanCardFooter>
        <div className="text-sm flex flex-row items-center justify-end gap-2">
          <div className="flex flex-row items-center gap-1">
            <MdChatBubble className="size-5 text-muted-foreground" />
            <span>{commentsCount}</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <MdInsertDriveFile className="size-5 text-muted-foreground" />
            <span>{attachmentsCount}</span>
          </div>
          <div className="flex flex-row items-center gap-1">
            <MdCheckBox className="size-5 text-muted-foreground" />
            <span>{checkItemsCount}</span>
          </div>
        </div>
      </KanbanCardFooter>
    </KanbanCard>
  );
}
