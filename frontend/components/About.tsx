import { CheckCircle, Award, Clock, Target } from 'lucide-react';

const stats = [
  { number: "150+", label: "Projects" },
  { number: "50+", label: "Clients" },
  { number: "5+", label: "Years" },
  { number: "24/7", label: "Support" }
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality"
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Time is valuable"
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Consistent delivery"
  }
];

export function About() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-thin text-white mb-8">
              Why Us
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12 leading-relaxed">
              We transform complexity into simplicity. 
              Every solution is crafted with precision, 
              delivered with excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-thin text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-light text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 group"
              >
                <value.icon className="h-6 w-6 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-light text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
