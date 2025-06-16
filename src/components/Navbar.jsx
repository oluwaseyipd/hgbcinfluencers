import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/data";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // NEW STATE
  const location = useLocation();

  const toggleNavbar = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Wait for animation before unmounting
      setTimeout(() => setShowMobileMenu(false), 300); // 300ms = transition duration
    } else {
      setShowMobileMenu(true);
      setTimeout(() => setMobileMenuOpen(true), 10); // allow mount before animating
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTimeout(() => setShowMobileMenu(false), 300);
  }, [location.pathname]);

  return (
    <nav
      className={`px-4 md:px-12 lg:px-[200px] py-2 lg:py-3 fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-10 md:w-8 lg:w-16 cursor-pointer" />
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`text-sm lg:text-lg text-gray-600 hover:text-orange-500 transition-all duration-300 cursor-pointer ${
                  location.pathname === item.path ? "active-navlink" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/give">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 lg:px-5 lg:py-2 rounded-lg hover:bg-primary-500 transition duration-300">
                Give
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleNavbar}
          className="md:hidden text-black text-xl"
        >
          {mobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with transition */}
      {showMobileMenu && (
        <div
          className={`
            lg:hidden fixed right-0 z-20 bg-white shadow-lg w-full py-[40px] px-[30px] flex flex-col
            transition-all duration-300
            ${mobileMenuOpen ? "top-[60px] opacity-100" : "top-[-100%] opacity-0"}
          `}
          style={{ left: 0 }}
        >
          <ul className="flex flex-col">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="text-lg text-gray-600 hover:text-black mt-6 cursor-pointer"
              >
                <Link to={item.path} onClick={toggleNavbar}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-6">
              <Link to="/give" onClick={toggleNavbar}>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-primary-500 transition duration-300">
                  Give
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;