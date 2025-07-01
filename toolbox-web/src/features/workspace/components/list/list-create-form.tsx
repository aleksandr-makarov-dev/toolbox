import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  type ListCreateRequest,
  ListCreateRequestSchema,
} from "../../types/list";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

export type ListCreateFormProps = {
  boardId: string;
  submitting?: boolean;
  formId?: string;
  onSubmit: (data: ListCreateRequest) => void;
};

export function ListCreateForm({
  boardId,
  submitting,
  formId,
  onSubmit,
}: ListCreateFormProps) {
  const form = useForm<ListCreateRequest>({
    resolver: zodResolver(ListCreateRequestSchema),
    defaultValues: {
      title: "",
      boardId: boardId,
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
                    placeholder="Как вы хотите назвать этот список?"
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
