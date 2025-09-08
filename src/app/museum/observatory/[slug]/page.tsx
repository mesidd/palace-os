import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// NOTE: We are redefining the data here for the template.
const exhibits = [
  {
    slug: "planetary-scale-engineering",
    title: "Planetary-Scale Engineering",
    category: "Future Architecture",
    content: (
        <>
            <p className="lead text-xl text-slate-300">When a system serves billions of users, it ceases to be just code—it becomes critical infrastructure. This requires a shift in thinking from short-term features to long-term resilience, adaptability, and second-order effects. We must design for generational timescales, anticipating not just technical debt, but societal debt.</p>
            <p className="mt-4 text-lg text-slate-400">This involves building systems that are not only scalable but also governable, transparent, and aligned with the long-term well-being of their users. The challenge is no longer merely technical; it is civic and philosophical.</p>
        </>
    )
  },
  {
    slug: "ethics-of-agi",
    title: "The Ethics of AGI",
    category: "AI Philosophy",
    content: (
        <>
            <p className="lead text-xl text-slate-300">The alignment problem is not merely a technical challenge of defining a correct utility function. It is a deeply philosophical one about codifying human values—values we ourselves often struggle to define. The most important work in the coming years will be at the intersection of computer science and the humanities.</p>
            <p className="mt-4 text-lg text-slate-400">Before we build a god in the machine, we must have a rigorous conversation about what virtues we want that god to embody. The code we write will be its scripture.</p>
        </>
    )
  },
  // Add full details for the other exhibits here...
];


export default function ObservatoryExhibitPage({ params }: { params: { slug: string } }) {
    const exhibit = exhibits.find(e => e.slug === params.slug);

    if (!exhibit) {
        notFound();
    }

    return (
        <main>
            <div className="container mx-auto py-24 md:py-32 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <Link href="/museum/observatory" className="group flex items-center text-muted-foreground hover:text-yellow-400 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Back to The Observatory
                        </Link>
                    </div>
                    
                    <p className="text-sm font-mono text-yellow-400/80 mb-2">{exhibit.category}</p>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-white">
                        {exhibit.title}
                    </h1>

                    <hr className="my-12 border-border/40" />

                    <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300">
                       {exhibit.content}
                    </div>
                </div>
            </div>
        </main>
    );
}
