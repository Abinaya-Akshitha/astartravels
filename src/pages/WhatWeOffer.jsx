// src/pages/WhatWeOffer.jsx
import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { FaCar, FaTv, FaWifi, FaLuggageCart, FaUsers, FaChair, FaChargingStation, FaVideo, FaImage } from 'react-icons/fa';
import './WhatWeOffer.css';

// IMPORTANT: Replace these with YOUR ACTUAL IMAGE AND VIDEO FILE NAMES/PATHS!
import cab7SeaterImg from '../assets/7seater.jpg';
import cab9to13SeaterImg from '../assets/13seater.jpg';
import cab23to49SeaterImg from '../assets/23-49.webp';
import cabWalkthroughVideo from '../assets/video.mp4';
import cabVideoThumbnail from '../assets/c3.jpg'; // Your video thumbnail image

// NEW: Import your interior cab photos
import interiorPhoto1 from '../assets/c1.jpg';
import interiorPhoto2 from '../assets/c2.jpg';
import interiorPhoto3 from '../assets/c3.jpg';
import interiorPhoto4 from '../assets/c4.jpg';
import interiorPhoto5 from '../assets/c5.jpg'; // <--- NEW: Import your 5th interior image

function WhatWeOffer() {
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const playVideo = () => {
    setVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="what-we-offer-page">
      {/* Hero Section */}
      <div className="what-we-offer-hero text-white text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold mb-3">Our Diverse Fleet & Premium Services</h1>
          <p className="lead mb-4">
            Your trusted partner for comfortable, reliable, and spacious 7, 9,
            and 13-seater Maxi Cabs.
          </p>
        </Container>
      </div>

      {/* Maxi Cab Offerings Section */}
      <section className="py-5 bg-light-blue">
        <Container>
          <h2 className="text-center mb-5 fw-bold section-title">Choose Your Ideal Transportation</h2>
          <Row className="g-4 justify-content-center">
            {/* 7 Seater Maxi Cab */}
            <Col md={6} lg={4}>
              <Card className="service-card shadow-sm h-100">
                <Card.Img variant="top" src={cab7SeaterImg} alt="7 Seater Maxi Cab" />
                <Card.Body>
                  <Card.Title className="fw-bold">7 Seater Maxi Cab</Card.Title>
                  <Card.Text as="div">
                    <p>Our popular 7-seater maxi cabs provide a perfect blend of space and intimacy, suitable for medium-sized groups or families with luggage.</p>
                    <ul>
                      <li><FaUsers className="me-2 text-primary" />Capacity: Up to 7 Passengers</li>
                      <li><FaLuggageCart className="me-2 text-primary" />Generous Luggage Compartment</li>
                      <li><FaChair className="me-2 text-primary" />Plush, Comfortable Seating</li>
                      <li><FaChargingStation className="me-2 text-primary" />Convenient Charging Points</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="/online-booking">Book 7 Seater</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* 9-13 Seater Maxi Cab */}
            <Col md={6} lg={4}>
              <Card className="service-card shadow-sm h-100">
                <Card.Img variant="top" src={cab9to13SeaterImg} alt="9-13 Seater Maxi Cab" />
                <Card.Body>
                  <Card.Title className="fw-bold">9-13 Seater Maxi Cab</Card.Title>
                  <Card.Text as="div">
                    <p>Ideal for larger families, tour groups, or corporate transfers, our spacious 9 to 13-seater maxi cabs offer supreme comfort and functionality.</p>
                    <ul>
                      <li><FaUsers className="me-2 text-primary" />Capacity: 9-13 Passengers</li>
                      <li><FaLuggageCart className="me-2 text-primary" />Ample Luggage Space</li>
                      <li><FaChair className="me-2 text-primary" />Comfortable Push-back Seats</li>
                      <li><FaChargingStation className="me-2 text-primary" />Device Charging Ports</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="/online-booking">Book 9-13 Seater</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* NEW: 23-49 Seater Cab */}
            <Col md={6} lg={4}>
              <Card className="service-card shadow-sm h-100">
                <Card.Img variant="top" src={cab23to49SeaterImg} alt="23-49 Seater Cab" />
                <Card.Body>
                  <Card.Title className="fw-bold">23-49 Seater Bus Charter</Card.Title>
                  <Card.Text as="div">
                    <p>For school trips, corporate events, or large group excursions, our spacious buses ensure everyone travels together in ultimate comfort.</p>
                    <ul>
                      <li><FaUsers className="me-2 text-primary" />Capacity: 23-49 Passengers</li>
                      <li><FaLuggageCart className="me-2 text-primary" />Massive Luggage Capacity</li>
                      <li><FaChair className="me-2 text-primary" />Ergonomic & Comfortable Seats</li>
                      <li><FaChargingStation className="me-2 text-primary" />Power Outlets for Devices</li>
                      <li><FaTv className="me-2 text-primary" />Onboard Entertainment Systems</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="/contact-us">Get a Bus Quote</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NEW: Cab Interior Photo Gallery Section */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="mb-4 fw-bold section-title">Glimpse Inside Our Vehicles <FaImage className="ms-2" /></h2>
          <p className="lead mb-4">
            Explore the comfort and quality of our interiors through these high-resolution images.
          </p>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Carousel className="interior-carousel shadow-lg">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={interiorPhoto1}
                    alt="First slide - Cab Interior"
                  />
                  {/* <Carousel.Caption>
                    <h5>Spacious Seating</h5>
                    <p>Enjoy ample legroom and comfortable seating.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={interiorPhoto2}
                    alt="Second slide - Cab Interior"
                  />
                  {/* <Carousel.Caption>
                    <h5>Clean & Modern Design</h5>
                    <p>Our cabs are meticulously maintained for your pleasure.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={interiorPhoto3}
                    alt="Third slide - Cab Interior"
                  />
                  {/* <Carousel.Caption>
                    <h5>Charging Ports Available</h5>
                    <p>Keep your devices powered throughout your journey.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={interiorPhoto4}
                    alt="Fourth slide - Cab Interior"
                  />
                  {/* <Carousel.Caption>
                    <h5>Generous Luggage Space</h5>
                    <p>Travel with all your belongings stress-free.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item> {/* <--- NEW: Fifth Carousel Item */}
                  <img
                    className="d-block w-100"
                    src={interiorPhoto5}
                    alt="Fifth slide - Cab Interior"
                  />
                  {/* <Carousel.Caption>
                    <h5>Premium Comfort</h5>
                    <p>Designed for your ultimate travel experience.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                {/* Add more Carousel.Item for more photos if needed */}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cab Walkthrough Video Section - IMPROVED */}
      <section className="py-5 bg-light-gray text-center">
        <Container>
          <h2 className="mb-4 fw-bold section-title">Take a Virtual Tour <FaVideo className="ms-2" /></h2>
          <p className="lead mb-4">
            Click the image below to watch a detailed video walkthrough of our vehicles.
          </p>
          <div
            className="video-placeholder-container"
            onClick={playVideo}
            style={{ display: videoPlaying ? 'none' : 'block' }}
          >
            <img
              src={cabVideoThumbnail}
              alt="Virtual Cab Tour Thumbnail"
              className="video-thumbnail"
            />
            <div className="play-button">
              <FaVideo className="play-icon" />
            </div>
          </div>
          <div
            className="responsive-video-wrapper"
            style={{ display: videoPlaying ? 'block' : 'none' }}
          >
            <video controls className="responsive-video" ref={videoRef}>
              <source src={cabWalkthroughVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Container>
      </section>

      {/* CTA Section has been removed as requested */}

    </div>
  );
}

export default WhatWeOffer;