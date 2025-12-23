// src/components/ServicesSection.jsx
import React from "react";
import "./../App.css"; // adjust path if needed

const servicesData = [
  {
    id: 1,
    title: "Physical Therapy",
    img: "/images/physical.jpg", // put your image in public/images
  },
  {
    id: 2,
    title: "Occupational Therapy",
    img: "/images/occupational.jpg",
  },
  {
    id: 3,
    title: "Speech Therapy",
    img: "/images/speech.jpg",
  },
  {
    id: 4,
    title: "Group Classes",
    img: "/images/group.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-wrapper">
      {servicesData.map((service) => (
        <div key={service.id} className="service-card">
          <div className="service-image-wrapper">
            <img
              src={service.img}
              alt={service.title}
              className="service-image"
            />
          </div>
          <p className="service-title">{service.title}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
