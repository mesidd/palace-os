"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// The "exhibits" for this gallery - future-focused concepts
const exhibits = [
  {
    title: "Planetary-Scale Engineering",
    summary: "Exploring the challenges and responsibilities of building software that operates at a civilizational scale.",
    category: "Future Architecture",
    details: "When a system serves billions of users, it ceases to be just code—it becomes critical infrastructure. This requires a shift in thinking from short-term features to long-term resilience, adaptability, and second-order effects. We must design for generational timescales, anticipating not just technical debt, but societal debt."
  },
  {
    title: "The Ethics of AGI",
    summary: "Moving beyond technical capability to address the philosophical alignment of artificial general intelligence.",
    category: "AI Philosophy",
    details: "The alignment problem is not merely a technical challenge of defining a correct utility function. It is a deeply philosophical one about codifying human values—values we ourselves often struggle to define. The most important work in the coming years will be at the intersection of computer science and the humanities."
  },
  {
    title: "Software as a Civilizational Tool",
    summary: "Viewing code not as a commercial product, but as a fundamental tool for shaping the future of human society.",
    category: "Vision",
    details: "The printing press democratized knowledge. The steam engine industrialized society. Software is a tool of similar magnitude, but with a crucial difference: it is a tool for thought, for connection, and for coordination. The software we build today is the cultural and operational bedrock of the civilization of tomorrow."
  },
  {
    title: "Digital Cathedrals",
    summary: "On building long-term, open-source projects that are meant to be built upon for generations.",
    category: "Open Source Philosophy",
    details: "Much of modern software is built for immediate obsolescence. A 'Digital Cathedral' is a project built with a different mindset: for longevity, for community, and for a purpose that transcends its original creators. Like the stone cathedrals of old, they are built by many hands over many years, becoming a shared legacy."
  },
];

type Exhibit = typeof exhibits[0];

export default function ObservatoryPage() {
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);

  return (
    // Main container using the same live constellation background
    <main className="bg-blue-900">
        <div className="container mx-auto py-24 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-blue-400">
                        The Observatory
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        Explorations into the future of technology and its civilizational impact.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exhibits.map((exhibit) => (
                        <motion.div
                            key={exhibit.title}
                            layoutId={exhibit.title}
                            onClick={() => setSelectedExhibit(exhibit)}
                            className="cursor-pointer"
                        >
                            <Card className="group h-full bg-card/60 border-border/60 shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <p className="text-xs font-mono text-blue-400/100 mb-2">{exhibit.category}</p>
                                    <CardTitle className="font-serif text-xl text-white">{exhibit.title}</CardTitle>
                                    <CardDescription className="pt-2 text-slate-400">{exhibit.summary}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        <AnimatePresence>
          {selectedExhibit && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedExhibit(null)}
            >
              <motion.div 
                layoutId={selectedExhibit.title}
                className="relative max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Card className="bg-card shadow-2xl border-yellow-500/20">
                    <CardHeader>
                        <p className="text-xs font-mono text-blue-400/80 mb-2">{selectedExhibit.category}</p>
                        <CardTitle className="font-serif text-3xl text-white">{selectedExhibit.title}</CardTitle>
                        <CardDescription className="pt-4 text-lg text-slate-300 leading-relaxed">
                            {selectedExhibit.details}
                        </CardDescription>
                    </CardHeader>
                </Card>
                <button onClick={() => setSelectedExhibit(null)} className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                    <X className="h-5 w-5 text-slate-800" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </main>
  );
}
