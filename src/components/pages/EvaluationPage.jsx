import React from "react";
import "./../../App.css";

const EvaluationPage = () => {
  return (
    <div className="evaluation-page">

      {/* top banner */}
      <section className="eval-hero">
        <div className="eval-hero-overlay" />
        <h1 className="eval-hero-title">Evaluation</h1>
      </section>

      {/* intro + benefits */}
      <section className="eval-intro">
        <div className="eval-intro-inner">
          <h2>Comprehensive Pediatric Evaluations</h2>
          <p>
            Our comprehensive evaluations provide a detailed assessment of your child's 
            developmental progress, identifying strengths, areas for growth, and creating 
            personalized therapy recommendations tailored to their unique needs.
          </p>

          <h3>Benefits of Early Evaluation</h3>
          <ul className="eval-benefits-list">
            <li>Early identification of developmental delays</li>
            <li>Baseline measurements for progress tracking</li>
            <li>Personalized therapy recommendations</li>
            <li>Clear understanding of your child's needs</li>
            <li>Insurance and program eligibility guidance</li>
          </ul>
        </div>
      </section>

      {/* evaluation process */}
      <section className="eval-process">
        <div className="eval-process-inner">
          <h2>Our Evaluation Process</h2>
          
          <div className="eval-process-grid">
            <div className="eval-process-step">
              <div className="eval-step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>Parent interview and developmental history</p>
            </div>
            <div className="eval-process-step">
              <div className="eval-step-number">2</div>
              <h3>Observation & Assessment</h3>
              <p>Direct observation and standardized testing</p>
            </div>
            <div className="eval-process-step">
              <div className="eval-step-number">3</div>
              <h3>Comprehensive Report</h3>
              <p>Detailed findings and recommendations</p>
            </div>
            <div className="eval-process-step">
              <div className="eval-step-number">4</div>
              <h3>Results Conference</h3>
              <p>Review results and plan next steps</p>
            </div>
          </div>
        </div>
      </section>

      {/* what to expect */}
      <section className="eval-expect">
        <div className="eval-expect-inner">
          <h2>What to Expect</h2>
          <ul>
            <li>60-90 minute evaluation session</li>
            <li>Play-based, child-friendly assessment</li>
            <li>Parent participation encouraged</li>
            <li>No special preparation required</li>
            <li>Results available within 1 week</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="eval-cta">
        <h2>Schedule Your Child's Evaluation Today</h2>
        <a href="/contact" className="eval-cta-button">Book Evaluation</a>
      </section>
    </div>
  );
};

export default EvaluationPage;
