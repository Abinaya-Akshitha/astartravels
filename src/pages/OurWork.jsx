import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBus, FaMapMarkedAlt } from 'react-icons/fa'; // Removed FaTicketAlt as the section is gone
// Removed: import Navbar from '../components/Navbar'; // No longer needed
// Removed: import Footer from '../components/Footer'; // No longer needed
import './OurWork.css'; // Custom CSS for this page

// Import your images (replace with actual paths and filenames)
import sentosaBg from '../assets/sen.webp';
import malaysiaBg from '../assets/malaysia.jpg';
import busCharterImg from '../assets/bus.webp';
// Removed: import attractionTicketsImg from '../assets/ticket.jpg'; // No longer needed
import marinabayBg from '../assets/marina.jpg';

function OurWork() {
  return (
    <>
      {/* The outer div is kept for styling consistency with our-work-page class */}
      <div className="our-work-page">
        {/* Hero Section */}
        <div className="hero-section text-white text-center py-5">
          <Container>
            <h1 className="display-4 fw-bold mb-3">Our Comprehensive Services</h1>
            <p className="lead mb-4">
              A Star Travels Pte. Ltd. is your ultimate partner for an unforgettable journey across Singapore and beyond. From thrilling city explorations to comfortable group transfers, we offer a service for every need.
            </p>
            <Button variant="outline-light" href="/online-booking" className="hero-button">
              Book Your Ride Today!
            </Button>
          </Container>
        </div>

        {/* Singapore Sightseeing Section */}
        <section id="singapore-sightseeing" className="py-5 bg-light-blue">
          <Container>
            <h2 className="text-center mb-5 fw-bold section-title">Explore Singapore with Us <FaMapMarkedAlt className="ms-2 icon-primary" /></h2>
            <p className="text-center lead mb-5">
              We will show you around Singapore's exotic places and its attractions. Experience the vibrant culture and iconic landmarks with our comfortable maxi cabs.
            </p>
            <Row className="g-4">
              <Col md={6} lg={6}>
                <Card className="service-card shadow-sm h-100">
                  <Card.Img variant="top" src={sentosaBg} alt="Sentosa Island" />
                  <Card.Body>
                    <Card.Title className="fw-bold">Sentosa Island & Resorts World</Card.Title>
                    <Card.Text>
                      Discover the fun and excitement of Sentosa, home to Universal Studios, S.E.A. Aquarium, and beautiful beaches. We provide seamless transfers to all its attractions.
                    </Card.Text>
                    <Button variant="primary" href="/online-booking">Plan Your Sentosa Trip</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={6}>
                <Card className="service-card shadow-sm h-100">
                  <Card.Img variant="top" src={marinabayBg} alt="Marina Bay Sands and Gardens by the Bay" />
                  <Card.Body>
                    <Card.Title className="fw-bold">Marina Bay & Gardens by the Bay</Card.Title>
                    <Card.Text>
                      Immerse yourself in Singapore's stunning skyline and futuristic gardens. Visit Marina Bay Sands, the ArtScience Museum, and the Supertrees.
                    </Card.Text>
                    <Button variant="primary" href="/online-booking">Discover Marina Bay</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Malaysia Sightseeing Section */}
        <section id="malaysia-sightseeing" className="py-5 bg-white">
          <Container>
            <h2 className="text-center mb-5 fw-bold section-title">Journey to Exotic Malaysia</h2>
            <p className="text-center lead mb-5">
              Extend your adventure beyond Singapore. We offer comfortable and reliable maxi cab services to Malaysia's exotic places and popular destinations.
            </p>
            <Row className="g-4 justify-content-center">
              <Col md={8}>
                <Card className="service-card shadow-sm text-center">
                  <Card.Img variant="top" src={malaysiaBg} alt="Malaysia Exotic Places" />
                  <Card.Body>
                    <Card.Title className="fw-bold">Cross-Border Travel</Card.Title>
                    <Card.Text>
                      Whether it's a day trip to Johor Bahru, exploring cultural sites, or visiting theme parks, our cross-border services ensure a hassle-free journey.
                    </Card.Text>
                    <Button variant="primary" href="/online-booking">Enquire Malaysia Trip</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Bus Charters Section */}
        <section id="bus-charters" className="py-5 bg-light-gray">
          <Container>
            <h2 className="text-center mb-5 fw-bold section-title">Comfortable Bus Charters <FaBus className="ms-2 icon-success" /></h2>
            <p className="text-center lead mb-5">
              Sometimes getting where you need to go can be more than just a job, it can be an enjoyable experience. With our Bus Charters services, that’s what we set out to do. Ideal for group outings, corporate events, and school excursions.
            </p>
            <Row className="g-4 justify-content-center">
              <Col md={8}>
                <Card className="service-card shadow-sm text-center">
                  <Card.Img variant="top" src={busCharterImg} alt="Bus Charters" />
                  <Card.Body>
                    <Card.Title className="fw-bold">Group & Event Transportation</Card.Title>
                    <Card.Text>
                      Our spacious 7, 9, and 13-seater maxi cabs are perfect for transporting groups comfortably. Enjoy ample luggage space and a smooth ride for any occasion.
                    </Card.Text>
                    <Button variant="primary" href="/contact-us">Get a Charter Quote</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Removed: Ticket Booking Section
        <section id="ticket-booking" className="py-5 bg-white">
          <Container>
            <h2 className="text-center mb-5 fw-bold section-title">Attraction Ticket Booking <FaTicketAlt className="ms-2 icon-danger" /></h2>
            <p className="text-center lead mb-5">
              Enhance your visit to Singapore's top attractions! We are able to get you tickets to popular spots at a cheaper price than general admission.
            </p>
            <Row className="g-4 justify-content-center">
              <Col md={8}>
                <Card className="service-card shadow-sm text-center">
                  <Card.Img variant="top" src={attractionTicketsImg} alt="Attraction Tickets" />
                  <Card.Body>
                    <Card.Title className="fw-bold">Discounted Tickets for Major Attractions</Card.Title>
                    <Card.Text>
                      Planning to visit Night Safari, Universal Studios, Adventure Cove, S.E.A. Aquarium, or other exciting places? Contact us for exclusive deals and cheaper ticket prices!
                    </Card.Text>
                    <Button variant="primary" href="/contact-us">Enquire About Tickets</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        */}

        {/* CTA Section */}
        <section className="cta-section text-center py-5">
          <Container>
            <h2 className="display-5 fw-bold mb-4 text-white">Your Journey Starts Here</h2>
            <p className="lead text-white mb-4">
              Ready for a comfortable, enjoyable, and hassle-free travel experience? Let A Star Travels take you there!
            </p>
            <Button variant="success" size="lg" href="/online-booking" className="me-3">
              Book Your Maxicab
            </Button>
            <Button variant="outline-light" size="lg" href="/contact-us">
              Contact Us for More Info
            </Button>
          </Container>
        </section>

      </div>
      {/* Removed: <Footer /> */}
    </>
  );
}

export default OurWork;