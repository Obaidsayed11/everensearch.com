import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";

import { KPOSERVICES } from "../../lib/utils";
import { serviceDetailsKPO } from "../../lib/utils2";
import { Helmet } from "react-helmet";
import { KpoServicesHeading } from "./ServicesHeading";

const colorMap = {
  purple1: "text-fuchsia-800 bg-purple-200",
  purple2: "text-purple-200 bg-fuchsia-800",
};

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

const ExpandableCards = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <Helmet>
        <title>KPO Services - Evren Research</title>
        <meta
          name="description"
          content="Explore Evren Research's KPO services to streamline your recruitment processes."
        />
        <link
          rel="canonical"
          href="https://www.Evrenresearch.com/kpo-services"
        />
        <script type="application/ld+json">
          {`
                {
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "url": "https://www.Evrenresearch.com/rpo-services",
                  "name": "RPO Services - Evren Research",
                  "description": "Explore Evren Research's KPO services to streamline your recruitment processes."
                }
              `}
        </script>
      </Helmet>
      <div className="bg-gray-100 bg-opacity-75">
        <KpoServicesHeading />
        {/* Overlay */}
        <AnimatePresence mode="wait"> 
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>

        {/* Expanded Card */}
        <AnimatePresence mode="wait">
          {active && (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4 bg-black/30 backdrop-blur-sm ">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                ref={ref}
                className="relative w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl lg:mt-14 md:mt-12"
              >
                {/* Close Button (inside the card) */}
                <button
                  className="absolute top-3 right-3 flex items-center justify-center bg-gray-100 dark:bg-neutral-800 rounded-full h-9 w-9 shadow-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors z-20"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon className="text-black dark:text-white w-5 h-5" />
                </button>

                {/* Left Section — Icon */}
                <div
                  className={`w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br ${
                    colorMap[active.color]
                  } p-8`}
                >
                  <active.icon
                    className="w-28 h-28 md:w-36 md:h-36 "
                    strokeWidth={1.5}
                  />
                </div>

                {/* Right Section — Content */}
                <div className="w-full md:w-1/2 overflow-y-auto p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl text-[#260433] dark:text-neutral-200 mb-3 md:mb-4">
                      {serviceDetailsKPO[active.key]?.title || active.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                      {serviceDetailsKPO[active.key]?.details ||
                        active.description}
                    </p>

                    <ul className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base list-none space-y-3 md:space-y-4">
                      {serviceDetailsKPO[active.key]?.points?.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 text-green-600">✔</span>
                          <span>{p.content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="h-10 w-full max-w-[200px] bg-[#260433] hover:bg-fuchsia-950  px-4 py-2 text-sm font-medium sm:w-auto text-white"
                      radius="full"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-10">
          {KPOSERVICES.map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.key}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 flex flex-col md:flex-row justify-between items-center bg-white hover:shadow-lg rounded-xl cursor-pointer transition-shadow duration-200"
              >
                <div className="flex gap-4 flex-col md:flex-row items-center md:items-start w-full">
                  <div
                    className={`h-16 w-16 rounded-lg flex items-center justify-center ${
                      colorMap[card.color]
                    } flex-shrink-0`}
                  >
                    <IconComponent className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base text-neutral-800 dark:text-neutral-200 text-center md:text-left mb-1">
                      {card.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm text-center md:text-left">
                      {card.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActive(card)}
                  className="px-5 py-2 text-sm rounded-full font-semibold bg-gray-100 hover:bg-fuchsia-800 hover:text-purple-200 text-neutral-700 mt-4 md:mt-0 transition-colors duration-200 flex-shrink-0"
                >
                  View
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExpandableCards;
