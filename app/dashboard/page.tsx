import DashboardWidgets from "@/components/dashboard-widgets";
import DashboardHeader from "@/components/dashboard-header";
import WebsiteOverviewTable from "@/components/website-overview-table";

export default function Page() {
  return (
    <>
      <DashboardHeader page="Dashboard" />
      <div className="flex flex-1 flex-col gap-10 p-4 pt-0">
        <DashboardWidgets />
        <WebsiteOverviewTable />
      </div>
    </>
  );
}
