import { api } from "@/lib/api-client";
import type { ApiResponse } from "@/types";
import { useQuery, queryOptions } from "@tanstack/react-query";
import type { BoardDetailsResponse } from "../types/board";
import type { QueryConfig } from "@/lib/react-query";

export function getBoardById({
  boardId,
}: {
  boardId: number;
}): Promise<ApiResponse<BoardDetailsResponse>> {
  return api.get(`/boards/${boardId}`);
}

export const getBoardByIdQueryOptions = (boardId: number) => {
  return queryOptions({
    queryKey: ["boards", boardId],
    queryFn: () => getBoardById({ boardId }),
  });
};

type UseBoardByIdOptions = {
  boardId: number;
  queryConfig?: QueryConfig<typeof getBoardByIdQueryOptions>;
};

export const useBoardById = ({ boardId, queryConfig }: UseBoardByIdOptions) => {
  return useQuery({
    ...getBoardByIdQueryOptions(boardId),
    ...queryConfig,
  });
};
