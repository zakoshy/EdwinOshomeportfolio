import { Code, Database, Server, Atom, HeartPulse, BrainCircuit, Dna, FlaskConical, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const devSkills = [
  { name: 'JavaScript', level: 95, icon: <Code className="h-6 w-6 text-accent" /> },
  { name: 'React / Next.js', level: 90, icon: <Atom className="h-6 w-6 text-accent" /> },
  { name: 'Node.js', level: 85, icon: <Server className="h-6 w-6 text-accent" /> },
  { name: 'MongoDB', level: 80, icon: <Database className="h-6 w-6 text-accent" /> },
  { name: 'Tailwind CSS', level: 95, icon: <Wind className="h-6 w-6 text-accent" /> },
];

const bioSkills = [
    { name: 'Medical Device Design', level: 90, icon: <HeartPulse className="h-6 w-6 text-accent" /> },
    { name: 'Biomedical Signal Processing', level: 85, icon: <BrainCircuit className="h-6 w-6 text-accent" /> },
    { name: 'Biomechanics', level: 80, icon: <Dna className="h-6 w-6 text-accent" /> },
    { name: 'Clinical Engineering', level: 88, icon: <FlaskConical className="h-6 w-6 text-accent" /> },
];


export function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline text-primary">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Fullstack Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {devSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    value={skill.level}
                    aria-label={`${skill.name} proficiency`}
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Biomedical Engineering</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {bioSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                     <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    value={skill.level}
                    aria-label={`${skill.name} proficiency`}
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
