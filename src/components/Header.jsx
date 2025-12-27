import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="App-header">
      <Link to="/" className="logo-container">
        <div className="logo-box">
          <span className="logo-text-small">WE</span>
          <span className="logo-text-large">HOPE</span>
          <span className="logo-text-small">THERAPY</span>
          <span className="logo-subtext">Pediatric Therapy & Play Gym</span>
        </div>
      </Link>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ's</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#group-classes">Group Classes</a></li>
          <li><a href="#intensive-therapy">Intensive Therapy</a></li>
          <li><a href="#food-school">Food School</a></li>
          <li><a href="#sensory-bus">Sensory Bus</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
