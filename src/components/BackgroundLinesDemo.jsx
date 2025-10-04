import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center h-screen justify-center bg-gray-50 w-full flex-col px-4" >
      <h2
        className="bg-clip-text text-[#260433] text-center bg-gradient-to-b from-neutral-900 to-neutral-700 text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-5 p-1 relative z-20 font-bold tracking-tight">
        The Ultimate Destination <br /> Of Research.
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-fuchsia-800 text-center">
       We transform ideas into insights and empower businesses with innovative research solutions. With precision, creativity, and excellence, we’re here to drive discovery and success.
      </p>
    </BackgroundLines>)
  );
}
