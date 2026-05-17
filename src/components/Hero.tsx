import { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ArrowRight, ArrowDown } from 'lucide-react';
import techImage from '@/assets/Tech_Image_Without_Text.png';
import resumePdf from '@/assets/Shashvat_Resume.pdf';

const roles = ['AI/ML Builder', 'Full-Stack Developer', 'Problem Solver', 'CSE Student'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 85);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 45);
    } else {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row lg:items-center overflow-hidden bg-background">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MOBILE IMAGE — shown above content on phones,
          hidden on large screens (handled by desktop panel)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="block lg:hidden relative w-full h-72 sm:h-80 flex-shrink-0 mt-16">
        <img
          src={techImage}
          alt="Shashvat Tripathi"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'brightness(0.85) saturate(1.05)' }}
        />
        {/* Bottom fade — blends into text section */}
        <div
          className="absolute bottom-0 inset-x-0 h-28"
          style={{ background: 'linear-gradient(to top, hsl(240 10% 4%) 0%, transparent 100%)' }}
        />
        {/* Top fade — blends into header */}
        <div
          className="absolute top-0 inset-x-0 h-16"
          style={{ background: 'linear-gradient(to bottom, hsl(240 10% 4%) 0%, transparent 100%)' }}
        />
        {/* Left + Right subtle fades */}
        <div
          className="absolute inset-y-0 left-0 w-12"
          style={{ background: 'linear-gradient(to right, hsl(240 10% 4%) 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-12"
          style={{ background: 'linear-gradient(to left, hsl(240 10% 4%) 0%, transparent 100%)' }}
        />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DESKTOP RIGHT PANEL — Image (lg+ only)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute right-0 top-0 h-full w-[58%] hidden lg:block pointer-events-none select-none">
        <img
          src={techImage}
          alt="Shashvat Tripathi"
          className="w-full h-full object-cover object-left"
          style={{ filter: 'brightness(0.82) saturate(1.05)' }}
        />
        {/* ← LEFT EDGE: fade from background → transparent */}
        <div
          className="absolute inset-y-0 left-0 w-[45%]"
          style={{
            background: 'linear-gradient(to right, hsl(240 10% 4%) 0%, hsl(240 10% 4% / 0.92) 25%, hsl(240 10% 4% / 0.55) 60%, transparent 100%)',
          }}
        />
        {/* TOP fade */}
        <div
          className="absolute top-0 inset-x-0 h-28"
          style={{ background: 'linear-gradient(to bottom, hsl(240 10% 4%) 0%, transparent 100%)' }}
        />
        {/* BOTTOM fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-36"
          style={{ background: 'linear-gradient(to top, hsl(240 10% 4%) 0%, transparent 100%)' }}
        />
        {/* RIGHT edge */}
        <div
          className="absolute inset-y-0 right-0 w-16"
          style={{ background: 'linear-gradient(to left, hsl(240 10% 4% / 0.4) 0%, transparent 100%)' }}
        />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TEXT CONTENT — left on desktop, below image on mobile
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 w-full container mx-auto px-5 sm:px-10 lg:px-14 pt-4 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-lg xl:max-w-xl">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 lg:mb-8 border border-white/8 bg-white/[0.04]">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(142_65%_52%)] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs text-white/50 tracking-wide">Available for Internships &amp; Projects</span>
          </div>

          {/* Name */}
          <h1 className="font-space font-extrabold mb-4 lg:mb-5 tracking-tight leading-[1.03]">
            <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-7xl text-white/95">Shashvat</span>
            <span
              className="block text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-7xl"
              style={{
                background: 'linear-gradient(120deg, hsl(270 70% 72%) 0%, hsl(195 100% 62%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tripathi
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2.5 mb-5 lg:mb-6">
            <span className="font-mono text-sm text-[hsl(270_55%_58%)] select-none">$</span>
            <span className="font-mono text-base sm:text-lg text-white/75">
              {displayText}
              <span className="inline-block w-[2px] h-[1.1em] bg-[hsl(270_70%_68%)] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
            </span>
          </div>

          {/* Bio */}
          <p className="font-inter text-white/50 text-sm sm:text-base leading-relaxed mb-1.5 max-w-sm">
            Building AI that{' '}
            <span className="text-[hsl(270_65%_75%)] font-medium">protects</span>,{' '}
            <span className="text-[hsl(190_90%_60%)] font-medium">empowers</span> and{' '}
            <span className="text-[hsl(330_70%_65%)] font-medium">creates impact</span>.
          </p>
          <p className="font-mono text-[10px] sm:text-[11px] text-white/20 tracking-[0.22em] mb-7 lg:mb-10">BUILD · SOLVE · IMPACT</p>

          {/* Stats */}
          <div className="flex gap-5 sm:gap-6 mb-7 lg:mb-10">
            {[
              { value: '4+', label: 'Projects' },
              { value: '10+', label: 'Technologies' },
              { value: '∞', label: 'Curiosity' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-space text-xl sm:text-2xl font-bold text-white/90">{s.value}</div>
                <div className="font-inter text-[11px] text-white/30 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-7 lg:mb-10">
            <a href={resumePdf} download="Shashvat_Resume.pdf">
              <button className="btn-primary flex items-center gap-2 group text-sm">
                <Download className="w-4 h-4" />
                Download Resume
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </a>
            <button onClick={scrollToContact} className="btn-outline flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <span className="font-inter text-[11px] text-white/20">Find me</span>
            {[
              { href: 'https://github.com/imshashvat', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/shashvat-tripathi-6518aa332/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:shashvatt68@gmail.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/8 text-white/35 hover:text-white/80 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint — hidden on mobile to save space */}
      <button
        onClick={scrollToAbout}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-300"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;