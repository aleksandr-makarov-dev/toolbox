export function EmptyStateTitle({ children }: { children?: React.ReactNode }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function EmptyStateSubtitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <p className="text-muted-foreground">{children}</p>;
}

export function EmptyStateActions({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      {children}
    </div>
  );
}

export function EmptyState({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-y-4 text-center max-w-lg">
        {children}
      </div>
    </div>
  );
}
