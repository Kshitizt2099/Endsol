import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Testimonials.css';

const testimonials = [
  {
    quoteEn: "Finding a full-time verified maid in Noida Sector 62 was a constant headache until eNeedSol. Suman Devi has been punctual, polite, and her cooking is great. The police verification gave our family complete peace of mind.",
    quoteHi: "नोएडा सेक्टर 62 में भरोसेमंद और वेरिफाइड सहायिका मिलना बहुत मुश्किल था, लेकिन eNeedSol ने यह आसान कर दिया। सुमन देवी समय की बहुत पाबंद हैं और उनका खाना भी बहुत स्वादिष्ट है। पुलिस वेरिफिकेशन से हमें पूरा भरोसा मिला।",
    name: 'Shakti Singh',
    location: 'Noida, Sector 62',
    serviceEn: 'Full-time House Help',
    serviceHi: 'फुल-टाइम घरेलू सहायिका',
    avatar: 'SS',
    rating: 5,
  },
  {
    quoteEn: "My AC stopped cooling in peak June heat. Booked through eNeedSol at 10 AM, and Ramesh Kumar arrived by 11:30 AM with proper jet equipment. Fixed the gas leak and charged exactly what was shown in the app. Truly professional!",
    quoteHi: "जून की भीषण गर्मी में मेरा एसी खराब हो गया था। eNeedSol से सुबह 10 बजे बुक किया और रमेश कुमार 11:30 बजे जेट पंप लेकर आ गए। गैस लीकेज ठीक कर दी और ऐप में दिख रही तय राशि ही ली। बहुत शानदार सेवा!",
    name: 'Pooja Aggarwal',
    location: 'Gurugram, DLF Phase 5',
    serviceEn: 'AC Service & Repair',
    serviceHi: 'एसी सर्विस व रिपेयर',
    avatar: 'PA',
    rating: 5,
  },
  {
    quoteEn: "We hired a part-time cook and deep cleaning service for Diwali. The team was well-trained, used eco-friendly chemicals, and left the entire home spotless. Best home service experience in Delhi-NCR.",
    quoteHi: "हमने दिवाली के लिए पार्ट-टाइम कुक और डीप क्लीनिंग सेवा ली। टीम पूरी तरह ट्रेंड थी और उन्होंने पूरा घर चमका दिया। दिल्ली-एनसीआर में यह सबसे बेहतरीन अनुभव रहा।",
    name: 'Vikas Mehra',
    location: 'Delhi, Dwarka Sector 12',
    serviceEn: 'Deep Cleaning & Cook',
    serviceHi: 'डीप क्लीनिंग व कुक',
    avatar: 'VM',
    rating: 5,
  },
];

function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section className="testimonials-section-brand" id="testimonials">
      <div className="testimonials-container-wrap">
        <div className="testimonials-header-center">
          <span className="testimonials-pill-tag">
            {t('Customer Stories', 'ग्राहकों के अनुभव')}
          </span>
          <h2 className="testimonials-heading-title">
            {language === 'hi' ? (
              <>दिल्ली-एनसीआर के परिवारों का अनुभव <span className="hindi-rating-bracket">(Real Reviews)</span></>
            ) : (
              <>What Families in Delhi-NCR Say <span className="hindi-rating-bracket">(Real Reviews)</span></>
            )}
          </h2>
          <p className="testimonials-desc-text">
            Over 2,800+ households across Delhi , Noida, Gurgaon & Faridabad rely on eNeedSol every single day.
          </p>
        </div>

        <div className="testimonials-cards-grid">
          {testimonials.map((tItem, index) => {
            const quote = language === 'hi' ? tItem.quoteHi : tItem.quoteEn;
            const service = language === 'hi' ? tItem.serviceHi : tItem.serviceEn;

            return (
              <div className="review-card" key={index}>
                <div className="review-rating-stars">
                  {[...Array(tItem.rating)].map((_, i) => (
                    <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                <p className="review-text-content">"{quote}"</p>

                <div className="review-author-bar">
                  <div className="author-avatar-initials">{tItem.avatar}</div>
                  <div className="author-meta-text">
                    <div className="author-name-row">
                      <span className="author-real-name">{tItem.name}</span>
                      <span className="verified-buyer-pill">
                        {t('✓ Verified Client', '✓ सत्यापित ग्राहक')}
                      </span>
                    </div>
                    <div className="author-location-row">
                      <MapPin size={12} color="#64748b" />
                      <span>{tItem.location}</span>
                      <span className="bullet-sep">•</span>
                      <span className="author-service-tag">{service}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
