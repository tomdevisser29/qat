import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  PartyPopper,
  ShieldCheck,
  ArrowDownSquare,
  ScreenShareOff,
} from "lucide-react";

export default function WebsiteWidgets() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Security risks</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums flex gap-2 items-center">
            <ShieldCheck className="size-6" />3
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="success" className="flex gap-1 rounded-lg text-xs">
              <TrendingDown className="size-3" />
              -2
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground flex gap-1">
            This month there were less security risks.{" "}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Performance desktop</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums flex gap-2 items-center">
            <PartyPopper className="size-6" />
            87
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="success" className="flex gap-1 rounded-lg text-xs">
              <TrendingUp className="size-3" />
              17
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground">
            Congrats, your desktop score has increased.
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Performance mobile</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums flex gap-2 items-center">
            <ArrowDownSquare className="size-6" />
            63
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
            Your mobile score has decreased.
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>A11y recommendations</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums flex gap-2 items-center">
            <ScreenShareOff className="size-6" />4
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="failure" className="flex gap-1 rounded-lg text-xs">
              <TrendingDown className="size-3" />
              -2
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="text-muted-foreground">
            Site has accessibility monitoring, follow recommendations.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
