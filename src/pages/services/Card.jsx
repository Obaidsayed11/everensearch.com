import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import { SquareArrowOutUpRight } from "lucide-react";

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  detailPath,
  color,
}) => {
  const borderthemes = {
    red: "hover:border-red-600",
    orange: "hover:border-orange-600",
    green: "hover:border-green-400",
    blue: "hover:border-blue-400",
    pink: "hover:border-pink-600",
    purple: "hover:border-purple-600",
    yellow: "hover:border-yellow-300",
    emerald: "hover:border-green-600",
    indigo: "hover:border-indigo-800",
    maroon: "hover:border-red-900",
    cyan: "hover:border-cyan-600",
  } 
  const cardthemes = {
    red: "text-red-600 bg-red-500 bg-opacity-5",
    orange: "text-orange-600 bg-orange-600 bg-opacity-5",
    green: "text-green-400 bg-green-400 bg-opacity-5",
    blue: "text-blue-400 bg-blue-400 bg-opacity-5",
    pink: "text-pink-600 bg-pink-600 bg-opacity-5",
    purple: "text-purple-600 bg-purple-600 bg-opacity-5",
    yellow: "text-yellow-500 bg-yellow-300 bg-opacity-5",
    emerald: "text-green-600 bg-green-600 bg-opacity-5",
    indigo: "text-indigo-800 bg-indigo-800 bg-opacity-5",
    maroon: "text-red-700 bg-red-700 bg-opacity-5",
    cyan: "text-cyan-600 bg-cyan-600 bg-opacity-5",
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link to={detailPath}>
    <div className={`flex cursor-pointer flex-col justify-between gap-5 rounded-2xl bg-white p-5 pb-2 border ${borderthemes[color]}`} >
      <div className="flex gap-4 flex-col-reverse md:flex-row justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-md">{title}</span>
          <span className="leading-5 text-sm font-medium text-gray-500">
            {description}
          </span>
        </div>
        <div>
          <button
            className={`shadow-sm px-3 py-2 rounded-lg ${
              cardthemes[color] || "bg-white"
            }`}
          >
            <Icon className={`h-6 w-5`} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="border-t border-zinc-200 flex justify-end pt-2">
        <Tooltip
          content="Know More"
          color="foreground"
          className="px-3 py-2 rounded-md text-xs"
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <button
            
            
            className="hover:bg-gray-100 p-2 rounded-full text-slate-500"
          >
            <SquareArrowOutUpRight className="h-5 w-5" />
          </button>
        </Tooltip>
      </div>
    </div>
    </Link>
  );
};
