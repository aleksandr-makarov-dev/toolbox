import Layout from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";
import { FormDialog } from "@/components/ui/form/form-dialog";
import { MyField } from "@/components/ui/form/my-field";
import { MyForm } from "@/components/ui/form/my-form";
import { MySelect } from "@/components/ui/form/my-select";
import { Input } from "@/components/ui/input";
import { useCreateTask } from "@/features/workspace/api/create-task";
import {
  TaskCreateRequestSchema,
  type TaskCreateRequest,
} from "@/features/workspace/types/task";
import React from "react";
export function LandingPage() {
  const createTaskMutation = useCreateTask();

  function handleCreateTask(data: TaskCreateRequest) {
    createTaskMutation.mutate(
      { data },
      {
        onSuccess: (task) => {
          console.log("Saved task:", task);
        },
      }
    );
  }

  return (
    <Layout title="Landing" className="space-y-4">
      <FormDialog
        title="Создание задачи"
        description="Заполните обязательные поля формы"
        triggerButton={<Button>Открыть диалог</Button>}
        submitButton={
          <Button
            form="test-form"
            loading={createTaskMutation.isPending}
            loadingText="Создаем задачу..."
          >
            Создать задачу
          </Button>
        }
        cancelButtonLabel="Отмена"
        isDone={createTaskMutation.isSuccess}
      >
        <MyForm
          id="test-form"
          schema={TaskCreateRequestSchema}
          onSubmit={handleCreateTask}
          options={{
            defaultValues: {
              title: "",
              priority: "LOW",
              listId: "12",
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
                  <MySelect
                    className="w-full"
                    options={[
                      { label: "Бэклог", value: "12" },
                      { label: "В работе", value: "13" },
                      { label: "Тестирование", value: "14" },
                      { label: "Выполнено", value: "15" },
                    ]}
                    {...field}
                  />
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
    </Layout>
  );
}
