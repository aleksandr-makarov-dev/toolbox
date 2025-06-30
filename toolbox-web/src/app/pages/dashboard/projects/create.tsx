import Layout from "@/components/layouts/layout";
import { PageHeader } from "@/components/layouts/page-header";
import { Button } from "@/components/ui/button";
import { useCreateProject } from "@/features/workspace/api/create-project";
import { getProjectsQueryOptions } from "@/features/workspace/api/get-projects";
import { ProjectCreateForm } from "@/features/workspace/components/project-create-form";
import type { ProjectCreateRequest } from "@/features/workspace/types";
import { useQueryClient } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router";

export function DashboardCreateProjectPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const createProjectMutation = useCreateProject();

  function handleSubmit(data: ProjectCreateRequest) {
    createProjectMutation.mutate(
      { data: data },
      {
        onSuccess: () => {
          // TODO: use optimistic update instead of invalidating query.

          queryClient.invalidateQueries({
            queryKey: getProjectsQueryOptions().queryKey,
          });
          navigate("/dashboard/projects");
        },
      }
    );
  }

  return (
    <Layout title="Create project" className="max-w-xl flex flex-col gap-4">
      <PageHeader title="Create project" />
      <ProjectCreateForm
        formId="project-create-form"
        submitting={createProjectMutation.isPending}
        onSubmit={handleSubmit}
      />
      <div className="flex gap-x-2">
        <Button
          form="project-create-form"
          type="submit"
          loading={createProjectMutation.isPending}
          loadingText="Creating project..."
        >
          Create project
        </Button>
        <Button variant="outline" asChild>
          <NavLink to="/dashboard/projects">Cancel</NavLink>
        </Button>
      </div>
    </Layout>
  );
}
