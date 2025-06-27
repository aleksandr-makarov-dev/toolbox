import { Badge } from "@/components/ui/badge";
import {
  KanbanCard,
  KanbanCardHeader,
  KanbanCardTitle,
  KanbanCardContent,
  KanbanCardFooter,
} from "@/components/ui/kanban";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { MessageSquareTextIcon, PaperclipIcon, ClockIcon } from "lucide-react";

export type TaskCard = {
  id: number;
  title: string;
  description: string;
};

export function TaskCard({ id, title, description }: TaskCard) {
  return (
    <KanbanCard>
      <KanbanCardHeader className="flex items-start justify-between gap-2">
        <KanbanCardTitle>{title}</KanbanCardTitle>
        <Avatar className="size-6 rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </KanbanCardHeader>
      <KanbanCardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </KanbanCardContent>
      <KanbanCardFooter>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <Badge>Medium</Badge>
            <Badge variant="secondary">
              <MessageSquareTextIcon />
              10
            </Badge>
            <Badge variant="secondary">
              <PaperclipIcon />5
            </Badge>
          </div>
          <Badge variant="outline">
            <ClockIcon /> Today
          </Badge>
        </div>
      </KanbanCardFooter>
    </KanbanCard>
  );
}
