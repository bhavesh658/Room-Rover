import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  // ✅ Load user info from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    // <nav className="bg-yellow-300 shadow-md fixed w-full top-0 left-0 z-50">
    //   <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    //     {/* Logo */}
    //     <h1 className="text-2xl font-extrabold italic text-white tracking-wide">
    //       BookMyRoom
    //     </h1>

    //     {/* Desktop Menu */}
    //     <ul className="hidden md:flex space-x-8 text-black font-semibold">
    //       <li className="hover:text-white cursor-pointer transition"><Link to='/' >Home</Link></li>
    //       <li className="hover:text-white cursor-pointer transition"><Link to='/#prop'>Properties</Link></li>
    //       <li className="hover:text-white cursor-pointer transition"><Link to='/contact'>Contact Us</Link></li>
    //       <li className="hover:text-white cursor-pointer transition"><Link to='/about'>About Us</Link></li>
    //     </ul>

    //     {/* Icons */}
    //     <div className="hidden md:flex items-center space-x-4 text-black text-xl">
    //       <FiSearch className="cursor-pointer hover:text-white transition" />
    //       <FiUser className="cursor-pointer hover:text-white transition" />
    //     </div>

    //     {/* Mobile Menu Button */}
    //     <div className="md:hidden text-black text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
    //       {isOpen ? <FiX /> : <FiMenu />}
    //     </div>
    //   </div>

    //   {/* Mobile Dropdown */}
    //   {isOpen && (
    //     <div className="md:hidden bg-yellow-200 text-black font-medium flex flex-col space-y-4 px-6 py-4">
    //       <span className="hover:text-yellow-700 cursor-pointer">Home</span>
    //       <span className="hover:text-yellow-700 cursor-pointer">Properties</span>
    //       <span className="hover:text-yellow-700 cursor-pointer">Contact Us</span>
    //       <span className="hover:text-yellow-700 cursor-pointer">About Us</span>

    //       <div className="flex space-x-4 pt-2 text-lg">
    //         <FiSearch className="cursor-pointer hover:text-yellow-700" />
    //         <FiUser className="cursor-pointer hover:text-yellow-700" />
    //       </div>
    //     </div>
    //   )}
    // </nav>
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* NAV LINKS
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
             to="#"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("prop");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            Properties
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            Contact
          </Link>
        </div>
            {/* LOGO */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-extrabold italic text-yellow-500 tracking-wide hover:text-yellow-600 transition duration-300"
          >
            BookMyRoom
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("prop");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            Properties
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* ✅ LOGIN / REGISTER / LOGOUT TOGGLE */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <>
              <Link
                to="/OwnerStudentLogin"
                className="px-5 py-2 text-sm font-semibold border border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/OwnerStudentRegister"
                className="px-5 py-2 text-sm font-semibold rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              {/* 🧍 User Icon + Name */}
              <div className="flex items-center space-x-2">
                <i className="bi bi-person-circle text-yellow-500 text-2xl"></i>
                <span className="text-yellow-500 font-semibold text-lg">
                  Welcome,{" "}
                  <span className="text-yellow-600 font-bold">{user.name}</span>{" "}
                  ({user.role})
                </span>
              </div>

              {/* 🚪 Logout Button */}
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-semibold rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
