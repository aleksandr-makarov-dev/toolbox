import { Button } from "@/components/ui/button";
import { FormDialog } from "@/components/ui/form/form-dialog";
import { useCreateTask } from "../api/create-task";
import { useQueryClient } from "@tanstack/react-query";
import { getTasksByBoardIdQueryOptions } from "../api/get-tasks-by-board-id";
import { MyForm } from "@/components/ui/form/my-form";
import React from "react";
import { TaskCreateRequestSchema, type TaskCreateRequest } from "../types/task";
import { MyField } from "@/components/ui/form/my-field";
import { MySelect, type MySelectOption } from "@/components/ui/form/my-select";
import { Input } from "@/components/ui/input";

export type TaskCreateDialogProps = {
  trigger: React.ReactNode;
  listId: string;
  boardId: string;
  listOptions?: MySelectOption[];
};

export function TaskCreateDialog({
  trigger,
  listId,
  boardId,
  listOptions = [],
}: TaskCreateDialogProps) {
  const queryClient = useQueryClient();
  const createTaskMutation = useCreateTask({
    mutationConfig: {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: getTasksByBoardIdQueryOptions(boardId).queryKey,
        }),
    },
  });

  function handleCreateTask(data: TaskCreateRequest) {
    createTaskMutation.mutate({ data });
  }

  return (
    <FormDialog
      title="Создание новой задачи"
      triggerButton={trigger}
      submitButton={
        <Button
          form="task-create-form"
          loading={createTaskMutation.isPending}
          loadingText="Создаем задачу..."
          type="submit"
        >
          Создать задачу
        </Button>
      }
      cancelButtonLabel="Отмена"
      isDone={createTaskMutation.isSuccess}
    >
      <MyForm
        id="task-create-form"
        schema={TaskCreateRequestSchema}
        onSubmit={handleCreateTask}
        options={{
          defaultValues: {
            title: "",
            priority: "LOW",
            listId: listId,
            dueDate: "",
          },
        }}
      >
        {({ control }) => (
          <React.Fragment>
            <MyField
              control={control}
              name="title"
              label="Название"
              render={(field) => <Input {...field} />}
            />
            <MyField
              control={control}
              name="priority"
              label="Приоритет"
              render={(field) => (
                <MySelect
                  className="w-full"
                  options={[
                    { label: "Низкий", value: "LOW" },
                    { label: "Средний", value: "MEDIUM" },
                    { label: "Высокий", value: "HIGH" },
                    { label: "Критический", value: "CRITICAL" },
                  ]}
                  {...field}
                />
              )}
            />
            <MyField
              control={control}
              name="listId"
              label="Список"
              render={(field) => (
                <MySelect className="w-full" options={listOptions} {...field} />
              )}
            />
            <MyField
              control={control}
              name="dueDate"
              label="Срок выполнения"
              optional
              render={(field) => (
                <Input className="w-min" type="datetime-local" {...field} />
              )}
            />
          </React.Fragment>
        )}
      </MyForm>
    </FormDialog>
  );
}
