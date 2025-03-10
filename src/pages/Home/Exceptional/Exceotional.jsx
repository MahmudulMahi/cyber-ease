import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Exceotional = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-20">
      <p
        className="font-semibold text-[40px] leading-[56px] tracking-[0%]
"
      >
        Exceptional{" "}
        <span
          className=" font-semibold text-[60px] leading-[56px] tracking-[0%] text-[#00643C]
"
        >
          Customer Experience
        </span>
      </p>
      <p className="mt-4 text-[rgba(0,0,0,0.82)]">
        At Cyberease, our seasoned professionals are dedicated to innovation and
        <span className="font-bold"> client satisfaction</span>. With expertise
        in managing large-scale{" "}
        <span className="font-bold">regulatory projects</span>, we excel at
        transforming client needs into cutting-edge technology solutions through
        a <span className="font-bold">unique blend of skills</span>.
      </p>
      <button className="flex items-center p-3  bg-transparent border-2 border-gray-400  rounded-full transition duration-300 mt-8">
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Exceotional;
