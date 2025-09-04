import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const contactLinks = [
    {
        icon: <Mail className="h-6 w-6" />,
        label: "Email",
        value: "siddhartha.sharma@example.com",
        href: "mailto:siddhartha.sharma@example.com",
    },
    {
        icon: <Github className="h-6 w-6" />,
        label: "GitHub",
        value: "@your-username",
        href: "https://github.com/your-username",
    },
    {
        icon: <Linkedin className="h-6 w-6" />,
        label: "LinkedIn",
        value: "Siddhartha Sharma",
        href: "https://linkedin.com/in/your-profile",
    },
];

export default function ContactPage() {
    return (
        <main className="bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="container mx-auto py-24 md:py-32 px-4">
                <div className="max-w-4xl mx-auto -mt-8">
                    {/* Section 1: The Envoy's Introduction (About Me) */}
                    <div className="text-center md:mb-16">
                        <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-amber-400">
                            The Hall Of Envoys
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                            The craftsman behind the kingdom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-24">
                        <div className="md:col-span-1 flex justify-center items-center flex-col">
                            <div className="relative h-61 mt-14 w-56 border-4 border-border overflow-hidden">
                                <Image
                                    src="/profile.jpg"
                                    alt="Siddhartha Sharma"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                            <div>
                                <p className="mt-2 text-lg font-semibold text-center">Siddhartha Sharma</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h2 className="font-serif text-3xl font-bold mb-4">My Journey</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I am a craftsman, a philosopher, and a final-year student on a mission to build timeless, resilient software. My journey, from the vibrant streets of Mumbai to the lecture halls of the IITs, has taught me that the most profound technological solutions are born from a deep understanding of first principles—in science, in art, and in the human experience.
                                <br /><br />
                                My work is a continuous exploration of this intersection. I don&apos;t just write code; I build systems that are simple, antifragile, and imbued with a purpose. This digital palace is a chronicle of that journey.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: The Direct Channel (Get in Touch) */}
                    <Card className="bg-card/60 border-border/60">
                        <CardHeader>
                            <CardTitle className="font-serif text-3xl text-center">Send a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                {contactLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-6 bg-secondary/50 rounded-lg hover:bg-secondary/80 transition-colors"
                                    >
                                        <div className="flex justify-center mb-3">
                                            {link.icon}
                                        </div>
                                        <h3 className="font-semibold text-lg">{link.label}</h3>
                                        <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}

