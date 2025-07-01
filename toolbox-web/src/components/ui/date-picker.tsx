import { cn } from "@/utils/cn";
import { MdCalendarMonth } from "react-icons/md";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { format } from "date-fns";
import type { Matcher } from "react-day-picker";

export type DatePickerProps = {
  label?: string;
  disabled?: Matcher | Matcher[] | undefined;
  value?: Date | undefined;
  onChange: (...event: any[]) => void;
};

export function DatePicker({
  value,
  onChange,
  label = "Choose Date",
  disabled,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-full pl-3 text-left font-normal")}
        >
          {value ? format(value, "PPP") : <span>{label}</span>}
          <MdCalendarMonth className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={disabled}
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
}
