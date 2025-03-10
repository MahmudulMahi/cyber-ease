import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SeamLess = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-20">
      <p
        className="font-semibold text-[40px] leading-[56px] tracking-[0%]
"
      >
        Seamless{" "}
        <span
          className=" font-semibold text-[60px] leading-[56px] tracking-[0%] text-[#00643C]
"
        >
          Straight-Through </span>
        Processing
      </p>
      <p className="mt-4 text-[rgba(0,0,0,0.82)]">
        At Cyberease, precision drives our approach to product development and
        management, enabling the delivery of STP solutions tailored to our
        clients' needs. Our
        <span className="font-bold"> commitment to excellence</span>integrates a
        suite of advanced solutions,{" "}
        <span className="font-bold">perfectly aligned</span>and resilient
        hosting to meet the demands of our expanding customer base. Leveraging a
        hybrid cloud platform, we
        <span className="font-bold">seamlessly integrate</span>with the unique
        and evolving demands of our valued customers.
      </p>
      <button className="flex items-center p-3  bg-transparent border-2 border-gray-400  rounded-full transition duration-300 mt-8">
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default SeamLess;
