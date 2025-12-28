import React from "react";
import "./../App.css"; 
import image1 from "../images/services-02.jpg";
import image2 from "../images/services-3.jpg";
import image3 from "../images/services-1.avif";
import image4 from "../images/services-4.webp";

// services image data array
const servicesData = [
  {
    id: 1,
    title: "Physical Therapy",
     img: image1,
     link: "/services",
  },
  {
    id: 2,
    title: "Occupational Therapy",
    img: image2,
    link: "/services",
  },
  {
    id: 3,
    title: "Speech Therapy",
    img: image3,
    link: "/services",
  },
  {
    id: 4,
    title: "Group Classes",
    img: image4,
    link: "/services",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-wrapper">
      {servicesData.map((service) => (
        <div key={service.id} className="service-card">
          <div className="service-image-wrapper">
            <img href={service.link}
              src={service.img}
              alt={service.title}
              className="service-image"
            />
          </div>
          <a href={service.link} className="service-title">{service.title}</a>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
