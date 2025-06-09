import { ArrowRight, Zap, Volume2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black to-cyan-400/5" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Volume2 className="h-8 w-8 text-cyan-400 animate-bounce" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <Lightbulb className="h-8 w-8 text-cyan-400 animate-pulse" />
          </div>
          <p className="text-cyan-400 text-lg font-light tracking-wider">From Sound to Light</p>
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-thin text-white mb-8 animate-slide-up">
          <span className="block">Craft</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Excellence
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto animate-slide-up delay-200">
          Minimalist solutions. Maximum impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-300">
          <Button 
            size="lg" 
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-8 py-4 rounded-none border-0 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Begin Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-none transition-all duration-300"
          >
            Explore Work
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 animate-fade-in delay-500">
            <Zap className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-light text-white mb-2">Swift</h3>
            <p className="text-gray-400 text-sm font-light">Rapid deployment</p>
          </div>
          
          <div className="group p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 animate-fade-in delay-700">
            <div className="h-8 w-8 bg-cyan-400 mb-4 group-hover:rotate-45 transition-transform duration-300" />
            <h3 className="text-lg font-light text-white mb-2">Pure</h3>
            <p className="text-gray-400 text-sm font-light">Clean architecture</p>
          </div>
          
          <div className="group p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 animate-fade-in delay-900">
            <div className="h-8 w-8 border-2 border-cyan-400 mb-4 group-hover:border-white transition-colors duration-300" />
            <h3 className="text-lg font-light text-white mb-2">Secure</h3>
            <p className="text-gray-400 text-sm font-light">Enterprise grade</p>
          </div>
        </div>
      </div>
    </section>
  );
}
