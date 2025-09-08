import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// NOTE: In a real app, you would fetch this data from a CMS or a shared file.
// For now, we are redefining it here for simplicity.
const exhibits = [
  {
    slug: "conways-law",
    title: "Conway's Law",
    summary: "Organizations design systems that mirror their own communication structure.",
    category: "Socio-Technical Law",
    content: (
      <>
        <p className="lead text-xl text-slate-600">This law is fundamental to understanding why software architecture often ends up the way it does, regardless of the initial technical plans. It implies that if you want a microservices architecture, you must have small, autonomous teams. A monolithic organization will inevitably produce a monolithic system.</p>
        <p className="mt-4 text-lg text-slate-700">Therefore, to change an architecture, you must often first change the organization. This is a profound insight for any engineering leader or architect aiming to build scalable, decoupled systems.</p>
      </>
    )
  },
  {
    slug: "brooks-law",
    title: "Brooks's Law",
    summary: "Adding manpower to a late software project makes it later.",
    category: "Project Management Law",
    content: (
       <>
        <p className="lead text-xl text-slate-600">Coined by Fred Brooks in his seminal book "The Mythical Man-Month," this law highlights a common fallacy in project management. The reason for the delay is the exponential increase in communication overhead.</p>
        <p className="mt-4 text-lg text-slate-700">New engineers must be trained by existing ones, slowing them down, and the number of communication paths between team members increases with each new person. It's a crucial reminder that engineering teams are complex systems, not just collections of interchangeable resources.</p>
      </>
    )
  },
  // Add the other exhibits here with their full content
];

export default function ExhibitPage({ params }: { params: { slug: string } }) {
    const exhibit = exhibits.find(e => e.slug === params.slug);

    if (!exhibit) {
        notFound();
    }

    return (
        <main className="bg-slate-100 text-black">
            <div className="container mx-auto py-24 md:py-32 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <Link href="/museum/engineering" className="group flex items-center text-slate-600 hover:text-cyan-600 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                            Back to The Atrium
                        </Link>
                    </div>
                    
                    <p className="text-sm font-mono text-cyan-700 mb-2">{exhibit.category}</p>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-slate-900">
                        {exhibit.title}
                    </h1>

                    <hr className="my-12" />

                    <div className="prose prose-lg prose-slate max-w-none">
                        {exhibit.content}
                    </div>
                </div>
            </div>
        </main>
    );
}
