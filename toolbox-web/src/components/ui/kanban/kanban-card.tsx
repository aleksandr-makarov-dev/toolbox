export type KanbanCardProps = {
  children: React.ReactNode;
};

export function KanbanCard({ children }: KanbanCardProps) {
  return (
    <div className="bg-background border border-border rounded p-3 shrink-0">
      {children}
    </div>
  );
}
