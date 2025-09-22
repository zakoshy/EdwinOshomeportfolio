import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Profile } from '@/components/profile';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';

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
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Edwin Oshome. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
