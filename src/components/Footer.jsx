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
            Pediatric Therapy dedicated to helping children achieve their milestones in a fun and supportive environment.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Contact Us</h4>
          <p className="footer-contact-info">123 Therapy Lane, Wellness City</p>
          <p className="footer-contact-info">Phone: (555) 123-4567</p>
          <p className="footer-contact-info">Email: info@wehopetherapy.com</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02s10-4.5 10-10.02C22 6.53 17.5 2.04 12 2.04zm3.6 5.44h-2.1c-.55 0-.6.25-.6.6v.9h2.6l-.4 2.5h-2.2v6.6h-2.6V11.5H9V9h2.1V7.8c0-2.1 1.2-3.3 3.2-3.3h1.8v2.5z"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.7 1.03-.78-.84-1.9-1.36-3.12-1.36-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.48-.37.63-.58 1.37-.58 2.15 0 1.48.76 2.79 1.9 3.55-.7-.02-1.37-.21-1.95-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.14.15-.27 0-.54-.03-.8-.08.54 1.7 2.12 2.94 4 2.97-1.46 1.14-3.3 1.83-5.3 1.83-.34 0-.68-.02-1.02-.06C3.44 19.88 5.7 20.5 8.12 20.5c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.99-2.06z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2c-2.72 0-3.05.01-4.12.06-1.06.05-1.8.22-2.45.48-.65.25-1.14.58-1.64 1.08s-.83 1-1.08 1.64c-.26.65-.43 1.39-.48 2.45C2.01 8.95 2 9.28 2 12s.01 3.05.06 4.12c.05 1.06.22 1.8.48 2.45.25.65.58 1.14 1.08 1.64s1 .83 1.64 1.08c.65.26 1.39.43 2.45.48 1.07.05 1.4.06 4.12.06s3.05-.01 4.12-.06c1.06-.05 1.8-.22 2.45-.48.65-.25 1.14-.58 1.64-1.08s.83-1 1.08-1.64c.26-.65.43-1.39.48-2.45.05-1.07.06-1.4.06-4.12s-.01-3.05-.06-4.12c-.05-1.06-.22-1.8-.48-2.45-.25-.65-.58-1.14-1.08-1.64s-1-.83-1.64-1.08c-.65-.26-1.39-.43-2.45-.48C15.05 2.01 14.72 2 12 2zm0 1.8c2.62 0 2.92.01 3.95.06 1.02.05 1.58.21 1.9.34.42.16.7.35.98.63.28.28.47.56.63.98.13.32.29.88.34 1.9.05 1.03.06 1.33.06 3.95s-.01 2.92-.06 3.95c-.05 1.02-.21 1.58-.34 1.9-.16.42-.35.7-.63.98-.28.28-.56.47-.98.63-.32.13-.88.29-1.9.34-1.03.05-1.33.06-3.95.06s-2.92-.01-3.95-.06c-1.02-.05-1.58-.21-1.9-.34-.42-.16-.7-.35-.98-.63-.28-.28-.47-.56-.63-.98-.13-.32-.29-.88-.34-1.9-.05-1.03-.06-1.33-.06-3.95s.01-2.92.06-3.95c.05-1.02.21-1.58.34-1.9.16-.42.35-.7.63-.98.28-.28.56-.47.98-.63.32-.13.88-.29 1.9-.34C9.08 3.81 9.38 3.8 12 3.8zm0 3.35c-2.3 0-4.15 1.85-4.15 4.15S9.7 16.3 12 16.3s4.15-1.85 4.15-4.15S14.3 7.15 12 7.15zm0 6.8c-1.47 0-2.65-1.18-2.65-2.65S10.53 9.3 12 9.3s2.65 1.18 2.65 2.65-1.18 2.65-2.65 2.65zm6.3-6.9c-.6 0-1.08.48-1.08 1.08s.48 1.08 1.08 1.08 1.08-.48 1.08-1.08-.48-1.08-1.08-1.08z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p><span className="footer-year">&copy; {new Date().getFullYear()}</span> We Hope Play Therapy. All rights reserved.</p>
        <button 
          onClick={scrollToTop} 
          className={`footer-back-to-top ${showButton ? 'show' : ''}`}
        >
         {'\u2191'}
        </button>
      </div>
    </footer>
  );
}

export default Footer;