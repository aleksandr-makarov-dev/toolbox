import { zodResolver } from "@hookform/resolvers/zod";
import {
  TaskCreateRequestSchema,
  type TaskCreateRequest,
} from "../../types/task";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useKanban } from "@/context/kanban-context";
import { DatePicker } from "@/components/ui/date-picker";

export type TaskCreateFormProps = {
  listId: string;
  submitting?: boolean;
  formId?: string;
  onSubmit: (data: TaskCreateRequest) => void;
};

export function TaskCreateForm({
  listId,
  formId,
  submitting,
  onSubmit,
}: TaskCreateFormProps) {
  // TODO: passing columns through the context...
  const { columns } = useKanban();

  const form = useForm<TaskCreateRequest>({
    resolver: zodResolver(TaskCreateRequestSchema),
    defaultValues: {
      title: "",
      priority: "LOW",
      // TODO: fix "expected string but received a number" error
      listId: String(listId),
    },
  });

  return (
    <Form {...form}>
      <form id={formId} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-4">
          <FormField
            control={form.control}
            name="title"
            disabled={submitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Как вы хотите назвать эту задачу?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            disabled={submitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Приоритет</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LOW">Низкий</SelectItem>
                      <SelectItem value="MEDIUM">Средний</SelectItem>
                      <SelectItem value="HIGH">Высокий</SelectItem>
                      <SelectItem value="CRITICAL">Критичный</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="listId"
            disabled={submitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Список</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                    <SelectContent>
                      {columns.map((column) => (
                        <SelectItem key={column.id} value={String(column.id)}>
                          {column.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            disabled={submitting}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Срок выполнения</FormLabel>
                <FormControl>
                  <DatePicker
                    label="Выберите дату"
                    // TODO: matcher does not work
                    // disabled={(date) => dayjs(date).isBefore(new Date())}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
