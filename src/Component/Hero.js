import { Container, InputGroup, Form, Button, Dropdown } from 'react-bootstrap';
import backgroundImage from '../Screen/Rectangle.jpg';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';
import Properties from './Properties';
import RecommendedProperties from './RecommendedProperties';
import { useEffect, useState } from 'react';

const Hero = () => {
  const heroStyle = { backgroundImage: `url(${backgroundImage})` };
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
    <>
      <header className="hero-section" style={heroStyle}>
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
              <Link to="/" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">Home</Link>
              <Link to="/properties" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">Properties</Link>
              <Link to="/about" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">About Us</Link>
              <Link to="/contact" className="text-gray-800 hover:text-yellow-500 font-medium transition duration-300">Contact</Link>
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
                      Welcome, <span className="text-yellow-600 font-bold">{user.name}</span> ({user.role})
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

        {/* HERO SECTION */}
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <div className="text-warning hero-content mb-4">
            <h1 className="text-#FFF16F" style={{ fontWeight: 900, fontSize: '2.5rem' }}>
              A Smart Rental Solution for Students,
            </h1>
            <h3 className="text-white" style={{ fontWeight: 500, fontSize: '1.5rem' }}>
              Easy Rentals, Anytime, Anywhere
            </h3>
          </div>

          <div className="search-bar-wrapper">
            <InputGroup className="custom-search-bar shadow-lg" style={{ width: '650px', height: '66px' }}>
              <Dropdown align="start">
                <Dropdown.Toggle variant="light" id="dropdown-basic">Rent</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Hostel</Dropdown.Item>
                  <Dropdown.Item href="#">PG</Dropdown.Item>
                  <Dropdown.Item href="#">Flats</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control placeholder="Search for properties..." aria-label="Search for properties" className="search-input" size="lg" />
              <Button variant="light" className="search-button">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </div>
        </Container>
      </header>

      <Properties />
      <RecommendedProperties />
    </>
  );
};

export default Hero;
