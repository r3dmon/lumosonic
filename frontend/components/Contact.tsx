import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section 
      className="py-32 bg-black"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 id="contact-heading" className="text-4xl sm:text-5xl font-thin text-white mb-6">
            Connect
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Ready to begin? Let's create something extraordinary together.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-light text-white mb-8">
              Get in Touch
            </h3>
            
            <address className="space-y-8 not-italic">
              <div className="flex items-center group">
                <div 
                  className="h-5 w-5 text-cyan-400 mr-6 group-hover:scale-110 transition-transform duration-300 relative" 
                  aria-hidden="true"
                >
                  <div className="w-5 h-3 border-2 border-cyan-400 rounded-t-lg relative">
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 border-l-2 border-r-2 border-b-2 border-cyan-400 transform -translate-x-1/2" />
                  </div>
                </div>
                <div>
                  <a 
                    href="mailto:info@lumosonic.nl" 
                    className="font-light text-white hover:text-cyan-400 transition-colors duration-300"
                    aria-label="Send email to info@lumosonic.nl"
                  >
                    info@lumosonic.nl
                  </a>
                </div>
              </div>
            </address>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-8 rounded-lg">
            <form 
              className="space-y-6" 
              onSubmit={handleSubmit}
              aria-labelledby="contact-form-heading"
            >
              <h4 id="contact-form-heading" className="sr-only">Contact Form</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="sr-only">First Name</label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    placeholder="First Name" 
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-lg"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">Last Name</label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name" 
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-lg"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="Email" 
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-lg"
                  required
                  aria-required="true"
                  aria-describedby="email-desc"
                />
                <span id="email-desc" className="sr-only">We'll use this to respond to your inquiry</span>
              </div>
              
              <div>
                <label htmlFor="company" className="sr-only">Company (Optional)</label>
                <Input 
                  id="company"
                  name="company"
                  placeholder="Company" 
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-lg"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  placeholder="Your vision..."
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-lg resize-none"
                  required
                  aria-required="true"
                  aria-describedby="message-desc"
                />
                <span id="message-desc" className="sr-only">Tell us about your project or inquiry</span>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                aria-describedby="submit-desc"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <span id="submit-desc" className="sr-only">Submit your contact form</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
