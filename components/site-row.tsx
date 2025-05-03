import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
// import { TrendingUp, TrendingDown } from "lucide-react";
import Link from "next/link";
import { Site } from "@/app/lib/definitions";

interface SiteRowProps {
  site: Site;
}

export default function SiteRow({ site }: SiteRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <div className="flex gap-2">
          <Link href={`/dashboard/site/${site.id}`}>{site.display_name}</Link>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-2"></div>
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
      <TableCell className="flex gap-2 items-center">
        <Badge></Badge>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
}
