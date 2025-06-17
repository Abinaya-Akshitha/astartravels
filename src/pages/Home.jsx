// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import { useLocation } from 'react-router-dom'; // Import useLocation
import './Home.css';
import singaporeBg from '../assets/background.jpg'; // Your background image
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Icons for buttons
import { Fade } from 'react-awesome-reveal'; // IMPORT THIS for scroll animations

// IMPORT ALL THESE PAGE COMPONENTS to be used as sections
import OurWork from './OurWork';
import WhyUs from './WhyUs';
import WhatWeOffer from './WhatWeOffer';
import ContactUs from './ContactUs';
import OnlineBooking from './OnlineBooking'; // Import OnlineBooking now!

function Home() {
  const location = useLocation();
  const sectionRefs = { // Define refs for all sections you want to scroll to
    homeHero: useRef(null), // Ref for the initial hero section
    ourWork: useRef(null),
    whyUs: useRef(null),
    whatWeOffer: useRef(null),
    contactUs: useRef(null),
    onlineBooking: useRef(null), // Ref for OnlineBooking section
  };

  useEffect(() => {
    // This effect runs when the component mounts or location.hash changes
    // It handles scrolling to a specific section if the URL has a hash (e.g., #ourWork)
    if (location.hash) {
      const id = location.hash.substring(1); // Remove '#' from the hash
      const targetRef = sectionRefs[id]; // Get the corresponding ref

      if (targetRef && targetRef.current) {
        // Use setTimeout to ensure the section is fully rendered before trying to scroll
        setTimeout(() => {
          targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // A small delay usually works well
      }
    }
  }, [location, sectionRefs]); // Depend on location and sectionRefs

  return (
    <div className="home-container"> {/* A single container for all sections */}
      {/* 1. Hero Section (Your existing Home page content) */}
      <section id="home-hero" ref={sectionRefs.homeHero} className="home-page" style={{ backgroundImage: `url(${singaporeBg})` }}>
        <div className="overlay">
          <div className="content text-center text-white">
            <Fade direction="down" triggerOnce> {/* Fade animation for hero main text */}
              <h1 className="display-3 fw-bold mb-4">
                Seamless Maxi Cab Services in Singapore
              </h1>
              <p className="lead mb-5">
                Your trusted partner for comfortable, reliable, and spacious 7, 9, and 13-seater Maxi Cabs.
              </p>
            </Fade>
            <Fade direction="up" triggerOnce delay={500}> {/* Delayed fade for features */}
              <div className="features mb-5">
                <p className="fs-4 fw-bold text-warning mb-2">
                  Available 24/7 – Anytime, Anywhere!
                </p>
                <h3>
                  <span className="badge bg-light text-dark p-3">We Reach You Within 15 Minutes!</span>
                </h3>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={1000}> {/* Delayed fade for buttons */}
              <div className="buttons">
                <a href="https://wa.me/6596237241" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg me-3">
                  <FaWhatsapp className="me-2" /> WhatsApp Now
                </a>
                <a href="tel:+6596237241" className="btn btn-primary btn-lg">
                  <FaPhoneAlt className="me-2" /> Call to Book
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* 2. Our Work Section - Now a scrollable part of Home */}
      <Fade direction="up" triggerOnce> {/* Vertical slide-in animation */}
        <section id="ourWork" ref={sectionRefs.ourWork} className="page-section">
          <OurWork />
        </section>
      </Fade>

      {/* 3. Why Us Section - Now a scrollable part of Home */}
      <Fade direction="up" triggerOnce>
        <section id="whyUs" ref={sectionRefs.whyUs} className="page-section bg-light"> {/* Using bg-light for alternating background */}
          <WhyUs />
        </section>
      </Fade>

      {/* 4. What We Offer Section - Now a scrollable part of Home */}
      <Fade direction="up" triggerOnce>
        <section id="whatWeOffer" ref={sectionRefs.whatWeOffer} className="page-section">
          <WhatWeOffer />
        </section>
      </Fade>

      {/* 5. Contact Us Section - Now a scrollable part of Home */}
      <Fade direction="up" triggerOnce>
        <section id="contactUs" ref={sectionRefs.contactUs} className="page-section bg-light">
          <ContactUs />
        </section>
      </Fade>

      {/* 6. Online Booking Section - NEWLY ADDED as the last scrollable part */}
      <Fade direction="up" triggerOnce>
        <section id="onlineBooking" ref={sectionRefs.onlineBooking} className="page-section">
          <OnlineBooking />
        </section>
      </Fade>
    </div>
  );
}

export default Home;