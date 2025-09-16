import { useState } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const HireMeDialog = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create mailto link with form data
    const subject = `Hire Me Request: ${formData.project}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Project: ${formData.project}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Message: ${formData.message}`;
    
    const mailtoLink = `mailto:shashvatt68@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    toast({
      title: "Hire Me Request Sent!",
      description: "Your default email client has been opened. Please send the email to complete your request.",
    });

    setFormData({ name: '', email: '', project: '', budget: '', timeline: '', message: '' });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className="hero-button"
          size="sm"
        >
          <User className="mr-2 h-4 w-4" />
          Hire Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-sm border-border/50">
        <DialogHeader>
          <DialogTitle className="gradient-text text-2xl">Let's Work Together!</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell me about your project and let's create something amazing together.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="bg-input border-border/50 focus:border-primary transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="bg-input border-border/50 focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="project" className="block text-sm font-medium mb-2">
              Project Type *
            </label>
            <Input
              id="project"
              name="project"
              type="text"
              required
              value={formData.project}
              onChange={handleInputChange}
              placeholder="Website, App, API, etc."
              className="bg-input border-border/50 focus:border-primary transition-colors duration-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <Input
                id="budget"
                name="budget"
                type="text"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="$1000 - $5000"
                className="bg-input border-border/50 focus:border-primary transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                Timeline
              </label>
              <Input
                id="timeline"
                name="timeline"
                type="text"
                value={formData.timeline}
                onChange={handleInputChange}
                placeholder="2-4 weeks"
                className="bg-input border-border/50 focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Project Details *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project, requirements, and goals..."
              rows={4}
              className="bg-input border-border/50 focus:border-primary transition-colors duration-300 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full hero-button"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Hire Request
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HireMeDialog;