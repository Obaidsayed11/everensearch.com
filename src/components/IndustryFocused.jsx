import React from 'react';
import { Factory, Car , Building2, FlaskRound, Code, ShoppingCart } from 'lucide-react';

const industries = [
  {
    icon: Code,
    name: 'IT & Development',
    description: 'Tailored IT and Software Solutions for a Smarter Future'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Smart manufacturing and Industry 4.0 solutions'
  },
  {
    icon: Car,
    name: 'Automotive',
    description: 'Next-generation automotive technologies'
  },
  {
    icon: ShoppingCart,
    name: 'FMCG',
    description: 'Driving Growth with Agile Solutions for the Fast-Moving Consumer Goods Industry'
  },
  {
    icon: Building2,
    name: 'Banking',
    description: 'Innovative financial technology solutions'
  },
  {
    icon: FlaskRound,
    name: 'Pharmaceutical',
    description: 'Cutting-edge healthcare solutions'
  }
];

function IndustryFocused() {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-16 mb-20 from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-wider text-warning-600 font-semibold mb-3">
            Our Expertise
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748] relative inline-block">
            Industries Focused
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-warning-500/30 rounded-full"></div>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16" data-aos="fade-down"
            data-aos-duration="800">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div 
                key={industry.name} 
                className="group flex items-start gap-6 p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-1"
              >
                <div className="flex-shrink-0 p-3 bg-red-50 rounded-lg group-hover:bg-warning-100 transition-colors duration-300">
                  <Icon 
                    className="w-8 h-8 text-warning-500 transform transition-transform duration-300 group-hover:scale-110" 
                    strokeWidth={1.5} 
                  />
                </div>
                <div>
                  <h2 className="text-xl text-[#2D3748] font-semibold mb-2">
                    {industry.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IndustryFocused;