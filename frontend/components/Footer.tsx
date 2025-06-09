import { Lightbulb } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-px w-8 bg-cyan-400 mr-3" />
              <Lightbulb className="h-6 w-6 text-cyan-400 mr-3" />
              <span className="text-xl font-thin text-white">Craft</span>
            </div>
            <p className="text-gray-400 font-light mb-8 max-w-md leading-relaxed">
              From sound to light. We transform ideas into 
              elegant digital experiences that resonate.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-light text-white mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Web</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Mobile</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Cloud</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Data</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Systems</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Strategy</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light text-white mb-6">Studio</h3>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">About</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Work</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Process</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Team</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Journal</li>
              <li className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 font-light text-sm">&copy; 2024 Craft Studio. Minimal by design.</p>
        </div>
      </div>
    </footer>
  );
}
