import { Button } from "@/components/ui/button";
import {
  Kanban,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHeader,
} from "@/components/ui/kanban";
import { cn } from "@/utils/cn";
import { MdAdd, MdFileCopy, MdMoreVert } from "react-icons/md";
import { mockStageTasks } from "../data";
import { TaskCard } from "./task-card";
import type { ProjectDetailsResponse } from "../types";
import { TaskCardPlaceholder } from "./task-card-placeholder";

export type ProjectKanbanProps = {
  project?: ProjectDetailsResponse;
  loading?: boolean;
};

export function ProjectKanban({ loading, project }: ProjectKanbanProps) {
  return (
    <Kanban>
      {mockStageTasks.map(({ stage, tasks }) => (
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
                attachmentsCount={task.attachmentCount}
                commentsCount={task.commentsCount}
                checkItemsCount={4}
              />
            ))}
            <TaskCardPlaceholder />
          </KanbanColumnContent>
        </KanbanColumn>
      ))}
    </Kanban>
  );
}
