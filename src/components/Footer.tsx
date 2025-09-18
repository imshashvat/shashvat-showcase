import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Shashvat Tripathi</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              CSE Student & Developer passionate about creating innovative solutions 
              and building amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Ready to work together? Let's build something amazing!
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300 group"
            >
              <ArrowUp className="h-4 w-4 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Shashvat Tripathi. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>& React</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>Designed & Developed by Shashvat Tripathi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;