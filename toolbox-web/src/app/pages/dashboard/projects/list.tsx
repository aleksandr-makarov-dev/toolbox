import Layout from "@/components/layouts/layout";
import { PageHeader } from "@/components/layouts/page-header";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { useProjects } from "@/features/workspace/api/get-projects";
import { ProjectCard } from "@/features/workspace/components/project-card";
import { ProjectCardPlaceholder } from "@/features/workspace/components/project-card-placeholder";
import { ProjectsEmptyState } from "@/features/workspace/components/projects-empty-state";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { MdAdd } from "react-icons/md";

export function DashboardProjectListPage() {
  const { t } = useTranslation("DashboardProjectListPage");

  const projectsQuery = useProjects();

  return (
    <Layout title="Projects" className="flex flex-col gap-4">
      <PageHeader
        title={t("PageHeader_title")}
        actions={
          <Button asChild>
            <NavLink to="/dashboard/projects/create">
              <MdAdd /> {t("PageHeader_action")}
            </NavLink>
          </Button>
        }
      />
      <Grid
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        items={projectsQuery.data?.data}
        loading={projectsQuery.isLoading}
        empty={projectsQuery.data?.data?.length === 0}
        emptyState={<ProjectsEmptyState />}
        placeholderCount={4}
        render={(item) => <ProjectCard key={item.id} {...item} />}
        renderPlaceholder={(i) => (
          <ProjectCardPlaceholder key={`project-card-placeholder-${i}`} />
        )}
      />
    </Layout>
  );
}
