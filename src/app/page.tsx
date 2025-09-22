import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Profile } from '@/components/profile';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12.99A9 9 0 0 1 5.99 21L3 22l1-2.99A9 9 0 0 1 12.99 3h.01A9 9 0 0 1 21 11.99Z" />
        </svg>
    )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Profile />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-primary py-6 text-primary-foreground">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
              <Twitter className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Edwin Oshome. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
