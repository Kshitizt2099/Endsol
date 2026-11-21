import React from 'react';
import { Star, MapPin } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Finding a full-time verified maid in Noida Sector 62 was a constant headache until eNeedSol. Suman Devi has been punctual, polite, and her cooking is great. The police verification gave our family complete peace of mind.",
    name: 'Shakti Singh',
    location: 'Noida, Sector 62',
    service: 'Full-time House Help',
    avatar: 'SS',
    rating: 5,
  },
  {
    quote: "My AC stopped cooling in peak June heat. Booked through eNeedSol at 10 AM, and Ramesh Kumar arrived by 11:30 AM with proper jet equipment. Fixed the gas leak and charged exactly what was shown in the app. Truly professional!",
    name: 'Pooja Aggarwal',
    location: 'Gurugram, DLF Phase 5',
    service: 'AC Service & Repair',
    avatar: 'PA',
    rating: 5,
  },
  {
    quote: "We hired a part-time cook and deep cleaning service for Diwali. The team was well-trained, used eco-friendly chemicals, and left the entire home spotless. Best home service experience in Delhi-NCR.",
    name: 'Vikas Mehra',
    location: 'Delhi, Dwarka Sector 12',
    service: 'Deep Cleaning & Cook',
    avatar: 'VM',
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section-brand" id="testimonials">
      <div className="testimonials-container-wrap">
        <div className="testimonials-header-center">
          <span className="testimonials-pill-tag">Customer Stories</span>
          <h2 className="testimonials-heading-title">
            What Families in Delhi-NCR Say{' '}
            <span className="hindi-rating-bracket">(ग्राहकों का अनुभव)</span>
          </h2>
          <p className="testimonials-desc-text">
            Over 2,800+ households across Delhi , Noida, Gurgaon & Faridabad rely on eNeedSol every single day.
          </p>
        </div>

        <div className="testimonials-cards-grid">
          {testimonials.map((t, index) => (
            <div className="review-card" key={index}>
              <div className="review-rating-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>

              <p className="review-text-content">"{t.quote}"</p>

              <div className="review-author-bar">
                <div className="author-avatar-initials">{t.avatar}</div>
                <div className="author-meta-text">
                  <div className="author-name-row">
                    <span className="author-real-name">{t.name}</span>
                    <span className="verified-buyer-pill">✓ Verified Client</span>
                  </div>
                  <div className="author-location-row">
                    <MapPin size={12} color="#64748b" />
                    <span>{t.location}</span>
                    <span className="bullet-sep">•</span>
                    <span className="author-service-tag">{t.service}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
