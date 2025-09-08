import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// NOTE: We are redefining the data here. In a larger app, this would come from a shared source.
const exhibits = [
  {
    slug: "on-obstacles",
    title: "On Obstacles",
    author: "Marcus Aurelius",
    quote: "The impediment to action advances action. What stands in the way becomes the way.",
    category: "Stoic Philosophy",
    details: "This principle teaches that every obstacle we encounter is not a barrier, but an opportunity to practice virtue and ingenuity. In engineering, a difficult bug is not a roadblock; it is a lesson in the system's true nature. A tight constraint is not a limitation; it is a catalyst for a more elegant solution."
  },
  {
    slug: "on-first-principles",
    title: "On First Principles",
    author: "Aristotle",
    quote: "In every systematic inquiry, it is the first principles that are the most important.",
    category: "Metaphysics",
    details: "To build something truly robust, one must deconstruct the problem to its most fundamental truths, the 'first principles.' This method of thinking, breaking down complex problems into their basic elements, allows one to reassemble them in new and innovative ways, free from the baggage of convention."
  },
  // Add full details for the other exhibits here...
];


export default function AncientExhibitPage({ params }: { params: { slug: string } }) {
    const exhibit = exhibits.find(e => e.slug === params.slug);

    if (!exhibit) {
        notFound();
    }

    return (
        <main className="bg-background text-white">
            <div className="container mx-auto py-24 md:py-32 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <Link href="/museum/ancients" className="group flex items-center text-muted-foreground hover:text-purple-400 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Back to The Hall of Ancients
                        </Link>
                    </div>
                    
                    <p className="text-sm font-mono text-purple-400/80 mb-2">{exhibit.category}</p>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-white">
                        {exhibit.title}
                    </h1>

                    <hr className="my-12 border-border/40" />

                    <div className="prose prose-invert prose-lg max-w-none prose-blockquote:border-l-purple-400">
                       <blockquote className="text-xl italic text-slate-400">
                         "{exhibit.quote}"
                         <cite className="block not-italic text-sm text-slate-500 mt-2">- {exhibit.author}</cite>
                       </blockquote>
                       <div className="mt-8 text-slate-300 text-lg leading-relaxed">
                          {exhibit.details}
                       </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
