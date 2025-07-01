import { Skeleton } from "@/components/ui/skeleton";

export type PageHeaderProps = {
  title?: string;
  actions?: React.ReactNode;
  loading?: boolean;
};

export function PageHeader({ title, loading, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-row gap-2 items-center justify-between flex-1">
      {loading ? (
        <Skeleton className="h-8 max-w-80 w-full" />
      ) : (
        <h2 className="text-lg font-medium">{title}</h2>
      )}
      <div className="flex flex-row gap-1 items-center">{actions}</div>
    </div>
  );
}
