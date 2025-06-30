import type { ApiResponse } from "@/types";
import type { ProjectSummaryResponse } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import type { QueryConfig } from "@/lib/react-query";
import { api } from "@/lib/api-client";
import { mockProjects } from "../data";

export function getProjects(): Promise<ApiResponse<ProjectSummaryResponse[]>> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          flag: true,
          code: 200,
          data: mockProjects,
          error: null,
        }),
      2000
    );
  });

  // return api.get("/projects");
}

export const getProjectsQueryOptions = () => {
  return queryOptions({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });
};

type UseProjectsOptions = {
  queryConfig?: QueryConfig<typeof getProjectsQueryOptions>;
};

export const useProjects = ({ queryConfig }: UseProjectsOptions = {}) => {
  return useQuery({
    ...getProjectsQueryOptions(),
    ...queryConfig,
  });
};
