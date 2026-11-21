import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  MessageSquare, 
  Clock, 
  HeartHandshake,
  Calendar,
  PhoneCall
} from 'lucide-react';
import './HouseHelpSpotlight.css';

import cleaningImg from '../assets/service-cleaning.jpg';

export default function HouseHelpSpotlight() {
  const [selectedPlan, setSelectedPlan] = useState('fulltime');

  const plans = [
    {
      id: 'parttime',
      name: 'Part-time (4–6 घंटे)',
      price: '₹4,000 / माह',
      desc: 'Morning or Evening shift. Best for dusting, mopping, and utensils.',
      badge: 'Flexible'
    },
    {
      id: 'fulltime',
      name: 'Full-time (8 घंटे)',
      price: '₹8,500 / माह',
      desc: 'Complete domestic support: cleaning, cooking assistance, laundry & organizing.',
      badge: 'Most Popular',
      recommended: true
    },
    {
      id: 'livein',
      name: 'Live-in (रहकर)',
      price: '₹12,000 / माह',
      desc: 'Round-the-clock helper living in-house. Ideal for busy families, elderly or baby care.',
      badge: '24x7 Support'
    }
  ];

  const subServices = [
    { title: 'Maid / Housemaid', desc: 'घर की सफाई, झाड़ू-पोछा, बर्तन', icon: '🧹' },
    { title: 'Cook / Chef', desc: 'रसोई / खाना बनाने की सेवा (North & South Indian)', icon: '👩‍🍳' },
    { title: 'Baby Care / Nanny', desc: 'बच्चों की सुरक्षित व ममतामयी देखभाल', icon: '👶' },
    { title: 'Elderly Care', desc: 'वरिष्ठ नागरिक की समर्पित देखभाल व सहायता', icon: '👵' },
    { title: 'Full-time House Help', desc: '8-10 घंटे पूरा समय घरेलू सहायक', icon: '🏠' },
    { title: 'Part-time House Help', desc: 'आंशिक समय सुबह या शाम का सहायक', icon: '⏱️' },
    { title: 'Live-In House Help', desc: 'रहकर 24x7 काम करने वाली सहायक', icon: '🛌' }
  ];

  const includes = [
    'घर की सफाई (Complete Floor & Surface Mopping)',
    'बर्तन धोना (Utensils Washing & Kitchen Organizing)',
    'कपड़े धोना / इस्त्री (Laundry Washing & Ironing)',
    'हल्का खाना बनाना (वैकल्पिक) (Basic Cooking Support Optional)',
    '100% Police & Aadhar Verification Guarantee',
    'Free Replacement Option within 24 Hours'
  ];

  return (
    <section className="househelp-spotlight-section" id="house-help">
      <div className="househelp-spotlight-container">
        {/* Banner from mockup */}
        <div className="spotlight-top-banner">
          <div className="banner-left-info">
            <span className="banner-tag-pill">Specialized Care</span>
            <h2 className="banner-big-hindi">
              घर के काम के लिए <span className="highlight-warm">विश्वसनीय और प्रशिक्षित सहायक</span>
            </h2>
            <p className="banner-lead-desc">
              Finding reliable, verified domestic help is no longer stressful. eNeedSol provides 
              thoroughly vetted helpers with address verification, police verification, and a hassle-free replacement guarantee.
            </p>

            <div className="banner-trust-points">
              <div className="point-item">
                <CheckCircle2 size={16} color="#10b981" />
                <span>Verified ID & Address (सत्यापित पहचान)</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={16} color="#10b981" />
                <span>Trained & Experienced (प्रशिक्षित एवं अनुभवी)</span>
              </div>
              <div className="point-item">
                <CheckCircle2 size={16} color="#10b981" />
                <span>Replace Option Available (आसान रिप्लेसमेंट)</span>
              </div>
            </div>
          </div>

          <div className="banner-right-card">
            <div className="sample-helper-card">
              <div className="helper-card-top">
                <img src={cleaningImg} alt="Suman Devi" className="helper-card-photo" />
                <div className="helper-meta">
                  <span className="verified-status-tag">
                    <CheckCircle2 size={12} color="#059669" />
                    Verified Helper
                  </span>
                  <h3 className="helper-name">Suman Devi</h3>
                  <div className="helper-rating-line">
                    <Star size={13} color="#f59e0b" fill="#f59e0b" />
                    <b>4.8</b>
                    <span>(126 Reviews)</span>
                  </div>
                  <div className="helper-specs">
                    <span>2 Yrs Exp</span>
                    <span>•</span>
                    <span>Police Verified</span>
                  </div>
                </div>
              </div>

              <div className="helper-card-includes">
                <span className="inc-heading">Key Duties:</span>
                <p className="inc-summary">Dusting, Mopping, Utensils, Laundry & Kitchen assistance in Delhi-NCR.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Packages */}
        <div className="plans-showcase-block">
          <div className="plans-heading-center">
            <h3 className="plans-title">Choose Service Plan (सर्विस प्लान चुनें)</h3>
            <p className="plans-sub">Select the monthly duration that best fits your household needs</p>
          </div>

          <div className="plans-three-grid">
            {plans.map((plan) => {
              const active = selectedPlan === plan.id;
              return (
                <div 
                  key={plan.id}
                  className={`plan-card-item ${active ? 'active-plan' : ''} ${plan.recommended ? 'recommended-border' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.badge && (
                    <div className="plan-badge-top">{plan.badge}</div>
                  )}
                  <h4 className="plan-name-title">{plan.name}</h4>
                  <div className="plan-price-large">{plan.price}</div>
                  <p className="plan-desc-text">{plan.desc}</p>
                  
                  <div className="plan-radio-row">
                    <span className={`plan-radio-indicator ${active ? 'checked' : ''}`}>
                      {active && <span className="dot"></span>}
                    </span>
                    <span className="plan-select-lbl">{active ? 'Selected Plan' : 'Select Plan'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Checklist & CTA Row */}
          <div className="plan-footer-action-card">
            <div className="includes-checklist-col">
              <h4 className="includes-header-text">What Every Plan Includes (शामिल सुविधाएं):</h4>
              <div className="includes-grid-two">
                {includes.map((inc, idx) => (
                  <div key={idx} className="check-row-item">
                    <CheckCircle2 size={15} color="#10b981" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="action-buttons-col">
              <a href="#contact" className="btn-book-spotlight">
                <span>Book House Help Now</span>
                <ArrowRight size={16} />
              </a>
              <a 
                href="https://wa.me/919876543210?text=Hello%20eNeedSol,%20I%20am%20looking%20for%20verified%20House%20Help%20in%20Delhi-NCR." 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp-spotlight"
              >
                <MessageSquare size={16} />
                <span>Enquiry on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 7 Available House Help Services Grid */}
        <div className="all-subservices-tray">
          <h4 className="tray-title">All Available House Help Services (सभी घरेलू सेवाएं)</h4>
          <div className="subservices-pills-grid">
            {subServices.map((sub, idx) => (
              <a key={idx} href="#contact" className="subservice-pill-item">
                <span className="subservice-emoji">{sub.icon}</span>
                <div className="subservice-info">
                  <span className="sub-title">{sub.title}</span>
                  <span className="sub-desc">{sub.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
