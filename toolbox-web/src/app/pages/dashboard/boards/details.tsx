import Layout from "@/components/layouts/layout";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useBoardById } from "@/features/workspace/api/get-board-by-id";
import { useTasksByBoardId } from "@/features/workspace/api/get-tasks-by-board-id";
import { BoardKanban } from "@/features/workspace/components/board/board-kanban";
import { KanbanProvider } from "@/context/kanban-context";
import { BoardPageHeader } from "@/features/workspace/components/board/board-page-header";
import { ListCreateDialog } from "@/features/workspace/components/list/list-create-dialog";

export function DashboardBoardDetailsPage() {
  const { t } = useTranslation("DashboardBoardDetailsPage");

  const { boardId } = useParams<{ boardId: string }>();

  const boardQuery = useBoardById({
    boardId: boardId as string,
    queryConfig: { enabled: !!boardId },
  });

  const tasksQuery = useTasksByBoardId({
    boardId: boardId as string,
    queryConfig: {
      enabled: !!boardId,
    },
  });

  return (
    <KanbanProvider
      columns={boardQuery.data?.data?.lists}
      data={tasksQuery.data?.data}
      loading={tasksQuery.isLoading || boardQuery.isLoading}
    >
      <Layout
        title="Board"
        className="flex flex-col gap-4 overflow-hidden"
        header={
          <BoardPageHeader
            title={boardQuery.data?.data?.title}
            loading={boardQuery.isLoading}
            actions={
              <ListCreateDialog
                boardId={boardId!}
                trigger={
                  <Button>
                    <MdAdd />
                    {t("add_list_action")}
                  </Button>
                }
              />
            }
          />
        }
      >
        <BoardKanban boardId={boardId!} />
      </Layout>
    </KanbanProvider>
  );
}
