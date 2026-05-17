import { useEffect, useState } from 'react';

const TerminalFrame = () => {
  const [time, setTime] = useState('');
  const [tick, setTick] = useState(true);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setTick(t => !t);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden">

      {/* ── Outer frame border ── */}
      <div className="absolute inset-[5px] rounded-xl pointer-events-none"
        style={{ border: '1px solid hsl(270 60% 55% / 0.22)' }} />
      {/* Inner subtle border */}
      <div className="absolute inset-[8px] rounded-xl pointer-events-none"
        style={{ border: '1px solid hsl(270 60% 55% / 0.05)' }} />

      {/* ── Corner decorations — all 4 ── */}
      {/* Top Left */}
      <div className="absolute top-3 left-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 3 L3 3 L3 16" stroke="hsl(270 65% 62%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75"/>
          <path d="M9 3 L3 3 L3 9" stroke="hsl(270 65% 72%)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <circle cx="3" cy="3" r="2" fill="hsl(270 65% 62%)" opacity="0.5"/>
        </svg>
      </div>
      {/* Top Right */}
      <div className="absolute top-3 right-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 3 L29 3 L29 16" stroke="hsl(270 65% 62%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75"/>
          <path d="M23 3 L29 3 L29 9" stroke="hsl(270 65% 72%)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <circle cx="29" cy="3" r="2" fill="hsl(270 65% 62%)" opacity="0.5"/>
        </svg>
      </div>
      {/* Bottom Left */}
      <div className="absolute bottom-3 left-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 29 L3 29 L3 16" stroke="hsl(270 65% 62%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75"/>
          <path d="M9 29 L3 29 L3 23" stroke="hsl(270 65% 72%)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <circle cx="3" cy="29" r="2" fill="hsl(270 65% 62%)" opacity="0.5"/>
        </svg>
      </div>
      {/* Bottom Right */}
      <div className="absolute bottom-3 right-3">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 29 L29 29 L29 16" stroke="hsl(270 65% 62%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75"/>
          <path d="M23 29 L29 29 L29 23" stroke="hsl(270 65% 72%)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
          <circle cx="29" cy="29" r="2" fill="hsl(270 65% 62%)" opacity="0.5"/>
        </svg>
      </div>

      {/* ── Mid-edge tick marks (horizontal) ── */}
      <div className="absolute top-[5px] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-px bg-[hsl(270_60%_55%/0.35)]" />
          <div className="w-1 h-1 rounded-full bg-[hsl(270_60%_55%/0.4)]" />
          <div className="w-6 h-px bg-[hsl(270_60%_55%/0.35)]" />
        </div>
      </div>
      <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-px bg-[hsl(270_60%_55%/0.35)]" />
          <div className="w-1 h-1 rounded-full bg-[hsl(270_60%_55%/0.4)]" />
          <div className="w-6 h-px bg-[hsl(270_60%_55%/0.35)]" />
        </div>
      </div>
      {/* Vertical mid tick marks */}
      <div className="absolute left-[5px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
        <div className="w-px h-6 bg-[hsl(270_60%_55%/0.35)]" />
        <div className="w-1 h-1 rounded-full bg-[hsl(270_60%_55%/0.4)]" />
        <div className="w-px h-6 bg-[hsl(270_60%_55%/0.35)]" />
      </div>
      <div className="absolute right-[5px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
        <div className="w-px h-6 bg-[hsl(270_60%_55%/0.35)]" />
        <div className="w-1 h-1 rounded-full bg-[hsl(270_60%_55%/0.4)]" />
        <div className="w-px h-6 bg-[hsl(270_60%_55%/0.35)]" />
      </div>

      {/* ── Top status bar ── */}
      <div className="absolute top-[7px] left-12 right-12">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'hsl(270 65% 62%)', boxShadow: '0 0 6px hsl(270 65% 62% / 0.8)' }} />
            <span className="font-mono text-[9px] tracking-[0.22em] opacity-55"
              style={{ color: 'hsl(270 55% 58%)' }}>SHASHVAT_OS v2.0</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] text-white/18 tracking-wider">
              {time.split(':').map((seg, i) => (
                <span key={i}>{i > 0 ? <span className="opacity-50">{tick ? ':' : ' '}</span> : ''}{seg}</span>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom status bar ── */}
      <div className="absolute bottom-[7px] left-12 right-12">
        <div className="flex items-center justify-between px-4">
          <span className="font-mono text-[9px] text-white/14 tracking-[0.18em]">BUILD · SOLVE · IMPACT</span>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[hsl(142_62%_50%)]"
              style={{ boxShadow: '0 0 4px hsl(142 62% 50% / 0.8)' }} />
            <span className="font-mono text-[9px] text-white/14">ONLINE</span>
          </div>
        </div>
      </div>

      {/* ── Subtle scanlines ── */}
      <div className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(0 0% 0%) 3px, hsl(0 0% 0%) 4px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* ── Vignette ── */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, hsl(240 10% 2% / 0.5) 100%)',
        }}
      />
    </div>
  );
};

export default TerminalFrame;
