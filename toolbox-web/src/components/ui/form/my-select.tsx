import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { cn } from "@/utils/cn";

export type MySelectOption = {
  label: string;
  value: string;
};

export type MySelectProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (newValue: string) => void;
  options: MySelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function MySelect({
  id,
  name,
  value,
  options,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className,
}: MySelectProps) {
  const renderedOptions = React.useMemo(
    () =>
      options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      )),
    [options]
  );

  return (
    <Select
      name={name}
      value={value}
      onValueChange={onChange}
      disabled={disabled}
    >
      <SelectTrigger
        id={id}
        className={cn("w-[180px]", className)}
        aria-label={placeholder}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{renderedOptions}</SelectContent>
    </Select>
  );
}

export function createOptions(options: MySelectOption[]) {
  return options;
}
