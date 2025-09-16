import { ExternalLink, Github, Code, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Amazon Clone',
      description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, and payment integration.',
      image: '/placeholder-amazon.jpg', // Will be replaced with generated image
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS3'],
      liveUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/shashvat/amazon-clone',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills, built with modern web technologies and featuring smooth animations.',
      image: '/placeholder-portfolio.jpg', // Will be replaced with generated image
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      liveUrl: 'https://shashvat-portfolio.com',
      githubUrl: 'https://github.com/shashvat/portfolio',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A productive task management application with features like drag-and-drop, categories, deadlines, and collaborative workspaces.',
      image: '/placeholder-task.jpg', // Will be replaced with generated image
      technologies: ['React.js', 'Firebase', 'Material-UI', 'JavaScript'],
      liveUrl: 'https://taskapp.example.com',
      githubUrl: 'https://github.com/shashvat/task-app',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that provides real-time weather information with interactive charts and location-based forecasts.',
      image: '/placeholder-weather.jpg', // Will be replaced with generated image
      technologies: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
      liveUrl: 'https://weather-dash.example.com',
      githubUrl: 'https://github.com/shashvat/weather-dashboard',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with features like private messaging, group chats, file sharing, and emoji support.',
      image: '/placeholder-chat.jpg', // Will be replaced with generated image
      technologies: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: 'https://chatapp.example.com',
      githubUrl: 'https://github.com/shashvat/chat-app',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with rich text editor, categories, comments system, and user management features.',
      image: '/placeholder-blog.jpg', // Will be replaced with generated image
      technologies: ['Next.js', 'MongoDB', 'TailwindCSS', 'TypeScript'],
      liveUrl: 'https://blogplatform.example.com',
      githubUrl: 'https://github.com/shashvat/blog-platform',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web development, 
          programming, and problem-solving.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`project-card ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Project Image Placeholder */}
              <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-card h-48 flex items-center justify-center border border-border/20">
                <div className="text-center">
                  <Code className="h-12 w-12 text-primary mx-auto mb-2 opacity-50" />
                  <p className="text-sm text-muted-foreground">Project Screenshot</p>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-accent/50 text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
            asChild
          >
            <a href="https://github.com/imshashvat" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;