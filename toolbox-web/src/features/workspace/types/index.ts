import { z } from "zod";

export type ProjectSummaryResponse = {
  id: number;
  title: string;
  createdAt: Date;
  status: ProjectStatus;
};

export type ProjectStatus = "DRAFT" | "ACTIVE" | "ARCHIVED";

export const ProjectCreateRequestSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().max(1000).optional(),
});

export type ProjectCreateRequest = z.infer<typeof ProjectCreateRequestSchema>;

export type StageResponse = {
  id: number;
  title: string;
  color: string;
};

export type ProjectDetailsResponse = {
  id: number;
  title: string;
  createdAt: Date;
  status: ProjectStatus;
  stages: StageResponse[];
};

export type TaskSummaryResponse = {
  id: number;
  title: string;
  createdAt: Date;
  priority: TaskPriority;
  dueDate?: Date | undefined | null;
  attachmentCount: number;
  commentsCount: number;
};

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
