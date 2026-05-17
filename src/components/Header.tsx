import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import HireMeDialog from './HireMeDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[hsl(240_10%_4%/0.85)] backdrop-blur-xl border-b border-[hsl(270_80%_62%/0.12)] shadow-[0_4px_30px_hsl(270_80%_62%/0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2"
            aria-label="Go to home"
          >
            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center border border-[hsl(270_80%_62%/0.4)] bg-[hsl(270_80%_62%/0.08)] group-hover:border-[hsl(270_80%_62%/0.8)] group-hover:bg-[hsl(270_80%_62%/0.15)] group-hover:shadow-[0_0_16px_hsl(270_80%_62%/0.4)] transition-all duration-300">
              <Code2 className="w-5 h-5 text-[hsl(270_80%_72%)]" />
            </div>
            <span className="font-mono text-sm font-semibold text-white/80 group-hover:text-white transition-colors hidden sm:block">
              <span className="text-[hsl(270_80%_72%)]">&lt;</span>ST
              <span className="text-[hsl(270_80%_72%)]">/&gt;</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-[hsl(240_8%_8%/0.6)] backdrop-blur-sm border border-[hsl(270_80%_62%/0.1)] rounded-2xl px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium font-inter transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-[hsl(270_80%_62%/0.2)] shadow-[0_0_12px_hsl(270_80%_62%/0.2)]'
                    : 'text-white/50 hover:text-white/90 hover:bg-[hsl(270_80%_62%/0.08)]'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-x-3 bottom-1.5 h-0.5 rounded-full bg-gradient-to-r from-[hsl(270_80%_62%)] to-[hsl(290_90%_65%)]" />
                )}
                {item.name}
              </button>
            ))}
          </div>

          {/* Right: Hire Me + Status */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(142_70%_45%/0.1)] border border-[hsl(142_70%_45%/0.25)]">
              <span className="w-2 h-2 rounded-full bg-[hsl(142_70%_55%)] animate-pulse" />
              <span className="text-xs font-mono text-[hsl(142_70%_65%)]">Open to work</span>
            </div>
            <HireMeDialog />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-[hsl(270_80%_62%/0.3)] text-white/70 hover:text-white hover:border-[hsl(270_80%_62%/0.6)] hover:bg-[hsl(270_80%_62%/0.1)] transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[hsl(240_10%_5%/0.98)] backdrop-blur-xl border-b border-[hsl(270_80%_62%/0.15)] shadow-[0_20px_40px_hsl(240_10%_2%/0.6)]">
            <div className="container mx-auto px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium font-inter transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-[hsl(270_80%_62%/0.15)] border border-[hsl(270_80%_62%/0.3)]'
                      : 'text-white/60 hover:text-white hover:bg-[hsl(270_80%_62%/0.06)]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-[hsl(270_80%_62%/0.1)] flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(142_70%_45%/0.1)] border border-[hsl(142_70%_45%/0.25)]">
                  <span className="w-2 h-2 rounded-full bg-[hsl(142_70%_55%)] animate-pulse" />
                  <span className="text-xs font-mono text-[hsl(142_70%_65%)]">Open to work</span>
                </div>
                <HireMeDialog />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;