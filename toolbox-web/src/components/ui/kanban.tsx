import { File, PlusIcon, SettingsIcon } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

export type KanbanCardProps = {
  children?: React.ReactNode;
};

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export function KanbanCardTitle({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HeadingProps) {
  return (
    <h3 className={cn("text-sm font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}

export function KanbanCardContent({
  children,
  className,
  ...props
}: { children: React.ReactNode } & DivProps) {
  return (
    <div className={cn("p-3", className)} {...props}>
      {children}
    </div>
  );
}

export function KanbanCardFooter({
  children,
  className,
  ...props
}: { children: React.ReactNode } & DivProps) {
  return (
    <div className={cn("p-3 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function KanbanCardHeader({
  children,
  className,
  ...props
}: { children: React.ReactNode } & DivProps) {
  return (
    <div className={cn("p-3 pb-0", className)} {...props}>
      {children}
    </div>
  );
}

export function KanbanCard({ children }: KanbanCardProps) {
  return (
    <div className="bg-white border-1 border-border rounded-md">{children}</div>
  );
}

export type KanbanColumnProps = {
  title: string;
  count: number;
  children?: React.ReactNode;
};

export function KanbanColumn({ title, count, children }: KanbanColumnProps) {
  return (
    <div className="w-80 bg-sidebar-accent border-1 border-border border-t-4 border-t-primary rounded-md overflow-y-auto">
      <div className="p-2 flex items-center justify-between border-b border-border">
        <Badge>{title}</Badge>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <File className="size-4" />
            <p className="text-sm">{count}</p>
          </div>
          <div className="space-x-1">
            <Button size="iconSm" variant="outline">
              <PlusIcon />
            </Button>
            <Button size="iconSm" variant="outline">
              <SettingsIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-2 flex flex-col gap-y-2">{children}</div>
    </div>
  );
}

export type KanbanProps = {
  children?: React.ReactNode;
};

export function Kanban({ children }: KanbanProps) {
  return (
    <div className="overflow-x-auto h-full">
      <div className="flex gap-3 w-max h-full">{children}</div>
    </div>
  );
}
