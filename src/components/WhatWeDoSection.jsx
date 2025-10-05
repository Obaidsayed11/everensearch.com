import { WhatWeDoHeader } from "./AllHeader";
import { ServiceCard } from "../pages/services/Card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { KPOSERVICES, RPOSERVICES } from "../lib/utils";
import { NavLink } from "react-router-dom";
import { Plus } from "lucide-react";


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
  return (
    <div className="container relative mx-auto px-4 pb-1">
      <WhatWeDoHeader />
      <div className="flex w-full flex-col">
        <Tabs 
          aria-label="Options"
          classNames={{
            tabList: "gap-0 w-auto relative rounded-full p-1 bg-gray-200",
            cursor: "w-full bg-white shadow-md rounded-full",
            tab: "max-w-fit px-4 h-10 rounded-full",
            tabContent: "group-data-[selected=true]:text-[#260433]  text-gray-500 font-medium"
          }}
        >
          <Tab key="kpo-services" title="KPO-SERVICES">
            <div className="mt-8 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6"  data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-shine">
              {KPOSERVICES.map((service, index) => {
                const isCardAllowed = KpoCards.includes(service.key);
                if (!isCardAllowed) return null;

                return (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    detailPath={service.detailPath}
                    color={service.color}
                    className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                      index % 3 === 0
                        ? "lg:translate-y-4"
                        : index % 3 === 1
                        ? "lg:translate-y-0"
                        : "lg:-translate-y-4"
                    }`}
                  />
                );
              })}
            </div>
            <div className="flex justify-center">
              <button className="flex justify-between items-center gap-2 py-2 px-4 border border-zinc-100 text-white rounded-3xl text-sm font-normal cursor-pointer hover:bg-fuchsia-900 bg-fuchsia-700">
                <NavLink to="/kpo-services">More Services</NavLink>
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </Tab>
          <Tab key="rpo-services" title="RPO-SERVICES" className="overflow-x-hidden">
            <div className="mt-8 mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"  data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-shine">
              {RPOSERVICES.map((service, index) => {
                const isCardAllowed = RpoCards.includes(service.key);
                if (!isCardAllowed) return null;

                return (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    detailPath={service.detailPath}
                    color={service.color}
                    className={`transform transition-transform duration-300 hover:-translate-y-1 ${
                      index % 3 === 0
                        ? "lg:translate-y-4"
                        : index % 3 === 1
                        ? "lg:translate-y-0"
                        : "lg:-translate-y-4"
                    }`}
                  />
                );
              })}
            </div>
            <div className="flex justify-center">
              <button className="flex justify-between items-center gap-2 py-2 px-4 border border-zinc-100 text-white rounded-3xl text-sm font-normal cursor-pointer hover:bg-fuchsia-900 bg-fuchsia-700">
                <NavLink to="/rpo-services">More Services</NavLink>
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}