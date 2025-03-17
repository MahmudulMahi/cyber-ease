import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSkype,
  FaYoutube,
} from "react-icons/fa";
import footerIcon from "../../../assets/sdvg 1.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 md:py-10">
      <div className="w-[90%]  mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white pb-6 md:pb-10">
          {/* Logo & Contact */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img
              src={footerIcon}
              alt="CyberEase Logo"
              className="mx-auto md:mx-0 w-32 md:w-40"
            />
          </div>
          <div className="text-center md:text-left text-sm">
            <p className="mt-2 md:mt-0">
              info@cyberease.biz | Phone: +880453785274
            </p>
            <p>Level 2, 1120 Mirpur 1, Dhaka 1212</p>
            <p>Bangladesh</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-sm mt-6 md:mt-0">
            {["Home", "Technology", "About Us", "Careers", "Latest", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-medium hover:text-gray-300 transition"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs sm:text-sm">
          <p className="text-center md:text-left">
            ©Cyber Ease – all rights reserved 2024
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-0">
            {[
              "Cookies",
              "Privacy Policy",
              "DE&I",
              "Modern Slavery Act Statement",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline hover:text-gray-300 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 mt-4 md:mt-0">
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition" />
            <FaSkype className="cursor-pointer hover:text-gray-300 transition" />
            <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
            <FaYoutube className="cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
