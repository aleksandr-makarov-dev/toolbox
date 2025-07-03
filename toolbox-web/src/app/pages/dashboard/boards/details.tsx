import Layout from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";
import type { MySelectOption } from "@/components/ui/form/my-select";
import { Kanban } from "@/components/ui/kanban/kanban";
import { KanbanCard } from "@/components/ui/kanban/kanban-card";
import { KanbanColumn } from "@/components/ui/kanban/kanban-column";
import { useBoardById } from "@/features/workspace/api/get-board-by-id";
import { useTasksByBoardId } from "@/features/workspace/api/get-tasks-by-board-id";
import { ListCreateDialog } from "@/features/workspace/components/list-create-dialog";
import { TaskCreateDialog } from "@/features/workspace/components/task-create-dialog";
import React, { useMemo } from "react";
import { MdAdd, MdMoreVert } from "react-icons/md";
import { useParams } from "react-router";

export function DashboardBoardDetailsPage() {
  const { boardId } = useParams<{ boardId: string }>();
  const boardQuery = useBoardById({ boardId: boardId! });
  const tasksQuery = useTasksByBoardId({ boardId: boardId! });

  const lists = boardQuery.data?.data?.lists;
  const tasks = tasksQuery.data?.data;

  const listOptions = useMemo<MySelectOption[] | undefined>(() => {
    return lists?.map((list) => ({
      label: list.title,
      value: String(list.id),
    }));
  }, [lists]);

  return (
    <Layout
      title="Details"
      header={
        <ListCreateDialog
          trigger={<Button>Добавить список</Button>}
          boardId={boardId!}
        />
      }
    >
      <Kanban
        columns={lists}
        groupKey="listId"
        data={tasks}
        render={({ column, items }) => (
          <KanbanColumn
            id={column.id}
            title={column.title}
            items={items}
            render={(item) => (
              <KanbanCard key={item.id}>{item.title}</KanbanCard>
            )}
            actions={
              <React.Fragment>
                <TaskCreateDialog
                  boardId={boardId!}
                  listId={String(column.id)}
                  listOptions={listOptions}
                  trigger={
                    <Button
                      className="bg-background"
                      size="iconSm"
                      variant="outline"
                    >
                      <MdAdd />
                    </Button>
                  }
                />
                <Button
                  className="bg-background"
                  size="iconSm"
                  variant="outline"
                >
                  <MdMoreVert />
                </Button>
              </React.Fragment>
            }
          />
        )}
      />
    </Layout>
  );
}
