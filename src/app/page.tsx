import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Profile } from '@/components/profile';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
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

function WhatsAppBubbleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.75 13.96c.25.13.41.2.46.3.05.1.04.68-.12 1.32-.16.64-.56.91-1.17 1.12-.6.2-1.24.22-1.84.13-.6-.1-1.32-.35-2.23-.83-.9-.48-1.64-.99-2.2-1.54-.56-.55-1.01-1.16-1.36-1.82s-.53-1.34-.51-2.04.18-1.19.38-1.61c.2-.42.44-.64.7-.76.26-.12.56-.14.82-.12.26.02.51.04.73.23.22.19.33.43.43.62.1.19.16.35.19.48.03.13.03.28-.02.43-.05.15-.12.28-.24.42s-.22.25-.3.33c-.08.08-.16.15-.22.21-.06.06-.12.12-.16.18-.04.06-.08.11-.11.15s-.04.1-.04.14.01.12.06.19.1.15.15.22.12.14.19.22c.07.08.15.15.24.23.5.46 1.1.86 1.77 1.2s1.33.56 1.95.73c.25.07.47.1.66.08.19-.02.39-.07.56-.21.17-.14.28-.27.35-.4.07-.13.11-.27.11-.43s-.01-.32-.05-.49c-.04-.17-.09-.32-.15-.45s-.12-.25-.2-.36c-.08-.11-.16-.21-.24-.29s-.14-.14-.2-.19c-.06-.05-.12-.1-.16-.14s-.08-.07-.1-.08l-.07-.05c-.02,0-.05-.01-.07-.02-.25-.09-.43-.02-.55.15-.12.17-.4.6-.53.79-.13.19-.24.33-.3.39-.06.06-.11.08-.16.08s-.1-.01-.15-.05c-.05-.04-.09-.08-.13-.13s-.07-.11-.09-.17a.93.93 0 0 1-.09-.23c-.03-.09-.05-.18-.05-.27s.01-.18.04-.26.06-.16.1-.24.08-.15.13-.22.1-.13.15-.19.1-.11.16-.16.12-.1.18-.13.14-.06.2-.08c.07-.02.13-.03.19-.03s.12,0,.18.01.12.02.17.04c.05.02.1.04.15.07l.1.05c.04.02.07.04.1.06.46.25.77.63.95 1.17.18.54.21 1.05.12 1.53-.09.48-.3 1.05-.62 1.7-.32.65-.75 1.2-1.28 1.65-.53.45-1.12.8-1.78 1.05s-1.3.38-1.92.38c-.62,0-1.24-.12-1.84-.37s-1.14-.62-1.63-1.1c-.49-.48-.88-.98-1.18-1.52s-.49-1.11-.58-1.7c-.09-.59-.07-1.18.04-1.76.11-.58.33-1.1.66-1.56.33-.46.73-.83 1.2-1.12.47-.29.98-.47 1.5-.54.52-.07 1.02-.04 1.5.08.48.12.9.33 1.26.63.36.3.65.68.86 1.13Z" />
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
            <Link href="https://twitter.com/edwindeZak74715" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
              <X className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100077827940933" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://wa.me/254741157757" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.linkedin.com/in/edwin-oshome-b627b52b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Edwin Oshome. All rights reserved.</p>
        </div>
      </footer>
      <Link
        href="https://wa.me/254741157757"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppBubbleIcon className="h-8 w-8" />
      </Link>
    </div>
  );
}
