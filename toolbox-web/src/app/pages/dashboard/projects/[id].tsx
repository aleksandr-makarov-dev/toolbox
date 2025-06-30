import Layout from "@/components/layouts/layout";
import { PageHeader } from "@/components/layouts/page-header";
import { useParams } from "react-router";
import { ProjectKanban } from "@/features/workspace/components/project-kanban";

export function DashboardProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <Layout title="Project" className="flex flex-col gap-4 overflow-hidden">
      <PageHeader title={`Project ${projectId}`} />
      <ProjectKanban />
    </Layout>
  );
}
