import { Container, Navbar, Nav, InputGroup, Form, Button, Dropdown } from 'react-bootstrap';
import backgroundImage from '../Screen/Rectangle.jpg';
import { Link, useLocation } from 'react-router-dom';
import './Hero.css';
import Properties from './Properties';
import RecommendedProperties from './RecommendedProperties';

const Hero = () => {
  const location = useLocation(); // for active link highlighting

  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  // const navLinkStyle = (path) => ({
  //   color: 'white',
  //   margin: '0 15px',
  //   fontWeight: 600,
  //   fontSize: '1.1rem',
  //   textDecoration: location.pathname === path ? 'underline' : 'none',
  //   transition: 'all 0.3s ease',
  // });

  return (
    <>
      <header className="hero-section" style={heroStyle}>
        <Navbar expand="lg" className="glass-navbar py-3 px-4">
  <Container fluid className="d-flex flex-column align-items-center">
    
    {/* Brand Centered on Top */}
    <Navbar.Brand
      as={Link}
      to="/"
      className="text-white fw-bold brand-glow mb-2"
      style={{ fontSize: "2rem", fontStyle: "italic" }}
    >
      BookMyRoom
    </Navbar.Brand>

    {/* Links Centered Below */}
    <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
    <Navbar.Collapse id="navbar-nav" className="justify-content-center">
      <Nav className="d-flex justify-content-center align-items-center gap-4 text-center">
        <Nav.Link as={Link} to="/" className="nav-underline text-white fw-semibold">Home</Nav.Link>
        <Nav.Link as={Link} to="/properties" className="nav-underline text-white fw-semibold">Properties</Nav.Link>
        <Nav.Link as={Link} to="/about" className="nav-underline text-white fw-semibold">About</Nav.Link>
        <Nav.Link as={Link} to="/contact" className="nav-underline text-white fw-semibold">Contact</Nav.Link>
        <Nav.Link as={Link} to="/OwnerStudentRegister" className="nav-underline text-white fw-semibold">Register</Nav.Link>
        <Nav.Link as={Link} to="/OwnerStudentLogin" className="nav-underline text-white fw-semibold">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Container>
</Navbar>

        {/* HERO CONTENT */}
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <div className="text-warning hero-content mb-4">
            <h1 style={{ fontWeight: 900, fontSize: '2.5rem', color: '#FFF16F' }}>
              A Smart Rental Solution for Students
            </h1>
            <h3 className="text-white" style={{ fontWeight: 500, fontSize: '1.5rem' }}>
              Easy Rentals, Anytime, Anywhere
            </h3>
          </div>

          {/* SEARCH BAR */}
          <div className="search-bar-wrapper">
            <InputGroup
              className="custom-search-bar shadow-lg rounded-pill overflow-hidden"
              style={{ width: '650px', height: '66px' }}
            >
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
                placeholder="Search for properties..."
                aria-label="Search for properties"
                className="border-0 ps-3"
                size="lg"
              />
              <Button variant="light" className="search-button px-4">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </div>
        </Container>
      </header>

      {/* BELOW HERO CONTENT */}
      <Properties />
      <RecommendedProperties />
    </>
  );
};

export default Hero;
