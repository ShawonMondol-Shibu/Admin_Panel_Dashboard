"use client"

import * as React from "react"
import {
  AudioWaveform,
  Banknote,
  CalendarDays,
  ChartNoAxesColumn,
  Clipboard,
  Command,
  Contact,
  GalleryVerticalEnd,
  Gauge,
  Gift,
  Grid2X2,
  Grid3x3,
  Heart,
  ListChecks,
  MessagesSquare,
  Rows3,
  Settings2,
  UserRound,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Gauge,
      isActive: true,
    },
    {
      title: "Products",
      url: "/products",
      icon: Grid2X2,
      
    },
    {
      title: "Favorites",
      url: "/favorites",
      icon: Heart,
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: MessagesSquare,
    },
    {
      title: "Order Lists",
      url: "/order",
      icon: ListChecks,
    },
    {
      title: "Product Stock",
      url: "/productStock",
      icon: Rows3,
    },
    {
      title: "Settings",
      url: "/setting",
      icon: Settings2,
      
    },
  ],
  Pages: [
    {
      name: "Pricing",
      url: "/pricing",
      icon: Gift,
    },
    {
      name: "Calender",
      url: "/calender",
      icon: CalendarDays,
    },
    {
      name: "To-Do",
      url: "/todo",
      icon: Clipboard,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: Contact,
    },
    {
      name: "Invoice",
      url: "/invoice",
      icon: Banknote,
    },
    {
      name: "Ui Elements",
      url: "/uiElements",
      icon: ChartNoAxesColumn,
    },
    {
      name: "Team",
      url: "/team",
      icon: UserRound,
    },
    {
      name: "Table",
      url: "/table",
      icon: Grid3x3,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <hr />
        <NavProjects projects={data.Pages} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
