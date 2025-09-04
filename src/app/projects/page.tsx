"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

// You can easily add more projects here by following the same object structure.
const projects = [
  {
    title: "AIContextOptimizer",
    slug: "aicontextoptimizer",
    description: "A novel WASM-based engine that optimizes LLM context windows, reducing token usage by up to 60%.",
    techStack: ["C++", "WASM", "Next.js", "Vercel Edge"],
    githubUrl: "https://github.com/your-username/aicontextoptimizer",
  },
  {
    title: "Project Vortex",
    slug: "vortex",
    description: "A decentralized identity management system using blockchain principles for secure, user-owned data.",
    techStack: ["Solidity", "TypeScript", "React", "Supabase"],
    githubUrl: "https://github.com/your-username/vortex",
  },
  // Add your next project here...
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-amber-400">
            The Treasury
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A curated collection of artifacts forged from the principles of the Craftsman&apos;s Codex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.title} className="block hover:scale-105 transition-transform duration-300">
              <Card className="h-full flex flex-col bg-card/80 border-border/60 hover:border-primary/80 transition-colors">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="bg-secondary text-secondary-foreground text-xs font-mono px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}