import { CheckCircle, Award, Clock, Target } from 'lucide-react';

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive your business success."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Every solution we deliver meets the highest standards of quality and performance."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timeline and consistently deliver projects on schedule."
  },
  {
    icon: CheckCircle,
    title: "Proven Expertise",
    description: "Our team brings years of experience across various industries and technologies."
  }
];

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Consultancy?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're not just developers – we're strategic partners committed to your success. 
              Our team combines technical expertise with business acumen to deliver solutions 
              that truly make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <value.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
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
