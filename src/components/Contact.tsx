import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Loader2, Terminal, ArrowRight, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = `${formData.subject || 'Contact'} — from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.open(`mailto:shashvatt68@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); setFormData({ name: '', email: '', subject: '', message: '' }); }, 800);
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'shashvatt68@gmail.com', href: 'mailto:shashvatt68@gmail.com', color: 'hsl(270 80% 72%)', cmd: 'mail --to' },
    { icon: Phone, label: 'Phone', value: '+91 7459071817', href: 'tel:+917459071817', color: 'hsl(190 100% 60%)', cmd: 'call --num' },
    { icon: MapPin, label: 'Location', value: 'India 🇮🇳', href: '#', color: 'hsl(330 80% 65%)', cmd: 'locate --user' },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', sub: 'imshashvat', href: 'https://github.com/imshashvat', color: 'hsl(270 80% 72%)' },
    { icon: Linkedin, label: 'LinkedIn', sub: 'Connect', href: 'https://www.linkedin.com/in/shashvat-tripathi-6518aa332/', color: 'hsl(210 90% 65%)' },
    { icon: Mail, label: 'Email', sub: 'Direct', href: 'mailto:shashvatt68@gmail.com', color: 'hsl(330 80% 65%)' },
  ];

  const inputBase = `w-full bg-[hsl(240_8%_6%)] border text-white/80 font-inter text-sm rounded-xl px-4 py-3 outline-none transition-all duration-300 placeholder:text-white/20`;

  const getInputStyle = (field: string) => ({
    borderColor: focused === field ? 'hsl(270 70% 62% / 0.6)' : 'hsl(240 8% 16%)',
    boxShadow: focused === field ? '0 0 0 3px hsl(270 70% 62% / 0.08), inset 0 1px 0 hsl(270 70% 72% / 0.05)' : 'none',
    background: focused === field ? 'hsl(240 8% 7%)' : 'hsl(240 8% 5.5%)',
  });

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[hsl(270_80%_62%/0.05)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-48 bg-[hsl(190_100%_60%/0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="section-label">Let's talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="font-inter text-white/35 max-w-md mx-auto text-sm mt-2 leading-relaxed">
            Have an idea, project or just want to say hi? I respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">

          {/* ── LEFT COLUMN (2/5) ─────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Terminal contact card */}
            <div className="rounded-2xl border border-white/8 bg-[hsl(240_8%_5%)] overflow-hidden">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(240_8%_7%)] border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[hsl(0_72%_58%/0.7)]" />
                  <span className="w-3 h-3 rounded-full bg-[hsl(38_92%_55%/0.7)]" />
                  <span className="w-3 h-3 rounded-full bg-[hsl(142_65%_50%/0.7)]" />
                </div>
                <span className="font-mono text-[10px] text-white/25 ml-1 tracking-wide">contact.sh</span>
                <Terminal className="w-3 h-3 text-white/20 ml-auto" />
              </div>

              {/* Contact rows */}
              <div className="p-4 space-y-1">
                {contactDetails.map((d) => (
                  <a key={d.label} href={d.href}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl group transition-all duration-250 hover:bg-white/[0.04]"
                  >
                    {/* Terminal prefix */}
                    <span className="font-mono text-[10px] text-white/18 w-20 flex-shrink-0 hidden sm:block">{d.cmd}</span>
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ background: `${d.color}12`, border: `1px solid ${d.color}28` }}>
                      <d.icon className="w-4 h-4" style={{ color: d.color }} />
                    </div>
                    {/* Text */}
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-white/25 leading-none mb-1">{d.label}</p>
                      <p className="font-inter text-[13px] text-white/65 group-hover:text-white/90 transition-colors duration-200 truncate">{d.value}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/15 ml-auto flex-shrink-0 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-3 gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex flex-col items-center gap-2 py-4 px-2 rounded-2xl border transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                  style={{
                    background: `${s.color}08`,
                    borderColor: `${s.color}20`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${s.color}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = `${s.color}20`)}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  <span className="font-mono text-[10px] text-white/40">{s.label}</span>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div className="rounded-2xl border border-[hsl(142_60%_48%/0.2)] bg-[hsl(142_60%_48%/0.04)] p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[hsl(142_60%_48%/0.12)] border border-[hsl(142_60%_48%/0.25)] mt-0.5">
                <Zap className="w-4 h-4 text-[hsl(142_65%_58%)]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(142_65%_52%)] animate-pulse" />
                  <p className="font-mono text-[11px] text-[hsl(142_65%_58%)]">Currently Available</p>
                </div>
                <p className="font-inter text-[12px] text-white/40 leading-relaxed">
                  Open to internships, freelance projects & collaborations. Avg reply: &lt;24h.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN (3/5) — Form ───────────────────── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/8 bg-[hsl(240_8%_5%)] overflow-hidden h-full">

              {/* Form titlebar */}
              <div className="flex items-center gap-3 px-5 sm:px-6 py-4 bg-[hsl(240_8%_7%)] border-b border-white/5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[hsl(270_70%_62%/0.12)] border border-[hsl(270_70%_62%/0.25)]">
                  <Send className="w-4 h-4 text-[hsl(270_70%_72%)]" />
                </div>
                <div>
                  <p className="font-space text-sm font-semibold text-white/85">Send a Message</p>
                  <p className="font-mono text-[10px] text-white/25">shashvatt68@gmail.com</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[hsl(270_70%_62%/0.08)] border border-[hsl(270_70%_62%/0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(270_70%_72%)] animate-pulse" />
                  <span className="font-mono text-[9px] text-[hsl(270_70%_72%)]">ONLINE</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[360px] text-center gap-5">
                    {/* Success animation */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[hsl(142_70%_55%/0.1)] border border-[hsl(142_70%_55%/0.3)]">
                        <CheckCircle2 className="w-10 h-10 text-[hsl(142_70%_65%)]" />
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-[hsl(142_70%_55%/0.2)] animate-ping" />
                    </div>
                    <div>
                      <h3 className="font-space text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="font-inter text-white/45 text-sm max-w-xs leading-relaxed">
                        Your email client has been opened. Hit send to complete your message — I'll reply within 24 hours.
                      </p>
                    </div>
                    <button onClick={() => setSubmitted(false)}
                      className="btn-outline text-sm px-6 py-2.5 flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name"
                          className="block font-mono text-[10px] text-white/30 mb-2 tracking-widest uppercase">
                          Your Name
                        </label>
                        <input id="name" name="name" type="text" required
                          value={formData.name} onChange={handleChange}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                          placeholder="Shashvat Tripathi"
                          className={inputBase}
                          style={getInputStyle('name')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email"
                          className="block font-mono text-[10px] text-white/30 mb-2 tracking-widest uppercase">
                          Email Address
                        </label>
                        <input id="email" name="email" type="email" required
                          value={formData.email} onChange={handleChange}
                          onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                          placeholder="you@example.com"
                          className={inputBase}
                          style={getInputStyle('email')}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject"
                        className="block font-mono text-[10px] text-white/30 mb-2 tracking-widest uppercase">
                        Subject
                      </label>
                      <input id="subject" name="subject" type="text"
                        value={formData.subject} onChange={handleChange}
                        onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                        placeholder="Collaboration, Internship, Project..."
                        className={inputBase}
                        style={getInputStyle('subject')}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message"
                        className="block font-mono text-[10px] text-white/30 mb-2 tracking-widest uppercase">
                        Message
                      </label>
                      <textarea id="message" name="message" required rows={5}
                        value={formData.message} onChange={handleChange}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                        placeholder="Tell me about your project or just say hello..."
                        className={`${inputBase} resize-none`}
                        style={getInputStyle('message')}
                      />
                      {/* Character vibe */}
                      <div className="flex justify-end mt-1.5">
                        <span className="font-mono text-[9px] text-white/18">
                          {formData.message.length > 0 ? `${formData.message.length} chars` : 'say something...'}
                        </span>
                      </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5"
                      style={{
                        background: isSubmitting
                          ? 'hsl(270 60% 55% / 0.4)'
                          : 'linear-gradient(135deg, hsl(270 70% 58%) 0%, hsl(200 90% 55%) 100%)',
                        boxShadow: isSubmitting ? 'none' : '0 4px 24px hsl(270 70% 55% / 0.28)',
                        color: 'white',
                      }}>
                      {isSubmitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Opening email client...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Message <ArrowRight className="w-3.5 h-3.5" /></>
                      )}
                    </button>

                    <p className="text-center font-mono text-[10px] text-white/18 mt-2">
                      opens your mail app · no tracking · no spam
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;