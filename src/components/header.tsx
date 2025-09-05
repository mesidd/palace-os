"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTerminalStore } from "@/stores/terminalStore";

const navItems = [
  { name: "Manifesto", href: "/manifesto" },
  { name: "Treasury", href: "/projects" },
  { name: "Museum", href: "/museum" },
  { name: "Library", href: "/articles" },
  { name: "Envoy", href: "/contact" },
  { name: "Oracle", action: "openTerminal" },

];

export function Header() {
  const pathname = usePathname();
  const { open: openTerminal } = useTerminalStore();

  return (
    <header className="sticky top-0">
      <div className="flex h-20 items-center w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="font-bold font-serif hover:text-white text-2xl sm:text-3xl text-muted-foreground tracking-tight">
            Palace-OS
          </span>

        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-6 md:gap-10 text-base">
            {navItems.map((item) => {
              if (item.action === "openTerminal") {
                return (
                  <button
                    key={item.name}
                    onClick={openTerminal}
                    // className="hover:cursor-pointer"
                     className={cn(
                    "transition-all duration-300 hover:cursor-pointer ease-in-out font-bold hover:text-white hover:scale-105 text-muted-foreground",
                  )}
                  >
                    {item.name}
                  </button>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href ?? "#"}
                  className={cn(
                    "transition-all duration-300 ease-in-out font-bold hover:text-white hover:scale-105 text-muted-foreground",
                    pathname === item.href ? "text-amber-300 font-bold" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}