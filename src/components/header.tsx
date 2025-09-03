import Link from "next/link";

const navItems = [
  {name: "Manifesto", href: '/manifesto'},
  {name: "Treasury", href: '/projects'},
  {name: "Library", href: '/articles'},
  {name: "Envoy", href: '/contact'},
];

export function Header(){
  return(
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold font-serif text-lg text-yellow-400">
          Palace-OS
        </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground">
            {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}