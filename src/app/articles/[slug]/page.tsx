import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

// Your central database for all article content.
const articlesContent = {
    "lessons-from-mumbai": {
        title: "Lessons from the Mumbai City",
        description: "How Mumbai's chaotic yet resilient systems inspired my approach to building fault-tolerant software.",
        publishDate: "September 03, 2025",
        content: (
            <>
                <p className="lead">
                    Mumbai is a city of organized chaos. Millions of people, a network of aging infrastructure, and a relentless monsoon season create a system that, by all logical accounts, should fail daily. Yet, it doesn&apos;t. This city&apos;s inherent antifragility holds profound lessons for any engineer building systems in the equally chaotic digital world.
                </p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-primary mt-12 mb-4">The Dabbawala Protocol</h2>
                <p>
                    Consider the Dabbawalas, Mumbai&apos;s famous lunchbox delivery network. With near-zero technology, they achieve a Six Sigma level of accuracy. Their system is decentralized, relies on simple, robust heuristics, and has redundancy built in at every node. It&apos;s a masterclass in building systems that are resilient not because they are complex, but because they are profoundly simple.
                </p>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-primary mt-12 mb-4">Graceful Degradation</h2>
                <p>
                    When the local trains are flooded, the city doesn&apos;t shut down. It slows, adapts, and finds other paths. This principle of graceful degradation—where a system maintains partial functionality even when parts of it are failing—is a critical lesson. Our software should not be a fragile house of cards that collapses at the first error. It should be a banyan tree, capable of surviving even when it loses a branch.
                </p>
            </>
        )
    },
    "philosophy-of-wasm": {
        title: "The Philosophy of WASM",
        description: "Exploring why WebAssembly is more than a technology—it's a paradigm shift.",
        publishDate: "August 15, 2025",
        content: (
            <>
                <p className="lead">
                    WebAssembly (WASM) is often discussed in terms of its technical merits: speed, portability, security. But to see it merely as a faster JavaScript is to miss the philosophical shift it represents. WASM is a return to the ideal of a universal, compiled target for the internet—a stable foundation upon which diverse and powerful systems can be built.
                </p>
            </>
        )
    }
};

type ArticlesContent = typeof articlesContent;
type ArticleSlug = keyof ArticlesContent;

export async function generateMetadata({ params: rawParams }: { params: { slug: ArticleSlug } | Promise<{slug: ArticleSlug}>}): Promise<Metadata> {
    const params = await rawParams;
    const {slug} = params;
    const article = articlesContent[slug];

    if (!article) return { title: "Not Found" };
    return { title: `${article.title} | Siddhartha Sharma`, description: article.description };
}

type ArticlePageProps = { params: { slug: ArticleSlug } | Promise<{ slug: ArticleSlug }> };

export default async function ArticlePage({params: rawParams}: ArticlePageProps) {
    const params = await rawParams;
    const {slug} = params;

    const article = articlesContent[slug];

    if (!article) {
        notFound();
    }

    return (
        <main className="container mx-auto py-24 md:py-32 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <Link href="/articles" className="group flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to The Library
                    </Link>
                </div>
                
                <div className="text-center mb-12">
                    <p className="text-sm text-muted-foreground font-mono mb-2">{article.publishDate}</p>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-white">
                        {article.title}
                    </h1>
                </div>

                <hr className="my-12 border-border/40" />

                <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-primary prose-strong:text-white prose-blockquote:border-l-primary">
                    {article.content}
                </div>
            </div>
        </main>
    );
}
