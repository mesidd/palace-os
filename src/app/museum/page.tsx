import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Hammer, BrainCircuit, Telescope } from "lucide-react";

const galleries = [
  {
    icon: <Hammer className="h-8 w-8 mb-4 text-slate-400" />,
    title: "The Engineer's Atrium",
    description: "Modern principles, tools, and laws that shape the craft of software.",
    href: "/museum/engineering",
    theme: "text-cyan-400",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 mb-4 text-slate-400" />,
    title: "The Hall of Ancients",
    description: "Timeless wisdom and philosophical ideas that inspire elegant solutions.",
    href: "/museum/ancients",
    theme: "text-purple-400",
  },
  {
    icon: <Telescope className="h-8 w-8 mb-4 text-slate-400" />,
    title: "The Observatory",
    description: "Explorations into the future of technology and its civilizational impact.",
    href: "/museum/observatory",
    theme: "text-blue-400",
  },
];

export default function MuseumHubPage() {
  return (
    <main className="container mx-auto py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-amber-400">
            The Digital Museum
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A curated space exploring the past, present, and future of engineering philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <Link href={gallery.href} key={gallery.title} className="group block">
              <Card className="h-full flex flex-col text-center items-center justify-center p-6 bg-card/60 border-border/60 transition-all duration-300 group-hover:border-primary/80 group-hover:-translate-y-2">
                {gallery.icon}
                <CardTitle className={`font-serif text-2xl ${gallery.theme}`}>{gallery.title}</CardTitle>
                <CardDescription className="mt-2 text-sm">
                  {gallery.description}
                </CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
