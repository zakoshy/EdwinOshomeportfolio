import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

const projectData = [
  {
    id: 'church-website',
    title: 'Church Website',
    description:
      'A comprehensive website for a local church, featuring event management and community forums.',
    image: PlaceHolderImages.find((p) => p.id === 'project-church'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'youth-platform',
    title: 'Youth Group Platform',
    description:
      'An engaging platform for youth groups with resource sharing and activity coordination.',
    image: PlaceHolderImages.find((p) => p.id === 'project-youth'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'university-portal',
    title: 'University Portal System',
    description:
      'A robust portal system for a university, handling student information and course management.',
    image: PlaceHolderImages.find((p) => p.id === 'project-university'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'hospital-portal',
    title: 'Hospital Portal',
    description:
      'A secure portal for a hospital, managing patient records and appointments.',
    image: PlaceHolderImages.find((p) => p.id === 'project-hospital'),
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectData.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={
                    project.image?.imageUrl || 'https://picsum.photos/600/400'
                  }
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.image?.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-2 text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto flex gap-4 pt-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button asChild variant="secondary" className="flex-1">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
