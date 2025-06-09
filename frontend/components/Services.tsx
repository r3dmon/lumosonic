import { Database, Cloud, Smartphone, Globe, Settings, Users } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Web",
    description: "Modern digital experiences"
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Native platform solutions"
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Scalable infrastructure"
  },
  {
    icon: Database,
    title: "Data",
    description: "Intelligent insights"
  },
  {
    icon: Settings,
    title: "Systems",
    description: "Seamless integration"
  },
  {
    icon: Users,
    title: "Strategy",
    description: "Digital transformation"
  }
];

export function Services() {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-thin text-white mb-6">
            Services
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:bg-gray-900/50"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <service.icon className="h-8 w-8 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-light text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 font-light text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
