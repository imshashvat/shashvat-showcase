import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    { icon: Mail, label: 'Email', value: 'shashvatt68@gmail.com', href: 'mailto:shashvatt68@gmail.com', color: 'hsl(270 80% 72%)' },
    { icon: Phone, label: 'Phone', value: '+91 7459071817', href: 'tel:+917459071817', color: 'hsl(190 100% 60%)' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#', color: 'hsl(330 80% 65%)' },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/imshashvat', color: 'hsl(270 80% 72%)' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shashvat-tripathi-6518aa332/', color: 'hsl(210 90% 65%)' },
    { icon: Mail, label: 'Email', href: 'mailto:shashvatt68@gmail.com', color: 'hsl(330 80% 65%)' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[hsl(270_80%_62%/0.06)] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label">Let's talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="font-inter text-white/40 max-w-xl mx-auto text-sm mt-2">
            Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* LEFT: Info panel */}
          <div className="space-y-6">
            {/* Tagline card */}
            <div className="neon-card p-7">
              <h3 className="font-space text-xl font-bold text-white mb-3">Let's Connect</h3>
              <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">
                I'm always open to new opportunities, exciting projects, and meaningful conversations about technology, AI, and impact.
              </p>
              <div className="space-y-4">
                {contactDetails.map((d) => (
                  <a key={d.label} href={d.href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: `${d.color}15`, border: `1px solid ${d.color}30` }}>
                      <d.icon className="w-4 h-4" style={{ color: d.color }} />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-white/30">{d.label}</p>
                      <p className="font-inter text-sm text-white/70 group-hover:text-white transition-colors duration-200">{d.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="neon-card p-6">
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">Follow & Connect</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={s.label}
                    className="flex-1 flex flex-col items-center gap-2 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                    style={{ background: `${s.color}0a`, border: `1px solid ${s.color}25` }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                    <span className="font-inter text-xs text-white/40">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="px-6 py-5 rounded-2xl border border-[hsl(270_80%_62%/0.15)] bg-[hsl(270_80%_62%/0.04)]">
              <p className="font-mono text-xs text-[hsl(270_80%_72%)] mb-2">// core_mantra</p>
              <p className="font-space text-sm font-medium text-white/70 italic">
                "Ready to work together? Let's build something amazing!"
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="neon-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[hsl(142_70%_55%/0.15)] border border-[hsl(142_70%_55%/0.4)]">
                  <CheckCircle2 className="w-8 h-8 text-[hsl(142_70%_65%)]" />
                </div>
                <h3 className="font-space text-xl font-bold text-white">Message Sent!</h3>
                <p className="font-inter text-white/50 text-sm max-w-xs">Your email client has been opened. Hit send to complete your message.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline text-sm px-5 py-2.5 mt-2">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-space text-xl font-bold text-white mb-6">Send a Message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-inter text-xs text-white/40 mb-2">Your Name</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                      placeholder="Shashvat Tripathi" className="contact-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter text-xs text-white/40 mb-2">Email Address</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                      placeholder="you@example.com" className="contact-input" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-inter text-xs text-white/40 mb-2">Subject</label>
                  <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange}
                    placeholder="Collaboration, Internship, Project..." className="contact-input" />
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter text-xs text-white/40 mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..." className="contact-input resize-none" />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;