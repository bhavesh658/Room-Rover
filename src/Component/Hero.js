import { Container, Navbar, InputGroup, Form, Button, Dropdown } from 'react-bootstrap';
import backgroundImage from '../Screen/Rectangle.jpg';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };



  return (
    <>
    <header className="hero-section" style={heroStyle}>
      <Navbar  expand="lg" bg="transparent" variant="light" style={{ position: "relative", zIndex: 10 }}>
  <Navbar.Brand className='justify-evenly ml-5 mt-2' style={{ fontWeight: 900, fontStyle: "italic", fontSize: "2rem", color: "white" }}>
    BookMyRoom
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-evenly" />
  <Navbar.Collapse id="basic-navbar-nav justify-content-evenly">
    <ul className="mt-2 navbar-nav flex w-full justify-evenly items-center font-bold text-lg fw-bold fs-4">
      <li className="nav-item"><Link className="nav-link text-white" to="#">Home</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="">Properties</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/about">About Us</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="#">Contact</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/OwnerStudent">Register</Link></li>
      <li className="nav-item"><Link className="nav-link text-white" to="/OwnerStudent">Login</Link></li>
    </ul>
  </Navbar.Collapse>
</Navbar>

      {/* CONTENT CENTERING: h-100, d-flex, flex-column, justify-content-center */}
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">

        {/* Heading and Subtitle */}
        <div className="text-warning hero-content mb-4">
          <h1 className='text-#FFF16F' style={{fontWeight: 900, fontStyle: "black", fontSize: "2.5rem"}}>A Smart Rental Solution for Students,</h1>
          <h3 className="text-white "style={{fontWeight: 500, fontStyle: "black", fontSize: "1.5rem"}}>Easy Rentals, Anytime, Anywhere</h3>
        </div>

        <div className="search-bar-wrapper ">
          
          <InputGroup className="custom-search-bar shadow-lg"
          style={{ width: '650px', height: '66px'}} 
          >
            <Dropdown align='start'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Rent
            </Dropdown.Toggle>

            {/* Dropdown menu */}
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
              size="lg" // Use size="lg" to increase height
            />
            <Button variant="light" className="search-button">
              {/* BiSearch is from react-icons/bs, but we'll use the default Bootstrap Icon class 'bi-search' */}
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </div>
        {/* END SEARCH BAR */}

      </Container>
      
    </header>
    {/*  */}
    </>
  );
};

export default Hero;
