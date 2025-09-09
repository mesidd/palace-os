import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const exhibits = [
  {
    slug: "conways-law",
    title: "Conway's Law",
    summary: "The principle that organizations design systems that mirror their own communication structure.",
    category: "Socio-Technical Law",
    content: (
      <>
        <p className="lead">This law is fundamental to understanding why software architecture often ends up the way it does, regardless of the initial technical plans. It implies that if you want a microservices architecture, you must have small, autonomous teams. A monolithic organization will inevitably produce a monolithic system.</p>
        <p className="mt-4">Therefore, to change an architecture, you must often first change the organization. This is a profound insight for any engineering leader or architect aiming to build scalable, decoupled systems.</p>
      </>
    )
  },
  {
    slug: "brooks-law",
    title: "Brooks's Law",
    summary: "The observation that adding manpower to a late software project makes it later.",
    category: "Project Management Law",
    content: (
       <>
        <p className="lead">Coined by Fred Brooks in his seminal book "The Mythical Man-Month," this law highlights a common fallacy in project management. The reason for the delay is the exponential increase in communication overhead.</p>
        <p className="mt-4">New engineers must be trained by existing ones, slowing them down, and the number of communication paths between team members increases with each new person. It's a crucial reminder that engineering teams are complex systems, not just collections of interchangeable resources.</p>
      </>
    )
  },
  // ... you can add more exhibits here following the same structure
];

export default function EngineeringAtriumPage() {
  return (
    <main className="bg-slate-100 text-black">
        <div className="container mx-auto py-24 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-cyan-600">
                        The Engineer's Atrium
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-slate-600">
                        Modern principles, tools, and laws that define the art of digital craftsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exhibits.map((exhibit) => (
                        <Link href={`/museum/engineering/${exhibit.slug}`} key={exhibit.title} className="group block">
                            <Card className="h-full bg-white/80 border-slate-200/80 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <p className="text-xs font-mono text-cyan-700 mb-2">{exhibit.category}</p>
                                    <CardTitle className="font-serif text-xl text-slate-900">{exhibit.title}</CardTitle>
                                    <CardDescription className="pt-2 text-slate-700">{exhibit.summary}</CardDescription>
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

