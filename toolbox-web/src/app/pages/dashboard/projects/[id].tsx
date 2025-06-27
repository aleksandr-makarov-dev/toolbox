import Layout from "@/components/layouts/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kanban, KanbanColumn } from "@/components/ui/kanban";
import { TaskCard } from "@/features/workspace/components/task-card";
import { mockStages } from "@/features/workspace/data";
import { PlusIcon, SearchIcon } from "lucide-react";

export function DashboardProjectPage() {
  return (
    <Layout title="Projects" className="flex flex-col">
      <div className="py-3 flex items-center gap-2">
        <div className="flex gap-2 items-center flex-1">
          <Input placeholder="Search tasks by title..." />
          <Button>
            <SearchIcon /> Search
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <PlusIcon /> Add Stage
          </Button>
          <Button>
            <PlusIcon /> Add Task
          </Button>
        </div>
      </div>
      <Kanban>
        {mockStages.map((stage) => (
          <KanbanColumn
            key={`kanban-column-${stage.id}`}
            title={stage.title}
            count={stage.items.length}
          >
            {stage.items.map((item) => (
              <TaskCard key={`kanban-card-${item.id}`} {...item} />
            ))}
          </KanbanColumn>
        ))}
      </Kanban>
    </Layout>
  );
}
