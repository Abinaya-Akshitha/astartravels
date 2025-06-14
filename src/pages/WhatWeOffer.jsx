// src/pages/WhatWeOffer.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCar, FaTv, FaWifi, FaLuggageCart, FaUsers } from 'react-icons/fa'; // Icons
// IMPORTANT: Do NOT import Navbar or Footer here.
// They are rendered globally in App.jsx.
import './WhatWeOffer.css'; // Don't forget to create this CSS file

// Import your cab images and video file
// REPLACE THESE WITH YOUR ACTUAL IMAGE AND VIDEO FILE NAMES/PATHS!
import cab7SeaterImg from '../assets/7seater.jpg'; 
import cab13SeaterImg from '../assets/13seater.jpg'; // Example: image of a 13-seater (can be same as 6-13 general)
import cab6to13SeaterImg from '../assets/6seater.jpg'; // Example: general image for 6-13 (if different from 7/13 specific)
import cabWalkthroughVideo from '../assets/video.mp4'; // YOUR VIDEO FILE HERE

function WhatWeOffer() {
  return (
    <div className="what-we-offer-page">
      {/* Hero Section */}
      <div className="what-we-offer-hero text-white text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold mb-3">Our Fleet & Services</h1>
          <p className="lead mb-4">
            Discover the perfect ride for your needs. We offer a range of comfortable and well-equipped maxi cabs for every occasion.
          </p>
        </Container>
      </div>

      {/* Maxi Cab Offerings Section */}
      <section className="py-5 bg-light-blue">
        <Container>
          <h2 className="text-center mb-5 fw-bold section-title">Choose Your Perfect Ride</h2>
          <Row className="g-4">
            {/* 6-13 Seater Maxi Cab */}
            <Col md={6} lg={4}>
              <Card className="service-card shadow-sm h-100">
                <Card.Img variant="top" src={cab6to13SeaterImg} alt="6-13 Seater Maxi Cab" />
                <Card.Body>
                  <Card.Title className="fw-bold">6-13 SEATER MAXI CAB</Card.Title>
                  <Card.Text>
                    <p>Ideal for larger groups, family outings, or corporate transfers, our spacious maxi cabs accommodate 6 to 13 passengers comfortably with ample luggage space.</p>
                    <ul>
                      <li><FaUsers className="me-2 text-primary" />Capacity: 6-13 Passengers</li>
                      <li><FaLuggageCart className="me-2 text-primary" />Large Luggage Capacity</li>
                      <li><FaCar className="me-2 text-primary" />Perfect for airport transfers, city tours, cross-border trips.</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="/online-booking">Book 6-13 Seater</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* 7 Seater Maxi Cab */}
            <Col md={6} lg={4}>
              <Card className="service-card shadow-sm h-100">
                <Card.Img variant="top" src={cab7SeaterImg} alt="7 Seater Maxi Cab" />
                <Card.Body>
                  <Card.Title className="fw-bold">7 SEATER MAXI CAB</Card.Title>
                  <Card.Text>
                    <p>Our popular 7-seater maxi cabs offer a perfect balance of space and comfort, suitable for medium-sized groups or families with extra luggage.</p>
                    <ul>
                      <li><FaUsers className="me-2 text-primary" />Capacity: Up to 7 Passengers</li>
                      <li><FaLuggageCart className="me-2 text-primary" />Comfortable Seating</li>
                      <li><FaCar className="me-2 text-primary" />Great for local commutes, shopping trips, special events.</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="/online-booking">Book 7 Seater</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* 6 Seater Maxi Cab */}
            <Col md={6} lg={4}>
              <Card className="service-card shadow-sm h-100">
                <Card.Img variant="top" src={cab6to13SeaterImg} alt="6 Seater Maxi Cab" /> {/* Using same image as 6-13 for now */}
                <Card.Body>
                  <Card.Title className="fw-bold">6 SEATER MAXI CAB</Card.Title>
                  <Card.Text>
                    <p>For smaller groups or executive travel, our 6-seater maxi cabs provide a cozy yet spacious environment, ensuring a relaxed journey.</p>
                    <ul>
                      <li><FaUsers className="me-2 text-primary" />Capacity: Up to 6 Passengers</li>
                      <li><FaCar className="me-2 text-primary" />Executive comfort.</li>
                      <li><FaLuggageCart className="me-2 text-primary" />Ideal for business travel or intimate groups.</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" href="/online-booking">Book 6 Seater</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cab Walkthrough Video Section */}
      <section className="py-5 bg-light-gray text-center">
        <Container>
          <h2 className="mb-4 fw-bold section-title">Take a Virtual Tour of Our Cabs</h2>
          <p className="lead mb-4">
            See for yourself the comfort and features of our maxi cabs.
          </p>
          <div className="video-container">
            <video controls width="100%" height="auto" src={cabWalkthroughVideo}>
              Your browser does not support the video tag.
            </video>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Ready for a Premium Travel Experience?</h2>
          <Button variant="light" size="lg" href="/online-booking">Book Your Maxi Cab Now</Button>
        </Container>
      </section>
    </div>
  );
}

export default WhatWeOffer;