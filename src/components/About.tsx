import { GraduationCap, Code, Trophy, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* About Content */}
          <div className="space-y-6">
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Passionate Developer</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineering student with a deep passion for technology 
                and problem-solving. I love creating innovative solutions that make a difference 
                in people's lives and continuously learning new technologies to expand my skillset.
              </p>
            </div>

            <div className="glass-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">What I Do</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack web development, with experience in modern 
                frameworks like React, Node.js, and various databases. I enjoy working 
                on both frontend user interfaces and backend system architecture.
              </p>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h4 className="font-semibold text-foreground">Computer Science Engineering</h4>
                  <p className="text-sm text-muted-foreground">B.Tech Section B</p>
                  <p className="text-sm text-muted-foreground">2024 - 2028</p>
                </div>
                
                <div className="border-l-2 border-accent/30 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                  <h4 className="font-semibold text-foreground">Higher Secondary</h4>
                  <p className="text-sm text-muted-foreground">Science Stream</p>
                  <p className="text-sm text-muted-foreground">2021 - 2023</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Built Amazon Clone with React & Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Proficient in multiple programming languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Active in open-source contributions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;