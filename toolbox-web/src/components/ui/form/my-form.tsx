import {
  useForm,
  type FieldValues,
  type SubmitHandler,
  type UseFormProps,
  type UseFormReturn,
} from "react-hook-form";
import { Form } from "../form";
import type { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/utils/cn";

type MyFormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  schema: Schema;
  className?: string;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};
export function MyForm<
  Schema extends ZodType<any, any, any>,
  TFormValues extends FieldValues = z.infer<Schema>
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: MyFormProps<TFormValues, Schema>) {
  const form = useForm({ ...options, resolver: zodResolver(schema) });

  return (
    <Form {...form}>
      <form
        id={id}
        className={cn("space-y-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children(form)}
      </form>
    </Form>
  );
}
