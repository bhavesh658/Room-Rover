import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
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
            to="/properties"
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
                  <span className="text-yellow-600 font-bold">{user.name}</span>
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
}

export default Nav;
