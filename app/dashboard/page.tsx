import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import DashboardWidgets from "@/components/dashboard-widgets";
import WebsiteOverviewTable from "@/components/website-overview-table";
import DashboardHeader from "@/components/dashboard-header";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-10 p-4 pt-0">
          <DashboardWidgets />
          <WebsiteOverviewTable />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
