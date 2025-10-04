import React, {
    useEffect,
    useState
} from "react";

import {
    useCountUp
} from "../../hooks/useCountUp";

import {
    FileCheck,
    Search,
    User,
    UsersRound
} from "lucide-react";


const formatValue = (value, prefix = "") => {
    return `${value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  })} ${prefix}`;
};

const StatCard = ({
    icon: Icon,
    title,
    endValue,
    prefix = "",
    subtitle
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const count = useCountUp(endValue, 2000, 0);

    return ( <div className = "group relative bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 transition-all duration-300" >
        <div className = "absolute inset-0 bg-gradient-to-br from-slate-900/[0.02] to-slate-900/[0.08] opacity-100 transition-opacity duration-500" > </div> <div className = "relative p-5" >
        <div className = "flex flex-col items-start gap-5" >
        <div className = "relative" >
        <div className = "absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-800/20 blur opacity-100" > </div> <div className = "relative bg-white/80 p-2 rounded-xl" >
        <Icon className = "w-6 h-6 text-slate-700"
        strokeWidth = {
            1.5
        }
        /> </div> </div> < div className = "space-y-0.5" >
        <p className = {
            `text-4xl font-bold text-slate-800 transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`
        } >
        {
            formatValue(count, prefix)
        } </p> <h3 className = "text-xs font-medium text-slate-500 uppercase tracking-wider" > {
            title
        } </h3> </div> </div> </div> </div>
    );
};

function Stats() {
    return (
    <div className="bg-gradient-to-br from-slate-100 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-2">
            <div className="h-10 w-1 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
                Enterprise Metrics
              </h2>
            </div>
            <div className="ml-14">
              <div className="flex items-center space-x-3">
                <div className="h-px w-8 bg-gradient-to-r from-slate-200 to-transparent"></div>
                <p className="text-sm text-slate-500 font-medium">
                  Real-time performance analytics
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <StatCard icon={User} title="Delighted Partners" endValue={300} prefix="+" />
            <StatCard icon={UsersRound} title="Team Members" endValue={50} prefix="+" />
            <StatCard icon={Search} title="Excellence Recognition" endValue={100} prefix="+" />
            <StatCard icon={FileCheck} title="Deliver Result" endValue={10} prefix="M" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;