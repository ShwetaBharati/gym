import React from "react";
import "./../../App.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* top banner image + heading */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <h1 className="contact-hero-title">Contact Us</h1>
      </section>

      {/* bottom white area */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-form-column card">
            <h2 className="contact-section-title">Get In Touch</h2>

            <form className="contact-form">
              <fieldset>
                <div className="contact-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Your message" rows="6" />
                </div>

                <button type="submit" className="glowing-btn">Send Message</button>
              </fieldset>
            </form>
          </div>

          <div className="contact-info-column card">
            <h2 className="contact-section-title">Our Locations</h2>
            <div className="location-info">
              <h3>Plainview</h3>
              <p>245 Newtown Road, Ste 102<br/>Plainview, NY 11803</p>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.392324318768!2d-73.475555084595!3d40.7932199793228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2810b6a3b3b3f%3A0x8de3e4e24683defe!2s245%20Newtown%20Rd%2C%20Plainview%2C%20NY%2011803%2C%20USA!5e0!3m2!1sen!2sin!4v1620211333333!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>

            <h3 className="contact-info-heading">Contact Info</h3>
            <p><strong>Phone:</strong> 516.802.2518</p>
            <p><strong>Email:</strong> info@morethantherapy.com</p>

            <h3 className="contact-info-heading">Follow Us</h3>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
