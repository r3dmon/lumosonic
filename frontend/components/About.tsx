const stats = [
  { number: "150+", label: "Projects" },
  { number: "50+", label: "Clients" },
  { number: "5+", label: "Years" },
  { number: "24/7", label: "Support" }
];

const values = [
  {
    shape: "target",
    title: "Precision",
    description: "Every detail matters"
  },
  {
    shape: "award",
    title: "Excellence",
    description: "Uncompromising quality"
  },
  {
    shape: "clock",
    title: "Efficiency",
    description: "Time is valuable"
  },
  {
    shape: "check",
    title: "Reliability",
    description: "Consistent delivery"
  }
];

function ValueShape({ shape }: { shape: string }) {
  const baseClasses = "h-6 w-6 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300";
  
  switch (shape) {
    case "target":
      return (
        <div className={`${baseClasses} relative`} aria-hidden="true">
          <div className="w-6 h-6 border-2 border-cyan-400 rounded-full relative">
            <div className="absolute top-1/2 left-1/2 w-3 h-3 border border-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      );
    case "award":
      return (
        <div className={`${baseClasses}`} aria-hidden="true">
          <div className="relative">
            <div className="w-5 h-5 border-2 border-cyan-400 rounded-full relative">
              <div className="absolute top-1/2 left-1/2 text-xs text-cyan-400 transform -translate-x-1/2 -translate-y-1/2">★</div>
            </div>
            <div className="absolute -bottom-1 left-1/2 w-2 h-2 border-l-2 border-r-2 border-cyan-400 transform -translate-x-1/2" />
          </div>
        </div>
      );
    case "clock":
      return (
        <div className={`${baseClasses} relative`} aria-hidden="true">
          <div className="w-6 h-6 border-2 border-cyan-400 rounded-full relative">
            <div className="absolute top-1/2 left-1/2 w-px h-2 bg-cyan-400 transform -translate-x-1/2 -translate-y-full origin-bottom" />
            <div className="absolute top-1/2 left-1/2 w-1.5 h-px bg-cyan-400 transform -translate-y-1/2" />
          </div>
        </div>
      );
    case "check":
      return (
        <div className={`${baseClasses} relative`} aria-hidden="true">
          <div className="w-6 h-6 border-2 border-cyan-400 rounded-full relative flex items-center justify-center">
            <div className="text-cyan-400 text-sm font-bold">✓</div>
          </div>
        </div>
      );
    default:
      return <div className={`${baseClasses} w-6 h-6 bg-cyan-400 rounded`} aria-hidden="true" />;
  }
}

export function About() {
  return (
    <section 
      className="py-32 bg-black"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <header>
              <h2 id="about-heading" className="text-4xl sm:text-5xl font-thin text-white mb-8">
                Why Us
              </h2>
            </header>
            <p className="text-xl text-gray-300 font-light mb-12 leading-relaxed">
              We transform complexity into simplicity. 
              Every solution is crafted with precision, 
              delivered with excellence.
            </p>
            
            <div 
              className="grid grid-cols-2 gap-8"
              role="list"
              aria-label="Company statistics"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group" role="listitem">
                  <div 
                    className="text-3xl font-thin text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                    aria-label={`${stat.number} ${stat.label}`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-light text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            role="list"
            aria-label="Our core values"
          >
            {values.map((value, index) => (
              <article 
                key={index} 
                className="p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 group rounded-lg"
                role="listitem"
              >
                <ValueShape shape={value.shape} />
                <h3 className="text-lg font-light text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
