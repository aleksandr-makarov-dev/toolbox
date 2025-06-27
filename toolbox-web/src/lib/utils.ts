import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  value: Date | number | undefined,
  format: string = "DD/MM/YYYY"
) {
  return dayjs(value).format(format);
}
