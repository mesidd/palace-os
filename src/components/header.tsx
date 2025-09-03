"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Manifesto", href: "/manifesto" },
  { name: "Treasury", href: "/projects" },
  { name: "Library", href: "/articles" },
  { name: "Envoy", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/94">
      <div className="flex h-20 items-center w-full md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="font-extrabold font-serif text-2xl sm:text-3xl text-yellow-500 tracking-tight">
            Palace-OS
          </span>

        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-6 md:gap-10 text-base">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105 text-muted-foreground",
                  pathname === item.href ? "text-yellow-300 font-bold" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
