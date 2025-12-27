import React from "react";
import "./../../App.css";

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* top banner */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <h1 className="about-hero-title">About Us</h1>
      </section>

      {/* middle text section */}
      <section className="about-main">
        <div className="about-main-inner">
          <h2>We Are Family Friendly</h2>
          <p>
            More Than A Gym is a unique, completely family friendly environment...
          </p>

          <h2>We Are State-of-the-Art</h2>
          <p>
            Our gym features a fully equipped gross motor and sensory gym...
          </p>

          <h2>We Are Dedicated</h2>
          <p>
            Our team strives to provide the most dedicated resource of knowledge...
          </p>
        </div>
      </section>

      {/* bottom bio section */}
      <section className="about-bio">
        <div className="about-bio-inner">
          <div className="about-bio-photo">
            <img src="/images/founder.jpg" alt="Founder" />
          </div>
          <div className="about-bio-text">
            <h2>Bio</h2>
            <p>
              More Than A Gym, Pediatric Therapy and Play Gym was founded by...
            </p>
            <p>
              She specializes in pediatric therapy, sensory integration and group classes...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
