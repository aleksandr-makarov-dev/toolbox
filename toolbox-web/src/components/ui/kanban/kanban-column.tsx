import { Badge } from "../badge";

export type KanbanColumnProps<T> = {
  id: string;
  title: string;
  items?: T[];
  actions?: React.ReactNode;
  render: (item: T, index: number) => React.ReactNode;
};

export function KanbanColumn<T>({
  title,
  actions,
  items = [],
  render,
}: KanbanColumnProps<T>) {
  return (
    <div className="border-border border w-full max-w-84 shrink-0 h-full flex flex-col bg-zinc-50 rounded">
      <div className="h-12 p-3 flex flex-row items-center gap-2">
        <div className="flex flex-row items-center gap-1 flex-1">
          <p className="text-sm font-medium">{title}</p>
          <Badge className="bg-background" variant="outline">
            {items.length}
          </Badge>
        </div>
        <div className="flex flex-row gap-1">{actions}</div>
      </div>
      <div className="px-3 pb-3 flex flex-col gap-2 overflow-y-auto h-full">
        {items.map((item, index) => render(item, index))}
      </div>
    </div>
  );
}
