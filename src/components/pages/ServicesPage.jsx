import React from "react";
import "./../../App.css";
import image1 from "../../images/services-02.jpg";
import image2 from "../../images/services-3.jpg";
import image3 from "../../images/services-1.avif";
import image4 from "../../images/services-4.webp";

// services image data array

const services = [
  {
    id: 1,
    title: "Physical Therapy",
    img: image1,
    text:
      "Pediatric physical therapy services address posture and motor control, balance, strength and endurance to support safe movement and participation in everyday activities."
  },
  {
    id: 2,
    title: "Occupational Therapy",
    img: image2,
    text:
      "Occupational therapy supports independence with activities of daily living, fine‑motor skills, sensory processing, visual‑motor integration and school readiness."
  },
  {
    id: 3,
    title: "Speech Therapy",
    img: image3,
    text:
      "Speech therapy focuses on articulation, language development, social communication and feeding skills to help children communicate and participate more confidently."
  },
  {
    id: 4,
    title: "Group Classes",
    img: image4,
    text:
      "Group Classes provide guidance on healthy eating habits, meal planning, and dietary needs to support overall growth and development."
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page">

      {/* top banner */}
      <section className="services-hero">
        <div className="services-hero-overlay" />
        <h1 className="services-hero-title">Services</h1>
      </section>

      {/* intro text */}
      <section className="services-intro">
        <div className="services-intro-inner">
          <h2>About Our Services</h2>
          <p>
            More Than A Gym treats each child as a whole, combining medical, community,
            home and school perspectives to create a well‑rounded and customized plan.
          </p>
          <p>
            Our physical, occupational and speech therapy services are highly specialized
            and based on the latest evidence to support every child&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* list of services: circle + text */}
      <section className="services-list">
        <div className="services-list-inner">
          {services.map((service) => (
            <article key={service.id} className="service-row">
              <div className="service-row-image">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-row-text">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
