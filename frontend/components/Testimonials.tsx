import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    content: "Exceptional quality. Minimal complexity. Maximum impact.",
    rating: 5
  },
  {
    name: "Marcus Rivera",
    role: "Founder",
    content: "They transformed our vision into reality with elegant precision.",
    rating: 5
  },
  {
    name: "Elena Kozlov",
    role: "VP Engineering",
    content: "Professional excellence delivered with minimalist perfection.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-thin text-white mb-6">
            Testimonials
          </h2>
          <div className="w-24 h-px bg-cyan-400 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 group"
            >
              <Quote className="h-6 w-6 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-cyan-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 font-light italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-light text-white">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm font-light">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
