import { type LucideProps } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink, useMatch } from "react-router";

export type SidebarNavGroup = {
  label?: string | undefined;
  items: SidebarNavGroupItem[];
};

export type SidebarNavGroupItem = {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export type AppSidebarProps = {
  groups: SidebarNavGroup[];
};

type AppSidebarMenuItemButtonProps = {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const AppSidebarMenuItemButton = (props: AppSidebarMenuItemButtonProps) => {
  const match = useMatch(props.url);

  return (
    <SidebarMenuButton isActive={match !== null} asChild>
      <NavLink to={props.url}>
        <props.icon />
        <span>{props.title}</span>
      </NavLink>
    </SidebarMenuButton>
  );
};

export function AppSidebar({ groups }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent className="gap-0">
        {groups.map(({ label, items }) => (
          <SidebarGroup key={`sidebar-group-${label}`}>
            {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <AppSidebarMenuItemButton {...item} />
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
