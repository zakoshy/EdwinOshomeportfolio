'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <Card className="md:col-span-3 shadow-lg">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I&apos;m open to new opportunities and collaborations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" required type="text" aria-label="Your Name" />
                <Input placeholder="Your Email" required type="email" aria-label="Your Email" />
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  aria-label="Your Message"
                />
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="md:col-span-2 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
               <Link
                href="mailto:edwin.oshome@example.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="text-foreground group-hover:text-accent transition-colors">
                  edwin.oshome@example.com
                </span>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="text-foreground group-hover:text-accent transition-colors">
                  LinkedIn
                </span>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="text-foreground group-hover:text-accent transition-colors">
                  GitHub
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
