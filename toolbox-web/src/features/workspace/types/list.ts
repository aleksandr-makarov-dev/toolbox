import { z } from "zod";

export type ListSummaryResponse = {
  id: number;
  title: string;
};

export const ListCreateRequestSchema = z.object({
  title: z.string().min(3).max(50),
});

export type ListCreateRequest = z.infer<typeof ListCreateRequestSchema>;
