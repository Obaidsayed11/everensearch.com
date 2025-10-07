import React, { useEffect, useState } from "react";
import { FileCheck, Search, User, UsersRound } from "lucide-react";
import { motion } from "framer-motion";

// Simulating useCountUp hook
const useCountUp = (endValue, duration, startValue = 0) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(progress * (endValue - startValue) + startValue);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [endValue, duration, startValue]);

  return count;
};

const formatValue = (value, prefix = "") => {
  return `${value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  })} ${prefix}`;
};

// LayoutGrid Component
const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
          <motion.div
            onClick={() => handleClick(card)}
            className={
              selected?.id === card.id
                ? "rounded-2xl cursor-pointer fixed inset-0 h-[80vh] w-[90vw] md:w-[50vw] m-auto z-50 flex justify-center items-center"
                : lastSelected?.id === card.id
                ? "z-40 bg-purple-200 backdrop-blur-xl rounded-2xl h-full w-full border border-white/20"
                : "bg-purple-200 backdrop-blur-xl rounded-2xl h-full w-full border border-white/20 cursor-pointer hover:shadow-lg transition-shadow"
            }
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <CardContent card={card} />
          </motion.div>
        </div>
      ))}

      <motion.div
        onClick={handleOutsideClick}
        className={
          selected?.id
            ? "fixed h-full w-full left-0 top-0 bg-black opacity-0 z-40 pointer-events-auto"
            : "fixed h-full w-full left-0 top-0 bg-black opacity-0 z-40 pointer-events-none"
        }
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const CardContent = ({ card }) => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/[0.02] to-slate-900/[0.08] opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-6 h-full flex flex-col justify-center">
        <div className="flex flex-col items-start gap-5">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-800/20 blur opacity-100"></div>
            <div className="relative bg-white/80 p-3 rounded-xl">
              {card.icon}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-5xl font-bold text-slate-800">
              {card.value}
            </p>
            <h3 className="text-sm font-medium text-[#260433] uppercase tracking-wider">
              {card.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-white/95 backdrop-blur-xl h-full w-full flex flex-col justify-center items-center rounded-2xl shadow-2xl relative z-[60] p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-900/5 to-slate-900/10 z-10 rounded-2xl"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-[70] text-center"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

// StatCard Component for expanded view
const StatCard = ({ icon: Icon, title, endValue, prefix = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const count = useCountUp(endValue, 2000, 0);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-slate-600/20 to-slate-800/20 blur-lg opacity-100"></div>
        <div className="relative bg-white/90 p-6 rounded-2xl">
          <Icon className="w-16 h-16 text-slate-700" strokeWidth={1.5} />
        </div>
      </div>
      <div className="space-y-2 text-center">
        <p className={`text-6xl font-bold text-slate-800 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {formatValue(count, prefix)}
        </p>
        <h3 className="text-lg font-medium text-[#260433] uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-sm text-slate-600 max-w-md">
          Click outside to close this expanded view and explore other metrics.
        </p>
      </div>
    </div>
  );
};

function Stats() {
  const cards = [
    {
      id: 1,
      title: "Delighted Partners",
      value: formatValue(300, "+"),
      icon: <User className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-2 md:row-span-1",
      content: <StatCard icon={User} title="Delighted Partners" endValue={300} prefix="+" />
    },
    {
      id: 2,
      title: "Team Members",
      value: formatValue(50, "+"),
      icon: <UsersRound className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-1 md:row-span-1",
      content: <StatCard icon={UsersRound} title="Team Members" endValue={50} prefix="+" />
    },
    {
      id: 3,
      title: "Excellence Recognition",
      value: formatValue(100, "+"),
      icon: <Search className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-1 md:row-span-1",
      content: <StatCard icon={Search} title="Excellence Recognition" endValue={100} prefix="+" />
    },
    {
      id: 4,
      title: "Deliver Result",
      value: formatValue(10, "M"),
      icon: <FileCheck className="w-6 h-6 text-slate-700" strokeWidth={1.5} />,
      className: "md:col-span-2 md:row-span-1",
      content: <StatCard icon={FileCheck} title="Deliver Result" endValue={10} prefix="M" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-100 via-white to-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-10 w-1 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-[#13011A] tracking-tight">
                Enterprise Metrics
              </h2>
            </div>
            <div className="ml-14 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="h-px w-8 bg-gradient-to-r from-slate-200 to-transparent"></div>
                <p className="text-sm text-purple-800 font-medium">
                  Real-time performance analytics
                </p>
              </div>
            </div>
          </div>

          <LayoutGrid cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default Stats;