import DashboardHeader from "@/components/dashboard-header";
import SiteWidgets from "@/components/site-widgets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function SingleSite({
  params,
}: {
  params: Promise<{ site_id: string }>;
}) {
  const { site_id } = await params;

  const res = await fetch(`https://api.kinsta.com/v2/sites/${site_id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_KINSTA_API_KEY}`,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch site data");

  const { site } = await res.json();

  return (
    <>
      <DashboardHeader page={site.display_name} />
      <div className="flex flex-1 flex-col gap-10 p-4 pt-0">
        <SiteWidgets />
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
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle className="flex gap-2">
                  {site.display_name}{" "}
                  {site.status === "live" ? (
                    <Badge variant="success">Live</Badge>
                  ) : (
                    <Badge variant="failure">Offline</Badge>
                  )}
                </CardTitle>
                <CardDescription>{site.id}</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
