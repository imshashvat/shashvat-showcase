import { useState } from 'react';
import { Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img
                  src={profilePhoto}
                  alt="Shashvat Tripathi - Profile"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="animate-fadeInUp">
              <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
                Hi, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Shashvat Tripathi
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                CSE Student & Developer passionate about creating innovative solutions 
                and building amazing web experiences.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button className="hero-button group">
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={scrollToContact}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6">
                <a
                  href="https://github.com/imshashvat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashvat-tripathi-6518aa332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:shashvatt68@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;