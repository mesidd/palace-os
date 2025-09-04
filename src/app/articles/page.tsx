import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Your central database for all articles.
const articlesData = [
  {
    title: "Lessons from the Mumbai City",
    slug: "lessons-from-mumbai",
    description: "How Mumbai's chaotic yet resilient systems inspired my approach to building fault-tolerant software.",
    publishDate: "September 03, 2025",
  },
  {
    title: "The Philosophy of WASM",
    slug: "philosophy-of-wasm",
    description: "Exploring why WebAssembly is more than a technology—it's a paradigm shift towards portable, performant, and secure systems.",
    publishDate: "August 15, 2025",
  },
  // Add your next article here...
];

export default function ArticlesPage() {
  return (
    <main className="bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="container mx-auto py-24 md:py-32 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-amber-400">
                        The Royal Library
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        A collection of essays and insights on technology, philosophy, and the art of craft.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articlesData.map((article) => (
                        <Link href={`/articles/${article.slug}`} key={article.title} className="group block">
                            <Card className="h-full flex flex-col bg-card/60 border-border/60 transition-all duration-300 group-hover:border-primary/60 group-hover:-translate-y-2">
                                <CardHeader>
                                    <CardTitle className="font-serif text-2xl text-primary">{article.title}</CardTitle>
                                    <CardDescription className="pt-2">{article.description}</CardDescription>
                                </CardHeader>
                                <CardFooter className="flex-grow flex items-end justify-between">
                                    <span className="text-xs text-muted-foreground font-mono">{article.publishDate}</span>
                                    <div className="flex items-center text-sm text-primary transition-transform duration-300 group-hover:translate-x-1">
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
}