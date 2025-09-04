import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const projectsData = {
    "aicontextoptimizer": {
        title: "AIContextOptimizer",
        description: "A novel WASM-based engine that optimizes LLM context windows, reducing token usage by up to 60%.",
        liveUrl: "#",
        githubUrl: "https://github.com/your-username/aicontextoptimizer",
        content: (
            <>
                <h2 className="font-serif text-3xl font-bold tracking-tigh mt-12 mb-4">The Problem: The High Cost of Context</h2>
                <p className='text-muted-foreground text-justify'>In the world of Large Language Models, context is king, but it&apos;s also expensive. Every token sent to an API costs money and increases latency. My core question was: <em>how much of the context we provide is truly necessary for a high-quality response?</em></p>
                
                <h2 className="font-serif text-3xl font-bold tracking-tight mt-12 mb-4">The Process: From C++ to the Edge</h2>
                <p className='text-muted-foreground text-justify'>I theorized that a significant portion of context could be compressed or summarized without losing semantic meaning. I decided to build a solution using C++ for its raw performance in text processing and compile it to WebAssembly (WASM) to run it anywhere, especially on edge networks for minimal latency.</p>
                <ul className="list-disc list-outside space-y-2 pl-5 my-6">
                    <li className='text-muted-foreground text-justify'><strong className='text-white'>Algorithm Design:</strong> Developing a custom text-ranking and summarization algorithm in C++.</li>
                    <li className='text-muted-foreground text-justify'><strong className='text-white'>Compilation to WASM:</strong> Using Emscripten to compile the C++ core into a highly optimized WASM binary.</li>
                    <li className='text-muted-foreground text-justify'><strong className='text-white'>Edge Integration:</strong> Deploying the WASM module on Vercel&apos;s Edge Network, intercepting API requests to process context on the fly.</li>
                </ul>

                <h2 className="font-serif text-3xl font-bold tracking-tight mt-12 mb-4">Lessons Learned</h2>
                <p className='text-muted-foreground text-justify'>This project was a deep dive into the intersection of low-level performance and modern cloud architecture. It reinforced a key principle from my codex: the most elegant solution is often about what you can remove, not what you can add. By removing redundant tokens, we achieved a faster, cheaper, and more efficient system.</p>
            </>
        )
    },
    // To add your next project, "vortex", simply copy the object structure above and add its details.
    "vortex": {
        title: "Project Vortex",
        description: "A decentralized identity management system using blockchain principles.",
        liveUrl: "#",
        githubUrl: "#",
        content: (
            <>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-purple-400 mt-12 mb-4">The Vision: A User-Owned Internet</h2>
                <p>Project Vortex explores the future of digital identity, where users, not corporations, control their own data...</p>
            </>
        )
    }
};

type ProjectData = typeof projectsData;
type ProjectSlug = keyof ProjectData;

// This function dynamically generates metadata for each project page.
export async function generateMetadata({ params : rawParams}: { params: { slug: ProjectSlug } | Promise<{slug: ProjectSlug}> }): Promise<Metadata> {
  const params = await rawParams;
  const {slug} = params;
    const project = projectsData[slug];
    
    if (!project) {
        return {
            title: "Project Not Found"
        }
    }

    return {
        title: `${project.title} | Case Study`,
        description: project.description
    }
}

type ProjectCaseStudyPageProps = { params: { slug: ProjectSlug } | Promise<{ slug: ProjectSlug }> };

export default async function ProjectCaseStudyPage({ params : rawParams}:  ProjectCaseStudyPageProps) {
    const params = await rawParams;
    const {slug} = params;

    const project = projectsData[slug];
    if (!project) {
        notFound();
    }

    return (
        <main className="container mx-auto py-24 md:py-32 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-purple-400">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        {project.description}
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                            </a>
                        </Button>
                        <Button variant="secondary" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> Source Code
                            </a>
                        </Button>
                    </div>
                </div>

                <hr className="my-12 border-border/40" />
                
                {/* The content is rendered directly here. Tailwind styles will apply perfectly. */}
                <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white">
                    {project.content}
                </div>
            </div>
        </main>
    );
}