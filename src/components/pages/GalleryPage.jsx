import React from "react";
import "./../../App.css";
import image1 from "../../images/services-01.webp";
import image2 from "../../images/services-3.jpg";
import image3 from "../../images/services-03.jpg";
import image4 from "../../images/services-04.avif";
import image5 from "../../images/services-5.jpg";
import image6 from "../../images/services-02.jpg";
import image7 from "../../images/scroller-04.avif";
import image8 from "../../images/scroller-01.jpeg";

// gallery image data array

const galleryImages = [
  {
    id: 1,
    img: image1,
    alt: "Kids playing",
  },
  {
    id: 2,
    img: image2,
    alt: "Therapy session",
  },
  {
    id: 3,
    img: image3,
    alt: "Group activity",
  },
  {
    id: 4,
    img: image4,
    alt: "Therapy equipment",
  },
  {
    id: 5,
    img: image5,
    alt: "Sensory play",
  },
  {
    id: 6,
    img: image6,
    alt: "Physical therapy",
  },
  {
    id: 7,
    img: image7,
    alt: "Fun learning",
  },
  {
    id: 8,
    img: image8,
    alt: "Team activity",
  },
];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {/* top banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay" />
        <h1 className="gallery-hero-title">Gallery</h1>
      </section>

      {/* intro text */}
      <section className="gallery-intro">
        <div className="gallery-intro-inner">
          <h2>Our Happy Moments</h2>
          <p>
            Take a look at some of the fun activities and therapy sessions
            happening at More Than A Gym. Every moment counts!
          </p>
        </div>
      </section>

      {/* image grid */}
      <section className="gallery-grid">
        <div className="gallery-grid-inner">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.img} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
