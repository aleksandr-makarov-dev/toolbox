import { Button } from "@/components/ui/button";
import { ListCreateForm } from "./list-create-form";
import { useCreateList } from "../../api/create-list";
import type { ListCreateRequest } from "../../types/list";
import { useQueryClient } from "@tanstack/react-query";
import { getBoardByIdQueryOptions } from "../../api/get-board-by-id";
import { FormDialog } from "@/components/ui/form/form-dialog";

export type ListCreateDialogProps = {
  boardId: string;
  trigger: React.ReactNode;
};

export function ListCreateDialog({ trigger, boardId }: ListCreateDialogProps) {
  const queryClient = useQueryClient();

  const listCreateMutation = useCreateList({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getBoardByIdQueryOptions(boardId).queryKey,
        });
      },
    },
  });

  function handleCreateList(data: ListCreateRequest) {
    listCreateMutation.mutate({ data: data }, {});
  }

  return (
    <FormDialog
      title="Создание нового списка"
      triggerButton={trigger}
      submitButton={
        <Button
          type="submit"
          form="list-create-form"
          loading={listCreateMutation.isPending}
          loadingText="Создаем список..."
        >
          Создать список
        </Button>
      }
      done={listCreateMutation.isSuccess}
    >
      <ListCreateForm
        boardId={boardId}
        formId="list-create-form"
        submitting={listCreateMutation.isPending}
        onSubmit={handleCreateList}
      />
    </FormDialog>
  );
}
