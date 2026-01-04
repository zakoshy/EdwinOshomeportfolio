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
                width={300}
                height={300}
                className="rounded-full object-cover border-4 border-card shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-foreground">
                  I’m Edwin Oshome, a Fullstack Developer and Biomedical
                  Engineer with a passion for creating scalable, interactive,
                  and future-ready digital solutions. I have built websites and
                  systems for diverse organizations—including churches, youth
                  groups, universities, and hospitals—always tailoring each
                  project to meet real-world needs.
                </p>
                <p className="text-lg text-muted-foreground">
                   Beyond web development, I specialize in integrating
                  AI-powered features that enhance efficiency and engagement. I build and train custom chatbots with organizational data to create intelligent, automated assistants. One example is ContentFlow AI, a tool I developed to streamline social media posting and save valuable time for
                  users. My approach blends engineering precision with
                  innovative software design, ensuring every platform I deliver
                  is impactful, user-friendly, and intelligent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
