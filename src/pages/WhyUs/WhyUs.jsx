import { Helmet } from 'react-helmet';
import React from "react";
import { ArrowUpRight, ChartColumnBig, Lightbulb, Puzzle, RefreshCw, UsersRound } from "lucide-react";

function WhyUs() {
  return (
    <>
    <Helmet>
        <title>Why Choose Us - Evron Research</title>
        <meta name="description" content="Learn why Evron Research is the best choice for your business research and data analytics needs." />
        <link rel="canonical" href="https://www.Evronresearch.com/why-us" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "url": "https://www.Evronresearch.com/why-us",
              "name": "Why Choose Us - Evron Research",
              "description": "Learn why Evron Research is the best choice for your business research and data analytics needs."
            }
          `}
        </script>
      </Helmet>
    <div className="min-h-screen bg-white mt-12 px-12">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section */}
          <div data-aos="fade-down" data-aos-duration="1300">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Our Strategic Approach
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Evron Research, our strategic approach is designed to deliver tailored, high-performance solutions that meet the unique needs of each client. We focus on blending industry-leading expertise, innovative methodologies, and cutting-edge technology to drive superior outcomes in RPO and KPO services. Our goal is to build long-term partnerships and help businesses scale, innovate, and thrive.
            </p>
            <div className="space-y-12">
              {/* Custom Pointers with Icons */}
              {[
                {
                  icon: Puzzle,
                  title: "Customized Solutions",
                  description:
                    "We design personalized RPO and KPO services that align with your specific business objectives, ensuring maximum impact and value.",
                  color: "stroke-green-600",
                },
                {
                  icon: ChartColumnBig,
                  title: "Data-Driven Decisions",
                  description:
                    "By leveraging data and insights, we optimize recruitment and knowledge processes, ensuring smarter decisions and better results for our clients.",
                  color: "stroke-purple-600",
                },
                {
                  icon: RefreshCw,
                  title: "Agility & Flexibility",
                  description:
                    "We adapt to changing market demands and evolving business needs, offering scalable solutions that grow with your business.",
                  color: "stroke-red-600",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation & Technology",
                  description:
                    "By integrating the latest technologies and automation, we improve efficiency, accuracy, and scalability, driving success in every project we undertake.",
                  color: "stroke-blue-900",
                },
                {
                  icon: UsersRound,
                  title: "Collaborative Partnerships",
                  description:
                    "We work closely with clients to understand their goals and build strong, long-term partnerships that promote mutual success and sustained growth.",
                  color: "stroke-yellow-500",
                },
                {
                  icon: ArrowUpRight,
                  title: "Continuous Improvement",
                  description:
                    "We constantly evaluate and refine our strategies and processes, ensuring we stay at the forefront of industry trends and always deliver exceptional outcomes.",
                  color: "stroke-orange-600",
                },
              ].map((item, index) => (
                <div className="flex gap-4" key={index}>
                  <item.icon
                    className={`w-7 h-7 text-gray-400 flex-shrink-0 ${item.color}`}
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div data-aos="fade-up" data-aos-duration="1300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Industry Excellence
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                At Evron Research, we redefine industry excellence by seamlessly blending innovation, expertise, and commitment to deliver unmatched RPO and KPO solutions. We focus on providing intelligent, adaptable, and high-quality services that help businesses navigate complexities and stay ahead in an ever-evolving marketplace. Our relentless pursuit of excellence ensures that we consistently exceed client expectations and drive transformative results.
              </p>

              <ul className="space-y-4 text-gray-600 pl-0">
                {[
                  {
                    title: "Strategic Talent Acquisition",
                    description:
                      "We go beyond traditional recruitment by understanding your business culture and long-term vision, ensuring the right talent fits your goals.",
                  },
                  {
                    title: "Advanced Knowledge Solutions",
                    description:
                      "Our (KPO),(RPO) services empower clients by offering data-driven insights, detailed research, and specialized knowledge that fosters smarter decisions and faster growth.",
                  },
                  {
                    title: "Precision-Driven Quality",
                    description:
                      "We hold ourselves to the highest standards, focusing on precision, accuracy, and efficiency to deliver flawless, actionable results every time.",
                  },
                  {
                    title: "Client-Focused Innovation",
                    description:
                      "We thrive on customizing our approach to each client’s unique challenges, creating transformative solutions that drive operational success and strategic growth.",
                  },
                  {
                    title: "A Legacy of Excellence",
                    description:
                      "Evron Research is known for continuously setting the benchmark in RPO and KPO services, not just meeting but consistently exceeding industry standards.",
                  },
                ].map((item, index) => (
                  <li className="flex items-center gap-3" key={index}>
                    <span>
                      <b>{item.title}:</b> {item.description}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <blockquote className="text-gray-600 font-semibold italic">
                "Do what you do best and outsource the rest."
                </blockquote>
                <p className="text-sm text-gray-500 mt-4">
                – Peter Drucker, Renowned Management Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default WhyUs;
