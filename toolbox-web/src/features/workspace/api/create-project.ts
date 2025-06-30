import type { ApiResponse } from "@/types";
import type { ProjectCreateRequest, ProjectSummaryResponse } from "../types";
import type { MutationConfig } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

export function createProject({
  data,
}: {
  data: ProjectCreateRequest;
}): Promise<ApiResponse<ProjectSummaryResponse>> {
  // return new Promise((resolve) => {
  //   setTimeout(
  //     () =>
  //       resolve({
  //         flag: true,
  //         code: 201,
  //         data: {
  //           id: 1,
  //           title: data.title,
  //           status: "DRAFT",
  //           createdAt: new Date(29, 6, 2025, 0, 58),
  //         },
  //         error: null,
  //       }),
  //     5000
  //   );
  // });

  return api.post("/projects", data);
}

type UseCreateProjectOptions = {
  mutationConfig?: MutationConfig<typeof createProject>;
};

export const useCreateProject = ({
  mutationConfig,
}: UseCreateProjectOptions = {}) => {
  return useMutation({
    ...mutationConfig,
    mutationFn: createProject,
  });
};
