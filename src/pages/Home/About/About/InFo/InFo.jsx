
const InFo = () => {
    return (
      <div className="w-[90%] mx-auto px-6 py-16 text-center">
        {/* Top Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* 12 Locations */}
          <div>
            <h2 className="text-5xl font-bold">12</h2>
            <p className="text-gray-600">locations across multiple timezones</p>
          </div>
          {/* 27% Market Share */}
          <div>
            <h2 className="text-5xl font-bold">~27%</h2>
            <p className="text-gray-600">market share</p>
          </div>
          {/* 250 Employees */}
          <div>
            <h2 className="text-5xl font-bold">250</h2>
            <p className="text-gray-600">employees and contractors</p>
          </div>
        </div>
  
        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Mission */}
          <div>
            <h3 className="text-4xl font-bold mb-6">Mission.</h3>
            <p className="text-gray-600 mt-2">
              Our mission is to push the boundaries of automation for legal and financial applications by combining our deep domain knowledge in these sectors with state-of-the-art technology and cost-effective managed services.
            </p>
          </div>
  
          {/* Strategy */}
          <div>
            <h3 className="text-4xl font-bold mb-6">Strategy.</h3>
            <p className="text-gray-600 mt-2">
              We offer a range of industry-specific solutions designed to automate repetitive processes using a mix of technology, near-shore support services and experienced professionals. 
            </p>
          </div>
  
          {/* Values */}
          <div>
            <h3 className="text-4xl font-bold mb-6">Values.</h3>
            <p className="text-gray-600 mt-2">
              At CyberEase, our values guide every interaction, both internal and external. We lead by example, embodying operational excellence and our commitment to superior client service.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default InFo;
  