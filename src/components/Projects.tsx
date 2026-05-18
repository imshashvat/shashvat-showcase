import { ExternalLink, Github, Shield, BookOpen, Brain, Building2, ArrowRight, Star, Download, Smartphone, Monitor } from 'lucide-react';
import propertyPreview from '@/assets/property-preview.png';

const projects = [
  {
    id: 'safher',
    title: 'SafeHer',
    subtitle: 'AI-Powered Women\'s Safety Platform',
    description: 'A comprehensive safety ecosystem featuring real-time AI risk prediction, SOS emergency alerts, live location sharing with trusted contacts, a community reporting map, and smart safety alerts. Built with a hybrid multimodal ML model.',
    image: '/safher-preview.png',
    technologies: ['React Native', 'React.js', 'Python', 'PyTorch', 'Supabase', 'Expo'],
    githubUrl: 'https://github.com/imshashvat',
    liveUrl: 'https://safe-her-neon.vercel.app/',
    webUrl: 'https://safe-her-neon.vercel.app/',
    featured: true,
    color: 'hsl(270 80% 72%)',
    icon: Shield,
    platforms: ['Web App', 'Android APK'],
    stats: [
      { label: 'AI Risk Prediction', value: 'Real-time' },
      { label: 'Safety Features', value: '6+' },
      { label: 'Platforms', value: 'Web + App' },
    ],
  },
  {
    id: 'campuscache',
    title: 'CampusCache',
    subtitle: 'Student Resource Library',
    description: 'A full-stack resource-sharing platform for engineering students. Branch-specific libraries, contributor leaderboards with fair point tracking, file uploads, cross-branch sharing for core subjects, and an AI discovery chatbot.',
    image: '/campuscache-preview.png',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com/imshashvat/CampusCache',
    liveUrl: 'https://campus-cache.vercel.app/',
    featured: false,
    color: 'hsl(190 100% 60%)',
    icon: BookOpen,
    stats: [{ label: 'Students', value: '500+' }, { label: 'Resources', value: '100+' }],
  },
  {
    id: 'fakenews',
    title: 'Fake News Detector',
    subtitle: 'Hybrid Multimodal AI System',
    description: 'An AI fact-checking system combining BERT, CNN, XGBoost and rule-based models. Features explainable AI with SHAP analysis, confidence scores, and a human-in-the-loop feedback mechanism for continuous improvement.',
    image: '/fakenews-preview.png',
    technologies: ['Python', 'BERT', 'CNN', 'XGBoost', 'SHAP', 'PyTorch'],
    githubUrl: 'https://github.com/imshashvat/Fake-News-Detection',
    liveUrl: 'https://truth-lenss.streamlit.app/',
    featured: false,
    color: 'hsl(330 80% 65%)',
    icon: Brain,
    stats: [{ label: 'Accuracy', value: '90%+' }, { label: 'Models', value: '4 hybrid' }],
  },
  {
    id: 'property',
    title: 'Property Management',
    subtitle: 'Simplified. Smart. Secure.',
    description: 'A full-stack property management platform with tenant management, rent & invoice tracking, maintenance request queues, smart notifications, and a clean dashboard for landlords and property managers.',
    image: propertyPreview,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'TypeScript'],
    githubUrl: 'https://github.com/imshashvat/property-management',
    liveUrl: 'https://rental-masterss.vercel.app/',
    featured: false,
    color: 'hsl(45 90% 58%)',
    icon: Building2,
    stats: [{ label: 'Live', value: 'Deployed' }, { label: 'Type', value: 'Full-Stack' }],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[hsl(270_80%_62%/0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Projects</h2>
          <p className="font-inter text-white/35 max-w-lg mx-auto text-sm mt-1">
            Real-world systems built to protect, empower, and educate.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-5">

          {/* Featured: SafeHer */}
          {projects.filter(p => p.featured).map((project) => (
            <div key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-[hsl(240_8%_7%)] hover:border-[hsl(270_80%_62%/0.3)] transition-all duration-500"
              style={{ boxShadow: '0 4px 30px hsl(240 10% 2% / 0.4)' }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={project.image} alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(240_8%_7%/0.95)] hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240_8%_7%/0.8)] to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium"
                    style={{ background: `${project.color}18`, border: `1px solid ${project.color}45`, color: project.color }}>
                    <Star className="w-3 h-3 fill-current" /> Featured
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                      <project.icon className="w-5 h-5" style={{ color: project.color }} />
                    </div>
                    <div>
                      <h3 className="font-space text-2xl font-bold text-white">{project.title}</h3>
                      <p className="font-mono text-xs mt-0.5" style={{ color: project.color }}>{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="font-inter text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>
                  {/* Platform badges — Web + Mobile */}
                  {project.id === 'safher' && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-mono text-[9px] text-white/22 tracking-widest">PLATFORMS</span>
                      <div className="flex gap-2">
                        <span className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-lg"
                          style={{ background: 'hsl(270 65% 60% / 0.1)', border: '1px solid hsl(270 65% 60% / 0.3)', color: 'hsl(270 70% 72%)' }}>
                          <Monitor className="w-3 h-3" /> Web App
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-lg"
                          style={{ background: 'hsl(142 60% 48% / 0.08)', border: '1px solid hsl(142 60% 48% / 0.3)', color: 'hsl(142 65% 58%)' }}>
                          <Smartphone className="w-3 h-3" /> Android APK
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-3 mb-5">
                    {project.stats.map(s => (
                      <div key={s.label} className="px-3 py-2 rounded-xl" style={{ background: `${project.color}0c`, border: `1px solid ${project.color}1a` }}>
                        <div className="font-space font-bold text-sm text-white">{s.value}</div>
                        <div className="font-inter text-[10px] text-white/35 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded-lg"
                        style={{ background: `${project.color}0c`, border: `1px solid ${project.color}22`, color: project.color }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-2.5">
                    {/* Code */}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <button className="btn-outline flex items-center gap-2 text-sm px-4 py-2.5">
                        <Github className="w-4 h-4" /> Code
                      </button>
                    </a>

                    {/* Download APK — Mobile */}
                    {project.id === 'safher' && (
                      <a href="https://github.com/imshashvat/shashvat-showcase/releases/download/v1.0.0/SafeHer-updated.apk" target="_blank" rel="noopener noreferrer">
                        <button className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl font-semibold transition-all duration-250 hover:-translate-y-0.5"
                          style={{
                            background: 'hsl(142 60% 48% / 0.1)',
                            border: '1px solid hsl(142 60% 48% / 0.4)',
                            color: 'hsl(142 65% 58%)',
                          }}>
                          <Smartphone className="w-4 h-4" />
                          <span>Android APK</span>
                          <Download className="w-3.5 h-3.5 opacity-70" />
                        </button>
                      </a>
                    )}

                    {/* Live Web Demo */}
                    {project.id === 'safher' && (
                      <a
                        href={project.webUrl && project.webUrl !== '#' ? project.webUrl : undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={project.webUrl === '#' ? 'pointer-events-none' : ''}
                      >
                        <button
                          className="btn-primary flex items-center gap-2 text-sm px-4 py-2.5"
                          style={project.webUrl === '#' ? { opacity: 0.45 } : {}}
                          title={project.webUrl === '#' ? 'Web demo coming soon' : 'Open web app'}
                        >
                          <Monitor className="w-4 h-4" />
                          Web Demo
                          {project.webUrl !== '#'
                            ? <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                            : <span className="font-mono text-[9px] opacity-60 ml-0.5">soon</span>
                          }
                        </button>
                      </a>
                    )}

                    {/* Generic live demo for other projects */}
                    {project.id !== 'safher' && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <button className="btn-primary flex items-center gap-2 text-sm px-4 py-2.5">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Non-featured 3-column then 2-column */}
          <div className="grid md:grid-cols-3 gap-5">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-[hsl(240_8%_7%)] flex flex-col hover:border-[hsl(270_80%_62%/0.25)] transition-all duration-400"
                style={{ boxShadow: '0 4px 20px hsl(240 10% 2% / 0.35)' }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img src={project.image} alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240_8%_7%)] via-[hsl(240_8%_7%/0.2)] to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium"
                    style={{ background: `${project.color}18`, border: `1px solid ${project.color}40`, color: project.color }}>
                    Live
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${project.color}12`, border: `1px solid ${project.color}28` }}>
                      <project.icon className="w-4 h-4" style={{ color: project.color }} />
                    </div>
                    <div>
                      <h3 className="font-space text-base font-bold text-white leading-tight">{project.title}</h3>
                      <p className="font-mono text-[10px] mt-0.5" style={{ color: project.color }}>{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="font-inter text-white/45 text-[13px] leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="font-mono text-[10px] px-2 py-1 rounded-md"
                        style={{ background: `${project.color}0a`, border: `1px solid ${project.color}1e`, color: project.color }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full btn-outline flex items-center justify-center gap-1.5 text-xs py-2.5"><Github className="w-3.5 h-3.5" /> Code</button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <button className="w-full btn-primary flex items-center justify-center gap-1.5 text-xs py-2.5"><ExternalLink className="w-3.5 h-3.5" /> Demo</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a href="https://github.com/imshashvat" target="_blank" rel="noopener noreferrer">
            <button className="btn-outline flex items-center gap-2 mx-auto text-sm">
              <Github className="w-4 h-4" />
              View All on GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
