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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("AppSidebar");

  return (
    <Sidebar>
      <SidebarContent className="gap-0">
        {groups.map(({ label, items }) => (
          <SidebarGroup key={`sidebar-group-${label}`}>
            {label && <SidebarGroupLabel>{t(label)}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <AppSidebarMenuItemButton
                        title={t(item.title)}
                        icon={item.icon}
                        url={item.url}
                      />
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
