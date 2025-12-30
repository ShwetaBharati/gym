import React from "react";
import "./../../App.css";

const PhysicalTherapyPage = () => {
  return (
    <div className="physical-therapy-page">

      {/* top banner */}
      <section className="pt-hero">
        <div className="pt-hero-overlay" />
        <h1 className="pt-hero-title">Physical Therapy</h1>
      </section>

      {/* intro + benefits */}
      <section className="pt-intro">
        <div className="pt-intro-inner">
          <h2>Pediatric Physical Therapy</h2>
          <p>
            Our pediatric physical therapists work with children of all ages and 
            abilities to improve gross motor skills, strength, balance, coordination, 
            and endurance for safe participation in everyday activities.
          </p>

          <h3>Benefits of Physical Therapy</h3>
          <ul className="pt-benefits-list">
            <li>Improved posture and motor control</li>
            <li>Enhanced balance and coordination</li>
            <li>Increased strength and endurance</li>
            <li>Better mobility and functional movement</li>
            <li>Age-appropriate gross motor development</li>
          </ul>
        </div>
      </section>

      {/* treatment areas */}
      <section className="pt-areas">
        <div className="pt-areas-inner">
          <h2>Treatment Areas</h2>
          
          <div className="pt-areas-grid">
            <div className="pt-area-card">
              <h3>Developmental Delays</h3>
              <p>Support for children not meeting motor milestones</p>
            </div>
            <div className="pt-area-card">
              <h3>Neurological Conditions</h3>
              <p>Cerebral palsy, Down syndrome, muscular dystrophy</p>
            </div>
            <div className="pt-area-card">
              <h3>Orthopedic Issues</h3>
              <p>Torticollis, scoliosis, post-surgery rehabilitation</p>
            </div>
            <div className="pt-area-card">
              <h3>Sports Injuries</h3>
              <p>Injury prevention and rehabilitation for young athletes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-cta">
        <h2>Ready to Get Started?</h2>
        <a href="/contact" className="pt-cta-button">Schedule a Free Consultation</a>
      </section>
    </div>
  );
};

export default PhysicalTherapyPage;
