import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function Profile() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          <div className="md:col-span-1 flex justify-center items-center">
            <div className="relative group">
              <Image
                src="/profile.jpg"
                alt="Edwin Oshome"
                width={250}
                height={250}
                className="rounded-full object-cover border-4 border-card shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-foreground">
                  I'm a passionate Fullstack Developer with a unique
                  background as a Biomedical Engineer. This blend of disciplines
                  gives me a structured approach to problem-solving and a deep
                  understanding of creating user-centric, reliable systems.
                </p>
                <p className="text-lg text-muted-foreground">
                  My journey in software development has led me to build a
                  variety of web applications, including comprehensive church
                  websites, engaging platforms for youth groups, a robust
                  university portal system, and a critical hospital portal. I
                  thrive on turning complex requirements into elegant,
                  efficient, and impactful digital solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
