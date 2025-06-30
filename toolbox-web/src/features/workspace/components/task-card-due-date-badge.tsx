import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils/format";

export function TaskCardDueDateBadge({ value }: { value: Date }) {
  return <Badge variant="outline">{formatDate(value)}</Badge>;
}
