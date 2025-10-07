import { useState, useEffect, Suspense } from "react";
import { motion } from "motion/react";
import { World } from "../../components/ui/globe";

export default function GlobeSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = Array.from({ length: 40 }, (_, i) => ({
    order: i + 1,
    startLat: Math.random() * 180 - 90,
    startLng: Math.random() * 360 - 180,
    endLat: Math.random() * 180 - 90,
    endLng: Math.random() * 360 - 180,
    arcAlt: Math.random() * 0.7,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="relative w-full py-20 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Global Reach, Local Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Connecting businesses worldwide with our comprehensive KPO and RPO
            services. We operate across continents to deliver excellence everywhere.
          </p>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] mt-10">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                <div className="w-32 h-32 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              </div>
            }
          >
            <World data={sampleArcs} globeConfig={globeConfig} />
          </Suspense>

          <div className="absolute w-full bottom-0 h-40 bg-gradient-to-t from-purple-50 to-transparent pointer-events-none z-10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            ["50+", "Countries Served"],
            ["500+", "Happy Clients"],
            ["24/7", "Support Available"],
            ["10+", "Years Experience"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="text-center p-4 bg-white rounded-xl shadow-sm border border-purple-100"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {num}
              </div>
              <p className="text-sm md:text-base text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
