import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";

type Website = {
  url: string;
  badges: string[];
  mainwpBadges: string[];
  php: string;
  lastOptimization: string;
  performance: number;
  lastPerformance: number;
  security: string;
};

interface WebsiteRowProps {
  website: Website;
}

export default function WebsiteRow({ website }: WebsiteRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex gap-2">
          <Link href="/dashboard/website">{website.url}</Link>
          {website.badges.map((badge, index) => {
            return (
              <Badge variant="default" key={index}>
                {badge}
              </Badge>
            );
          })}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          {website.mainwpBadges.map((badge, index) => {
            return (
              <Badge variant="secondary" key={index}>
                {badge}
              </Badge>
            );
          })}
        </div>
      </TableCell>
      <TableCell>{website.php}</TableCell>
      <TableCell>{website.lastOptimization}</TableCell>
      <TableCell className="flex gap-2 items-center">
        {website.performance}
        <Badge
          variant={
            website.performance - website.lastPerformance > 0
              ? "success"
              : "failure"
          }
        >
          {website.performance - website.lastPerformance}
          {website.performance - website.lastPerformance > 0 ? (
            <TrendingUp />
          ) : (
            <TrendingDown />
          )}
        </Badge>
      </TableCell>
      <TableCell>{website.security}</TableCell>
    </TableRow>
  );
}
