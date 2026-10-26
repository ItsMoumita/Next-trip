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
    href: "/package",
    description: "",
  },
  {
    title: "Resorts",
    href: "/resorts",
    description: "",
  },
  {
    title: "About Us",
    href: "/about",
    description: "",
  },
  {
    title: "Login",
    href: "/login",
    description: "",
  },
  {
    title: "Register",
    href: "/signup",
    description: "",
  },
];

export function Navbar() {
  const isHomePage = usePathname() === "/";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NavigationMenu
      className={
        isHomePage
          ? "absolute! inset-x-0 top-0 z-50 w-full! max-w-none bg-transparent text-white border-b border-primary"
          : "w-full! max-w-none border-b border-primary text-primary"
      }
    >
      <NavigationMenuList className="lg:max-w-3/4 mx-auto flex flex-row items-center justify-between gap-2 p-2">
        <NavigationMenuItem className="text-2xl md:3xl font-bold">
          Next-Trip
        </NavigationMenuItem>

        {components.map((component) => (
          <NavigationMenuItem
            key={component.title}
            title={component.title}
            href={component.href}
            className="hidden md:flex flex-col"
          >
            <NavigationMenuLink
              render={<Link href={component.href}> {component.title}</Link>}
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute right-4 top-4 z-50"
      >
        {!isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu preview-icon"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x preview-icon right-5! bg-primary"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <NavigationMenuList className="md:hidden absolute flex flex-col justify-start items-start px-6 py-8 top-0 right-0 w-1/2 h-screen bg-white text-primary border-t border-primary z-40">
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
      )}
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
