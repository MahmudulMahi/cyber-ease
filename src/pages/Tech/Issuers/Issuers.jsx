
import React from "react";
import rightImage from "../../../assets/issuers.png"; 

const Issuers = () => {
  return (
    <div className="bg-black text-white pt-16 px-5">
      <div className=" md:w-[90%]  mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium">
            How We Help
          </button>

          <h2 className="text-2xl md:text-3xl font-bold mt-6">Issuers</h2>

          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Documents</h3>
              <p className="text-gray-300">
                We help issuers with the automated creation, approval and
                archiving of complex, high-volume legal, regulatory, sales and
                marketing documents.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Connectivity</h3>
              <p className="text-gray-300">
                We help issuers disseminate documents and data to the buy side,
                exchange, regulators and data vendors.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Data & Platforms</h3>
              <p className="text-gray-300">
                We help issuers manage a product’s entire lifecycle. Access to
                aggregated market level data sourced from a mix of proprietary
                and external data feeds.
              </p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-8">Distributors</h2>
          <h2 className="text-xl md:text-2xl font-bold mt-2 pb-6">Service Providers</h2>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:pb-40">
          <img
            src={rightImage}
            alt="Issuers Diagram"
            className="w-full max-w-lg"
          />
        </div>
      </div>
      <hr className="pb-3 w-[90%] mx-auto" />
    </div>
    
  );
};

export default Issuers;
