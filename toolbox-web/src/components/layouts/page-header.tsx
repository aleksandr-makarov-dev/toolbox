export type PageHeaderProps = {
  title: string;
  actions?: React.ReactNode;
};

export function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="flex items-center gap-1">{actions}</div>
    </div>
  );
}
