import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Menu,
  X,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

import logoImg from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Delhi-NCR');
  const { language, toggleLanguage, t } = useLanguage();

  const cities = ['Delhi-NCR', 'Noida', 'Gurugram', 'Faridabad', 'Ghaziabad'];

  return (
    <header className="site-navbar">
      {/* Top micro bar for location, language and support */}
      <div className="navbar-top-strip">
        <div className="top-strip-inner">
          <div className="strip-left">
            <span className="trust-pill">
              <ShieldCheck size={13} color="#10b981" />
              {t(
                '100% Verified Experts & Background Checked',
                '100% सत्यापित और बैकग्राउंड चेक किए गए विशेषज्ञ'
              )}
            </span>
          </div>

          <div className="strip-right">
            {/* Language Switcher Toggle */}
            <button
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              title={language === 'en' ? 'Switch to Hindi (हिन्दी)' : 'Switch to English'}
            >
              <Globe size={13} color="#fbd38d" />
              <span className="lang-label">
                {language === 'en' ? 'हिन्दी (HI)' : 'English (EN)'}
              </span>
            </button>

            <div className="location-dropdown-wrap">
              <MapPin size={13} color="#ff5722" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="city-selector"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <a href="tel:+919312081077" className="top-phone-link">
              <Phone size={12} />
              <span>+91 93120 81077</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar-main">
        <div className="navbar-container">
          {/* Official Brand Logo */}
          <a href="#" className="navbar-logo-link">
            <img
              src={logoImg}
              alt="eNeedSol — Digital Solutions That Drive Results"
              className="navbar-brand-logo-img"
            />
          </a>

          {/* Nav Links */}
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                {t('Services', 'सेवाएं')}
              </a>
            </li>
            <li>
              <a href="#house-help" onClick={() => setMenuOpen(false)}>
                {t('House Help', 'घरेलू सहायक')}
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
                {t('How It Works', 'कैसे काम करता है')}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                {t('Why eNeedSol', 'eNeedSol क्यों?')}
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                {t('Reviews', 'समीक्षाएं')}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t('Contact', 'संपर्क')}
              </a>
            </li>
            <li className="mobile-only-cta">
              <a href="#contact" className="btn-book-nav" onClick={() => setMenuOpen(false)}>
                {t('Book a Service', 'सेवा बुक करें')}
              </a>
            </li>
          </ul>

          {/* Right CTA */}
          <div className="nav-actions">
            {/* Quick Lang Pill in main bar */}
            <button
              className="nav-lang-pill"
              onClick={toggleLanguage}
            >
              <Globe size={13} />
              <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            <a
              href="https://wa.me/919312081077?text=Hello%20eNeedSol,%20I%20would%20like%20to%20book%20a%20service."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-nav"
            >
              <MessageSquare size={14} />
              <span>WhatsApp</span>
            </a>

            <a href="#contact" className="btn-book-nav">
              <Calendar size={15} />
              <span>{t('Book a Service', 'सेवा बुक करें')}</span>
            </a>

            <button
              className="mobile-hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
