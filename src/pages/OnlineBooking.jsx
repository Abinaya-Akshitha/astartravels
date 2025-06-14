// src/pages/OnlineBooking.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaLuggageCart, FaInfoCircle, FaCarSide, FaTaxi } from 'react-icons/fa'; // Icons
// IMPORTANT: Do NOT import Navbar or Footer here.
// They are rendered globally in App.jsx.
import './OnlineBooking.css'; // Don't forget to create this CSS file

// Import hero background image (ensure you have this in assets or update path)
import onlineBookingHeroBg from '../assets/men.png';

function OnlineBooking() {
  const [bookingData, setBookingData] = useState({
    serviceType: '',
    vehicleType: '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    passengers: 1,
    luggage: 0,
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    tripType: 'one-way' // 'one-way' or 'return'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this data would be sent to a backend for processing
    // (e.g., saving to database, sending confirmation emails, processing payment).
    console.log('Booking data submitted:', bookingData);

    alert('Your booking request has been sent! We will confirm details shortly.');
    // You might clear the form or redirect the user after submission
    setBookingData({ // Clear form after submission
      serviceType: '',
      vehicleType: '',
      pickupDate: '',
      pickupTime: '',
      pickupLocation: '',
      dropoffLocation: '',
      passengers: 1,
      luggage: 0,
      fullName: '',
      email: '',
      phone: '',
      specialRequests: '',
      tripType: 'one-way'
    });
  };

  return (
    <div className="online-booking-page">
      {/* Hero Section */}
      <div className="online-booking-hero text-white text-center py-5" style={{ backgroundImage: `url(${onlineBookingHeroBg})` }}>
        <Container>
          <h1 className="display-4 fw-bold mb-3">Book Your Maxi Cab</h1>
          <p className="lead mb-4">
            Experience seamless travel. Fill out the form below to reserve your ride.
          </p>
        </Container>
      </div>

      {/* Booking Form Section */}
      <section className="py-5 bg-light-blue">
        <Container>
          <h2 className="text-center mb-5 fw-bold section-title">Your Journey Details</h2>
          <Card className="booking-form-card shadow-lg p-4">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {/* Trip Type */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold"><FaInfoCircle className="me-2 text-primary" />Select Trip Type</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      id="oneWayRadio"
                      label="One-Way"
                      name="tripType"
                      value="one-way"
                      checked={bookingData.tripType === 'one-way'}
                      onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      id="returnRadio"
                      label="Return Trip"
                      name="tripType"
                      value="return"
                      checked={bookingData.tripType === 'return'}
                      onChange={handleChange}
                    />
                  </div>
                </Form.Group>

                {/* Service Type & Vehicle Type */}
                <Row className="mb-4 g-3">
                  <Col md={6}>
                    <Form.Group controlId="formServiceType">
                      <Form.Label className="fw-bold"><FaCarSide className="me-2 text-primary" />Service Type</Form.Label>
                      <Form.Select
                        name="serviceType"
                        value={bookingData.serviceType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose Service...</option>
                        <option value="airport-transfer">Airport Transfer</option>
                        <option value="point-to-point">Point-to-Point</option>
                        <option value="hourly-charter">Hourly Charter</option>
                        <option value="cross-border-malaysia">Cross-Border (to Malaysia)</option>
                        <option value="city-tour">City Tour</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formVehicleType">
                      <Form.Label className="fw-bold"><FaTaxi className="me-2 text-primary" />Vehicle Type</Form.Label>
                      <Form.Select
                        name="vehicleType"
                        value={bookingData.vehicleType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose Vehicle...</option>
                        <option value="6-seater">6 Seater Maxi Cab</option>
                        <option value="7-seater">7 Seater Maxi Cab</option>
                        <option value="13-seater">13 Seater Maxi Cab</option>
                        {/* Add other specific vehicles if applicable */}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Date & Time */}
                <Row className="mb-4 g-3">
                  <Col md={6}>
                    <Form.Group controlId="formPickupDate">
                      <Form.Label className="fw-bold"><FaCalendarAlt className="me-2 text-primary" />Pickup Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="pickupDate"
                        value={bookingData.pickupDate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPickupTime">
                      <Form.Label className="fw-bold"><FaClock className="me-2 text-primary" />Pickup Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="pickupTime"
                        value={bookingData.pickupTime}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Locations */}
                <Row className="mb-4 g-3">
                  <Col md={6}>
                    <Form.Group controlId="formPickupLocation">
                      <Form.Label className="fw-bold"><FaMapMarkerAlt className="me-2 text-primary" />Pickup Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g., Changi Airport Terminal 1"
                        name="pickupLocation"
                        value={bookingData.pickupLocation}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formDropoffLocation">
                      <Form.Label className="fw-bold"><FaMapMarkerAlt className="me-2 text-primary" />Drop-off Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g., Marina Bay Sands"
                        name="dropoffLocation"
                        value={bookingData.dropoffLocation}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Passengers & Luggage */}
                <Row className="mb-4 g-3">
                  <Col md={6}>
                    <Form.Group controlId="formPassengers">
                      <Form.Label className="fw-bold"><FaUsers className="me-2 text-primary" />Number of Passengers</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        max={bookingData.vehicleType === '6-seater' ? 6 : bookingData.vehicleType === '7-seater' ? 7 : bookingData.vehicleType === '13-seater' ? 13 : 13} // Max passengers based on vehicle type
                        name="passengers"
                        value={bookingData.passengers}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formLuggage">
                      <Form.Label className="fw-bold"><FaLuggageCart className="me-2 text-primary" />Number of Standard Luggage</Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        name="luggage"
                        value={bookingData.luggage}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        Large/oversized luggage (e.g., golf bags) require advance notice.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Contact Information */}
                <h4 className="mb-3 mt-4 fw-bold">Your Contact Information</h4>
                <Row className="mb-4 g-3">
                  <Col md={6}>
                    <Form.Group controlId="formFullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your full name"
                        name="fullName"
                        value={bookingData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Your email address"
                        name="email"
                        value={bookingData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Your contact number"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Special Requests */}
                <Form.Group controlId="formSpecialRequests" className="mb-4">
                  <Form.Label className="fw-bold"><FaInfoCircle className="me-2 text-primary" />Special Requests / Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="E.g., child seat needed, specific pickup instructions, multiple stops, oversized luggage details..."
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleChange}
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg">
                    Submit Booking Request
                  </Button>
                  <p className="text-muted mt-3">
                    By submitting, you agree to our <a href="/terms-conditions">Terms & Conditions</a>.
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Booking Process Section (Optional, explain how it works) */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="mb-4 fw-bold section-title">How Our Booking Works</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="process-step">
                <div className="step-number mb-3">1</div>
                <h5>Fill the Form</h5>
                <p>Provide your travel details and requirements.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="process-step">
                <div className="step-number mb-3">2</div>
                <h5>Receive Confirmation</h5>
                <p>We'll review your request and send a confirmation with pricing.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="process-step">
                <div className="step-number mb-3">3</div>
                <h5>Enjoy Your Ride</h5>
                <p>Your professional driver will be there on time for a comfortable journey.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section (Optional, if needed) */}
      <section className="py-4 bg-dark text-white text-center">
        <Container>
          <p className="lead mb-0">Questions about your booking? <a href="/contact-us" className="text-white fw-bold">Contact Us</a></p>
        </Container>
      </section>
    </div>
  );
}

export default OnlineBooking;