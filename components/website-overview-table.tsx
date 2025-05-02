import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import WebsiteRow from "./website-row";

const websites = [
  {
    url: "kidsproof.nl",
    badges: ["Kinsta"],
    mainwpBadges: ["Production", "High risk"],
    php: "8.1",
    lastOptimization: "14 hours ago",
    performance: 85,
    lastPerformance: 90,
    security: "Clean",
  },
];

export default function WebsiteOverviewTable() {
  return (
    <div className="flex flex-col gap-10 flex-1 rounded-xl md:min-h-min">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Website</TableHead>
            <TableHead>MainWP labels</TableHead>
            <TableHead>PHP engine</TableHead>
            <TableHead>Last optimization</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Security</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:py-4">
          {websites.map((website, index) => (
            <WebsiteRow website={website} key={index} />
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
