"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/",
    description: "",
  },
  {
    title: "Packages",
    href: "/docs/primitives/hover-card",
    description: "",
  },
  {
    title: "Resorts",
    href: "/docs/primitives/progress",
    description: "",
  },
  {
    title: "About Us",
    href: "/docs/primitives/scroll-area",
    description: "",
  },
  {
    title: "Login",
    href: "/docs/primitives/tabs",
    description: "",
  },
  {
    title: "Register",
    href: "/docs/primitives/tooltip",
    description: "",
  },
];

export function Navbar() {
  const isHomePage = usePathname() === "/";

  return (
    <NavigationMenu
      className={
        isHomePage
          ? "absolute! inset-x-0 top-0 z-50 max-w-11/12! mx-auto bg-transparent text-white border-b border-primary"
          : "max-w-11/12! mx-auto border-b border-primary text-primary"
      }
    >
      <NavigationMenuList className="max-w-3/4 mx-auto flex flex-row items-center justify-between gap-2 p-2">
        <NavigationMenuItem className="text-2xl md:3xl font-bold">
          Next-Trip
        </NavigationMenuItem>

        {components.map((component) => (
          <NavigationMenuItem
            key={component.title}
            title={component.title}
            href={component.href}
            className="flex flex-col"
          >
            <NavigationMenuLink
              render={<Link href={component.href}> {component.title}</Link>}
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
