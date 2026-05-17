import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Trophy, Brain, Zap, Shield, BookOpen, Building2 } from 'lucide-react';

const terminalLines = [
  { text: '$ whoami', color: 'text-[hsl(270_65%_68%)]', delay: 0 },
  { text: '> Shashvat Tripathi — CSE Student, AI Builder', color: 'text-white/70', delay: 450 },
  { text: '', delay: 750 },
  { text: '$ cat core_beliefs.txt', color: 'text-[hsl(270_65%_68%)]', delay: 900 },
  { text: '> Evidence over opinion', color: 'text-[hsl(190_90%_60%)]', delay: 1250 },
  { text: '> Explainability > black-box AI', color: 'text-[hsl(190_90%_60%)]', delay: 1600 },
  { text: '> Impact over popularity', color: 'text-[hsl(190_90%_60%)]', delay: 1950 },
  { text: '> People over profit', color: 'text-[hsl(190_90%_60%)]', delay: 2300 },
  { text: '', delay: 2550 },
  { text: '$ echo $MISSION', color: 'text-[hsl(270_65%_68%)]', delay: 2700 },
  { text: '> Build intelligent systems that solve', color: 'text-white/50', delay: 3000 },
  { text: '> real-world problems and create impact.', color: 'text-white/50', delay: 3200 },
  { text: '', delay: 3400 },
  { text: '$ _', color: 'text-[hsl(270_65%_68%)]', delay: 3600 },
];

const achievements = [
  { icon: Shield, text: 'SafeHer — AI safety platform for women', color: 'hsl(270 72% 72%)' },
  { icon: BookOpen, text: 'CampusCache — resource hub for 500+ students', color: 'hsl(190 100% 60%)' },
  { icon: Brain, text: 'Fake News Detector — 90%+ accuracy hybrid AI', color: 'hsl(330 75% 65%)' },
  { icon: Building2, text: 'Property Management System — live & deployed', color: 'hsl(45 90% 58%)' },
  { icon: Zap, text: 'Python · React · Node.js · PyTorch · C++', color: 'hsl(142 65% 52%)' },
];

const exploring = ['Multimodal Learning', 'Graph Neural Networks', 'MLOps & Deployment', 'Ethical AI'];

const About = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
  }, [inView]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[hsl(270_80%_55%/0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start max-w-6xl mx-auto">

          {/* LEFT: Terminal window */}
          <div className="space-y-5">
            <div className="terminal-window shadow-[0_0_40px_hsl(270_70%_55%/0.06),_0_4px_24px_hsl(240_10%_2%/0.5)]">
              <div className="terminal-header">
                <div className="terminal-dot bg-[hsl(0_72%_56%)]" />
                <div className="terminal-dot bg-[hsl(40_82%_56%)]" />
                <div className="terminal-dot bg-[hsl(142_62%_50%)]" />
                <span className="ml-auto font-mono text-[10px] text-white/18 tracking-widest">shashvat@portfolio:~</span>
              </div>
              <div className="p-5 space-y-1 min-h-[300px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className={`font-mono text-sm leading-relaxed ${line.color}`}>
                    {line.text || '\u00A0'}
                    {i === visibleLines - 1 && i === terminalLines.length - 1 && (
                      <span className="inline-block w-[2px] h-4 bg-[hsl(270_65%_68%)] ml-0.5 animate-[blink_1s_step-end_infinite] align-middle" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Currently exploring — clean card, NOT overlaid on image */}
            <div className="glass-card">
              <p className="font-mono text-[10px] text-white/22 mb-3 tracking-widest uppercase">// Currently Exploring</p>
              <div className="flex flex-wrap gap-2">
                {exploring.map(tag => (
                  <span key={tag} className="tag-cyan text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Bio + Education + Projects */}
          <div className="space-y-5">
            {/* Who I am */}
            <div className="glass-card">
              <h3 className="font-space text-base font-semibold text-white mb-3">Who I Am</h3>
              <p className="font-inter text-white/50 leading-relaxed text-sm">
                I'm a Computer Science Engineering student passionate about AI/ML and full-stack development.
                I work at the intersection of{' '}
                <span className="text-[hsl(270_65%_75%)] font-medium">machine intelligence</span> and{' '}
                <span className="text-[hsl(190_90%_62%)] font-medium">human empathy</span> — building systems that actually protect and empower people.
              </p>
            </div>

            {/* Quote */}
            <div className="px-5 py-4 rounded-2xl border border-white/6 bg-white/[0.015] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b from-[hsl(270_65%_62%)] to-[hsl(190_100%_55%)]" />
              <p className="font-mono text-[10px] text-white/22 mb-2 pl-3">// quote</p>
              <p className="font-space text-sm font-medium text-white/60 italic leading-relaxed pl-3">
                "The best systems combine intelligence with integrity."
              </p>
            </div>

            {/* Education */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-[hsl(190_100%_55%/0.08)] border border-[hsl(190_100%_55%/0.2)]">
                  <GraduationCap className="w-4 h-4 text-[hsl(190_100%_60%)]" />
                </div>
                <h3 className="font-space text-sm font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4 pl-1">
                {[
                  { degree: 'B.Tech — Computer Science Engineering', year: '2024 – 2028', color: 'hsl(270 72% 68%)' },
                  { degree: 'Higher Secondary — Science Stream', year: '2021 – 2023', color: 'hsl(190 100% 58%)' },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: e.color, boxShadow: `0 0 6px ${e.color}60` }} />
                      {i === 0 && <div className="w-px flex-1 bg-white/6 min-h-[20px]" />}
                    </div>
                    <div>
                      <p className="font-space font-semibold text-white text-sm leading-snug">{e.degree}</p>
                      <p className="font-mono text-xs text-white/28 mt-1">{e.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-[hsl(45_90%_55%/0.08)] border border-[hsl(45_90%_55%/0.2)]">
                  <Trophy className="w-4 h-4 text-[hsl(45_90%_58%)]" />
                </div>
                <h3 className="font-space text-sm font-semibold text-white">Key Projects</h3>
              </div>
              <div className="space-y-2.5">
                {achievements.map((a) => (
                  <div key={a.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${a.color}10`, border: `1px solid ${a.color}25` }}>
                      <a.icon className="w-3 h-3" style={{ color: a.color }} />
                    </div>
                    <span className="font-inter text-[13px] text-white/50 leading-snug">{a.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;