"use client";

import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { menuItems } from "@utils/lists";
import NavbarDialog from "./NavbarDialog";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Badge from "./Badge";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderColor = (path: string) => {
    return pathname.includes(path)
      ? "text-yellow-300 hover:text-white"
      : "text-white hover:text-yellow-300";
  };

  return (
    <header className="bg-zinc-900 fixed top-0 w-screen">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5 sr-only">Your Company</span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center">
          {menuItems.map(({ name, path }) => (
            <Link
              href={path}
              key={name}
              className={`text-sm font-semibold leading-6 ${renderColor(
                path
              )} duration-300`}
            >
              {name}
            </Link>
          ))}

          <Badge />
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-white hover:text-yellow-300 duration-300"
            replace
          >
            Sign in &rarr;
          </Link>
        </div>
      </nav>

      <NavbarDialog
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </header>
  );
}
