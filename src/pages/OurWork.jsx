import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBus, FaMapMarkedAlt } from 'react-icons/fa';
import './OurWork.css';

// Import your images (replace with actual paths and filenames)
import sentosaBg from '../assets/sen.webp';
import malaysiaBg from '../assets/malaysia.jpg';
import busCharterImg from '../assets/bus.webp';
import marinabayBg from '../assets/marina.jpg';
// NEW: Import image for Bird Paradise & Singapore Zoo
import birdParadiseZooImg from '../assets/zoo.jpg'; // <--- IMPORTANT: Ensure this path and filename are correct

function OurWork() {
  return (
    <>
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
              {/* MODIFIED: Column sizes for 3 cards per row (lg={4} for large screens, md={6} for medium screens) */}
              <Col md={6} lg={4}>
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
              {/* MODIFIED: Column sizes for 3 cards per row */}
              <Col md={6} lg={4}>
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
              {/* NEW: Bird Paradise & Singapore Zoo Card */}
              {/* MODIFIED: Column sizes for 3 cards per row */}
              <Col md={6} lg={4}>
                <Card className="service-card shadow-sm h-100">
                  <Card.Img variant="top" src={birdParadiseZooImg} alt="Bird Paradise and Singapore Zoo" />
                  <Card.Body>
                    <Card.Title className="fw-bold">Bird Paradise & Singapore Zoo</Card.Title>
                    <Card.Text>
                      Explore the wonders of wildlife at Singapore Zoo and the vibrant avian world at Bird Paradise. Our maxi cabs offer comfortable transfers for a full day of animal encounters.
                    </Card.Text>
                    <Button variant="primary" href="/online-booking">Visit the Wildlife Parks</Button>
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
                      Our spacious6, 7, 9, 13, 23 and 49-seater maxi cabs are perfect for transporting groups comfortably. Enjoy ample luggage space and a smooth ride for any occasion.
                    </Card.Text>
                    <Button variant="primary" href="/contact-us">Get a Charter Quote</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

      </div>
    </>
  );
}

export default OurWork;