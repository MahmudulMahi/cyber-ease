import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import background from "/image/about-hero.png";
import navicon from "../../../assets/sdvgf 1.png";


const AboutNavber = () => {
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
  className="relative flex items-center justify-center  bg-center h-[768px] text-center"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* Navbar (Same as before) */}
  <nav
    className={`absolute top-0 left-0 w-full text-white py-4 px-6 transition-all duration-300 bg-opacity-${opacity} mt-5 z-50`}
  >
    <div className="md:container mx-auto flex justify-between items-center">
      <img src={navicon} alt="Logo" className="hidden md:block" />
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
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
    </div>
    {isOpen && (
      <div className="md:hidden flex flex-col text-black bg-white hover:text-slate-700 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-4 py-2 rounded-md transition-all duration-300 ${
              location.pathname === item.path ? "text-green-900 font-bold" : "hover:text-green-900"
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
  <div className="w-full flex flex-col items-center h-1/2">
    <div className="text-white max-w-5xl px-6">
      <p className="text-4xl 2xl:text-5xl font-bold mb-2 tracking-wide">
        Who We Are
      </p>
      <p className="pt-5">
        At Cyberease, we are dedicated to safeguarding businesses against cyber threats. Our team of skilled professionals specializes in cybersecurity, IT infrastructure, and cloud security. With a customer-centric approach, we help organizations build robust security postures through proactive measures and advanced technologies.
      </p>
    </div>
  </div>
</div>
  );
};

export default AboutNavber;
