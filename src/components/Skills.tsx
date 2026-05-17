import { useState } from 'react';

const skillModules = [
  {
    cmd: 'cat ai_ml.config',
    label: 'AI / ML',
    color: 'hsl(330 70% 62%)',
    colorVar: '330 70% 62%',
    skills: ['Python', 'PyTorch', 'scikit-learn', 'BERT', 'NLP', 'SHAP', 'ML Pipelines'],
    meta: '7 packages · active',
  },
  {
    cmd: 'cat frontend.config',
    label: 'Frontend',
    color: 'hsl(270 65% 68%)',
    colorVar: '270 65% 68%',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
    meta: '6 packages · active',
  },
  {
    cmd: 'cat backend.config',
    label: 'Backend & APIs',
    color: 'hsl(190 90% 58%)',
    colorVar: '190 90% 58%',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Supabase', 'PostgreSQL', 'MongoDB'],
    meta: '6 packages · active',
  },
  {
    cmd: 'cat languages.config',
    label: 'Languages',
    color: 'hsl(45 90% 58%)',
    colorVar: '45 90% 58%',
    skills: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript'],
    meta: '6 packages · active',
  },
  {
    cmd: 'cat devops.config',
    label: 'Tools & DevOps',
    color: 'hsl(142 65% 52%)',
    colorVar: '142 65% 52%',
    skills: ['Git & GitHub', 'Linux', 'Figma', 'VS Code', 'npm / bun', 'Docker'],
    meta: '6 packages · active',
  },
  {
    cmd: 'cat databases.config',
    label: 'Databases',
    color: 'hsl(210 85% 62%)',
    colorVar: '210 85% 62%',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Firebase'],
    meta: '5 packages · active',
  },
];

const exploring = ['Multimodal Learning', 'Graph Neural Networks', 'MLOps & Deployment', 'Ethical AI'];

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = skillModules[activeIdx];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-0 right-0 w-96 h-80 bg-[hsl(190_100%_55%/0.03)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(270_70%_55%/0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills & Tools</h2>
        </div>

        {/* ── Terminal OS Window ── */}
        <div className="max-w-6xl mx-auto">
          <div className="terminal-window shadow-[0_0_60px_hsl(270_70%_55%/0.08),_0_4px_32px_hsl(240_10%_2%/0.6)]">

            {/* Title bar */}
            <div className="terminal-header flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <div className="terminal-dot bg-[hsl(0_72%_56%)]" />
              <div className="terminal-dot bg-[hsl(40_82%_56%)]" />
              <div className="terminal-dot bg-[hsl(142_62%_50%)]" />
              <span className="ml-3 font-mono text-[10px] text-white/20 tracking-widest">shashvat@portfolio:~/skills</span>
              <span className="ml-auto font-mono text-[10px] text-white/12">bash</span>
            </div>

            {/* Body: sidebar + pane */}
            <div className="flex flex-col lg:flex-row" style={{ minHeight: '360px' }}>

              {/* LEFT: module list (like a terminal ls output) */}
              <div className="lg:w-[280px] xl:w-[320px] border-b lg:border-b-0 lg:border-r border-white/[0.05] flex-shrink-0">
                {/* ls header */}
                <div className="px-4 py-3 border-b border-white/[0.04]">
                  <span className="font-mono text-[11px] text-white/22">$ ls ./modules/</span>
                </div>
                {/* Module list */}
                <div className="py-2">
                  {skillModules.map((m, i) => (
                    <button
                      key={m.label}
                      onClick={() => setActiveIdx(i)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-150 group"
                      style={{
                        background: activeIdx === i ? `hsl(${m.colorVar} / 0.07)` : 'transparent',
                        borderLeft: activeIdx === i ? `2px solid hsl(${m.colorVar})` : '2px solid transparent',
                      }}
                    >
                      {/* Arrow indicator */}
                      <span className="font-mono text-[10px] transition-opacity"
                        style={{ color: `hsl(${m.colorVar})`, opacity: activeIdx === i ? 1 : 0 }}>
                        {'>'}
                      </span>
                      <span className="font-mono text-[11px] transition-colors duration-150"
                        style={{ color: activeIdx === i ? `hsl(${m.colorVar})` : 'hsl(240 5% 55%)' }}>
                        {m.cmd.split(' ')[1]}
                      </span>
                      {activeIdx === i && (
                        <span className="ml-auto font-mono text-[9px] text-white/20">●</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: output pane */}
              <div className="flex-1 p-0">
                {/* Command line */}
                <div className="px-5 py-3 border-b border-white/[0.04] flex items-center gap-2">
                  <span className="font-mono text-[11px]" style={{ color: active.color }}>$</span>
                  <span className="font-mono text-[11px] text-white/55">{active.cmd}</span>
                  <span className="inline-block w-[7px] h-[14px] ml-0.5 align-middle animate-[blink_1s_step-end_infinite]"
                    style={{ background: active.color, opacity: 0.8 }} />
                </div>

                {/* Config file content */}
                <div className="px-5 py-5 font-mono text-[12px] space-y-2">
                  {/* Header comment */}
                  <div className="text-white/20"># {active.label} configuration</div>
                  <div className="text-white/20"># {active.meta}</div>
                  <div className="text-white/20">{'─'.repeat(38)}</div>

                  {/* Package list */}
                  <div className="pt-1 space-y-1.5">
                    {active.skills.map((s, i) => (
                      <div key={s} className="flex items-center gap-3 group">
                        <span className="text-white/20 w-4 text-right text-[10px] select-none">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-white/14 select-none">│</span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-medium transition-all duration-200 cursor-default"
                          style={{
                            background: `hsl(${active.colorVar} / 0.1)`,
                            border: `1px solid hsl(${active.colorVar} / 0.25)`,
                            color: active.color,
                          }}>
                          {s}
                        </span>
                        {/* Status dot */}
                        <span className="ml-auto font-mono text-[9px] text-white/18 group-hover:text-white/35 transition-colors">[loaded]</span>
                      </div>
                    ))}
                  </div>

                  {/* Return value */}
                  <div className="pt-3 text-white/18">
                    {'>'} {active.skills.length} modules loaded successfully
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar — status */}
            <div className="border-t border-white/[0.05] px-4 py-2 flex items-center gap-4 flex-wrap">
              <span className="font-mono text-[9px] text-white/18">status: active</span>
              <span className="font-mono text-[9px] text-white/10">·</span>
              <span className="font-mono text-[9px] text-white/18">
                {skillModules.reduce((acc, m) => acc + m.skills.length, 0)} total packages
              </span>
              <div className="ml-auto flex items-center gap-3">
                <span className="font-mono text-[9px]" style={{ color: active.color }}>● {active.label}</span>
              </div>
            </div>
          </div>

          {/* Currently exploring — styled as a terminal comment block */}
          <div className="mt-4 px-5 py-4 rounded-xl border border-white/[0.06] bg-transparent font-mono">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] text-white/22 tracking-widest"># currently_exploring</span>
              <div className="w-8 h-px bg-white/8" />
              {exploring.map(tag => (
                <span key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-md"
                  style={{
                    background: 'hsl(190 100% 55% / 0.06)',
                    border: '1px solid hsl(190 100% 55% / 0.18)',
                    color: 'hsl(190 85% 60%)',
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;