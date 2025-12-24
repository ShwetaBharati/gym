import React, { useState, useEffect } from 'react';
import './../App.css';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">WE HOPE THERAPY</h3>
          <p className="footer-description">
            Pediatric Therapy & Play Gym dedicated to helping children achieve their milestones in a fun and supportive environment.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Contact Us</h4>
          <p className="footer-contact-info">123 Therapy Lane, Wellness City</p>
          <p className="footer-contact-info">Phone: (555) 123-4567</p>
          <p className="footer-contact-info">Email: info@wehopetherapy.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} We Hope Therapy & Play Gym. All rights reserved.</p>
        <button 
          onClick={scrollToTop} 
          className={`footer-back-to-top ${showButton ? 'show' : ''}`}
        >
          Back to Top {'\u2191'}
        </button>
      </div>
    </footer>
  );
}

export default Footer;