import React from "react";
import background from "../../../assets/image.png";
import navicon from "../../../assets/sdvgf 1.png";
import mainicon from "../../../assets/mainicon.png";
import { FaBarsStaggered } from "react-icons/fa6";

const Navber = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[768px]  "
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Navbar Icons (Top Section) */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-16 py-11 ">
        <div>
          <img src={navicon} alt="Logo" className="h-12" />
        </div>
        <div>
          <FaBarsStaggered className="text-white text-5xl" />
        </div>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col lg:flex-row  justify-center items-center h-full text-center px-1 md:px-14 py-24 bg-black bg-opacity-50">
        <div>
          <img src={mainicon} alt="Nav Icon" className="h-24 mb-4 lg:mr-28 " />
        </div>
        <div className="text-white max-w-3xl">
          <p className="text-4xl font-thin  mb-2">
            Discover Seamless Automation for Structured Products from Start to
            Finish
          </p>
          <p className="opacity-60 pt-5 ">
            At Cyberease, we power the structured products value chain, serving
            as an essential part of our clients' operations. Backed by a global
            team with decades of specialized expertise, we drive automation
            across the structured products industry worldwide.
          </p>
        </div>
        <div className="space-y-2 ml-7 hidden lg:block ">
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Navber;
