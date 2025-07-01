import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { BoardStatusBadge } from "./board-status-badge";
import type { BoardStatus } from "../../types/board";

export type BoardCardProps = {
  id: string;
  title: string;
  status: BoardStatus;
};

export function BoardCard({ id, title, status }: BoardCardProps) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <BoardStatusBadge status={status} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <NavLink to={`/dashboard/boards/${id}`}>View Board</NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
}
