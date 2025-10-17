import { Container, Navbar, InputGroup, Form, Button, Dropdown } from 'react-bootstrap';
import backgroundImage from '../Screen/Rectangle.jpg';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <header className="hero-section" style={heroStyle}>
      <Navbar bg="transparent" variant="dark" expand="lg" className="px-5">
        <Navbar.Brand className="me-5" style={{fontWeight: 900, fontStyle: "italic", fontSize: "1.5rem"}}><h1>BookMyRoom</h1></Navbar.Brand> {/* Changed to match image */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <div className="w-100 d-flex justify-content-evenly">

            <ul className="navbar-nav w-100 d-flex justify-content-evenly fw-bold fs-5 "
            >
              <li className="nav-item text-lg" >

                <Link className="nav-link active " aria-current="page" to="#">Home</Link>

              </li>



              <li className="nav-item">

                <Link className="nav-link active" to="/about">About Us</Link>

              </li>



              <li className="nav-item">

                <Link className="nav-link active" to="#">Contact</Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link active" to="/LoginAsStudent">Register</Link>

              </li>

              <li className="nav-item">

                <Link className="nav-link active" to="/LoginAsOwner">Login</Link>

              </li>

            </ul>

          </div>

        </Navbar.Collapse>

      </Navbar>

      {/* CONTENT CENTERING: h-100, d-flex, flex-column, justify-content-center */}
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">

        {/* Heading and Subtitle */}
        <div className="text-warning hero-content mb-4">
          <h1 className='text-#FFF16F'>A Smart Rental Solution for Students,</h1>
          <h3 className="text-white ">Easy Rentals, Anytime, Anywhere</h3>
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
  );
};

export default Hero;
