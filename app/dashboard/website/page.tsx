import DashboardHeader from "@/components/dashboard-header";
import WebsiteWidgets from "@/components/website-widgets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function SingleWebsite() {
  return (
    <>
      <DashboardHeader page="kidsproof.nl" />
      <div className="flex flex-1 flex-col gap-10 p-4 pt-0">
        <WebsiteWidgets />
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-[#fafafa]">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="security">
              Security
              <Badge
                variant="outline"
                className="py-1 leading-2.5 group-data-[state=active]:text-white"
              >
                2
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="optimization">
              Optimization
              <Badge
                variant="outline"
                className="py-1 leading-2.5 group-data-[state=active]:text-white"
              >
                6
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="Accessibility">Accessibility</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
  );
}
