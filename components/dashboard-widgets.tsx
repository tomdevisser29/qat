import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function DashboardWidgets() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Security risks</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            39
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="success" className="flex gap-1 rounded-lg text-xs">
              <TrendingDown className="size-3" />
              -12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground">
            This month there were less security risks.
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Performance monitoring</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            213
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="success" className="flex gap-1 rounded-lg text-xs">
              <TrendingUp className="size-3" />
              +17
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground">
            This translates to an €850 increase in monthly revenue.
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Amount of sites</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            632
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="failure" className="flex gap-1 rounded-lg text-xs">
              <TrendingDown className="size-3" />
              -3
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground">
            We have 3 less sites this month.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
