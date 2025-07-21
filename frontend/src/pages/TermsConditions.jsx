// src/pages/TermsConditions.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TermsConditions.css'; // Don't forget to create this CSS file

function TermsConditions() {
  return (
    <div className="terms-conditions-page">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="text-center mb-4 fw-bold">Terms & Conditions</h1>
            <p className="lead text-center mb-5">
              Please read these terms and conditions carefully before using our booking services.
            </p>

            <section className="mb-4">
              <h2 className="mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using our online booking platform, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">2. Service Description</h2>
              <p>
                Our service provides an online platform for booking maxi cab services in Singapore. We act as an intermediary between you and independent third-party transport providers. We do not own, operate, or control the vehicles or the drivers.
              </p>
              <p>
                Specific services include: Airport Transfers, Point-to-Point journeys, Hourly Charters, Cross-Border trips to Malaysia, and City Tours.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">3. Booking Process</h2>
              <ul>
                <li><strong>Accuracy of Information:</strong> You are responsible for ensuring the accuracy of all booking details provided, including dates, times, pickup/drop-off locations, passenger count, and contact information. Inaccurate information may lead to delays, additional charges, or cancellation of your booking without refund.</li>
                <li><strong>Confirmation:</strong> All bookings are subject to confirmation. You will receive an email or message confirmation once your booking is accepted and processed.</li>
                <li><strong>Pricing:</strong> Prices quoted are estimates and may vary based on factors such as surcharges (e.g., late-night, public holiday), additional stops, or changes to the itinerary. Final pricing will be confirmed upon booking acceptance.</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">4. Payments</h2>
              <p>
                Payment terms will be communicated upon booking confirmation. Depending on the service, payment may be required in advance, upon arrival, or via other agreed methods.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">5. Cancellations and Refunds</h2>
              <p>
                Cancellation policies vary based on the service type and notice period.
              </p>
              <ul>
                <li>Cancellations made less than [e.g., 24 hours] before pickup time may incur a cancellation fee or be non-refundable.</li>
                <li>No-shows will be charged the full booking amount.</li>
                <li>For specific cancellation details, please refer to your booking confirmation or contact us directly.</li>
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">6. Passenger and Luggage Capacity</h2>
              <p>
                The number of passengers and luggage should adhere to the vehicle type selected. Oversized or excessive luggage may require a larger vehicle or incur additional charges. We reserve the right to refuse service if capacity limits are exceeded or if luggage poses a safety hazard.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">7. Conduct of Passengers</h2>
              <p>
                Passengers are expected to conduct themselves in a respectful manner. Any damage to the vehicle caused by passengers will be charged to the passenger. Smoking, consumption of alcohol, or illegal activities are strictly prohibited in the vehicles.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">8. Limitation of Liability</h2>
              <p>
                While we strive to provide reliable service, we are not liable for delays or failures caused by circumstances beyond our control, including but not limited to traffic congestion, accidents, extreme weather, breakdowns, or acts of God. Our liability for any direct loss is limited to the amount paid for the service.
              </p>
            </section>


            <section className="mb-4">
              <h2 className="mb-3">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Singapore, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to amend these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the service constitutes your acceptance of the revised terms.
              </p>
            </section>

            <p className="text-muted text-center mt-5">
              Last updated: June 24, 2025
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TermsConditions;