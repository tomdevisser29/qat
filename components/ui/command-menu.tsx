"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a site..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sites">
          <Link href="/dashboard/site/0" onClick={() => setOpen(false)}>
            <CommandItem>kidsproof.nl</CommandItem>
          </Link>
          <CommandItem>logisticforce.nl</CommandItem>
          <CommandItem>brandweer.nl</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
