import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar, type SidebarNavGroup } from "@/components/ui/app-sidebar";
import { Home, Calendar, Settings, Box } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/utils/cn";

const groups: SidebarNavGroup[] = [
  {
    label: "General",
    items: [
      {
        title: "Home",
        url: "/dashboard/home",
        icon: Home,
      },
      {
        title: "Notifications",
        url: "/dashboard/notifications",
        icon: Calendar,
      },
    ],
  },
  {
    label: "Task Management",
    items: [
      {
        title: "My Tasks",
        url: "/dashboard/my-tasks",
        icon: Box,
      },
      {
        title: "Projects",
        url: "/dashboard/projects",
        icon: Box,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

export type LayoutProps = {
  children: React.ReactNode;
  title: string;
  header?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Layout({
  children,
  title,
  header,
  className,
  ...props
}: LayoutProps) {
  return (
    <React.Fragment>
      <title>{title + " | Toolbox"}</title>
      <SidebarProvider>
        <AppSidebar groups={groups} />
        <SidebarInset className="flex flex-col h-screen overflow-hidden">
          {/* Header — фиксированная высота */}
          <header className="h-12 shrink-0 flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            {header}
          </header>
          <main
            className={cn("flex-1 overflow-auto p-4 pt-2", className)}
            {...props}
          >
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </React.Fragment>
  );
}
