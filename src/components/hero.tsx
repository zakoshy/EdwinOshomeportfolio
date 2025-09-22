import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="home"
      className="w-full py-24 md:py-32 lg:py-48 bg-background"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Edwin Oshome
          </h1>
          <h2 className="text-xl font-medium text-foreground sm:text-2xl md:text-3xl">
            Fullstack Developer & Biomedical Engineer
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground md:text-lg">
            I build impactful digital solutions for organizations, from portals
            to web platforms.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
