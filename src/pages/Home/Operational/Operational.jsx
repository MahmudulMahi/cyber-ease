import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Operational = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 md:mt-20">
      <p
        className="font-semibold text-[40px] leading-[56px] tracking-[0%]
"
      >
        Operational{" "}
        <span
          className=" font-semibold text-[60px] leading-[56px] tracking-[0%] text-[#00643C]
"
        >
         Excellence & Scalable </span>
        Solutions
      </p>
      <p className="mt-4 text-[rgba(0,0,0,0.82)]">
      At Cyberease, we design, deploy, and manage our products with unmatched
        <span className="font-bold"> precision</span>Our cloud
        strategy delivers{" "}
        <span className="font-bold">cost-efficient, secure,</span>and resilient hosting to meet the demands of our expanding
        customer base. Leveraging a hybrid cloud platform, we
         <span className="font-bold">seamlessly integrate</span>public and private 
         clouds, managed data centers, and client-facing APIs, ensuring scalability and<span className="font-bold">flexibility at every level.</span>
      </p>
      <button className="flex items-center p-3  bg-transparent border-2 border-gray-400  rounded-full transition duration-300 mt-8">
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Operational;
