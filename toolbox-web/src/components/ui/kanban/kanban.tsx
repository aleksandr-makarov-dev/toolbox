import { useMemo } from "react";

export type GroupDef<T> = {
  column: ColumnDef;
  items: T[];
};

export type ColumnDef = {
  id: string;
  title: string;
};

export type KanbanProps<T> = {
  columns?: ColumnDef[] | null | undefined;
  data?: T[] | null | undefined;
  groupKey: keyof T;
  render: (group: GroupDef<T>, index: number) => React.ReactNode;
};

export function Kanban<T>({ columns, data, groupKey, render }: KanbanProps<T>) {
  const groups = useMemo(() => {
    if (!columns) return [];
    return columns.map((column) => ({
      column,
      items: data?.filter((item) => item[groupKey] === column.id) ?? [],
    }));
  }, [columns, data, groupKey]);

  return (
    <div className="flex flex-row gap-3 flex-1 h-full overflow-x-auto overflow-y-hidden">
      {groups.map((group, index) => render(group, index))}
    </div>
  );
}
