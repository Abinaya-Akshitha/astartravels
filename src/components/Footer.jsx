// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure this CSS file is also created

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">A Star Travels Pte. Ltd.</h5>
            <p className="text-muted">
              Your premier choice for comfortable and reliable maxi cab services in Singapore.
              Available 24/7 for all your transportation needs.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/our-work" className="text-white text-decoration-none">Our Services</Link></li>
              <li><Link to="/why-us" className="text-white text-decoration-none">Why Choose Us</Link></li>
              <li><Link to="/online-booking" className="text-white text-decoration-none">Online Booking</Link></li>
              <li><Link to="/contact-us" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <FaPhone className="me-2" />
              <a href="tel:+6596237241" className="text-white text-decoration-none">+65 96237241</a>
            </p>
            <p>
              <FaWhatsapp className="me-2" />
              <a href="https://wa.me/6596237241" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">WhatsApp</a>
            </p>
            <p>
              <FaEnvelope className="me-2" />
              <a href="mailto:astartravels.sg@gmail.com" className="text-white text-decoration-none">astartravels.sg@gmail.com</a>
            </p>
          </Col>
        </Row>
        <hr className="bg-light mt-4 mb-3" />
        <div className="text-center text-muted">
          © {new Date().getFullYear()} A Star Travels Pte. Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;