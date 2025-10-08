// import React from "react";
// import { Vortex } from "../components/ui/vortex";
// import { BackgroundLines } from "./ui/background-lines";

// export function BackgroundLinesDemo() {
//   return (
//     (<BackgroundLines className="flex items-center h-screen justify-center bg-gray-50 w-full flex-col px-4" >
//       <h2
//         className="bg-clip-text text-[#260433] text-center bg-gradient-to-b from-neutral-900 to-neutral-700 text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-5 p-1 relative z-20 font-bold tracking-tight">
//         The Ultimate Destination <br /> Of Research.
//       </h2>
//       <p
//         className="max-w-xl mx-auto text-sm md:text-lg text-fuchsia-800 text-center">
//        We transform ideas into insights and empower businesses with innovative research solutions. With precision, creativity, and excellence, we’re here to drive discovery and success.
//       </p>
//     </BackgroundLines>)
//   );
// }

import React from "react";
import { Vortex } from "../components/ui/vortex";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    (<Vortex className="flex items-center h-screen justify-center w-full flex-col px-4 overflow-hidden" >
      <h2
        className="bg-clip-text text-white text-center text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-5 p-1 relative z-20 font-bold tracking-tight">
        The Premier Hub <br /> For Cutting-Edge Research.  
      </h2>
      <p
        className="max-w-xl mx-auto text-sm md:text-lg text-white text-center">
      We turn ideas into actionable insights, empowering businesses with innovative research solutions. With precision, creativity, and expertise, we drive discovery and deliver success.
      </p>
    </Vortex>)
  );
}


// import React from "react";
// import { Vortex } from "../components/ui/vortex";

// export function VortexDemo() {
//   return (
//     <div
    

//       className="bg-clip-text text-white text-center  text-3xl md:text-5xl lg:text-7xl font-sans py-2 md:py-5 p-1 relative z-20 font-bold tracking-tight"
//       >
//       <Vortex
//         backgroundColor="black"
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           The Ultimate Destination <br /> Of Research.
//         </h2>
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           We transform ideas into insights and empower businesses with innovative research solutions. With precision, creativity, and excellence, we’re here to drive discovery and success.
//         </p>
//         {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           <button
//             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
//             Order now
//           </button>
//           <button className="px-4 py-2  text-white ">Watch trailer</button>
//         </div> */}
//       </Vortex>
//     </div>
//   );
// }
