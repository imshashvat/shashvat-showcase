import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, RotateCcw, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// NOTE: "SafeHer" lowercase = "safeher" (not "safher")
const generateResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase().trim();

  // ── Project checks FIRST (before generic "about" catch) ──
  if (msg.includes('safeher') || msg.includes('safe her') || msg.includes('safher')) {
    return "🛡️ SafeHer is Shashvat's flagship project — an AI-powered safety platform for women. It includes real-time AI risk prediction using ML models, SOS emergency alerts, live location sharing with trusted contacts, a community reporting map, and smart safety alerts. Built with React Native, Python, PyTorch, and Supabase. Mission: Empowering women with AI-driven insights for a safer tomorrow.";
  }
  if (msg.includes('campuscache') || msg.includes('campus cache') || msg.includes('campus')) {
    return "📚 CampusCache is a student resource-sharing platform for engineering students. It has branch-specific libraries, a contributor leaderboard with a fair point system, file upload & download tracking, and cross-branch sharing for core subjects. Built with React + TypeScript + Supabase, currently used by 500+ students!";
  }
  if (msg.includes('fake news') || msg.includes('fakenews') || msg.includes('fact check') || msg.includes('detection system') || msg.includes('news detect')) {
    return "🔍 The Fake News Detection System is a hybrid multimodal AI combining BERT, CNN, XGBoost, and rule-based models achieving 90%+ accuracy. It features SHAP-based explainability, confidence scores, and human-in-the-loop feedback — making AI decisions fully transparent and trustworthy.";
  }
  if (msg.includes('property') || msg.includes('rental') || msg.includes('propmanager') || msg.includes('property management')) {
    return "🏢 Property Management System (RentalMaster) is a full-stack platform for managing properties, tenants, rent, and maintenance. Features: property listings, tenant management, rent & invoice tracking, maintenance requests, and smart notifications. Live at rental-masterss.vercel.app — GitHub: github.com/imshashvat/property-management.";
  }

  // ── Skills & Tech ──
  if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack') || msg.includes('language') || msg.includes('know') || msg.includes('use')) {
    return "⚡ Shashvat works with Python, React, TypeScript, Node.js, C++, and Java. For AI/ML: PyTorch, BERT, scikit-learn, NLP. Databases: PostgreSQL, MongoDB, Supabase, Firebase. Tools: Git, Linux, Figma, Docker, Vite. He's especially strong in full-stack + AI/ML integration.";
  }

  // ── Contact & Availability ──
  if (msg.includes('contact') || msg.includes('email') || msg.includes('reach') || msg.includes('phone') || msg.includes('number')) {
    return "📬 Reach Shashvat at shashvatt68@gmail.com or +91 7459071817. GitHub: github.com/imshashvat | LinkedIn: shashvat-tripathi-6518aa332. Don't hesitate to reach out for projects, collaborations, or opportunities!";
  }
  if (msg.includes('hire') || msg.includes('intern') || msg.includes('open') || msg.includes('available') || msg.includes('work') || msg.includes('job')) {
    return "✅ Yes! Shashvat is actively open to internships, part-time roles, and project collaborations — especially in AI/ML, full-stack development, and impactful problem-solving. Use the 'Hire Me' button in the nav, or email shashvatt68@gmail.com directly!";
  }

  // ── Projects overview ──
  if (msg.includes('project') || msg.includes('github') || msg.includes('portfolio') || msg.includes('built') || msg.includes('build')) {
    return "🚀 Shashvat has 4 projects: 1) SafeHer (AI safety app for women) 2) CampusCache (student resource library) 3) Fake News Detector (hybrid AI fact-checker) 4) Property Management System (full-stack rental platform). All solve real-world problems! Check github.com/imshashvat for the code.";
  }

  // ── Education ──
  if (msg.includes('education') || msg.includes('college') || msg.includes('study') || msg.includes('degree') || msg.includes('btech') || msg.includes('b.tech')) {
    return "🎓 Shashvat is pursuing a B.Tech in Computer Science Engineering (2024–2028). He completed Higher Secondary in Science stream (2021–2023). He's passionate about AI/ML and building real-world impactful systems while studying.";
  }

  // ── Mission / Values ──
  if (msg.includes('belief') || msg.includes('value') || msg.includes('philosophy') || msg.includes('mission') || msg.includes('mantra') || msg.includes('principle')) {
    return "💡 Core beliefs: Evidence over opinion, Explainability over black-box AI, Impact over popularity, People over profit. Mission: 'To build intelligent systems that solve real-world problems and create lasting impact.' Currently exploring: Multimodal Learning, GNNs, MLOps, and Ethical AI.";
  }

  // ── Resume ──
  if (msg.includes('resume') || msg.includes('cv') || msg.includes('download')) {
    return "📄 Download Shashvat's resume directly from the hero section — click the 'Download Resume' button at the top of the page. It has his full project details, tech skills, and contact info.";
  }

  // ── Greetings ──
  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.match(/^(sup|yo|hola|namaste)$/)) {
    return "👋 Hey there! I'm Shashvat's AI assistant. I can tell you about his projects (SafeHer, CampusCache, Fake News Detector, Property Management), tech skills, education, or how to get in touch. What would you like to know?";
  }

  // ── Generic about Shashvat (kept LAST so project-specific checks run first) ──
  if (msg.includes('who') || msg.includes('about') || msg.includes('shashvat') || msg.includes('introduce') || msg.includes('tell me') || msg.includes('yourself')) {
    return "👋 Shashvat Tripathi is a CSE student (B.Tech 2024–2028) and AI/ML developer from India. He's built SafeHer (women's safety AI), CampusCache (student resource platform), Fake News Detector (hybrid AI), and a Property Management System. Motto: 'BUILD · SOLVE · IMPACT'.";
  }

  // ── Fallback ──
  return "🤔 I can tell you about Shashvat's 4 projects (SafeHer, CampusCache, Fake News Detector, Property Management), his skills in AI/ML & full-stack, education, or how to contact him. What would you like to know?";
};

const QUICK_QUESTIONS = [
  "Tell me about SafeHer",
  "What is CampusCache?",
  "What's his tech stack?",
  "Property Management project?",
  "Is he open to work?",
  "How to contact Shashvat?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "👋 Hi! I'm Shashvat's AI assistant. Ask me about his projects, skills, or how to get in touch!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 120); }
  }, [isOpen]);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text.trim(), timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const response = generateResponse(text);
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      if (!isOpen) setUnread(u => u + 1);
    }, 600 + Math.random() * 700);
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); sendMessage(input); };
  const resetChat = () => setMessages([{ id: '1', role: 'assistant', content: "👋 Hi! I'm Shashvat's AI assistant. Ask me about his projects, skills, or how to get in touch!", timestamp: new Date() }]);
  const formatTime = (d: Date) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 bottom-24 right-4 sm:right-6 flex flex-col transition-all duration-300 ${
            isExpanded ? 'w-[min(500px,calc(100vw-2rem))] h-[min(700px,calc(100vh-8rem))]' : 'w-[min(390px,calc(100vw-2rem))] h-[min(560px,calc(100vh-8rem))]'
          }`}
          style={{ background: 'hsl(240 10% 5%)', border: '1px solid hsl(270 80% 62% / 0.25)', borderRadius: '20px', boxShadow: '0 0 50px hsl(270 80% 62% / 0.12), 0 20px 60px hsl(240 10% 2% / 0.6)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-white/5 flex-shrink-0">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(270 80% 62%), hsl(290 90% 55%))' }}>
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[hsl(142_70%_55%)] border-2 border-[hsl(240_10%_5%)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-space text-sm font-semibold text-white">Shashvat's AI</p>
              <p className="font-mono text-[10px] text-[hsl(142_70%_55%)]">● Online · Replies instantly</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={resetChat} title="Reset" className="w-7 h-7 flex items-center justify-center rounded-lg text-white/25 hover:text-white/60 hover:bg-white/5 transition-all">
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setIsExpanded(e => !e)} title="Resize" className="w-7 h-7 flex items-center justify-center rounded-lg text-white/25 hover:text-white/60 hover:bg-white/5 transition-all">
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 flex items-center justify-center rounded-lg text-white/25 hover:text-white/60 hover:bg-white/5 transition-all">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 ${msg.role === 'assistant' ? 'bg-gradient-to-br from-[hsl(270_80%_62%)] to-[hsl(290_90%_55%)]' : 'bg-white/8 border border-white/10'}`}>
                  {msg.role === 'assistant' ? <Bot className="w-3.5 h-3.5 text-white" /> : <User className="w-3.5 h-3.5 text-white/50" />}
                </div>
                <div className={msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}>
                  <p className="leading-relaxed text-sm">{msg.content}</p>
                  <p className={`text-[10px] mt-1.5 ${msg.role === 'user' ? 'text-white/50 text-right' : 'text-white/25'}`}>{formatTime(msg.timestamp)}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[hsl(270_80%_62%)] to-[hsl(290_90%_55%)]">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="chat-bubble-bot flex items-center gap-1.5 py-3.5">
                  {[0, 150, 300].map(d => (
                    <span key={d} className="w-1.5 h-1.5 rounded-full bg-[hsl(270_60%_65%/0.6)] animate-bounce" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && !isTyping && (
            <div className="px-4 pb-2 flex-shrink-0">
              <p className="font-mono text-[10px] text-white/20 mb-2 uppercase tracking-widest">Try asking</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button key={q} onClick={() => sendMessage(q)}
                    className="font-inter text-[11px] px-2.5 py-1.5 rounded-lg text-[hsl(270_70%_75%)] border border-[hsl(270_80%_62%/0.2)] bg-[hsl(270_80%_62%/0.05)] hover:bg-[hsl(270_80%_62%/0.12)] hover:border-[hsl(270_80%_62%/0.4)] transition-all duration-200">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 flex-shrink-0">
            <div className="flex gap-2 items-center">
              <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
                placeholder="Ask me anything about Shashvat..."
                className="flex-1 px-4 py-2.5 rounded-xl font-inter text-sm text-white placeholder-white/20 outline-none bg-white/5 border border-white/8 focus:border-[hsl(270_80%_62%/0.4)] focus:bg-white/[0.07] transition-all duration-300"
                disabled={isTyping} maxLength={300} />
              <button type="submit" disabled={!input.trim() || isTyping}
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl text-white disabled:opacity-35 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, hsl(270 80% 62%), hsl(290 90% 55%))', boxShadow: '0 0 16px hsl(270 80% 62% / 0.35)' }}>
                {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* FAB */}
      <button id="chatbot-toggle" onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: isOpen ? 'hsl(240 8% 10%)' : 'linear-gradient(135deg, hsl(270 80% 62%), hsl(290 90% 55%))',
          border: isOpen ? '1px solid hsl(270 80% 62% / 0.25)' : 'none',
          boxShadow: isOpen ? 'none' : '0 0 28px hsl(270 80% 62% / 0.45), 0 8px 20px hsl(270 80% 62% / 0.25)',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}>
        {isOpen ? <X className="w-5 h-5 text-white/60" /> : <MessageSquare className="w-6 h-6 text-white" />}
        {!isOpen && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[hsl(330_80%_60%)] flex items-center justify-center font-mono text-[10px] font-bold text-white">{unread}</span>
        )}
      </button>
    </>
  );
};

export default Chatbot;