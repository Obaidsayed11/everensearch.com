import React from "react";
// import largeScreen from "../image/largescreen.png";
// import smallScreen from "../image/smallscreen.png";
import { CompanyDropdownItems ,ServicesDropdownItems} from "../lib/utils";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import Dropdowns from "./ui/dropdown";
import { MenuIcon } from "lucide-react";
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className="top-0 fixed pt-5 px-2 w-full z-[900]">
      <div className="py-1.5 px-3 flex shadow-sm justify-between mx-auto w-full max-w-[984px] bg-white/40 backdrop-blur-xl items-center rounded-full border-zinc-200 border">
        {/* Logo and Menu for Small Screens */}
        {/* <img src={logo} alt="" className="h-20 w-40"/> */}
        <div className="icon flex items-center">
          <span className="sm:hidden items-center flex">
            <Dropdown className="mt-4">
              <DropdownTrigger>
                <MenuIcon className="text-lg h-6 w-6 mx-1 text-zinc-600" />
              </DropdownTrigger>
              <DropdownMenu variant="light" aria-label="Static Actions">
              
                <DropdownSection title="Services" showDivider>
                  <DropdownItem
                    key="kpo-services"
                    href="/kpo-services"
                    className="border-none"
                  >
                    Kpo Service
                  </DropdownItem>
                  <DropdownItem key="rpo-services" href="/rpo-services" className="border-none">
                    Rpo Service
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider title="Menu">
                
                  <DropdownItem key="whyus" href="/why-us" className="border-none">
                    Why Us
                  </DropdownItem>
                  <DropdownItem key="companyoverview" href="/company-overview" className="border-none">
                    Company OverView
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection>
                <DropdownItem
                    key="about"
                    href="/about"
                    className="border-none"
                  >
                    About
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </span>
          {/* Logo for Small and Large Screens */}
          <NavLink to="/">
          {/* <img
            src={smallScreen}
            alt="Company Logo"
            width={30}
            className="xs:hidden block mx-2"
          /> */}
          </NavLink>
         <NavLink to="/">

            {/* <img
              src={largeScreen}
              alt="Company Logo"
              width={160}
              className="hidden xs:block mx-1"
            /> */}
         </NavLink>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="space-x-4 hidden sm:flex items-center">
          
          <Dropdowns items={ServicesDropdownItems} title="Services"/>
            <Dropdowns items={CompanyDropdownItems} title="Company" 
            />
            <span>
            <NavLink
              to="/about"
              className="cursor-pointer text-[#260433] hover:text-[#260433]  hover:bg-gray-100 px-4 py-2 rounded-3xl text-sm"
            >
              About
            </NavLink>
          </span>
        </div>

        {/* Button */}

        <NavLink to="/contact"> 
        <button className="text-sm px-3 py-1.5 hover:bg-fuchsia-900  rounded-full bg-fuchsia-700 text-white">Reach Out</button>

        </NavLink>
      </div>
    </header>
  );
};

export default Header;
