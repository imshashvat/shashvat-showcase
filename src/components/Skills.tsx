import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Terminal,
  Palette,
  Server
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'primary',
      skills: [
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'React.js' },
        { name: 'TypeScript' }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'accent',
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'REST APIs' }
      ]
    },
    {
      title: 'Programming',
      icon: Code2,
      color: 'primary',
      skills: [
        { name: 'Python' },
        { name: 'C++' },
        { name: 'C' },
        { name: 'Java' },
        { name: 'Data Structures' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Terminal,
      color: 'accent',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'VS Code' },
        { name: 'Figma' },
        { name: 'Linux' },
        { name: 'Docker' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${
                  category.color === 'primary' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-accent/20 text-accent'
                }`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="glass-card p-4 text-center hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {[
              { icon: Code2, name: 'Programming' },
              { icon: Database, name: 'Databases' },
              { icon: Globe, name: 'Web Dev' },
              { icon: Smartphone, name: 'Responsive' },
              { icon: GitBranch, name: 'Version Control' },
              { icon: Terminal, name: 'CLI Tools' },
              { icon: Palette, name: 'UI/UX' },
              { icon: Server, name: 'Backend' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-card/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;