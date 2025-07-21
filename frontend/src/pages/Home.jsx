// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import singaporeBg from '../assets/background.jpg';
import logo from '../assets/logo.png'; // Make SURE this matches your transparent main logo filename (e.g., logo.png)
import twentyFourHoursLogo from '../assets/24.png'; // Import your new 24/7 logo image
import { FaWhatsapp, FaPhoneAlt, FaBolt } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

// IMPORT ALL THESE PAGE COMPONENTS to be used as sections
import OurWork from './OurWork';
import WhyUs from './WhyUs';
import WhatWeOffer from './WhatWeOffer';
import ContactUs from './ContactUs';
import OnlineBooking from './OnlineBooking';

function Home() {
  const location = useLocation();
  const sectionRefs = {
    homeHero: useRef(null),
    ourWork: useRef(null),
    whyUs: useRef(null),
    whatWeOffer: useRef(null),
    contactUs: useRef(null),
    onlineBooking: useRef(null),
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const targetRef = sectionRefs[id];

      if (targetRef && targetRef.current) {
        setTimeout(() => {
          targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location, sectionRefs]);

  return (
    <div className="home-container">
      <section id="home-hero" ref={sectionRefs.homeHero} className="home-page" style={{ backgroundImage: `url(${singaporeBg})` }}>
        <div className="overlay">
          <div className="content text-center text-white">
            {/* A Star Travels Pte.Ltd branding with logo */}
            <Fade direction="down" triggerOnce delay={0}>
              <div className="brand-header mb-4">
                <img src={logo} alt="A Star Travels Logo" className="brand-logo" />
                <h2 className="brand-name">A Star Travels Pte.Ltd</h2>
              </div>
            </Fade>

            <Fade direction="down" triggerOnce delay={200}>
              <h1 className="display-3 fw-bold mb-4">
                Seamless Maxi Cab Services in Singapore
              </h1>
              <p className="lead mb-5">
                Your trusted partner for comfortable, reliable, and spacious 6, 7, 9, 13, 23 and 49-seater Maxi Cabs.
              </p>
            </Fade>

            <Fade direction="up" triggerOnce delay={500}>
              <div className="features mb-5">
                {/* MODIFIED: 24/7 Availability with your custom image AND text */}
                <div className="service-24-7-combo">
                  <img src={twentyFourHoursLogo} alt="24 Hours Service" className="service-24-7-image" />
                  <span className="service-24-7-text">24 Hours Service</span>
                </div>
                {/* MODIFIED: "We Reach You Within 15 Minutes!" (New attractive style) */}
                <h3>
                  <span className="badge-15min-attractive">
                    <FaBolt className="me-2" /> WE REACH YOU WITHIN 15 MINUTES!
                  </span>
                </h3>
              </div>
            </Fade>

            <Fade direction="up" triggerOnce delay={1000}>
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

      {/* Other sections remain unchanged */}
      <Fade direction="up" triggerOnce>
        <section id="ourWork" ref={sectionRefs.ourWork} className="page-section">
          <OurWork />
        </section>
      </Fade>

      <Fade direction="up" triggerOnce>
        <section id="whyUs" ref={sectionRefs.whyUs} className="page-section bg-light">
          <WhyUs />
        </section>
      </Fade>

      <Fade direction="up" triggerOnce>
        <section id="whatWeOffer" ref={sectionRefs.whatWeOffer} className="page-section">
          <WhatWeOffer />
        </section>
      </Fade>

      <Fade direction="up" triggerOnce>
        <section id="contactUs" ref={sectionRefs.contactUs} className="page-section bg-light">
          <ContactUs />
        </section>
      </Fade>

      <Fade direction="up" triggerOnce>
        <section id="onlineBooking" ref={sectionRefs.onlineBooking} className="page-section">
          <OnlineBooking />
        </section>
      </Fade>
    </div>
  );
}

export default Home;