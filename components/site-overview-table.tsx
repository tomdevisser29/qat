"use client";

import {
  Table,
  TableBody,
  TableCell,
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
import { useState, useEffect } from "react";
import SiteRow from "./site-row";
import { Site } from "@/app/lib/definitions";
import { Skeleton } from "./ui/skeleton";

export default function SiteOverviewTable() {
  const [sites, setSites] = useState<Site[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSites() {
      const params = new URLSearchParams({
        company: process.env.NEXT_PUBLIC_KINSTA_COMPANY_ID!,
      });

      try {
        const res = await fetch(
          `https://api.kinsta.com/v2/sites?${params.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_KINSTA_API_KEY}`,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch sites");

        const data = await res.json();
        setSites(data?.company?.sites);
      } catch (err) {
        console.error("Error fetching sites:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSites();
  }, []);

  return (
    <div className="flex flex-col gap-10 flex-1 rounded-xl md:min-h-min">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Site</TableHead>
            <TableHead>MainWP labels</TableHead>
            <TableHead>PHP engine</TableHead>
            <TableHead>Last optimization</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Security</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:py-4">
          {isLoading ? (
            <>
              {[...Array(6)].map((_, i) => (
                <TableRow key={i}>
                  {[...Array(6)].map((_, i) => (
                    <TableCell className="font-medium" key={i}>
                      <Skeleton className="h-4 rounded-md bg-slate-200 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          ) : (
            sites.map((site) => <SiteRow site={site} key={site.id} />)
          )}
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
