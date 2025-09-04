export default function ManifestoPage() {
  const axioms = [
    {
      title: "Seek Truth in Simplicity",
      text: "Complexity is the enemy of clarity and the mother of fragility. The highest form of mastery is not in building complex systems, but in distilling the complex into the profoundly simple. Before a line of code is written, the essential truth of the problem must be understood. Elegant code is merely the shadow of elegant thought.",
    },
    {
      title: "Build Antifragile Systems",
      text: "In a world of constant change, robustness is not enough. We must build systems that do not merely withstand stress, but gain from it. This means embracing failure as a source of information, designing for resilience at every layer, and preferring architectures that evolve over those that are rigidly planned. A system that cannot adapt is already a legacy.",
    },
    {
      title: "Code is a Liability",
      text: "Every line of code written is a debt incurred. It must be maintained, understood, and carried forward. Therefore, the goal is not to write more code, but to solve problems with the least code possible. The most valuable work is often in the deletion of code, in the simplification of a system, or in the decision to not build at all. The asset is the solution, not the code that implements it.",
    },
  ];

  return (
    <main className="container mx-auto py-24 md:py-38 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-center text-amber-400">
          The Craftsman&apos;s Codex
        </h1>

        <p className="mt-8 text-lg md:text-xl text-slate-200 leading-relaxed text-justify">
          Software is more than a craft; it is a philosophy applied. It is the art of breathing life into logic, of building resilient systems in a universe of chaos. This codex is the set of first principles that guides my hand—a commitment to building not just for the now, but for the forever.
        </p>

        <hr className="my-16 md:my-20 border-border/40" />
        <div className="space-y-16">
          {axioms.map((axiom, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-8">
              <span className="font-serif text-7xl md:text-8xl text-yellow-400/80 leading-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-50">
                  {axiom.title}
                </h2>
                <p className="mt-4 text-lg text-slate-300 leading-loose text-justify">
                  {axiom.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

