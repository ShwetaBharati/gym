import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta-wrapper">
      <h2 className="contact-cta-heading">We&apos;d Love To Hear From You</h2>
      <Link to="/contact" className="contact-cta-button">
        CONTACT US
      </Link>
    </section>
  );
};

export default ContactCTA;
