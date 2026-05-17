import { useState, useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────
   MIND-BLOWING LOADING SCREEN
   
   Phase 1 (0–800ms):   Pure black. Large "ST" glitches in letter-by-letter.
   Phase 2 (800–2200ms): Matrix rain fills background. Boot lines appear with
                         scramble-then-settle effect.
   Phase 3 (2200–3200ms): Holographic scan line sweeps top→bottom once.
   Phase 4 (3200–3800ms): "SYSTEM READY" flashes neon, site fades in.
───────────────────────────────────────────────────────────────*/

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>[]{}';
const rnd = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const bootLines = [
  { final: 'SHASHVAT_OS v2.0.25  ·  Terminal Portfolio',  color: 'text-[hsl(270_70%_72%)]' },
  { final: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',   color: 'text-white/10' },
  { final: '>  Initializing holographic display...  [OK]', color: 'text-white/55' },
  { final: '>  Loading AI/ML neural modules...      [OK]', color: 'text-white/55' },
  { final: '>  Mounting React component tree...     [OK]', color: 'text-white/55' },
  { final: '>  Calibrating terminal interface...    [OK]', color: 'text-white/55' },
  { final: '>  Compiling portfolio assets...        [OK]', color: 'text-white/55' },
  { final: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',   color: 'text-white/10' },
  { final: '>  ALL SYSTEMS NOMINAL. Welcome.',             color: 'text-[hsl(142_65%_55%)]' },
];

// Scramble-then-settle hook
function useScramble(target: string, active: boolean, duration = 600) {
  const [text, setText] = useState('');
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!active) return;
    let iteration = 0;
    const total = Math.ceil(duration / 30);
    frameRef.current = setInterval(() => {
      setText(
        target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < (iteration / total) * target.length) return char;
            return rnd();
          })
          .join('')
      );
      iteration++;
      if (iteration > total) {
        setText(target);
        if (frameRef.current) clearInterval(frameRef.current);
      }
    }, 30);
    return () => { if (frameRef.current) clearInterval(frameRef.current); };
  }, [active, target, duration]);

  return text;
}

// Single boot line with scramble effect
const BootLine = ({ line, active, colorClass }: { line: string; active: boolean; colorClass: string }) => {
  const text = useScramble(line, active, 500);
  if (!active && !text) return null;
  return (
    <div className={`font-mono text-xs sm:text-sm leading-relaxed ${colorClass} transition-opacity duration-200`}
      style={{ opacity: active || text === line ? 1 : 0 }}>
      {text || line}
    </div>
  );
};

// Falling matrix column
const MatrixColumn = ({ x, delay, speed }: { x: number; delay: number; speed: number }) => {
  const chars = Array.from({ length: 20 }, () => rnd());
  return (
    <div
      className="absolute top-0 flex flex-col font-mono text-[10px] text-[hsl(270_60%_50%)] pointer-events-none"
      style={{
        left: `${x}%`,
        animation: `matrix-fall ${speed}s linear ${delay}s infinite`,
        opacity: 0,
      }}
    >
      {chars.map((c, i) => (
        <span key={i} style={{ opacity: 1 - i / chars.length }}>{c}</span>
      ))}
    </div>
  );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'glitch' | 'boot' | 'scan' | 'ready' | 'exit'>('glitch');
  const [activeLines, setActiveLines] = useState<boolean[]>(Array(bootLines.length).fill(false));
  const [progress, setProgress] = useState(0);
  const [scanY, setScanY] = useState(-5);
  const [showReady, setShowReady] = useState(false);
  const [stGlitch, setStGlitch] = useState('  ');

  // Phase 1: ST glitch-in
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    let count = 0;
    interval = setInterval(() => {
      setStGlitch(rnd() + rnd());
      count++;
      if (count > 12) {
        clearInterval(interval);
        setStGlitch('ST');
        t1 = setTimeout(() => setPhase('boot'), 200);
      }
    }, 55);
    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Phase 2: boot lines one by one
  useEffect(() => {
    if (phase !== 'boot') return;
    bootLines.forEach((_, i) => {
      setTimeout(() => {
        setActiveLines(prev => { const n = [...prev]; n[i] = true; return n; });
      }, i * 280);
    });
    // Progress bar
    const prog = setInterval(() => setProgress(p => Math.min(p + 1.8, 100)), 50);
    // Move to scan
    const t = setTimeout(() => { clearInterval(prog); setProgress(100); setPhase('scan'); }, bootLines.length * 280 + 300);
    return () => { clearInterval(prog); clearTimeout(t); };
  }, [phase]);

  // Phase 3: scan line sweep
  useEffect(() => {
    if (phase !== 'scan') return;
    let y = -5;
    const interval = setInterval(() => {
      y += 3;
      setScanY(y);
      if (y > 110) {
        clearInterval(interval);
        setPhase('ready');
      }
    }, 16);
    return () => clearInterval(interval);
  }, [phase]);

  // Phase 4: READY flash then exit
  useEffect(() => {
    if (phase !== 'ready') return;
    setShowReady(true);
    const t = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 700);
    }, 900);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  const matrixCols = Array.from({ length: 18 }, (_, i) => ({
    x: (i / 18) * 100,
    delay: Math.random() * 2,
    speed: 1.5 + Math.random() * 2,
  }));

  return (
    <>
      <style>{`
        @keyframes matrix-fall {
          0%   { transform: translateY(-250px); opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes st-pulse {
          0%, 100% { text-shadow: 0 0 20px hsl(270 70% 62% / 0.8), 0 0 60px hsl(270 70% 62% / 0.4); }
          50%       { text-shadow: 0 0 40px hsl(270 70% 72% / 1),   0 0 100px hsl(270 70% 62% / 0.6), 0 0 5px hsl(190 100% 60%); }
        }
        @keyframes ready-flash {
          0%, 100% { opacity: 1; letter-spacing: 0.3em; }
          30%       { opacity: 0.3; letter-spacing: 0.6em; }
          60%       { opacity: 1; letter-spacing: 0.15em; }
        }
        @keyframes scan-glow {
          0%   { opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-700 ${phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ background: 'hsl(240 12% 3%)' }}
      >
        {/* Matrix rain — appears in boot phase */}
        {(phase === 'boot' || phase === 'scan' || phase === 'ready') && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {matrixCols.map((col, i) => <MatrixColumn key={i} {...col} />)}
          </div>
        )}

        {/* Scan line sweep */}
        {phase === 'scan' && (
          <div
            className="absolute inset-x-0 h-[3px] pointer-events-none z-10"
            style={{
              top: `${scanY}%`,
              background: 'linear-gradient(90deg, transparent 0%, hsl(190 100% 60% / 0.9) 30%, hsl(270 70% 72% / 0.9) 50%, hsl(190 100% 60% / 0.9) 70%, transparent 100%)',
              boxShadow: '0 0 20px hsl(190 100% 60% / 0.7), 0 0 60px hsl(270 70% 62% / 0.4)',
              animation: 'scan-glow 0.5s ease-in-out',
            }}
          />
        )}

        {/* Corner HUD brackets */}
        {(['tl','tr','bl','br'] as const).map(pos => (
          <div key={pos} className={`absolute w-10 h-10 ${pos === 'tl' ? 'top-4 left-4' : pos === 'tr' ? 'top-4 right-4' : pos === 'bl' ? 'bottom-4 left-4' : 'bottom-4 right-4'}`}>
            <div className={`absolute w-7 h-7 ${pos.includes('t') ? 'top-0' : 'bottom-0'} ${pos.includes('l') ? 'left-0' : 'right-0'}`}
              style={{
                borderTop: pos.includes('t') ? '1.5px solid hsl(270 65% 60% / 0.7)' : 'none',
                borderBottom: pos.includes('b') ? '1.5px solid hsl(270 65% 60% / 0.7)' : 'none',
                borderLeft: pos.includes('l') ? '1.5px solid hsl(270 65% 60% / 0.7)' : 'none',
                borderRight: pos.includes('r') ? '1.5px solid hsl(270 65% 60% / 0.7)' : 'none',
              }}
            />
          </div>
        ))}

        {/* Top status */}
        <div className="absolute top-3 left-16 right-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(270_65%_62%)] animate-pulse" />
            <span className="font-mono text-[9px] text-[hsl(270_55%_55%)/0.7] tracking-[0.2em] opacity-60">BOOT SEQUENCE</span>
          </div>
          <span className="font-mono text-[9px] text-white/15 tracking-widest">{new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span>
        </div>
        <div className="absolute bottom-3 left-16 right-16 flex justify-between items-center">
          <span className="font-mono text-[9px] text-white/12 tracking-widest">BUILD · SOLVE · IMPACT</span>
          <span className="font-mono text-[9px] text-white/12">● SYS_INIT</span>
        </div>

        {/* CENTRE CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">

          {/* Giant ST monogram with glow */}
          <div className="mb-10 relative">
            <div
              className="font-space font-black select-none"
              style={{
                fontSize: 'clamp(72px, 12vw, 130px)',
                color: 'transparent',
                WebkitTextStroke: '2px hsl(270 70% 65%)',
                animation: phase !== 'glitch' ? 'st-pulse 2s ease-in-out infinite' : 'none',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                filter: phase === 'glitch' ? 'blur(1px)' : 'none',
                transition: 'filter 0.3s ease',
              }}
            >
              {stGlitch}
            </div>
            {/* Subtitle under ST */}
            {phase !== 'glitch' && (
              <div className="text-center mt-2">
                <span className="font-mono text-[10px] text-white/25 tracking-[0.35em] uppercase">Shashvat Tripathi</span>
              </div>
            )}
          </div>

          {/* Boot lines */}
          {phase !== 'glitch' && (
            <div className="w-full max-w-lg space-y-1.5 mb-8">
              {bootLines.map((line, i) => (
                <BootLine key={i} line={line.final} active={activeLines[i]} colorClass={line.color} />
              ))}
            </div>
          )}

          {/* Progress bar */}
          {phase !== 'glitch' && (
            <div className="w-full max-w-lg space-y-1.5">
              <div className="flex justify-between font-mono text-[10px] text-white/25">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-[2px] w-full bg-white/6 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-100"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, hsl(270 70% 60%), hsl(190 100% 55%))',
                    boxShadow: '0 0 10px hsl(270 70% 60% / 0.7)',
                  }}
                />
              </div>
            </div>
          )}

          {/* SYSTEM READY flash */}
          {showReady && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'hsl(240 12% 3% / 0.85)', backdropFilter: 'blur(4px)' }}
            >
              <div
                className="font-space font-black tracking-[0.3em] uppercase"
                style={{
                  fontSize: 'clamp(28px, 5vw, 56px)',
                  background: 'linear-gradient(120deg, hsl(270 70% 72%), hsl(190 100% 60%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'ready-flash 0.9s ease-in-out',
                  textShadow: 'none',
                }}
              >
                SYSTEM READY
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
