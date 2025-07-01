import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { getBoardByIdQueryOptions } from "../../api/get-board-by-id";
import type { TaskCreateRequest } from "../../types/task";
import { TaskCreateForm } from "./task-create-form";
import { useCreateTask } from "../../api/create-task";
import { FormDialog } from "@/components/ui/form/form-dialog";

export type TaskCreateDialogProps = {
  boardId: string;
  listId: string;
  trigger: React.ReactNode;
};

export function TaskCreateDialog({
  trigger,
  boardId,
  listId,
}: TaskCreateDialogProps) {
  const queryClient = useQueryClient();

  const taskCreateMutation = useCreateTask({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getBoardByIdQueryOptions(boardId).queryKey,
        });
      },
    },
  });

  function handleCreateTask(data: TaskCreateRequest) {
    taskCreateMutation.mutate({ data: data });
  }

  return (
    <FormDialog
      title="Создание новой задачи"
      triggerButton={trigger}
      submitButton={
        <Button
          type="submit"
          form="task-create-form"
          loading={taskCreateMutation.isPending}
          loadingText="Создаем задачу..."
        >
          Создать задачу
        </Button>
      }
      done={taskCreateMutation.isSuccess}
    >
      <TaskCreateForm
        listId={listId}
        formId="task-create-form"
        submitting={taskCreateMutation.isPending}
        onSubmit={handleCreateTask}
      />
    </FormDialog>
  );
}
