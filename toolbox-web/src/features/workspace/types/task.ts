export type TaskSummaryResponse = {
  id: number;
  title: string;
  priority: TaskPriority;
  dueDate?: Date | undefined | null;
};

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
