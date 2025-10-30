import { Container, Navbar, InputGroup, Form, Button, Dropdown } from 'react-bootstrap';
import backgroundImage from '../Screen/Rectangle.jpg';
import { Link } from 'react-router-dom';
import './Hero.css';
import Properties from './Properties';
import RecommendedProperties from './RecommendedProperties';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
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

        {/* LOGIN & REGISTER BUTTONS */}
        <div className="hidden md:flex items-center space-x-4">
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
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex items-center">
          <button
            id="menu-btn"
            className="text-gray-800 focus:outline-none hover:text-yellow-500"
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
          >
            <i className="bi bi-list text-3xl"></i>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className="hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-md md:hidden"
      >
        <Link to="/" className="text-gray-800 hover:text-yellow-500">Home</Link>
        <Link to="/properties" className="text-gray-800 hover:text-yellow-500">Properties</Link>
        <Link to="/about" className="text-gray-800 hover:text-yellow-500">About Us</Link>
        <Link to="/contact" className="text-gray-800 hover:text-yellow-500">Contact</Link>
        <Link
          to="/OwnerStudentLogin"
          className="text-yellow-500 font-semibold border border-yellow-500 rounded-full px-4 py-1 hover:bg-yellow-500 hover:text-white transition"
        >
          Login
        </Link>
        <Link
          to="/OwnerStudentRegister"
          className="bg-yellow-500 text-white rounded-full px-4 py-1 hover:bg-yellow-600 transition"
        >
          Register
        </Link>
      </div>
    </nav>

        <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <div className="text-warning hero-content mb-4">
            <h1 className="text-#FFF16F" style={{ fontWeight: 900, fontStyle: 'black', fontSize: '2.5rem' }}>A Smart Rental Solution for Students,</h1>
            <h3 className="text-white" style={{ fontWeight: 500, fontStyle: 'black', fontSize: '1.5rem' }}>Easy Rentals, Anytime, Anywhere</h3>
          </div>

          <div className="search-bar-wrapper">
            <InputGroup className="custom-search-bar shadow-lg" style={{ width: '650px', height: '66px' }}>
              <Dropdown align="start">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Rent
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Hostel</Dropdown.Item>
                  <Dropdown.Item href="#">PG</Dropdown.Item>
                  <Dropdown.Item href="#">Flats</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Form.Control
                placeholder="Search for properties........."
                aria-label="Search for properties"
                className="search-input"
                size="lg"
              />
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
