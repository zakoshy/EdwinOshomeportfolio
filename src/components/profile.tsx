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
                  I’m Edwin Oshome, a passionate Fullstack Developer and
                  Biomedical Engineer dedicated to building innovative digital
                  solutions that bridge technology and real-world impact. Over
                  the years, I’ve designed and developed websites and systems
                  for a wide range of organizations—from small businesses and
                  youth groups to large institutions such as universities,
                  hospitals, and churches.
                </p>
                <p className="text-lg text-muted-foreground">
                  Beyond traditional web development, I integrate AI-powered
                  features into almost every solution I create. For instance, I
                  developed Content Flow AI, an intelligent system that
                  automates and streamlines social media posting—helping
                  organizations save time while maintaining consistency and
                  engagement.
                </p>
                <p className="text-lg text-muted-foreground">
                  With a strong foundation in both engineering and software
                  development, I focus on delivering platforms that are not only
                  functional and scalable but also interactive, efficient, and
                  future-ready. My goal is to craft technology that empowers
                  people, simplifies workflows, and creates lasting value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
