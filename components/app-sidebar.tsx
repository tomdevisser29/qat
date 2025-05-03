"use client";

import * as React from "react";
import {
  Accessibility,
  Anchor,
  BarChart,
  BookOpen,
  Bot,
  CalendarClock,
  GlobeIcon,
  LifeBuoy,
  Send,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import { useSession } from "next-auth/react";

import { ToolSwitcher } from "@/components/tool-switcher";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const data = {
  tools: [
    {
      name: "Qat",
      logo: Anchor,
    },
    {
      name: "Puc",
      logo: CalendarClock,
    },
  ],
  navMain: [
    {
      title: "Sites",
      url: "/dashboard",
      icon: GlobeIcon,
      isActive: true,
      items: [
        {
          title: "All",
          url: "#",
        },
        {
          title: "MainWP",
          url: "#",
        },
        {
          title: "Manual",
          url: "#",
        },
      ],
    },
    {
      title: "Automations",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Optimizations",
          url: "#",
        },
        {
          title: "DevOps",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Logs",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Display",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Report a bug",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Suggest a feature",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Performance",
      url: "#",
      icon: BarChart,
    },
    {
      name: "Accessibility",
      url: "#",
      icon: Accessibility,
    },
    {
      name: "Security",
      url: "#",
      icon: ShieldCheck,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();

  const user = {
    name: session?.user?.name || "Unknown",
    email: session?.user?.email || "unknown@example.com",
    avatar: session?.user?.image || "",
  };

  return (
    <Sidebar variant="sidebar" collapsible="icon" {...props}>
      <SidebarHeader>
        <ToolSwitcher tools={data.tools} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
