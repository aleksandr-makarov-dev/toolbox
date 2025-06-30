import Layout from "@/components/layouts/layout";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useBoardById } from "@/features/workspace/api/get-board-by-id";
import { Skeleton } from "@/components/ui/skeleton";
import { useTasksByBoardId } from "@/features/workspace/api/get-tasks-by-board-id";
import { TaskCardPriorityBadge } from "@/features/workspace/components/task-card-badge";

export function DashboardBoardDetailsPage() {
  const { t } = useTranslation("DashboardBoardDetailsPage");

  const { boardId } = useParams<{ boardId: string }>();
  const boardQuery = useBoardById({
    boardId: Number(boardId),
    queryConfig: { enabled: !!boardId },
  });

  const tasksQuery = useTasksByBoardId({
    boardId: Number(boardId),
    queryConfig: {
      enabled: !!boardId,
    },
  });

  return (
    <Layout
      title="Board"
      className="flex flex-col gap-4 overflow-hidden"
      header={
        <div className="flex flex-row gap-2 items-center justify-between flex-1">
          {boardQuery.isLoading ? (
            <Skeleton className="h-8 max-w-80 w-full" />
          ) : (
            <h2 className="text-lg font-medium">
              {boardQuery.data?.data?.title}
            </h2>
          )}
          <div className="flex flex-row gap-1 items-center">
            <Button>
              <MdAdd />
              {t("add_list_action")}
            </Button>
            {/* <Button>
              <MdAdd />
              {t("add_task_action")}
            </Button> */}
          </div>
        </div>
      }
    >
      <ul className="flex flex-col gap-2">
        {tasksQuery.data?.data?.map((task) => (
          <li key={task.id} className="flex flex-row gap-2">
            <p>{task.title}</p>
            <TaskCardPriorityBadge value={task.priority} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
