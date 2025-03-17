import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import background from "/image/home-hero.png";
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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technology", path: "/technology" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="relative  bg-cover bg-center h-[768px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Navbar with dynamic opacity */}
      <nav
        className={`absolute top-0 left-0 w-full text-white py-4 px-6 transition-all duration-300  bg-opacity-${opacity} mt-5 z-50`}
      >
        <div className="md:container mx-auto flex justify-between items-center">
          {/* Logo */}
          <img src={navicon} alt="Logo" className="hidden md:block" />

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3 text-black bg-white px-12 py-2 rounded-full">
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
      <div className="flex  flex-col lg:flex-row  items-center h-full text-center px-1 md:px-24 lg:px-9 pt-32 md:pt-52 lg:pt-0 ">
        <div>
          <img src={mainicon} alt="Main Icon" className="h-24 mb-4 lg:mr-28" />
        </div>
        <div className="text-white max-w-sm md:max-w-xl lg:max-w-xl 2xl:max-w-3xl ">
          <p className="text-4xl 2xl:text-5xl font-bold mb-2 tracking-wide">
          Cyberease - Your Trusted
          Cyber Security Partner
          </p>
          <p className=" pt-5">
          In today's digital landscape, cybersecurity is not an option—it's a necessity. At Cyberease,we provide cutting-edge cybersecurity and IT solutions to protect your business from ever-evolving threats.Our team of experts ensures your systems remain secure, compliant, and resilient against cyberattacks.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutNav;
