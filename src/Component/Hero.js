import { Container, InputGroup, Form, Button, Dropdown } from 'react-bootstrap';
import backgroundImage from '../Screen/Rectangle.jpg';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';
import Properties from './Properties';
import RecommendedProperties from './RecommendedProperties';
import { useEffect, useState } from 'react';

const Hero = () => {
  const heroStyle = { backgroundImage: `url(${backgroundImage})` };
 
  

  return (
    <>
      <header className="hero-section" style={heroStyle}>
       

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

      <Properties id="prop" />
      <RecommendedProperties />
    </>
  );
};

export default Hero;
