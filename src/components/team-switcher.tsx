"use client";

import * as React from "react";
import {LayoutDashboard } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // useSidebar,
} from "@/components/ui/sidebar";

export function TeamSwitcher({}: // teams,
{
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  // const { isMobile } = useSidebar()
  // // const [activeTeam, setActiveTeam] = React.useState(teams[0])

  // if (!activeTeam) {
  //   return null
  // }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <LayoutDashboard />
              </div>
              <h2 className="text-xl font-extrabold text-center text-[var(--colorSkyBlue)] m-auto w-full flex items-center">
                Dash
                <span className="text-black">Stack</span>
              </h2>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
