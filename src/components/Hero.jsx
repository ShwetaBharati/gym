import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import image1 from '../images/scroller-01.jpeg';
import image2 from '../images/scroller-03.jpg';
import image3 from '../images/scroller-04.avif';
import image4 from '../images/scroller-05.avif';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // slider images and titles
  const slides = [
    {
      title: 'Achieving Milestones',
      img: image1,
      // image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Growing Together',
      img: image2,
      // image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Play & Learn',
      img: image3,
      // image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Therapy & Fun',
      img: image4,
      // image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    }
  ];

  // slider functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Minimum distance (in px) to trigger a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touch end to prevent firing on tap
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // auto play and pause on hover effects
  useEffect(() => {
    // slider auto play effects
    // const slideInterval = setInterval(nextSlide, 5000);
    // return () => clearInterval(slideInterval);
    // slider pause on hover effects
    if (!isPaused) {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }
  });

  return (
    <section 
      className="hero-section" 
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        ></div>
      ))}

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
        <Link to="/services" className="cta-button">Find Out More</Link>
      </div>

      <button className="arrow-btn right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
}

export default Hero;
