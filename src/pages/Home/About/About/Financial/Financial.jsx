import React from "react";
import img1 from "../../../../../assets/cardIcon/image1.png";
import img2 from "../../../../../assets/cardIcon/image2.png";
import img3 from "../../../../../assets/cardIcon/image3.png";
import img4 from "../../../../../assets/cardIcon/image4.png";

const Financial = () => {
  const logos = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4];

  return (
    <div className="bg-black text-white py-10 px-5">
      {/* Title */}
      <h2 className="text-center text-xl md:text-2xl font-bold mb-6">
        We have strong client relationships with the world’s leading <br />
        banks and financial institutions
      </h2>


      <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center w-full">
         
            <img src={logo} alt={`Client Logo ${index + 1}`} className="w-full max-w-48 " />
            
            <hr className="border-gray-500 w-full my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Financial;
