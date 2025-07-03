import type { Control, FieldValues, Path } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../form";

export type MyFieldProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  label?: string;
  helperText?: string;
  optional?: boolean;
  optionalText?: string;
  render: (field: any) => React.ReactNode;
};

export function MyField<TFormValues extends FieldValues>({
  name,
  control,
  label,
  helperText,
  optional = false,
  optionalText = "(Optional)",
  render,
}: MyFieldProps<TFormValues>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="gap-0.5 mb-0.5">
              {label} {optional && optionalText}
            </FormLabel>
          )}
          <FormControl>{render(field)}</FormControl>
          {helperText && <FormDescription>{helperText}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
