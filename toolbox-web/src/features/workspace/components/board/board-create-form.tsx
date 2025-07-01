import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  type BoardCreateRequest,
  BoardCreateRequestSchema,
} from "../../types/board";

export type BoardCreateFormProps = {
  formId?: string | undefined;
  submitting?: boolean;
  onSubmit: (value: BoardCreateRequest) => void;
};

export function BoardCreateForm({
  formId,
  submitting,
  onSubmit,
}: BoardCreateFormProps) {
  const form = useForm<BoardCreateRequest>({
    resolver: zodResolver(BoardCreateRequestSchema),
    defaultValues: {
      title: "",
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
                    placeholder="Как вы хотите назвать этуы доску?"
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
