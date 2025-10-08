// import React from "react";
// // import largeScreen from "../image/largescreen.png";
// // import smallScreen from "../image/smallscreen.png";
// import { CompanyDropdownItems ,ServicesDropdownItems} from "../lib/utils";

// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   DropdownSection,
//   Button,
// } from "@nextui-org/react";
// import { NavLink } from "react-router-dom";
// import Dropdowns from "./ui/dropdown";
// import { MenuIcon } from "lucide-react";
// import logo from '../assets/logo.png'
// const Header = () => {
//   return (
//     <header className="top-0 fixed pt-5 px-2 w-full z-[900]">
//       <div className="py-1.5 px-3 flex shadow-sm justify-between mx-auto w-full max-w-[984px] bg-white/40 backdrop-blur-xl items-center rounded-full border-zinc-200 border">
//         {/* Logo and Menu for Small Screens */}
//         {/* <img src={logo} alt="" className="h-20 w-40"/> */}
//         <div className="icon flex items-center ">
//           <span className="sm:hidden items-center flex">
//             <Dropdown className="mt-4">
//               <DropdownTrigger>
//                 <MenuIcon className="text-lg h-6 w-6 mx-1 text-white" />
//               </DropdownTrigger>
//               <DropdownMenu variant="light" aria-label="Static Actions" className="bg-white text-black ">
              
//                 <DropdownSection title="Services" showDivider className="">
//                   <DropdownItem
//                     key="kpo-services"
//                     href="/kpo-services"
//                     className="border-none text-center"
//                   >
//                     Kpo Service
//                   </DropdownItem>
//                   <DropdownItem key="rpo-services" href="/rpo-services" className="border-none text-center">
//                     Rpo Service
//                   </DropdownItem>
//                 </DropdownSection>
//                 <DropdownSection showDivider title="Company">
                
//                   <DropdownItem key="whyus" href="/why-us" className="border-none text-center">
//                     Why Us
//                   </DropdownItem>
//                   <DropdownItem key="companyoverview" href="/company-overview" className="border-none text-center">
//                     Company OverView
//                   </DropdownItem>
//                 </DropdownSection>
//                 <DropdownSection>
//                 <DropdownItem
//                     key="about"
//                     href="/about"
//                     className="border-none"
//                   >
//                     About
//                   </DropdownItem>
//                 </DropdownSection>
//               </DropdownMenu>
//             </Dropdown>
//           </span>
//           {/* Logo for Small and Large Screens */}
//           <NavLink to="/">
//           {/* <img
//             src={smallScreen}
//             alt="Company Logo"
//             width={30}
//             className="xs:hidden block mx-2"
//           /> */}
//           </NavLink>
//          <NavLink to="/">

//             {/* <img
//               src={largeScreen}
//               alt="Company Logo"
//               width={160}
//               className="hidden xs:block mx-1"
//             /> */}
//          </NavLink>
//         </div>

//         {/* Navigation Links for Larger Screens */}
//         <div className="space-x-4 hidden sm:flex items-center">
          
//           <Dropdowns items={ServicesDropdownItems} title="Services"/>
//             <Dropdowns items={CompanyDropdownItems} title="Company" 
//             />
//             <span>
//             <NavLink
//               to="/about"
//               className="cursor-pointer text-[#260433] hover:text-[#260433]  hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm"
//             >
//               About
//             </NavLink>
//           </span>
//         </div>

//         {/* Button */}

//         <NavLink to="/contact"> 
//         <button className="text-sm px-3 py-1.5 hover:bg-fuchsia-900  rounded-full bg-fuchsia-700 text-white">Reach Out</button>

//         </NavLink>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { CompanyDropdownItems, ServicesDropdownItems } from "../lib/utils";
// import { NavLink } from "react-router-dom";
// import Dropdowns from "./ui/dropdown";
// import { MenuIcon, X } from "lucide-react";
// // import logo from "../assets/logo.png";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   return (
//     <header className="top-0 fixed pt-5 px-2 w-full z-[900]">
//       <div className="py-1.5 px-3 flex shadow-sm justify-between mx-auto w-full max-w-[984px] bg-white/40 backdrop-blur-xl items-center rounded-full border-zinc-200 border">
//         {/* Logo and Menu for Small Screens */}
//         <div className="icon flex items-center">
//           <span className="sm:hidden flex items-center">
//             <button onClick={toggleMobileMenu} className="text-[#260433]">
//               {isMobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <MenuIcon className="h-6 w-6" />
//               )}
//             </button>
//           </span>

//           {/* Logo for Small and Large Screens */}
//           {/* <NavLink to="/">
//             <img
//               src={logo}
//               alt="Company Logo"
//               width={140}
//               className="mx-2 rounded-md"
//             />
//           </NavLink> */}
//         </div>

//         {/* Navigation Links for Larger Screens */}
//         <div className="space-x-4 hidden sm:flex items-center">
//           <Dropdowns items={ServicesDropdownItems} title="Services" />
//           <Dropdowns items={CompanyDropdownItems} title="Company" />
//           <span>
//             <NavLink
//               to="/about"
//               className="cursor-pointer text-[#260433] hover:text-[#260433] hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm"
//             >
//               About
//             </NavLink>
//           </span>
//         </div>

//         {/* Button */}
//         <NavLink to="/contact">
//           <button className="text-sm px-3 py-1.5 hover:bg-fuchsia-900 rounded-full bg-fuchsia-700 text-white">
//             Reach Out
//           </button>
//         </NavLink>
//       </div>

//       {/* ---------- Mobile Menu (Dropdown Replacement) ---------- */}
//       {isMobileMenuOpen && (
//         <div className="sm:hidden mt-3 bg-white/90 backdrop-blur-lg rounded-2xl mx-3 shadow-lg border border-zinc-200">
//           <div className="flex flex-col px-5 py-4 space-y-3">
//             {/* Services */}
//             <div>
//               <h4 className="font-semibold text-[#260433] mb-1">Services</h4>
//               <div className="flex flex-col space-y-1">
//                 <NavLink
//                   to="/kpo-services"
//                   onClick={closeMobileMenu}
//                   className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
//                 >
//                   KPO Services
//                 </NavLink>
//                 <NavLink
//                   to="/rpo-services"
//                   onClick={closeMobileMenu}
//                   className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
//                 >
//                   RPO Services
//                 </NavLink>
//               </div>
//             </div>

//             {/* Company */}
//             <div>
//               <h4 className="font-semibold text-[#260433] mb-1">Company</h4>
//               <div className="flex flex-col space-y-1">
//                 <NavLink
//                   to="/why-us"
//                   onClick={closeMobileMenu}
//                   className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
//                 >
//                   Why Us
//                 </NavLink>
//                 <NavLink
//                   to="/company-overview"
//                   onClick={closeMobileMenu}
//                   className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
//                 >
//                   Company Overview
//                 </NavLink>
//               </div>
//             </div>

//             <div>
//               <div className="font-semibold text-[#260433] mb-1">
//                 <NavLink
//                   to="/about"
//                   onClick={closeMobileMenu}
//                   className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
//                 >
//                   About
//                 </NavLink>
//               </div>
//             </div>

//             {/* Reach Out Button */}
//             <NavLink to="/contact" onClick={closeMobileMenu}>
//               <button className="w-full text-sm px-4 py-2 bg-fuchsia-700 text-white rounded-full hover:bg-fuchsia-900">
//                 Reach Out
//               </button>
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { CompanyDropdownItems, ServicesDropdownItems } from "../lib/utils";
import { NavLink } from "react-router-dom";
import Dropdowns from "./ui/dropdown";
import { MenuIcon, X } from "lucide-react";
import logo from "../assets/logo.png"; // For large screens
import logo2 from "../assets/logo2.png"; // For small and medium screens

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="top-0 fixed pt-5 px-2 w-full z-[900]">
      <div className="py-1.5 px-3 flex shadow-sm justify-between mx-auto w-full max-w-[984px] bg-white/40 backdrop-blur-xl items-center rounded-full border-zinc-200 border">
        {/* Logo and Menu for Small Screens */}
        <div className="icon flex items-center">
          <span className="sm:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[#260433]">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </span>

          {/* Logo for Small/Medium Screens */}
          <NavLink to="/">
            <img
              src={logo2}
              alt="Evren Logo Small"
              className="block sm:block lg:hidden mx-3 h-12 w-auto"
            />
          </NavLink>

          {/* Logo for Large Screens */}
          <NavLink to="/">
            <img
              src={logo}
              alt="Evren Logo Large"
              className="hidden lg:block mx-3 h-14 w-auto"
            />
          </NavLink>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="space-x-4 hidden sm:flex items-center">
          <Dropdowns items={ServicesDropdownItems} title="Services" />
          <Dropdowns items={CompanyDropdownItems} title="Company" />
          <span>
            <NavLink
              to="/about"
              className="cursor-pointer text-[#260433] hover:text-[#260433] hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm"
            >
              About
            </NavLink>
          </span>
        </div>

        {/* Button */}
        <NavLink to="/contact">
          <button className="text-sm px-3 py-1.5 hover:bg-fuchsia-900 rounded-full bg-fuchsia-700 text-white">
            Reach Out
          </button>
        </NavLink>
      </div>

      {/* ---------- Mobile Menu (Dropdown Replacement) ---------- */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-3 bg-white/90 backdrop-blur-lg rounded-2xl mx-3 shadow-lg border border-zinc-200">
          <div className="flex flex-col px-5 py-4 space-y-3">
            {/* Services */}
            <div>
              <h4 className="font-semibold text-[#260433] mb-1">Services</h4>
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/kpo-services"
                  onClick={closeMobileMenu}
                  className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  KPO Services
                </NavLink>
                <NavLink
                  to="/rpo-services"
                  onClick={closeMobileMenu}
                  className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  RPO Services
                </NavLink>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-[#260433] mb-1">Company</h4>
              <div className="flex flex-col space-y-1">
                <NavLink
                  to="/why-us"
                  onClick={closeMobileMenu}
                  className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  Why Us
                </NavLink>
                <NavLink
                  to="/company-overview"
                  onClick={closeMobileMenu}
                  className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  Company Overview
                </NavLink>
              </div>
            </div>

            <div>
              <div className="font-semibold text-[#260433] mb-1">
                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className="text-sm text-[#260433] hover:bg-gray-100 px-3 py-1.5 rounded-lg"
                >
                  About
                </NavLink>
              </div>
            </div>

            {/* Reach Out Button */}
            <NavLink to="/contact" onClick={closeMobileMenu}>
              <button className="w-full text-sm px-4 py-2 bg-fuchsia-700 text-white rounded-full hover:bg-fuchsia-900">
                Reach Out
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
