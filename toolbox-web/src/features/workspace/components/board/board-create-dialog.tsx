import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { BoardCreateForm } from "./board-create-form";
import { useCreateBoard } from "../../api/create-board";
import type { BoardCreateRequest } from "../../types/board";
import { getBoardsQueryOptions } from "../../api/get-boards";
import { FormDialog } from "@/components/ui/form/form-dialog";

export type BoardCreateDialogProps = {
  trigger: React.ReactNode;
};

export function BoardCreateDialog({ trigger }: BoardCreateDialogProps) {
  const queryClient = useQueryClient();

  const boardCreateMutation = useCreateBoard({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getBoardsQueryOptions().queryKey,
        });
      },
    },
  });

  function handleCreateBoard(data: BoardCreateRequest) {
    boardCreateMutation.mutate({ data: data });
  }

  return (
    <FormDialog
      title="Создание новой доски"
      triggerButton={trigger}
      submitButton={
        <Button
          type="submit"
          form="board-create-form"
          loading={boardCreateMutation.isPending}
          loadingText="Создаем доску..."
        >
          Создать доску
        </Button>
      }
      done={boardCreateMutation.isSuccess}
    >
      <BoardCreateForm
        formId="board-create-form"
        submitting={boardCreateMutation.isPending}
        onSubmit={handleCreateBoard}
      />
    </FormDialog>
  );
}
