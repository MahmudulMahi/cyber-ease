import React from "react";
import chart from "../../../../../assets/chart.png";

const OurTeam = () => {
  return (
    <div className="bg-[#0F172A] text-white py-20 px-6 ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-[90%] mx-auto">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-300">
            Cyberease is powered by a team of experienced, motivated, and highly
            skilled professionals dedicated to innovation and outstanding client
            service. With a proven track record in managing large-scale
            regulatory projects, we bring unparalleled expertise wherever our
            clients need us—whether in London, Frankfurt, Göttingen, New York,
            Hong Kong, Dhaka, or directly at their locations.
          </p>
          <p className="text-gray-300 mt-4">
            Our interdisciplinary teams collaborate to integrate their diverse
            knowledge and skills, all aimed at achieving one goal: delivering
            the best possible solutions for our customers.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={chart}
            alt="Team Chart"
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
