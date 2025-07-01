import Layout from "@/components/layouts/layout";
import { PageHeader } from "@/components/layouts/page-header";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { useBoards } from "@/features/workspace/api/get-boards";
import { BoardCard } from "@/features/workspace/components/board/board-card";
import { BoardCardPlaceholder } from "@/features/workspace/components/board/board-card-placeholder";
import { BoardCreateDialog } from "@/features/workspace/components/board/board-create-dialog";
import { BoardsEmptyState } from "@/features/workspace/components/board/board-empty-state";
import { useTranslation } from "react-i18next";
import { MdAdd } from "react-icons/md";

export function DashboardBoardListPage() {
  const { t } = useTranslation("DashboardBoardListPage");

  const projectsQuery = useBoards();

  return (
    <Layout
      title="Boards"
      className="flex flex-col gap-4"
      header={
        <PageHeader
          title={t("title")}
          actions={
            <BoardCreateDialog
              trigger={
                <Button>
                  <MdAdd />
                  {t("add_board_action")}
                </Button>
              }
            />
          }
        />
      }
    >
      <Grid
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        items={projectsQuery.data?.data}
        loading={projectsQuery.isLoading}
        empty={projectsQuery.data?.data?.length === 0}
        emptyState={<BoardsEmptyState />}
        placeholderCount={4}
        render={(item) => <BoardCard key={item.id} {...item} />}
        renderPlaceholder={(i) => (
          <BoardCardPlaceholder key={`project-card-placeholder-${i}`} />
        )}
      />
    </Layout>
  );
}
