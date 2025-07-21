// src/pages/WhyUs.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShieldAlt, FaThumbsUp, FaClock, FaStar, FaMoneyBillWave, FaSmile } from 'react-icons/fa';
// IMPORTANT: Do NOT import Navbar or Footer here.
// They are rendered globally in App.jsx.
import './WhyUs.css'; // Don't forget to create this CSS file

function WhyUs() {
  return (
    <div className="why-us-page">
      {/* Hero Section */}
      <div className="why-us-hero text-white text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold mb-3">Why Choose A Star Travels?</h1>
          <p className="lead mb-4">
            Experience the difference with Singapore's leading maxi cab service. Your comfort, safety, and satisfaction are our top priorities.
          </p>
        </Container>
      </div>

      {/* Features/Value Proposition Section */}
      <section className="py-5 bg-light-blue">
        <Container>
          <h2 className="text-center mb-5 fw-bold section-title">Our Commitment to You</h2>
          <Row className="g-4">
            {/* Feature 1: Reliability */}
            <Col md={6} lg={4}>
              <Card className="feature-card shadow-sm h-100 text-center">
                <Card.Body>
                  <FaClock className="feature-icon mb-3" />
                  <Card.Title className="fw-bold">Punctual & Reliable</Card.Title>
                  <Card.Text>
                    We value your time. Our drivers are always on schedule, ensuring you reach your destination promptly and without hassle.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Feature 2: Comfort */}
            <Col md={6} lg={4}>
              <Card className="feature-card shadow-sm h-100 text-center">
                <Card.Body>
                  <FaThumbsUp className="feature-icon mb-3" />
                  <Card.Title className="fw-bold">Superior Comfort</Card.Title>
                  <Card.Text>
                    Travel in spacious and meticulously maintained maxi cabs. Enjoy a smooth, relaxing ride whether it's for business or leisure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Feature 3: Safety */}
            <Col md={6} lg={4}>
              <Card className="feature-card shadow-sm h-100 text-center">
                <Card.Body>
                  <FaShieldAlt className="feature-icon mb-3" />
                  <Card.Title className="fw-bold">Your Safety, Our Priority</Card.Title>
                  <Card.Text>
                    Our professional drivers are highly experienced and our vehicles undergo regular safety checks to ensure a secure journey.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Feature 4: Customer Service */}
            <Col md={6} lg={4}>
              <Card className="feature-card shadow-sm h-100 text-center">
                <Card.Body>
                  <FaSmile className="feature-icon mb-3" />
                  <Card.Title className="fw-bold">Exceptional Service</Card.Title>
                  <Card.Text>
                    From booking to drop-off, our friendly team is dedicated to providing personalized and responsive customer support 24/7.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Feature 5: Value */}
            <Col md={6} lg={4}>
              <Card className="feature-card shadow-sm h-100 text-center">
                <Card.Body>
                  <FaMoneyBillWave className="feature-icon mb-3" />
                  <Card.Title className="fw-bold">Competitive Pricing</Card.Title>
                  <Card.Text>
                    Enjoy premium service without the premium price tag. We offer transparent and competitive rates for all our services.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            
          </Row>
        </Container>
      </section>

      {/* Testimonials or CTA (Optional) */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="fw-bold mb-4">Ready to experience the A Star Difference?</h2>
          <p className="lead mb-4">
            Book your maxi cab with us today and enjoy a seamless journey.
          </p>
          <a href="/online-booking" className="btn btn-primary btn-lg">Book Now</a>
        </Container>
      </section>
    </div>
  );
}

export default WhyUs;