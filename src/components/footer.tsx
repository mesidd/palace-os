import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container mx-auto max-w-5xl flex items-center justify-between py-6 px-4">
        <div className="text-sm text-muted-foreground font-mono">
          &copy; {currentYear} Siddhartha Sharma. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
