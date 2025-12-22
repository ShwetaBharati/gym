import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Achieving Milestones'
    },
    {
      image: 'https://images.unsplash.com/photo-1596464716127-f9a8759fa413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Growing Together'
    },
    {
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Play & Learn'
    },
    {
      image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Therapy & Fun'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="App">
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
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main 
        className="hero-section"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="hero-overlay"></div>
        
        <button className="arrow-btn left-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        
        <div className="hero-content">
          <h1>{slides[currentSlide].title}</h1>
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
          <button className="cta-button">Find Out More</button>
        </div>

        <button className="arrow-btn right-arrow" onClick={nextSlide}>
          &#10095;
        </button>
      </main>
    </div>
  );
}

export default App;
