import { Button } from "@/components/ui/button";
import { FormDialog } from "@/components/ui/form/form-dialog";
import { useCreateList } from "../api/create-list";
import { ListCreateRequestSchema, type ListCreateRequest } from "../types/list";
import { useQueryClient } from "@tanstack/react-query";
import { MyForm } from "@/components/ui/form/my-form";
import React from "react";
import { MyField } from "@/components/ui/form/my-field";
import { Input } from "@/components/ui/input";
import { getBoardByIdQueryOptions } from "../api/get-board-by-id";

export type ListCreateDialogProps = {
  trigger: React.ReactNode;
  boardId: string;
};

export function ListCreateDialog({ trigger, boardId }: ListCreateDialogProps) {
  const queryClient = useQueryClient();

  const createListMutation = useCreateList({
    mutationConfig: {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: getBoardByIdQueryOptions(boardId).queryKey,
        }),
    },
  });

  function handleCreateList(data: ListCreateRequest) {
    createListMutation.mutate({ data });
  }

  return (
    <FormDialog
      title="Создание нового списка"
      triggerButton={trigger}
      submitButton={
        <Button
          form="list-create-form"
          loading={createListMutation.isPending}
          loadingText="Создаем список..."
          type="submit"
        >
          Создать список
        </Button>
      }
      cancelButtonLabel="Отмена"
      isDone={createListMutation.isSuccess}
    >
      <MyForm
        id="list-create-form"
        schema={ListCreateRequestSchema}
        onSubmit={handleCreateList}
        options={{
          defaultValues: {
            title: "",
            boardId: boardId,
          },
        }}
      >
        {({ control }) => (
          <React.Fragment>
            <MyField
              name="title"
              control={control}
              label="Название"
              render={(field) => <Input {...field} />}
            />
          </React.Fragment>
        )}
      </MyForm>
    </FormDialog>
  );
}
