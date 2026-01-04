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
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.11 4.91C17.22 3 14.71 2 12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.27 4.96L2 22l5.04-1.27c1.51.81 3.19 1.27 4.96 1.27h.01c5.52 0 10-4.48 10-10c0-2.71-1-5.22-2.89-7.09zM12 20.5c-1.63 0-3.18-.5-4.5-1.37l-.32-.19l-3.34.84l.86-3.27l-.2-.33c-.88-1.43-1.37-3.08-1.37-4.83c0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm4.4-5.93c-.27-.14-1.59-.78-1.84-.87c-.25-.09-.43-.14-.61.14c-.18.27-.69.87-.85 1.04c-.16.18-.32.19-.59.07c-.27-.12-1.15-.43-2.19-1.34c-.81-.71-1.35-1.59-1.51-1.86c-.16-.27-.02-.43.12-.56c.13-.12.27-.32.41-.48c.14-.16.18-.27.27-.45c.09-.18.05-.34-.02-.48c-.07-.13-.61-1.47-.84-2.02c-.23-.55-.47-.48-.65-.48c-.17,0-.35-.02-.53-.02c-.18,0-.47.07-.72.35c-.25.27-.97.94-1.2 2.29c-.23 1.35.25 2.65.28 2.82c.04.18 1.22 1.86 3.06 2.67c1.84.81 1.84.54 2.17.51c.33-.04 1.59-.65 1.81-1.27c.22-.62.22-1.14.15-1.27c-.07-.13-.25-.21-.52-.34z"/>
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
        <WhatsAppBubbleIcon className="h-10 w-10" />
      </Link>
    </div>
  );
}
