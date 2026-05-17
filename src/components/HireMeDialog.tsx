import { useState } from 'react';
import { Send, User, Loader2, Briefcase, Clock, DollarSign, MessageSquare, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const HireMeDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', project: '', budget: '', timeline: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    const subject = `Hire Me — ${formData.project}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\n${formData.message}`;
    window.open(`mailto:shashvatt68@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setFormData({ name: '', email: '', project: '', budget: '', timeline: '', message: '' });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const inputClass = "w-full px-4 py-2.5 rounded-xl font-inter text-sm text-white placeholder-white/25 outline-none bg-[hsl(240_8%_10%)] border border-[hsl(270_80%_62%/0.15)] focus:border-[hsl(270_80%_62%/0.5)] focus:shadow-[0_0_16px_hsl(270_80%_62%/0.1)] transition-all duration-300";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5">
          <Briefcase className="w-4 h-4" />
          Hire Me
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden border-0"
        style={{ background: 'hsl(240 10% 5%)', border: '1px solid hsl(270 80% 62% / 0.3)', borderRadius: '20px', boxShadow: '0 0 60px hsl(270 80% 62% / 0.15)' }}>

        {/* Header */}
        <div className="p-6 border-b border-[hsl(270_80%_62%/0.1)]" style={{ background: 'linear-gradient(135deg, hsl(270 80% 62% / 0.08) 0%, transparent 100%)' }}>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(270 80% 62%), hsl(290 90% 55%))' }}>
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="font-space text-xl font-bold text-white">Let's Work Together</DialogTitle>
              <DialogDescription className="font-inter text-xs text-white/40 mt-0.5">
                Tell me about your project and let's build something amazing.
              </DialogDescription>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-inter text-xs text-white/40 mb-1.5">Your Name *</label>
              <input name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
            </div>
            <div>
              <label className="block font-inter text-xs text-white/40 mb-1.5">Email *</label>
              <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block font-inter text-xs text-white/40 mb-1.5">
              <Briefcase className="w-3 h-3 inline mr-1" />Project Type *
            </label>
            <input name="project" type="text" required value={formData.project} onChange={handleChange} placeholder="Web App, AI System, Mobile App, API..." className={inputClass} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-inter text-xs text-white/40 mb-1.5">
                <DollarSign className="w-3 h-3 inline mr-1" />Budget
              </label>
              <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass + " appearance-none cursor-pointer"}>
                <option value="" className="bg-[hsl(240_10%_8%)]">Select range</option>
                <option value="&lt;₹10K" className="bg-[hsl(240_10%_8%)]">&lt; ₹10,000</option>
                <option value="₹10K–₹50K" className="bg-[hsl(240_10%_8%)]">₹10K – ₹50K</option>
                <option value="₹50K–₹1L" className="bg-[hsl(240_10%_8%)]">₹50K – ₹1L</option>
                <option value="₹1L+" className="bg-[hsl(240_10%_8%)]">₹1L+</option>
                <option value="Discuss" className="bg-[hsl(240_10%_8%)]">Let's discuss</option>
              </select>
            </div>
            <div>
              <label className="block font-inter text-xs text-white/40 mb-1.5">
                <Clock className="w-3 h-3 inline mr-1" />Timeline
              </label>
              <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass + " appearance-none cursor-pointer"}>
                <option value="" className="bg-[hsl(240_10%_8%)]">Select timeline</option>
                <option value="ASAP" className="bg-[hsl(240_10%_8%)]">ASAP</option>
                <option value="1–2 weeks" className="bg-[hsl(240_10%_8%)]">1–2 weeks</option>
                <option value="1 month" className="bg-[hsl(240_10%_8%)]">1 month</option>
                <option value="2–3 months" className="bg-[hsl(240_10%_8%)]">2–3 months</option>
                <option value="Flexible" className="bg-[hsl(240_10%_8%)]">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-inter text-xs text-white/40 mb-1.5">
              <MessageSquare className="w-3 h-3 inline mr-1" />Project Details *
            </label>
            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange}
              placeholder="Describe your project, goals, tech requirements, and any other relevant details..." className={inputClass + " resize-none"} />
          </div>

          <button type="submit" disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Sending Request...</>
            ) : (
              <><Send className="w-4 h-4" /> Send Hire Request</>
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HireMeDialog;