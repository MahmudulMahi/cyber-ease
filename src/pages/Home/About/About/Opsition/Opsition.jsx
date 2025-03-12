
import React from 'react';
import background from "../../../../../assets/man.png";

const Opsition = () => {
  return (
    <div className="relative bg-cover bg-center h-[400px] md:h-[828px] bg-black" style={{ backgroundImage: `url(${background})` }}>
      

      <div className="absolute lg:w-[40%] lg:left-52 top-0 mx-auto space-y-8">
        
        {/* Alex Carter */}
        <div className="bg-white p-6 rounded-lg shadow-md pb-1">
        <button className='bg-green-900 text-white px-10 py-3 rounded-full mb-3'>Executive Committe</button>
          <h2 className="text-2xl font-semibold">Alex Carter</h2>
          <p className="text-lg text-gray-600">Chief Executive Officer</p>
          <p className="mt-4 text-gray-700">
            Alex Carter is a visionary leader with over 15 years of experience in technology and digital transformation. As the CEO of Cyberease, Alex combines a deep understanding of the structural products industry with a passion for innovation, driving the company’s mission to deliver cutting-edge automation and scalable solutions.
          </p>
          <p className="mt-2 text-gray-700">
            Alex’s leadership is marked by a commitment to fostering long-term client relationships and empowering teams to achieve excellence. Based in New York, Alex oversees Cyberease’s global operations, ensuring the company remains a trusted partner to organizations worldwide.
          </p>
          <p className="mt-2 text-gray-700">
            When not spearheading initiatives at Cyberease, Alex is an advocate for technological education and enjoys mentoring the next generation of tech leaders.
          </p> 
          <h2 className="text-2xl font-semibold mt-9">John Doe</h2>
          <p className="text-lg text-gray-600">Chris Evans</p>
        </div>


      </div>
    </div>
  );
};

export default Opsition;