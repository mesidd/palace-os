"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// The "exhibits" for this gallery - timeless philosophical quotes
const exhibits = [
  {
    title: "On Obstacles",
    author: "Marcus Aurelius",
    quote: "The impediment to action advances action. What stands in the way becomes the way.",
    category: "Stoic Philosophy",
    details: "This principle teaches that every obstacle we encounter is not a barrier, but an opportunity to practice virtue and ingenuity. In engineering, a difficult bug is not a roadblock; it is a lesson in the system's true nature. A tight constraint is not a limitation; it is a catalyst for a more elegant solution."
  },
  {
    title: "On First Principles",
    author: "Aristotle",
    quote: "In every systematic inquiry, it is the first principles that are the most important.",
    category: "Metaphysics",
    details: "To build something truly robust, one must deconstruct the problem to its most fundamental truths, the 'first principles.' This method of thinking, breaking down complex problems into their basic elements, allows one to reassemble them in new and innovative ways, free from the baggage of convention."
  },
  {
    title: "On Simplicity",
    author: "Lao Tzu",
    quote: "Simplicity, patience, compassion. These three are your greatest treasures.",
    category: "Taoist Philosophy",
    details: "In a world of ever-increasing complexity, the ultimate sophistication is simplicity. A simple system is easier to understand, maintain, and reason about. Patience is required to find that simple solution, and compassion is required to build it for the end-user, not for the ego of the engineer."
  },
  {
    title: "On Change",
    author: "Heraclitus",
    quote: "The only constant in life is change.",
    category: "Pre-Socratic Philosophy",
    details: "Systems that are built to be static are already obsolete. A truly future-proof architecture is one that is designed for evolution. It must be modular, adaptable, and resilient, embracing the constant flux of requirements, technologies, and user needs as a feature, not a bug."
  },
];

type Exhibit = typeof exhibits[0];

export default function AncientsHallPage() {
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);

  return (
    // Main container with the dark, cosmic background
    <main className="bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="container mx-auto py-24 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-purple-400">
                        The Hall of Ancients
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                        Timeless wisdom and philosophical ideas that inspire elegant solutions.
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
                            <Card className="group h-full bg-card/60 border-border/60 shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <p className="text-xs font-mono text-purple-400/80 mb-2">{exhibit.category}</p>
                                    <CardTitle className="font-serif text-xl text-white">{exhibit.title}</CardTitle>
                                    <CardDescription className="pt-2 text-slate-400 italic">"{exhibit.quote}"</CardDescription>
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
                <Card className="bg-card shadow-2xl border-purple-500/20">
                    <CardHeader>
                        <p className="text-xs font-mono text-purple-400/80 mb-2">{selectedExhibit.category}</p>
                        <CardTitle className="font-serif text-3xl text-white">{selectedExhibit.title}</CardTitle>
                        <CardDescription className="pt-4 text-lg text-slate-300 leading-relaxed">
                            <span className="block italic text-slate-400 mb-4">"{selectedExhibit.quote}" - {selectedExhibit.author}</span>
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
