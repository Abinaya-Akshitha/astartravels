// src/components/NavigationBar.jsx
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Navbar, Nav, Container } from 'react-bootstrap';
// No specific useEffect needed here for this functionality, but it's fine if it was there before.

function NavigationBar() {
  const location = useLocation(); // Get the current location object

  // Function to handle navigation link clicks
  const handleNavLinkClick = (e, path, sectionId) => {
    // If the current path is '/' (homepage) AND a sectionId is provided
    if (location.pathname === '/' && sectionId) {
      e.preventDefault(); // Prevent the default Link navigation (which would reload the page)
      const targetElement = document.getElementById(sectionId); // Find the section by its ID
      if (targetElement) {
        // Scroll smoothly into view, aligning the top of the section with the top of the viewport
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // If not on the homepage, or if it's a regular route without a sectionId,
    // let the <Link> component handle the navigation normally.
  };

  // Utility function to close the expanded Navbar on mobile after a link click
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    // Check if the toggler exists and if the navbar is currently expanded (not 'collapsed')
    if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
      navbarToggler.click(); // Simulate a click to close the navbar
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect> {/* collapseOnSelect helps close on mobile */}
      <Container>
        <Navbar.Brand as={Link} to="/">A Star Travels Pte.Ltd</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Home link: scrolls to top of hero section if on home, otherwise navigates to / */}
            <Nav.Link as={Link} to="/" onClick={(e) => { handleNavLinkClick(e, '/', 'home-hero'); closeNavbar(); }}>Home</Nav.Link>

            {/* Other links: scroll to section if on home, otherwise navigate to dedicated page */}
            <Nav.Link as={Link} to="/our-work" onClick={(e) => { handleNavLinkClick(e, '/our-work', 'ourWork'); closeNavbar(); }}>Our Work</Nav.Link>
            <Nav.Link as={Link} to="/why-us" onClick={(e) => { handleNavLinkClick(e, '/why-us', 'whyUs'); closeNavbar(); }}>Why Us</Nav.Link>
            <Nav.Link as={Link} to="/what-we-offer" onClick={(e) => { handleNavLinkClick(e, '/what-we-offer', 'whatWeOffer'); closeNavbar(); }}>What We Offer</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={(e) => { handleNavLinkClick(e, '/contact-us', 'contactUs'); closeNavbar(); }}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/online-booking" onClick={(e) => { handleNavLinkClick(e, '/online-booking', 'onlineBooking'); closeNavbar(); }}>Online Booking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;