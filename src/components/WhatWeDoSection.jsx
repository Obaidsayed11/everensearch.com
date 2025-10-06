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
  const rightPanelRef = useRef(null);


useEffect(() => {
  const container = rightPanelRef.current;
  if (!container) return;

  const handleScroll = () => {
    const containerTop = container.getBoundingClientRect().top;

    let newActive = 0;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      if (rect.top - containerTop + rect.height / 2 > 0) {
        newActive = index;
        return;
      }
    });

    setActiveCard(newActive);
  };

  container.addEventListener("scroll", handleScroll);
  handleScroll(); // initialize
  return () => container.removeEventListener("scroll", handleScroll);
}, [activeTab]);


  // Track scroll inside right panel only
  useEffect(() => {
    const container = rightPanelRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const offsetTop = card.offsetTop;
        const offsetHeight = card.offsetHeight;
        const cardMiddle = offsetTop + offsetHeight / 2;

        if (cardMiddle >= scrollTop && cardMiddle <= scrollTop + containerHeight) {
          setActiveCard(index);
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
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
    <div className="container relative mx-auto px-4 pb-16 overflow-x-hidden">
    <div className="w-full text-center">
      <WhatWeDoHeader />
    
    </div>

      {/* Tabs */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md py-6 mb-12">
        <div className="flex justify-center">
          <div className="relative bg-white shadow-md p-1.5 rounded-full inline-flex border border-gray-200">
            <div
              className="absolute top-1.5 h-[calc(100%-12px)] bg-fuchsia-900 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{
                width: "calc(50% - 6px)",
                left: activeTab === "kpo" ? "6px" : "calc(50% + 0px)",
              }}
            ></div>

            <button
              onClick={() => { setActiveTab("kpo"); setActiveCard(0); }}
              className={`relative z-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300 min-w-[150px] ${
                activeTab === "kpo" ? "text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              KPO Services
            </button>
            <button
              onClick={() => { setActiveTab("rpo"); setActiveCard(0); }}
              className={`relative z-10 px-8 py-3 rounded-full font-semibold transition-colors duration-300 min-w-[150px] ${
                activeTab === "rpo" ? "text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              RPO Services
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Sticky Content */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="space-y-6 p-8 rounded-3xl bg-blue-100 border  border-purple-100 min-h-[600px] flex flex-col justify-center">
            <span className="bg-[#260433] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              {activeContent.subtitle}
            </span>

            <h2 className={`text-4xl lg:text-5xl font-bold bg-clip-text text-transparent ${
              activeTab === "kpo" ? "bg-[linear-gradient(to_right,_#093028,_#6CC686)]" : "bg-[linear-gradient(to_right,_#3e4044,_#2d78f1)]"
              }`}
              >
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
                  <div className="w-2 h-2 rounded-full bg-fuchsia-800"></div>
                  <span className="text-gray-900 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <div className="text-xs text-gray-700 mb-2">Scroll to explore services →</div>
              <div className="flex gap-2">
                {activeCards.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeCard
                        ? "w-8 bg-fuchsia-800"
                        : "w-1.5 bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrollable Cards */}
        <div
  ref={rightPanelRef}
  className="space-y-6 max-h-[600px] overflow-y-auto pr-2 rounded-2xl scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 transition-all duration-300"
>
  {activeServices
    .filter(service => activeCards.includes(service.key))
    .map((service, index) => (
      <div
        key={service.key}
        ref={(el) => (cardsRef.current[index] = el)}
        className="scroll-item"
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
    ))}


          <div className="flex justify-center pt-8 pb-8">
            <NavLink to={activeTab === "kpo" ? "/kpo-services" : "/rpo-services"}>
              <button className="group relative flex items-center gap-2 py-3 px-6 text-white rounded-full text-sm font-medium overflow-hidden bg-fuchsia-900 hover:shadow-xl transition-all duration-300 hover:scale-105">
                More Services
                <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
