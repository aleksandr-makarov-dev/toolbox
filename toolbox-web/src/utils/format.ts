import dayjs from "dayjs";

export function formatDate(
  value: Date | number | undefined | null,
  format: string = "DD/MM/YYYY"
) {
  return dayjs(value).format(format);
}
