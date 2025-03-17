const TestimonialSection = () => {
    return (
      <div className="w-[90%] mx-auto text-center py-10 md:py-28 px-4">
        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row justify-evenly gap-10 text-gray-900 font-poppins">
          <div>
            <h2 className="text-3xl font-bold">11,000</h2>
            <p className="text-sm text-gray-600">EDGAR filings in 2023</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">50m</h2>
            <p className="text-sm text-gray-600">KIDs created in 2023</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">185</h2>
            <p className="text-sm text-gray-600">client interfaces</p>
          </div>
        </div>
  
        {/* Testimonial Text */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        Partnering with Cyberease has been a game-changer for our business. Their innovative solutions and expertise have streamlined our operations, significantly reducing manual efforts and improving efficiency. The team's commitment to understanding our unique challenges and delivering tailored results is truly commendable. Cyberease is more than a service provider—they are a trusted partner in our growth journey.
        </p>
  
        {/* Testimonial Author with Arrows */}
        <div className="mt-6 flex items-center justify-center gap-4 text-gray-900 font-poppins">
          <button className="text-2xl font-extrabold">&larr;</button>
          <h3 className="font-semibold text-lg">Clavius Lab</h3>
          <button className="text-2xl">&rarr;</button>
        </div>
      </div>
    );
  };
  
  export default TestimonialSection;
  