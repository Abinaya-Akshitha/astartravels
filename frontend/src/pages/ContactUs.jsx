// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp for a common contact method

import './ContactUs.css'; // Don't forget to create this CSS file

// Import hero background image (ensure you have this in assets or update path)
import contactUsHeroBg from '../assets/ccc.jpg';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    // For now, we'll just log it to the console.
    console.log('Form data submitted:', formData);

    alert('Your message has been sent! We will get back to you shortly.');
    setFormData({ // Clear form after submission
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // IMPORTANT: For actual email sending, you'll need a backend.
    // Options include:
    // 1. Using a service like Formspree.io (free for basic use)
    // 2. Setting up a server-side API (e.g., Node.js with Nodemailer, Python with Flask/Django)
    // 3. Using a platform's built-in forms (e.g., Netlify Forms, Vercel Forms)
  };

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <div className="contact-us-hero text-white text-center py-5" style={{ backgroundImage: `url(${contactUsHeroBg})` }}>
        <Container>
          <h1 className="display-4 fw-bold mb-3">Get in Touch With Us</h1>
          <p className="lead mb-4">
            We're here to help! Reach out to us for bookings, inquiries, or any travel assistance.
          </p>
        </Container>
      </div>

      {/* Contact Content Section (Form + Info Cards) */}
      <section className="py-5 bg-light-blue">
        <Container>
          <Row className="g-5 justify-content-center">
            {/* Contact Form Column */}
            <Col lg={7}>
              <Card className="contact-form-card shadow-lg p-4">
                <Card.Body>
                  <h2 className="mb-4 fw-bold section-title text-center">Drop Us a Line</h2>
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group controlId="formName" className="mb-3">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formEmail" className="mb-3">
                          <Form.Label>Your Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Group controlId="formPhone" className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formSubject" className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Subject of your inquiry"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="formMessage" className="mb-4">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Type your message here..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button variant="primary" type="submit" size="lg">
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Info Cards Column */}
            <Col lg={4}>
              <div className="contact-info-cards d-flex flex-column gap-4">
                {/* Phone Card */}
                <Card className="info-card shadow-sm text-center">
                  <Card.Body>
                    <FaPhoneAlt className="info-icon mb-3" />
                    <Card.Title className="fw-bold">Call Us</Card.Title>
                    <Card.Text>
                      <a href="tel:+65 96237241">+65 96237241</a> (24/7 Support)
                    </Card.Text>
                    <a href="https://wa.me/6596237241" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                      <FaWhatsapp className="me-2" />WhatsApp Us
                    </a>
                  </Card.Body>
                </Card>

                {/* Email Card */}
                <Card className="info-card shadow-sm text-center">
                  <Card.Body>
                    <FaEnvelope className="info-icon mb-3" />
                    <Card.Title className="fw-bold">Email Us</Card.Title>
                    <Card.Text>
                      <a href="mailto:astartravels.sg@gmail.com">astartravels.sg@gmail.com</a>
                    </Card.Text>
                    <Card.Text className="text-muted small">
                      We aim to respond within 24 hours.
                    </Card.Text>
                  </Card.Body>
                </Card>

                
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Embedded Map Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 fw-bold section-title">Find Us on the Map</h2>
          <div className="map-container rounded shadow-lg">
            {/* Google Maps Embed Code goes here */}
            {/* Replace the iframe src with your actual Google Maps embed for your business */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.086389658797!2d103.80879575!3d1.35039235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11b51e944439%3A0xc3457005477615b!2sSingapore!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Singapore Map"
            ></iframe>
          </div>
          <p className="text-center text-muted mt-3">
            *Note: The map shows a general location of Singapore. For precise directions, please contact us directly.
          </p>
        </Container>
      </section>

      {/* CTA Section (Optional, if not already covered by form/info) */}
      <section className="py-4 bg-primary text-white text-center">
        <Container>
          <p className="lead mb-0">Have an urgent query? Call us directly!</p>
        </Container>
      </section>
    </div>
  );
}

export default ContactUs;