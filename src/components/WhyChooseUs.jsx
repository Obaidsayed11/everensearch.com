import React from 'react';
import { WhyChooseHeader } from './AllHeader';
import { Cog, LifeBuoy, Puzzle, Rocket, Trophy, Wallet } from 'lucide-react';

// Card data array with Heroicons
const cardData = [
  {
    icon: <Wallet className="h-8 w-8 text-gray-500" />,
    title: "Prioritize Budget",
    description: "We provide high-quality services that fit your budget, offering scalable solutions without compromising on excellence."
  },
  {
    icon: <Puzzle className="h-8 w-8 text-gray-500" />,
    title: "Expertise Across Industries",
    description: "We specialize in talent mapping, executive search, KPO services, and more, offering tailored solutions for diverse industries."
  },
  {
    icon: <Rocket className="h-8 w-8 text-gray-500" />,
    title: "Innovative Solutions",
    description: "We leverage cutting-edge technologies and data-driven insights to deliver smarter, more efficient results."
  },
  {
    icon: <Trophy className="h-8 w-8 text-gray-500" />,
    title: "Commitment to Quality",
    description: "We ensure high-quality service, from sourcing top talent to providing reliable data management and administrative support."
  },
  {
    icon: <Cog className="h-8 w-8 text-gray-500" />,
    title: "Customized Approach",
    description: "Our solutions are personalized to meet your unique business needs, driving optimal performance and growth."
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-gray-500" />,
    title: "Dedicated Support",
    description: "We offer continuous support, ensuring seamless execution and a collaborative partnership at every stage."
  }
];

export const ValueCard = ({ icon, title, description }) => {
  return (
    <li className="group rounded-2xl border border-gray-200 p-8 relative">
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          >
            <defs>
              <pattern
                id=":r0:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r0:)" />
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
            </svg>
          </svg>
        </div>
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#EEEEEE] to-[#BDBDBD]  opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ maskImage: 'radial-gradient(300px at 0px 0px, white, transparent)' }}
        ></div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          style={{ maskImage: 'radial-gradient(300px at 0px 0px, white, transparent)' }}
        >
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
          >
            <defs>
              <pattern
                id=":r1:"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r1:)" />
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className="relative z-10">
        <span>{icon}</span>
        <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased">
          {title}
        </h3>
        <p className="mt-2 text-gray-700 tracking-wide leading-6 antialiased">{description}</p>
      </div>
    </li>
  );
};

const WhyChooseUs = () => {
  return (
    <div className='mt-10 mb-20'>
    <WhyChooseHeader/>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-6"  data-aos="fade-right"
        
        data-aos-duration="1300">
      {cardData.map((card, index) => (
        <ValueCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </ul>
    </div>
  );
};

export default WhyChooseUs;
