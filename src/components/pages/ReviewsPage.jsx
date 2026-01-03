import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
import review1 from "../../images/scroller-04.avif";
import review2 from "../../images/scroller-04.avif";
import review3 from "../../images/scroller-04.avif";
import review4 from "../../images/scroller-04.avif";
import review5 from "../../images/scroller-04.avif";
import review6 from "../../images/scroller-04.avif";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    quote: "The progress we've seen in just 3 months is incredible! Our son went from barely walking to running confidently.",
    rating: 5,
    avatar: review1
  },
  {
    id: 2,
    name: "David L.",
    quote: "Best decision we ever made. The therapists are amazing with kids and the gym environment is perfect.",
    rating: 5,
    avatar: review2
  },
  {
    id: 3,
    name: "Emily R.",
    quote: "My daughter's speech has improved dramatically. The group classes are also fantastic for socialization.",
    rating: 5,
    avatar: review3
  },
  {
    id: 4,
    name: "Michael K.",
    quote: "Professional, caring staff. They really understand each child's unique needs and create tailored programs.",
    rating: 5,
    avatar: review4
  },
  {
    id: 5,
    name: "Lisa T.",
    quote: "Love the family-friendly atmosphere. My twins look forward to therapy every week!",
    rating: 5,
    avatar: review5
  },
  {
    id: 6,
    name: "Robert P.",
    quote: "Outstanding results with our son's motor skills. Highly recommend to any parent!",
    rating: 5,
    avatar: review6
  }
];

const ReviewsPage = () => {
  return (
    <div className="reviews-page">

      {/* top banner */}
      <section className="reviews-hero">
        <div className="reviews-hero-overlay" />
        <h1 className="reviews-hero-title">Reviews</h1>
      </section>

      {/* intro */}
      <section className="reviews-intro">
        <div className="reviews-intro-inner">
          <h2>What Parents Are Saying</h2>
          <p>
            Don't just take our word for it. Hear from families who've experienced 
            the More Than A Gym difference firsthand.
          </p>
        </div>
      </section>

      {/* reviews grid - ServicesPage jaisa clickable */}
      <section className="reviews-grid">
        <div className="reviews-grid-inner">
          {reviews.map((review) => (
            <article key={review.id} className="review-row">
              <Link to="/services" className="review-row-image">
                <img src={review.avatar} alt={review.name} />
              </Link>
              <div className="review-row-text">
                <div className="review-header">
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <h3>{review.name}</h3>
                </div>
                <p className="review-quote">"{review.quote}"</p>
                <Link to="/services" className="review-link">Read More →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reviews-cta">
        <h2>Ready to experience the difference?</h2>
        <a href="/contact" className="reviews-cta-button">Schedule Consultation</a>
      </section>
    </div>
  );
};

export default ReviewsPage;
