export function Footer() {
  return (
    <footer 
      className="bg-black border-t border-gray-800 py-16"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-px w-8 bg-cyan-400 mr-3" aria-hidden="true" />
              <div className="flex items-center space-x-2 mr-3">
                <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-cyan-200 rounded-full" aria-label="Illumination" />
                <div className="w-5 h-5 border-2 border-cyan-400 rounded" aria-label="Sound" />
              </div>
              <span className="text-xl font-thin text-white">Lumosonic</span>
            </div>
            <p className="text-gray-400 font-light mb-8 max-w-md leading-relaxed">
              From sound to light. We transform ideas into 
              elegant digital experiences that resonate.
            </p>
          </div>
          
          <nav aria-labelledby="services-nav-heading">
            <h3 id="services-nav-heading" className="text-lg font-light text-white mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Web</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Mobile</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Cloud</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Data</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Systems</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Strategy</a></li>
            </ul>
          </nav>
          
          <nav aria-labelledby="studio-nav-heading">
            <h3 id="studio-nav-heading" className="text-lg font-light text-white mb-6">Studio</h3>
            <ul className="space-y-3 text-gray-400 font-light text-sm">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Work</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-300">Process</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-300">Team</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 font-light text-sm">
            &copy; 2024 Lumosonic. Minimal by design.
          </p>
        </div>
      </div>
    </footer>
  );
}
