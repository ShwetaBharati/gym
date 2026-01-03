import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
import image1 from "../../images/services-02.jpg";
import image2 from "../../images/services-3.jpg";

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
    title: "Evaluation",
    img: image2,
    text:
      "Evaluationtherapy supports independence with activities of daily living, fine‑motor skills, sensory processing, visual‑motor integration and school readiness."
  },
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
          {services.map((service) => {
            const slug = service.title.toLowerCase().replace(/\s+/g, '-');
            const linkTo = service.id === 1 ? '/physical-therapy' : `/services/${slug}`;
            return(
            <article key={service.id} className="service-row">
              <Link to={linkTo} className="service-row-image">
                <img src={service.img} alt={service.title} />
              </Link>
              <div className="service-row-text">
                <Link to={linkTo}>
                  <h3>{service.title}</h3>
                </Link>
                <p>{service.text}</p>
              </div>
            </article>
          )})}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
