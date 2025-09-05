"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// The "exhibits" for this gallery
const exhibits = [
  {
    title: "Conway's Law",
    summary: "The principle that organizations design systems that mirror their own communication structure.",
    category: "Socio-Technical Law",
    details: "This implies that if you want a microservices architecture, you must have small, autonomous teams. A monolithic organization will inevitably produce a monolithic system, regardless of the stated technical goals."
  },
  {
    title: "Brooks's Law",
    summary: "The observation that adding manpower to a late software project makes it later.",
    category: "Project Management Law",
    details: "The reason is the exponential increase in communication overhead. New engineers must be trained by existing ones, slowing them down, and the number of communication paths between team members increases with each new person."
  },
  {
    title: "The Law of Leaky Abstractions",
    summary: "The rule that all non-trivial abstractions, to some degree, leak details of their underlying implementation.",
    category: "Software Design Law",
    details: "A successful architect must understand not just the abstraction, but also what it is abstracting away. Relying blindly on an abstraction without understanding its limitations is a common source of complex, hard-to-debug failures."
  },
  {
    title: "Postel's Law (The Robustness Principle)",
    summary: "Be conservative in what you do, be liberal in what you accept from others.",
    category: "Protocol Design Law",
    details: "When building an API, for example, your own service should send perfectly structured data (be conservative), but it should be prepared to handle slightly malformed data from clients (be liberal) to ensure the entire system is resilient."
  },
];

type Exhibit = typeof exhibits[0];

export default function EngineeringAtriumPage() {
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null);

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
                        <motion.div
                            key={exhibit.title}
                            layoutId={exhibit.title}
                            onClick={() => setSelectedExhibit(exhibit)}
                            className="cursor-pointer"
                        >
                            <Card className="group h-full bg-white/80 border-slate-200/80 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <p className="text-xs font-mono text-cyan-700 mb-2">{exhibit.category}</p>
                                    <CardTitle className="font-serif text-xl text-slate-900">{exhibit.title}</CardTitle>
                                    <CardDescription className="pt-2 text-slate-700">{exhibit.summary}</CardDescription>
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
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the card
              >
                <Card className="bg-white shadow-2xl">
                    <CardHeader>
                        <p className="text-xs font-mono text-cyan-700 mb-2">{selectedExhibit.category}</p>
                        <CardTitle className="font-serif text-3xl text-slate-900">{selectedExhibit.title}</CardTitle>
                        <CardDescription className="pt-4 text-lg text-slate-800 leading-relaxed">
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

