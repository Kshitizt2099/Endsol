import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Star, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

import heroImg from '../assets/hero-banner.jpg';
import helperThumb from '../assets/service-cleaning.jpg';

function Hero({ onSearchCategory }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { language, t } = useLanguage();

  const quickSearches = [
    'Maid / Housemaid',
    'Cook / Chef',
    'Baby Care & Nanny',
    'Full-time House Help',
    'Deep Cleaning',
    'AC Service'
  ];

  return (
    <section className="hero-section-main" id="home">
      <div className="hero-container">
        {/* Left Column: Headings & Search */}
        <div className="hero-left-content">
          <div className="hero-pill-badge">
            <Sparkles size={14} color="#ff5722" />
            <span>
              {t(
                "Delhi-NCR's #1 Trusted Home & Office Platform",
                'दिल्ली-एनसीआर का #1 विश्वसनीय घरेलू व ऑफिस सेवा प्लेटफॉर्म'
              )}
            </span>
          </div>

          <h1 className="hero-hindi-heading">
            {language === 'hi' ? (
              <>
                आपके घर, ऑफिस और बिजनेस की सभी सेवाएं{' '}
                <span className="hero-highlight-orange">एक ही प्लेटफॉर्म पर</span>
              </>
            ) : (
              <>
                All Home, Office & Business Services{' '}
                <span className="hero-highlight-orange">On One Platform</span>
              </>
            )}
          </h1>

          <p className="hero-tagline-sub">
            {t(
              'From verified house maids, cooks, and nannies to electricians, plumbers, and AC repair technicians — we provide professional, police-verified, and background-checked services right to your doorstep.',
              'सत्यापित घरेलू सहायिका, रसोइया, नैनी से लेकर इलेक्ट्रीशियन, प्लंबर और एसी रिपेयर तक — सभी अनुभवी और पुलिस-वेरिफाइड सेवाएं सीधे आपके घर पर।'
            )}
          </p>

          {/* Search Box */}
          <div className="hero-search-box-wrap">
            <div className="hero-search-bar">
              <Search size={20} color="#94a3b8" className="search-lead-icon" />
              <input 
                type="text" 
                placeholder={t(
                  'What service do you need? (e.g. Maid, Cook, AC Service, Plumber...)',
                  'आपको कौन-सी सेवा चाहिए? (जैसे: नौकरानी, खाना बनाने वाली, एसी सर्विस...)'
                )} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="hero-search-input"
              />
              <button className="voice-mic-btn" aria-label="Voice Search" title="Speak to search">
                <Mic size={18} color="#ff5722" />
              </button>
              <a href="#services" className="hero-search-btn">
                <span>{t('Search', 'खोजें')}</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Quick search tags */}
            <div className="quick-search-tags">
              <span className="quick-label">{t('Popular:', 'लोकप्रिय:')}</span>
              {quickSearches.map((tag, i) => (
                <a key={i} href="#services" className="quick-tag-pill">
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* 3 Core Trust Badges from the mockup image */}
          <div className="hero-three-badges">
            <div className="badge-box">
              <div className="badge-icon-wrap">
                <CheckCircle2 size={18} color="#10b981" />
              </div>
              <div className="badge-text-wrap">
                <span className="badge-title">
                  {t('Verified Experts', 'सत्यापित विशेषज्ञ')}
                </span>
                <span className="badge-sub">
                  {t('100% ID & Police Checked', 'पहचान व पुलिस जांच संपन्न')}
                </span>
              </div>
            </div>

            <div className="badge-box">
              <div className="badge-icon-wrap">
                <ShieldCheck size={18} color="#10b981" />
              </div>
              <div className="badge-text-wrap">
                <span className="badge-title">
                  {t('Safe & Trusted', 'सुरक्षित और विश्वसनीय')}
                </span>
                <span className="badge-sub">
                  {t('Free 24h Replacement', 'मुफ्त 24 घंटे में रिप्लेसमेंट')}
                </span>
              </div>
            </div>

            <div className="badge-box">
              <div className="badge-icon-wrap">
                <Clock size={18} color="#10b981" />
              </div>
              <div className="badge-text-wrap">
                <span className="badge-title">
                  {t('On-time Service', 'समय पर सेवा')}
                </span>
                <span className="badge-sub">
                  {t('Punctual & Reliable', 'नियमित व भरोसेमंद समय')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Graphic */}
        <div className="hero-right-visual">
          <div className="hero-image-frame">
            <img 
              src={heroImg} 
              alt="eNeedSol Happy Family and Verified Helper" 
              className="hero-main-banner-img"
            />

            {/* Floating Card 1: Verified Partner */}
            <div className="floating-badge-card card-top-left">
              <img src={helperThumb} alt="Suman Devi" className="floating-avatar" />
              <div className="floating-card-info">
                <div className="floating-title-row">
                  <span className="floating-name">Suman Devi</span>
                  <span className="verified-tiny-tag">✓ Verified</span>
                </div>
                <span className="floating-role">
                  {t('House Help & Cook', 'घरेलू सहायिका व कुक')}
                </span>
                <div className="floating-star-row">
                  <Star size={12} color="#f59e0b" fill="#f59e0b" />
                  <span>4.8 (126 Reviews)</span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Satisfaction & Delivery */}
            <div className="floating-badge-card card-bottom-right">
              <div className="stat-circle-green">✓</div>
              <div>
                <span className="floating-stat-num">50,000+</span>
                <span className="floating-stat-lbl">
                  {t('Jobs Done in Delhi-NCR', 'सफल सेवाएं')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Row */}
      <div className="hero-stats-band">
        <div className="stats-inner-container">
          <div className="hero-stat-block">
            <span className="stat-big-num">2,864+</span>
            <span className="stat-sub-text">
              {t('Happy Customers in NCR', 'संतुष्ट परिवार')}
            </span>
          </div>
          <div className="stat-vert-divider"></div>

          <div className="hero-stat-block">
            <span className="stat-big-num">1,248+</span>
            <span className="stat-sub-text">
              {t('Verified Technicians & Pros', 'सत्यापित कारीगर व विशेषज्ञ')}
            </span>
          </div>
          <div className="stat-vert-divider"></div>

          <div className="hero-stat-block">
            <span className="stat-big-num">536+</span>
            <span className="stat-sub-text">
              {t('Trained House Help Partners', 'प्रशिक्षित घरेलू सहायक')}
            </span>
          </div>
          <div className="stat-vert-divider"></div>

          <div className="hero-stat-block">
            <span className="stat-big-num">4.9 ★</span>
            <span className="stat-sub-text">
              {t('Average Service Rating', 'औसत ग्राहक रेटिंग')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
