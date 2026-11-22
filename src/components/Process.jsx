import React from 'react';
import { 
  Search, 
  UserCheck, 
  Home, 
  CreditCard 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Process.css';

const steps = [
  {
    number: '01',
    icon: Search,
    titleEn: 'Choose Service',
    titleHi: 'सेवा चुनें',
    descEn: 'Select from our 12+ home & office categories. Choose your shift, date, and preferred time slot.',
    descHi: 'घरेलू सहायिका, रसोइया या मरम्मत सेवा चुनें। अपनी आवश्यकतानुसार शिफ्ट और समय स्लॉट तय करें।'
  },
  {
    number: '02',
    icon: UserCheck,
    titleEn: 'Verified Pro Assigned',
    titleHi: 'सत्यापित एक्सपर्ट आवंटन',
    descEn: 'We assign a background-checked, Aadhaar and police-verified professional in Delhi-NCR.',
    descHi: 'आपकी आवश्यकतानुसार नजदीकी पुलिस व आधार सत्यापित और प्रशिक्षित विशेषज्ञ को तुरंत सौंपा जाता है।'
  },
  {
    number: '03',
    icon: Home,
    titleEn: 'Doorstep Service',
    titleHi: 'घर पर गुणवत्ता सेवा',
    descEn: 'The expert arrives on time with professional equipment, proper hygiene, and completes the work.',
    descHi: 'निश्चित समय पर विशेषज्ञ आपके घर पहुंचकर स्वच्छता और गुणवत्ता मानकों के साथ कार्य पूरा करते हैं।'
  },
  {
    number: '04',
    icon: CreditCard,
    titleEn: 'Pay After Satisfaction',
    titleHi: 'संतुष्टि के बाद भुगतान',
    descEn: 'Inspect the work and pay conveniently via UPI, Cash or Wallet with our 30-day service warranty.',
    descHi: 'कार्य से पूरी तरह संतुष्ट होने के बाद ही UPI, नकद या ऑनलाइन माध्यम से सुरक्षित भुगतान करें।'
  }
];

function Process() {
  const { language, t } = useLanguage();

  return (
    <section className="process-section-timeline" id="how-it-works">
      <div className="process-container-wrap">
        <div className="process-header-center">
          <span className="process-pill-badge">
            {t('Simple 4-Step Process', 'आसान 4 चरणों की प्रक्रिया')}
          </span>
          <h2 className="process-main-heading">
            {language === 'hi' ? (
              <>सेवा कैसे प्राप्त करें <span className="hindi-bracket">(How It Works)</span></>
            ) : (
              <>How eNeedSol Works <span className="hindi-bracket">(Simple & Fast)</span></>
            )}
          </h2>
          <p className="process-sub-heading">
            {t(
              'Booking reliable, verified help in Delhi-NCR is now effortless. Experience professional doorstep care in 4 quick steps.',
              'दिल्ली-एनसीआर में भरोसेमंद और सत्यापित घरेलू सेवाओं को बुक करना अब बेहद आसान है। बस 4 सरल चरणों में सेवा पाएं।'
            )}
          </p>
        </div>

        <div className="process-steps-row">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const title = language === 'hi' ? step.titleHi : step.titleEn;
            const desc = language === 'hi' ? step.descHi : step.descEn;

            return (
              <div className="step-card-item" key={index}>
                <div className="step-top-indicator">
                  <span className="step-num-bubble">{step.number}</span>
                  <div className="step-icon-bubble">
                    <Icon size={22} color="#ff5722" />
                  </div>
                </div>
                <h3 className="step-card-title">{title}</h3>
                <p className="step-card-desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
