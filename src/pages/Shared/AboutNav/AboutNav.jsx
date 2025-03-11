import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import background from "../../../assets/image.png";
import navicon from "../../../assets/sdvgf 1.png";
import mainicon from "../../../assets/mainicon.png";

const AboutNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [opacity, setOpacity] = useState(50); // Default opacity

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(100, 50 + scrollY / 5); // Adjust opacity based on scroll
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Technology", path: "/technology" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="relative bg-cover bg-center h-[768px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Navbar with dynamic opacity */}
      <nav
        className={`absolute top-0 left-0 w-full text-white py-4 px-6 transition-all duration-300  bg-opacity-${opacity} mt-5 z-50`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img src={navicon} alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-black bg-white px-14 py-3 rounded-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-lg rounded-md transition-all duration-300 ${
                  location.pathname === item.path ? "text-green-900 font-bold" : "hover:text-green-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col text-black bg-white hover:text-slate-700  p-4 space-y-2 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded-md transition-all  duration-300 ${
                  location.pathname === item.path ? " text-green-900 font-bold " : "hover:text-green-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Centered Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center h-full text-center px-4 md:px-14 py-24 bg-black bg-opacity-50">
        <div>
          <img src={mainicon} alt="Main Icon" className="h-24 mb-4 lg:mr-28" />
        </div>
        <div className="text-white max-w-3xl">
          <p className="text-4xl font-thin mb-2">
            Discover Seamless Automation for Structured Products from Start to Finish
          </p>
          <p className="opacity-60 pt-5">
            At Cyberease, we power the structured products value chain, serving as an essential part
            of our clients' operations. Backed by a global team with decades of specialized
            expertise, we drive automation across the structured products industry worldwide.
          </p>
        </div>
        <div className="space-y-2 ml-7 hidden lg:block">
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutNav;
