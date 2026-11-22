import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Heart
} from 'lucide-react';
import './Footer.css';

import logoImg from '../assets/logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top 4 Columns */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#" className="footer-brand-link">
              <img
                src={logoImg}
                alt="eNeedSol — Digital Solutions That Drive Results"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-tagline-text">
              Delhi-NCR's premier doorstep home, office, and business maintenance services platform.
              Background-checked, police-verified helpers and certified technicians with 100% satisfaction guarantee.
            </p>

            <div className="footer-direct-contact">
              <div className="footer-contact-row">
                <Phone size={14} color="#ff5722" />
                <span>Helpline: +91 92893 28063</span>
              </div>
              <div className="footer-contact-row">
                <Mail size={14} color="#ff5722" />
                <span>Email: support@eneedsol.in</span>
              </div>
              <div className="footer-contact-row">
                <MapPin size={14} color="#ff5722" />
                <span>Delhi • Noida • Gurugram • Faridabad • Ghaziabad</span>
              </div>
            </div>
          </div>

          {/* 12 Categories List Column 1 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Home & House Help</h4>
            <ul className="footer-nav-list">
              <li><a href="#house-help">House Help (घरेलू सहायक)</a></li>
              <li><a href="#house-help">Maid / Housemaid</a></li>
              <li><a href="#house-help">Cook & Chef Services</a></li>
              <li><a href="#house-help">Baby Care & Nanny</a></li>
              <li><a href="#house-help">Elderly Care Assistant</a></li>
              <li><a href="#services">Cleaning (सफाई सेवा)</a></li>
              <li><a href="#services">Deep Home Cleaning</a></li>
            </ul>
          </div>

          {/* 12 Categories List Column 2 */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Repair & Maintenance</h4>
            <ul className="footer-nav-list">
              <li><a href="#services">Home Repair (घर की मरम्मत)</a></li>
              <li><a href="#services">Appliance Repair (उपकरण मरम्मत)</a></li>
              <li><a href="#services">Electrician (इलेक्ट्रीशियन)</a></li>
              <li><a href="#services">Plumber (प्लंबर)</a></li>
              <li><a href="#services">Carpenter (कारपेंटर)</a></li>
              <li><a href="#services">Painter (पेंटर)</a></li>
              <li><a href="#services">AC Service (एसी सर्विस)</a></li>
              <li><a href="#services">RO Service (आरओ सर्विस)</a></li>
            </ul>
          </div>

          {/* Quick Links & Coverage */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">About eNeedSol</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">Why eNeedSol</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Customer Reviews</a></li>
              <li><a href="#about">Police Verification Process</a></li>
              <li><a href="#about">Replacement Guarantee</a></li>
              <li><a href="#contact">Book a Service</a></li>
              <li><a href="#contact">Become a Partner Pro</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} <b>eNeedSol®</b> (eneedsol.in) — Digital Solutions That Drive Results. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Verified Trust & Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
