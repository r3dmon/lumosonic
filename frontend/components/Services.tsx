const services = [
  {
    shape: "globe",
    title: "Web",
    description: "Modern digital experiences"
  },
  {
    shape: "mobile",
    title: "Mobile",
    description: "Native platform solutions"
  },
  {
    shape: "cloud",
    title: "Cloud",
    description: "Scalable infrastructure"
  },
  {
    shape: "data",
    title: "Data",
    description: "Intelligent insights"
  },
  {
    shape: "systems",
    title: "Systems",
    description: "Seamless integration"
  },
  {
    shape: "strategy",
    title: "Strategy",
    description: "Digital transformation"
  }
];

function ServiceShape({ shape }: { shape: string }) {
  const baseClasses = "h-8 w-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300";
  
  switch (shape) {
    case "globe":
      return (
        <div className={`${baseClasses} relative`} aria-hidden="true">
          <div className="w-8 h-8 border-2 border-cyan-400 rounded-full relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-400 transform -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-cyan-400 transform -translate-x-1/2" />
          </div>
        </div>
      );
    case "mobile":
      return (
        <div className={`${baseClasses}`} aria-hidden="true">
          <div className="w-5 h-8 border-2 border-cyan-400 rounded-lg relative">
            <div className="absolute bottom-1 left-1/2 w-2 h-px bg-cyan-400 transform -translate-x-1/2" />
          </div>
        </div>
      );
    case "cloud":
      return (
        <div className={`${baseClasses}`} aria-hidden="true">
          <div className="relative">
            <div className="w-6 h-3 bg-cyan-400 rounded-full" />
            <div className="w-4 h-2 bg-cyan-400 rounded-full absolute -top-1 left-1" />
            <div className="w-3 h-2 bg-cyan-400 rounded-full absolute -top-1 right-0" />
          </div>
        </div>
      );
    case "data":
      return (
        <div className={`${baseClasses} flex flex-col space-y-1`} aria-hidden="true">
          <div className="w-8 h-1 bg-cyan-400 rounded" />
          <div className="w-8 h-1 bg-cyan-400 rounded" />
          <div className="w-8 h-1 bg-cyan-400 rounded" />
          <div className="w-8 h-1 bg-cyan-400 rounded" />
        </div>
      );
    case "systems":
      return (
        <div className={`${baseClasses} grid grid-cols-2 gap-1`} aria-hidden="true">
          <div className="w-3 h-3 border border-cyan-400 rounded" />
          <div className="w-3 h-3 border border-cyan-400 rounded" />
          <div className="w-3 h-3 border border-cyan-400 rounded" />
          <div className="w-3 h-3 border border-cyan-400 rounded" />
        </div>
      );
    case "strategy":
      return (
        <div className={`${baseClasses}`} aria-hidden="true">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-4 h-px bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-4 h-px bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </div>
        </div>
      );
    default:
      return <div className={`${baseClasses} w-8 h-8 bg-cyan-400 rounded`} aria-hidden="true" />;
  }
}

export function Services() {
  return (
    <section 
      className="py-32 bg-black relative"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-thin text-white mb-6">
            Services
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto" aria-hidden="true" />
        </header>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Our services"
        >
          {services.map((service, index) => (
            <article 
              key={index}
              className="group p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:bg-gray-900/50 rounded-lg"
              style={{
                animationDelay: `${index * 100}ms`
              }}
              role="listitem"
            >
              <ServiceShape shape={service.shape} />
              <h3 className="text-xl font-light text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
