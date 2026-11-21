import React from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  Clock, 
  IndianRupee, 
  CheckCircle2 
} from 'lucide-react';
import './About.css';

function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Police & ID Verified',
      titleHi: 'सत्यापित पहचान',
      desc: 'Mandatory Aadhaar card and local police background verification for every service professional.'
    },
    {
      icon: RotateCcw,
      title: 'Free Replacement Guarantee',
      titleHi: 'आसान रिप्लेसमेंट',
      desc: 'Not satisfied with your house help or technician? We provide an immediate free replacement within 24 hours.'
    },
    {
      icon: Clock,
      title: 'Guaranteed On-Time Service',
      titleHi: 'समय पर सेवा',
      desc: 'Punctual arrival with live tracking and slot management across Delhi, Noida, Gurgaon & Faridabad.'
    },
    {
      icon: IndianRupee,
      title: 'Transparent Pricing',
      titleHi: 'पारदर्शी दरें',
      desc: 'Fixed rate cards with zero hidden charges. Pay online or cash only after the work is completed.'
    }
  ];

  return (
    <section className="about-section-brand" id="about">
      <div className="about-container-inner">
        <div className="about-header-wrap">
          <span className="section-badge-orange">Why Choose eNeedSol</span>
          <h2 className="about-main-title">
            Your Trusted Home & Business Service Partner{' '}
            <span className="title-hindi">(विश्वसनीय सेवा का भरोसा)</span>
          </h2>
          <p className="about-lead-para">
            eNeedSol was created to eliminate the daily hassle of finding reliable maids, plumbers, 
            electricians, and repair technicians. We bring safety, quality standards, and digital accountability to 
            your doorstep across Delhi-NCR.
          </p>
        </div>

        <div className="about-grid-four">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="about-feature-box">
                <div className="about-icon-circle">
                  <Icon size={24} color="#ff5722" />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <span className="feature-box-hindi">{item.titleHi}</span>
                <p className="feature-box-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Verified Security Strip */}
        <div className="about-security-strip">
          <div className="sec-strip-text">
            <h4>Safety & Training Standard</h4>
            <p>Every domestic helper and technician goes through a 3-day training module on hygiene, behavioral etiquette, and professional service tools.</p>
          </div>
          <div className="sec-strip-badges">
            <span className="sec-badge">✓ 100% Police Verified</span>
            <span className="sec-badge">✓ 30-Day Service Warranty</span>
            <span className="sec-badge">✓ Standardized Equipment</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
