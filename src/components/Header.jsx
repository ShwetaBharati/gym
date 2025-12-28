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
          <span className="logo-subtext">Pediatric Therapy </span>
        </div>
      </Link>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><a href="gallery">Gallery</a></li>
          <li><a href="/physical-therapy">Physical Therapy</a></li>
          <li><a href="/evaluation">Evaluation</a></li>
          <li><a href="/reviews">Reviews</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
