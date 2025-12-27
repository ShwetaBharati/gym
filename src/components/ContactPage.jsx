import React from "react";
import "./../App.css";

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
        <div className="contact-form-column">
          <h2 className="contact-section-title">Get In Touch</h2>

          <form className="contact-form">
            <div className="contact-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <textarea placeholder="Message" rows="6" />

            {/* simple captcha row */}
            <div className="contact-captcha-row">
              <span>15 + 7 =</span>
              <input type="text" />
            </div>

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-info-column">
          <h2 className="contact-section-title">Our Locations</h2>
          <p>Plainview: 245 Newtown Road, Ste 102...</p>

          <h3>Contact Info</h3>
          <p>Phone: 516.802.2518</p>
          <p>Email: info@morethanagym.com</p>

          <h3>Follow Us</h3>
          <p>Facebook · Instagram · YouTube · TikTok</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
