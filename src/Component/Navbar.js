import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-300 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-extrabold italic text-white tracking-wide">
            BookMyRoom
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-semibold">
          <li className="hover:text-white cursor-pointer transition"><Link to='/' >Home</Link></li>
          <li className="hover:text-white cursor-pointer transition"><Link to='/#prop'>Properties</Link></li>
          <li className="hover:text-white cursor-pointer transition"><Link to='/contact'>Contact Us</Link></li>
          <li className="hover:text-white cursor-pointer transition"><Link to='/about'>About Us</Link></li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 text-black text-xl">
          <FiSearch className="cursor-pointer hover:text-white transition" />
          <FiUser className="cursor-pointer hover:text-white transition" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-black text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-yellow-200 text-black font-medium flex flex-col space-y-4 px-6 py-4">
          <span className="hover:text-yellow-700 cursor-pointer">Home</span>
          <span className="hover:text-yellow-700 cursor-pointer">Properties</span>
          <span className="hover:text-yellow-700 cursor-pointer">Contact Us</span>
          <span className="hover:text-yellow-700 cursor-pointer">About Us</span>

          <div className="flex space-x-4 pt-2 text-lg">
            <FiSearch className="cursor-pointer hover:text-yellow-700" />
            <FiUser className="cursor-pointer hover:text-yellow-700" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
