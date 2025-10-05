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
    purple1: "text-fuchsia-800 bg-purple-200 bg-opacity-5",
    purple2: "text-purple-200 bg-fuchsia-800 bg-opacity-5",
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link to={detailPath}>
    <div className={`flex cursor-pointer flex-col justify-between gap-5 rounded-2xl bg-white p-5 pb-2 border ${borderthemes[color]}`} >
      <div className="flex gap-4 flex-col-reverse md:flex-row justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-md text-[#260433]">{title}</span>
          <span className="leading-5 text-sm font-medium text-black">
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
            className="hover:bg-gray-100 p-2 rounded-full text-[#13011A]"
          >
            <SquareArrowOutUpRight className="h-5 w-5" />
          </button>
        </Tooltip>
      </div>
    </div>
    </Link>
  );
};
