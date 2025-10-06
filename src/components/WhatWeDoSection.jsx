import { WhatWeDoHeader } from "./AllHeader";
import { ServiceCard } from "../pages/services/Card";
import { KPOSERVICES, RPOSERVICES } from "../lib/utils";
import { NavLink } from "react-router-dom";
import { Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const KpoCards = [
  "email-list",
  "data-append",
  "data-refresh",
  "customize-b2b",
  "database-building",
  "content-research",
  "linkedin-data",
  "lead-generation",
];

const RpoCards = [
  "number-gathering",
  "talent-mapping",
  "talent-sourcing",
  "talent-insight",
  "executive-search-support",
  "recruitment-services",
];

export function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState("kpo");
  const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardMiddle = rect.top + rect.height / 2;
          
          if (cardMiddle < windowHeight / 2 && cardMiddle > 0) {
            setActiveCard(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  const kpoContent = {
    title: "KPO Services",
    subtitle: "Knowledge Process Outsourcing",
    description:
      "Leverage our expertise in data management, research, and analytics. Our KPO services are designed to help you make informed decisions, optimize operations, and drive business growth through intelligent data solutions.",
    features: [
      "Data Management & Analytics",
      "Market Research & Insights",
      "Lead Generation & Qualification",
      "Database Building & Maintenance",
    ],
  };

  const rpoContent = {
    title: "RPO Services",
    subtitle: "Recruitment Process Outsourcing",
    description:
      "Transform your hiring process with our comprehensive recruitment solutions. From talent sourcing to executive search, we provide end-to-end recruitment support that helps you build high-performing teams efficiently.",
    features: [
      "Talent Sourcing & Mapping",
      "Executive Search Support",
      "Recruitment Process Management",
      "Talent Insights & Analytics",
    ],
  };

  const activeContent = activeTab === "kpo" ? kpoContent : rpoContent;
  const activeServices = activeTab === "kpo" ? KPOSERVICES : RPOSERVICES;
  const activeCards = activeTab === "kpo" ? KpoCards : RpoCards;

  return (
    <div className="container relative mx-auto px-4 pb-1">
      <WhatWeDoHeader />

      {/* Tab Selector */}
      <div className="flex justify-center mb-12">
        <div className="relative bg-gray-100 p-1.5 rounded-full inline-flex">
          <div
            className="absolute top-1.5 h-[calc(100%-12px)] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{
              width: "140px",
              left: activeTab === "kpo" ? "6px" : "calc(50% + 6px)",
            }}
          ></div>

          <button
            onClick={() => setActiveTab("kpo")}
            className={`relative z-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === "kpo" ? "text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            KPO Services
          </button>
          <button
            onClick={() => setActiveTab("rpo")}
            className={`relative z-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
              activeTab === "rpo" ? "text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            RPO Services
          </button>
        </div>
      </div>

      {/* Sticky Scroll Layout */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Sticky Left Content */}
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] flex flex-col justify-center">
            <div className="space-y-6 p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {activeContent.subtitle}
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                {activeContent.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                {activeContent.description}
              </p>

              <div className="space-y-3 pt-4">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Key Offerings
                </h3>
                {activeContent.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      activeCard === index ? "opacity-100 translate-x-0" : "opacity-60 -translate-x-2"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="text-xs text-gray-500 mb-2">
                  Scroll to explore services →
                </div>
                <div className="flex gap-2">
                  {activeCards.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeCard
                          ? "w-8 bg-gradient-to-r from-purple-600 to-pink-600"
                          : "w-1.5 bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Right Cards */}
          <div className="space-y-6">
            {activeServices.map((service, index) => {
              const isCardAllowed = activeCards.includes(service.key);
              if (!isCardAllowed) return null;

              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="scroll-item"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    detailPath={service.detailPath}
                    color={service.color}
                    className={`transform transition-all duration-500 ${
                      activeCard === index
                        ? "scale-105 shadow-2xl"
                        : "scale-100 hover:scale-105"
                    }`}
                  />
                </div>
              );
            })}

            {/* More Services Button */}
            <div className="flex justify-center pt-8">
              <button className="group relative flex items-center gap-2 py-3 px-6 text-white rounded-full text-sm font-medium overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <NavLink to={activeTab === "kpo" ? "/kpo-services" : "/rpo-services"}>
                  More Services
                </NavLink>
                <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}