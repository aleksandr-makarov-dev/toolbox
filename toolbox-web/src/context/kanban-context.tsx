import type { ListSummaryResponse } from "@/features/workspace/types/list";
import type { TaskSummaryResponse } from "@/features/workspace/types/task";
import React, { useContext, useEffect, useState } from "react";

export type KanbanContextType = {
  columns: ListSummaryResponse[];
  data: { [listId: string]: TaskSummaryResponse[] };
  loading?: boolean;
};

export const KanbanContext = React.createContext<KanbanContextType | null>(
  null
);

export type KanbanProviderProps = {
  columns?: ListSummaryResponse[] | null | undefined;
  data?: TaskSummaryResponse[] | null | undefined;
  loading?: boolean;
  children?: React.ReactNode;
};

export function KanbanProvider({
  columns,
  data,
  loading,
  children,
}: KanbanProviderProps) {
  const [groupedData, setGroupedData] = useState<{
    [listId: string]: TaskSummaryResponse[];
  }>({});

  useEffect(() => {
    const grouped = data?.reduce((acc, task) => {
      if (!acc[task.listId]) {
        acc[task.listId] = [];
      }
      acc[task.listId].push(task);
      return acc;
    }, {} as { [listId: string]: TaskSummaryResponse[] });

    setGroupedData(grouped ?? {});
  }, [columns, data]);

  return (
    <KanbanContext.Provider
      value={{ columns: columns ?? [], data: groupedData, loading: loading }}
    >
      {children}
    </KanbanContext.Provider>
  );
}

export const useKanban = () => {
  const context = useContext<KanbanContextType | null>(KanbanContext);

  if (!context) {
    throw new Error("useKanban must be used within a KanbanProvider");
  }

  return context;
};
