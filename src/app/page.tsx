import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <main className="flex-1">
        {/* SECTION 2: HERO PAGE */}
        <section className="flex flex-col items-center justify-center text-center py-32 md:py-48">
          <div className="w-full md:w-5/6 lg:w-4/5 xl:w-3/4 px-4">
            <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter">
              Siddhartha Sharma
            </h1>
            <h2 className="mt-4 font-sans text-2xl md:text-4xl font-semibold tracking-tight text-yellow-400">
              Ancient Software. Modern Solutions.
            </h2>
            <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground tracking-wide">
              A craftsman building timeless, resilient systems by bridging fundamental principles with cutting-edge technology.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-[#ffffff] font-semibold shadow-lg">
              <Link href="/projects">Explore the Treasury</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-teal-500 hover:bg-teal-600 text-[#ffffff] font-semibold shadow-lg">
              <Link href="/manifesto">Read the Manifesto</Link>
            </Button>
          </div>
        </section>

        {/* SECTION 2: DISPATCHES FROM THE KINGDOM */}
        <section className="container mx-auto pb-32">
          <h3 className="text-2xl font-semibold tracking-tight text-center mb-8">
            Dispatches From The Kingdom
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/projects/aicontextoptimizer">
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>AIContextOptimizer</CardTitle>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">Project</span>
                  </div>
                  <CardDescription className="pt-2">
                    A novel WASM-based engine that optimizes LLM context windows, reducing token usage by up to 60%.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/articles/lessons-from-mumbai">
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Lessons from the Maximum City</CardTitle>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">Article</span>
                  </div>
                  <CardDescription className="pt-2">
                    How Mumbai&apos;s chaotic yet resilient systems inspired my approach to building fault-tolerant software.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
