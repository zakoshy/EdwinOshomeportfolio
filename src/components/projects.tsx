'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';
import placeholderImages from '@/app/lib/placeholder-images.json';

const projectData = [
  {
    id: 'contentflow-ai',
    title: 'ContentFlow AI',
    description:
      'A powerful automation tool that helps businesses and content creators schedule and post content across multiple social media platforms.',
    image: placeholderImages.projects.contentflow.url,
    hint: placeholderImages.projects.contentflow.hint,
    liveUrl: 'https://contentflow-roan.vercel.app/',
    githubUrl: 'https://github.com/zakoshy/contentflow',
  },
  {
    id: 'rag-chatbot',
    title: 'Constitution AI Chatbot',
    description:
      'A RAG-based intelligent assistant trained on specific youth group constitutions to provide instant, accurate policy guidance.',
    image: placeholderImages.projects.rag.url,
    hint: placeholderImages.projects.rag.hint,
    liveUrl: 'https://empowersyouthchatbot.vercel.app/',
    githubUrl: 'https://github.com/zakoshy/empowersyouthchatbot',
  },
  {
    id: 'hotel-website',
    title: 'Luxury Stay Hotel',
    description:
      'A high-end hotel management platform featuring room booking samples, service management, and a premium guest interface.',
    image: placeholderImages.projects.hotel.url,
    hint: placeholderImages.projects.hotel.hint,
    liveUrl: 'https://coast-hotel.vercel.app/',
    githubUrl: 'https://github.com/zakoshy/coast-hotel',
  },
  {
    id: 'youth-platform',
    title: 'Youth Group Platform',
    description:
      'A comprehensive digital home for youth organizations, facilitating resource sharing and event coordination.',
    image: placeholderImages.projects.youth.url,
    hint: placeholderImages.projects.youth.hint,
    liveUrl: 'https://empowers-youth-group.vercel.app/',
    githubUrl: 'https://github.com/zakoshy/Empowers-Youth-Group',
  },
  {
    id: 'car-sales',
    title: 'Elite Auto Imports',
    description:
      'A professional marketplace specializing in the sale and procurement of high-quality imported vehicles.',
    image: placeholderImages.projects.cars.url,
    hint: placeholderImages.projects.cars.hint,
    liveUrl: 'https://al-zia-motors.vercel.app/',
    githubUrl: 'https://github.com/zakoshy/AL-ZIA-MOTORS',
  },
  {
    id: 'timber-sales',
    title: 'Heritage Timber Works',
    description:
      'An e-commerce platform for premium timber products including bespoke beds, chairs, and office furniture.',
    image: placeholderImages.projects.timber.url,
    hint: placeholderImages.projects.timber.hint,
    liveUrl: 'https://timber-sales.vercel.app/',
    githubUrl: 'https://github.com/zakoshy/timber-sales',
  },
];

const PROJECTS_VISIBLE_INITIALLY = 4;

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(
    PROJECTS_VISIBLE_INITIALLY
  );

  const showMore = () => {
    setVisibleProjects(projectData.length);
  };

  const showLess = () => {
    setVisibleProjects(PROJECTS_VISIBLE_INITIALLY);
  };

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectData.slice(0, visibleProjects).map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border-muted"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  data-ai-hint={project.hint}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-2 text-base leading-relaxed">
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
        {projectData.length > PROJECTS_VISIBLE_INITIALLY && (
          <div className="mt-12 text-center">
            {visibleProjects < projectData.length ? (
              <Button onClick={showMore} variant="outline" size="lg">
                Show More Projects
              </Button>
            ) : (
              <Button onClick={showLess} variant="outline" size="lg">
                Show Fewer Projects
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
