const ESGSection = () => {
    return (
      <div
        className="  relative h-[500px] lg:h-[882px] bg-center flex items-center"
        style={{
          backgroundImage: "url('/image/esg.png')", 
        }}
      >
       
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
  
       
        <div className="relative z-10 max-w-4xl text-white pl-2 lg:pl-60">
          <h2 className="text-3xl font-bold">ESG</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Cyber Ease recognises that our social, economic and environmental
            responsibilities to all our stakeholders are integral to our business.
            We aim to demonstrate these responsibilities through our actions and within
            our corporate policies.
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            We take all feedback that we receive from our stakeholders seriously and,
            where possible, maintain an open dialogue to ensure that we fulfill our own
            ESG requirements.
          </p>
          <a href="#" className="mt-4 inline-block text-sm font-semibold underline">
            View More
          </a>
        </div>
      </div>
    );
  };
  
  export default ESGSection;
  