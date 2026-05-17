import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/imshashvat', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shashvat-tripathi-6518aa332/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shashvatt68@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-[hsl(270_80%_62%/0.1)] bg-[hsl(240_10%_4%/0.95)] backdrop-blur-sm overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[hsl(270_80%_62%/0.6)] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center border border-[hsl(270_80%_62%/0.4)] bg-[hsl(270_80%_62%/0.08)]">
                <Code2 className="w-4 h-4 text-[hsl(270_80%_72%)]" />
              </div>
              <span className="font-mono text-sm font-semibold text-white/70">
                <span className="text-[hsl(270_80%_72%)]">&lt;</span>ST
                <span className="text-[hsl(270_80%_72%)]">/&gt;</span>
              </span>
            </div>
            <p className="font-space text-lg font-bold text-white">Shashvat Tripathi</p>
            <p className="font-inter text-xs text-white/35 leading-relaxed max-w-xs">
              CSE Student & AI/ML Developer building intelligent systems that solve real-world problems and create lasting impact.
            </p>
            <p className="font-mono text-xs text-[hsl(270_80%_62%/0.6)] tracking-widest">
              BUILD · SOLVE · IMPACT
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-4">Quick Links</p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  className="block font-inter text-sm text-white/40 hover:text-[hsl(270_80%_80%)] transition-colors duration-200 text-left">
                  → {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3 mb-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-[hsl(270_80%_62%/0.2)] text-white/35 hover:text-[hsl(270_80%_72%)] hover:border-[hsl(270_80%_62%/0.5)] hover:bg-[hsl(270_80%_62%/0.08)] transition-all duration-300">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <button onClick={scrollToTop}
              className="group flex items-center gap-2 font-inter text-sm text-white/30 hover:text-[hsl(270_80%_72%)] transition-colors duration-300">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-[hsl(270_80%_62%/0.2)] group-hover:border-[hsl(270_80%_62%/0.5)] group-hover:bg-[hsl(270_80%_62%/0.08)] transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </div>
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[hsl(270_80%_62%/0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/25">
            © {year} Shashvat Tripathi. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20">
            Designed & Developed by{' '}
            <span className="text-[hsl(270_80%_62%/0.6)]">Shashvat Tripathi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;