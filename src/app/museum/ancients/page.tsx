import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

// The data for the gallery exhibits, each with a unique slug for its URL
const exhibits = [
  {
    slug: "on-obstacles",
    title: "On Obstacles",
    author: "Marcus Aurelius",
    quote: "The impediment to action advances action. What stands in the way becomes the way.",
    category: "Stoic Philosophy",
  },
  {
    slug: "on-first-principles",
    title: "On First Principles",
    author: "Aristotle",
    quote: "In every systematic inquiry, it is the first principles that are the most important.",
    category: "Metaphysics",
  },
  {
    slug: "on-simplicity",
    title: "On Simplicity",
    author: "Lao Tzu",
    quote: "Simplicity, patience, compassion. These three are your greatest treasures.",
    category: "Taoist Philosophy",
  },
  {
    slug: "on-change",
    title: "On Change",
    author: "Heraclitus",
    quote: "The only constant in life is change.",
    category: "Pre-Socratic Philosophy",
  },
];

export default function AncientsHallPage() {
  return (
    // Main container with the dark, cosmic background
    <main className="bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="container mx-auto py-24 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-purple-400">
                        The Hall of Ancients
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        Timeless wisdom and philosophical ideas that inspire elegant solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exhibits.map((exhibit) => (
                        <Link href={`/museum/ancients/${exhibit.slug}`} key={exhibit.title} className="group block">
                            <Card className="h-full bg-card/60 border-border/60 shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <p className="text-xs font-mono text-purple-400/80 mb-2">{exhibit.category}</p>
                                    <CardTitle className="font-serif text-xl text-white">{exhibit.title}</CardTitle>
                                    <CardDescription className="pt-2 text-slate-400 italic">"{exhibit.quote}"</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
}