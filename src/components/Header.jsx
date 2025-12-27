import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="App-header">
      <div className="logo-container">
        <div className="logo-box">
          <span className="logo-text-small">WE</span>
          <span className="logo-text-large">HOPE</span>
          <span className="logo-text-small">THERAPY</span>
          <span className="logo-subtext">Pediatric Therapy & Play Gym</span>
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ's</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#group-classes">Group Classes</a></li>
          <li><a href="#intensive-therapy">Intensive Therapy</a></li>
          <li><a href="#food-school">Food School</a></li>
          <li><a href="#sensory-bus">Sensory Bus</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
