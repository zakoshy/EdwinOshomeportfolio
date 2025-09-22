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
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = `Message from ${name} via portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:edwinoshome37@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    form.reset();
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="md:col-span-3 space-y-10">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <MapPin className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-foreground">Mombasa, Kenya</span>
                </div>
                <Link
                  href="mailto:edwinoshome37@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-foreground group-hover:text-accent transition-colors">
                    edwinoshome37@gmail.com
                  </span>
                </Link>
                <Link
                  href="tel:+254741157757"
                  className="flex items-center gap-3 group"
                >
                  <Phone className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                  <span className="text-foreground group-hover:text-accent transition-colors">
                    +254 741 157 757
                  </span>
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I&apos;m open to new opportunities and collaborations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    type="text"
                    aria-label="Your Name"
                  />
                  <Input
                    name="email"
                    placeholder="Your Email"
                    required
                    type="email"
                    aria-label="Your Email"
                  />
                  <Textarea
                    name="message"
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
          </div>
          <div className="md:col-span-2">
            {/* This space can be used for an image or other content in the future */}
          </div>
        </div>
      </div>
    </section>
  );
}
