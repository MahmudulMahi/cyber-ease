const InFo = () => {
  return (
    <div className="w-[90%] mx-auto px-6 py-20 text-center">
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
{/* Bottom Sections */}
<div className="flex justify-center items-center  px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 text-left w-full max-w-4xl">
    {/* Mission */}
    <div className="max-w-md mx-auto">
      <h3 className="text-4xl font-bold mb-6">Mission.</h3>
      <p className="text-gray-600 mt-2">
        Empower businesses with top-tier security solutions to prevent cyber threats and ensure digital resilience.
      </p>
    </div>

    {/* Vision */}
    <div className="max-w-md mx-auto">
      <h3 className="text-4xl font-bold mb-6">Vision.</h3>
      <p className="text-gray-600 mt-2">
        To be a global leader in cybersecurity, providing innovative and future-ready security solutions to businesses worldwide.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default InFo;
