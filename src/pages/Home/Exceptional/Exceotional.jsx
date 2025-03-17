import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Exceotional = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-20">
      <p
        className="font-semibold text-[40px] leading-[56px] tracking-[0%]
"
      >
        Why Choose{" "}
        <span
          className=" font-semibold text-[40px] md:text-[60px] leading-[56px] tracking-[0%] text-[#00643C]
"
        >
          Cyberease?
        </span>
      </p>

      <p className="pt-10">✔    Industry-leading <span className="font-bold">security expertise</span></p>
      <p>✔    <span className="font-bold">Proactive threat</span> detection & prevention</p>
      <p>✔    Tailored security solutions for <span className="font-bold">businesses of all sizes</span></p>
      <p>✔    <span className="font-bold">24/7 support</span> & monitoring services</p>
      <button className="flex items-center p-3  bg-transparent border-2 border-gray-400  rounded-full transition duration-300 mt-8">
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Exceotional;
