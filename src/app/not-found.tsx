import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center py-24 px-4">
      <div className="max-w-md mx-auto">
        <Compass className="h-24 w-24 mx-auto text-muted-foreground/50 mb-8" />
        <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tighter">
          A Path Lost
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          It seems you have wandered into uncharted territory. The page you seek does not exist in this kingdom.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Return to the Royal Entrance</Link>
        </Button>
      </div>
    </main>
  );
}
