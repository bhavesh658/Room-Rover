import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/OwnerStudentLogin");
  };

  return (
    <nav className="bg-yellow-300 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold italic text-white tracking-wide">
          BookMyRoom
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-semibold items-center">
          {user && user.role === "owner" ? (
            <>
              {/* 🧩 OWNER MENU */}
              <li>
                <Link to="/owner/home" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/owner/upload" className="hover:text-white transition">
                  Upload Property
                </Link>
              </li>

              {/* 👋 Show Owner Name */}
              <li className="flex items-center space-x-2 text-gray-800">
                <FiUser className="text-lg" />
                <span>
                  Hi, <strong>{user.name}</strong> ({user.role})
                </span>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : user && user.role === "student" ? (
            <>
              {/* 🧩 STUDENT MENU */}
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#prop" className="hover:text-white transition">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              {/* 👋 Show Student Name */}
              <li className="flex items-center space-x-2 text-gray-800">
                <FiUser className="text-lg" />
                <span>
                  Hi, <strong>{user.name}</strong> ({user.role})
                </span>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {/* 🧩 LOGGED OUT MENU */}
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/OwnerStudentLogin"
                  className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/OwnerStudentRegister"
                  className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 text-black text-xl">
          <FiSearch className="cursor-pointer hover:text-white transition" />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-black text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-yellow-200 text-black font-medium flex flex-col space-y-4 px-6 py-4">
          {user && user.role === "owner" ? (
            <>
              <Link to="/owner/home" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <Link to="/owner/upload" onClick={() => setIsOpen(false)}>
                Upload Property
              </Link>
              <p className="text-gray-800">
                👋 Hi, <strong>{user.name}</strong> ({user.role})
              </p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Logout
              </button>
            </>
          ) : user && user.role === "student" ? (
            <>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/#prop" onClick={() => setIsOpen(false)}>
                Properties
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <p className="text-gray-800">
                👋 Hi, <strong>{user.name}</strong> ({user.role})
              </p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
              <Link
                to="/OwnerStudentLogin"
                onClick={() => setIsOpen(false)}
                className="bg-black text-white px-3 py-1 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/OwnerStudentRegister"
                onClick={() => setIsOpen(false)}
                className="bg-white text-black px-3 py-1 rounded-md"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
