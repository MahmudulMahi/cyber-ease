import React from "react";
import rightImage from "../../../assets/live.png";

const LiveCycle = () => {
  return (
    <div className="bg-black text-white py-10 px-2">
      <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-56">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <button className="bg-green-600 text-white px-2 md:px-6 py-2 rounded-full font-medium">
            Structured Products
          </button>

          <h2 className="text-2xl md:text-3xl font-bold mt-6">
            Lifecycle & services
          </h2>
          <div className=" 2xl:w-[75%]">
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold">1. Onboarding setup</h3>
              <p className="text-gray-300">
                Advisory services for ISDA/base prospectus creation; related
                document automation and templating; due diligence onboarding and
                management of distributor questionnaires
              </p>
            </div>
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold">2. Pre-trade</h3>
              <p className="text-gray-300">
                Tailored educational content, including tutorials, videos and
                quizzes; workflow automation for streamlining the approval
                process; suitability and target market; efficient product
                selection
              </p>
            </div>
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold">3. Execution</h3>
              <p className="text-gray-300">
                RFQ integration with several issuers; state-of-the-art document
                automation and template setup and maintenance services;
                industry-standard KID templates
              </p>
            </div>
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold">4. Settlement</h3>
              <p className="text-gray-300">
                Reconciliation of trade data across different sources;
                EDGAR/SEDAR filings, document storage
              </p>
            </div>
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold">5. Publication</h3>
              <p className="text-gray-300">
                Web portals with live price feeds; integration with data vendors
                and exchanges; comprehensive U.S. and European structured
                products reference database
              </p>
            </div>
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold">6. Secondary market</h3>
              <p className="text-gray-300">
                Continuously updated PRIIP KID SRI and performance scenarios;
                documentation; data feeds into all downstream systems
              </p>
            </div>
            <div className="mt-6 space-y-6">
              <h3 className="text-lg font-semibold">7. Lifecycle management</h3>
              <p className="text-gray-300">
                Calculation of coupons, barriers, autocalls; reconciliation
                across different sources; performance reports and lifecycle
                notices; integration with exchanges; storage
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={rightImage}
            alt="Lifecycle Diagram"
            className="h-[1364px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LiveCycle;
