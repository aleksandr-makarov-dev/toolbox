import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectStatus } from "../types";
import { formatDate } from "@/utils/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { ProjectStatusBadge } from "./project-status-badge";

export type ProjectCardProps = {
  id: number;
  title: string;
  status: ProjectStatus;
  createdAt: Date;
};

export function ProjectCard({
  id,
  title,
  status,
  createdAt,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <ProjectStatusBadge status={status} />
        <Badge variant="outline">{formatDate(createdAt)}</Badge>
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <NavLink to={`/dashboard/projects/${id}`}>View Project</NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
}
