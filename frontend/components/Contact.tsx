import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-thin text-white mb-6">
            Connect
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto mb-8" />
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Ready to begin? Let's create something extraordinary together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-light text-white mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-cyan-400 mr-6 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <div className="font-light text-white">info@lumosonic.nl</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Input 
                    placeholder="First Name" 
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-none"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Last Name" 
                    className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-none"
                  />
                </div>
              </div>
              
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-none"
              />
              
              <Input 
                placeholder="Company" 
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-none"
              />
              
              <Textarea 
                rows={4} 
                placeholder="Your vision..."
                className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 rounded-none resize-none"
              />
              
              <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium py-3 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
