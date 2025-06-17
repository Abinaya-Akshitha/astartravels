// src/App.jsx
import React, { useRef } from 'react'; // Import useRef
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Your components
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import WhyUs from './pages/WhyUs';
import WhatWeOffer from './pages/WhatWeOffer';
import ContactUs from './pages/ContactUs';
import OnlineBooking from './pages/OnlineBooking';

function AppContent() {
  const location = useLocation();
  const nodeRef = useRef(null); // Create a ref for the page-wrapper div

  return (
    <>
      <NavigationBar />

      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="page-slide"
          timeout={500}
          unmountOnExit
          nodeRef={nodeRef} // Pass the ref here
        >
          {/*
            This div is critical. It acts as the actual element that will be
            animated for each page. Each page component will be rendered inside it.
            It needs specific styling (position: absolute, full height, etc.)
            which we'll define in the CSS.
          */}
          <div ref={nodeRef} className="page-wrapper"> {/* Attach the ref to the div */}
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/what-we-offer" element={<WhatWeOffer />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/online-booking" element={<OnlineBooking />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      {/* Assuming you have a Footer component rendered globally */}
      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;