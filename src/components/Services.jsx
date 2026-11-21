import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

// The exact house help & home service categories requested
const servicesList = [
  {
    id: 'maid',
    icon: '🧹',
    titleEn: 'Maid / Housemaid',
    titleHi: 'घर की सफाई (झाड़ू-पोछा, बर्तन)',
    descEn: 'Daily sweeping, mopping, dusting, utensil cleaning and kitchen hygiene.',
    descHi: 'घर की दैनिक सफाई, झाड़ू-पोछा, बर्तन धोना और किचन की साफ-सफाई।',
    featuresEn: ['Daily Floor Mopping', 'Utensil Washing', 'Dusting & Organizing', 'Police Verified'],
    featuresHi: ['दैनिक पोछा व सफाई', 'बर्तन धोना', 'डस्टिंग व रखरखाव', 'पुलिस द्वारा सत्यापित'],
    startingPriceEn: 'Starts ₹4,000/mo',
    startingPriceHi: '₹4,000 / माह से शुरू',
    color: '#FF5722',
    badgeEn: 'Popular',
    badgeHi: 'लोकप्रिय'
  },
  {
    id: 'cook',
    icon: '👩‍🍳',
    titleEn: 'Cook / Chef',
    titleHi: 'रसोई / खाना बनाने की सेवा',
    descEn: 'Hygienic, delicious home-cooked North & South Indian meals, breakfast & dinner.',
    descHi: 'घर का स्वादिष्ट और पौष्टिक भोजन (उत्तर व दक्षिण भारतीय), नाश्ता व रात का खाना।',
    featuresEn: ['North & South Indian', 'Healthy & Clean Cooking', 'Flexible Timings', 'Trained Cooks'],
    featuresHi: ['स्वादिष्ट घरेलू भोजन', 'स्वच्छता का पूरा ध्यान', 'सुविधाजनक समय', 'अनुभवी रसोइया'],
    startingPriceEn: 'Starts ₹4,500/mo',
    startingPriceHi: '₹4,500 / माह से शुरू',
    color: '#EA580C',
    badgeEn: 'Hygienic',
    badgeHi: 'शुद्ध व स्वच्छ'
  },
  {
    id: 'babycare',
    icon: '👶',
    titleEn: 'Baby Care / Nanny',
    titleHi: 'बच्चों की देखभाल (नैनी)',
    descEn: 'Loving, patient, and thoroughly verified caregivers for infants and toddlers.',
    descHi: 'शिशुओं और छोटे बच्चों की सुरक्षित, ममतामयी और प्रशिक्षित देखभाल।',
    featuresEn: ['Infant Feeding & Bathing', 'Engaging & Playful', 'Complete Safety Check', 'Verified Background'],
    featuresHi: ['बच्चों को नहलाना व भोजन', 'सुरक्षित देखभाल', 'सत्यापित पहचान', 'ममतामयी व्यवहार'],
    startingPriceEn: 'Starts ₹8,000/mo',
    startingPriceHi: '₹8,000 / माह से शुरू',
    color: '#0284C7',
    badgeEn: 'Trained',
    badgeHi: 'प्रशिक्षित'
  },
  {
    id: 'elderly',
    icon: '👵',
    titleEn: 'Elderly Care',
    titleHi: 'वरिष्ठ नागरिक की देखभाल',
    descEn: 'Compassionate assistance for senior citizens with mobility, medicine and daily support.',
    descHi: 'बुजुर्गों और वरिष्ठ नागरिकों की समर्पित सहायता, दवा का समय और दिनचर्या देखभाल।',
    featuresEn: ['Medicine Reminders', 'Mobility & Walking Support', 'Compassionate Companion', '24x7 Option'],
    featuresHi: ['दवाइयों का समय पर ध्यान', 'टहलने व चलने में मदद', 'समर्पित साथी', '24x7 विकल्प उपलब्ध'],
    startingPriceEn: 'Starts ₹9,000/mo',
    startingPriceHi: '₹9,000 / माह से शुरू',
    color: '#6366F1',
    badgeEn: 'Compassionate',
    badgeHi: 'समर्पित'
  },
  {
    id: 'fulltime',
    icon: '🏠',
    titleEn: 'Full-time House Help',
    titleHi: 'पूरा समय घरेलू सहायक (8-10 घंटे)',
    descEn: 'Dedicated helper for 8 to 10 hours covering cleaning, cooking, dishes and laundry.',
    descHi: '8 से 10 घंटे के लिए समर्पित सहायक: सफाई, खाना, बर्तन व कपड़ों की संपूर्ण जिम्मेदारी।',
    featuresEn: ['8–10 Hours Shift', 'All Domestic Chores', 'Free Replacement', 'Verified Address'],
    featuresHi: ['8-10 घंटे की शिफ्ट', 'घर के सभी कार्य', 'आसान रिप्लेसमेंट', 'सत्यापित पता'],
    startingPriceEn: 'Starts ₹8,500/mo',
    startingPriceHi: '₹8,500 / माह से शुरू',
    color: '#D97706',
    badgeEn: 'Best Value',
    badgeHi: 'सर्वश्रेष्ठ पैकेज'
  },
  {
    id: 'parttime',
    icon: '⏱️',
    titleEn: 'Part-time House Help',
    titleHi: 'आंशिक समय सहायक (सुबह/शाम)',
    descEn: 'Flexible morning or evening shifts (2 to 4 hours) for dusting, mopping and dishes.',
    descHi: 'सुबह या शाम की सुविधाजनक शिफ्ट (2 से 4 घंटे): झाड़ू-पोछा, बर्तन और डस्टिंग।',
    featuresEn: ['2–4 Hours Shift', 'Morning/Evening Slot', 'Fixed Timings', 'Background Checked'],
    featuresHi: ['2-4 घंटे की शिफ्ट', 'सुबह या शाम का स्लॉट', 'निश्चित समय', 'बैकग्राउंड चेक'],
    startingPriceEn: 'Starts ₹4,000/mo',
    startingPriceHi: '₹4,000 / माह से शुरू',
    color: '#06B6D4',
    badgeEn: 'Flexible',
    badgeHi: 'सुविधाजनक'
  },
  {
    id: 'livein',
    icon: '🛌',
    titleEn: 'Live-In House Help',
    titleHi: 'रहकर काम करने वाली सहायक (24x7)',
    descEn: 'Round-the-clock stay-at-home domestic help for continuous family and household care.',
    descHi: 'घर पर रहकर 24 घंटे काम करने वाली अनुभवी सहायक: बच्चों, बुजुर्गों और घर की पूरी देखरेख।',
    featuresEn: ['24x7 Availability', 'In-house Stay', 'Complete Family Support', 'Police Verified ID'],
    featuresHi: ['24x7 उपलब्धता', 'घर में रहने की सुविधा', 'परिवार का संपूर्ण सहारा', 'पुलिस सत्यापित'],
    startingPriceEn: 'Starts ₹12,000/mo',
    startingPriceHi: '₹12,000 / माह से शुरू',
    color: '#1E3A8A',
    badgeEn: '24x7 Stay',
    badgeHi: '24x7 सेवा'
  },
  {
    id: 'cleaning',
    icon: '✨',
    titleEn: 'Deep Home Cleaning',
    titleHi: 'घर की डीप क्लीनिंग सेवा',
    descEn: 'Intensive mechanized cleaning for full apartments, bathrooms, kitchens and sofa shampoo.',
    descHi: 'मशीनों द्वारा पूरे घर, बाथरूम, किचन और सोफे की गहन सफाई और सैनिटाइजेशन।',
    featuresEn: ['Single/Full Flat Clean', 'Kitchen & Chimney Degreasing', 'Bathroom Descaling', 'Sofa Shampooing'],
    featuresHi: ['पूरे फ्लैट की गहरी सफाई', 'किचन व चिमनी सफाई', 'बाथरूम की चमक', 'सोफा शैम्पू'],
    startingPriceEn: 'Starts ₹499',
    startingPriceHi: '₹499 से शुरू',
    color: '#10B981',
    badgeEn: 'Mechanized',
    badgeHi: 'मशीनी सफाई'
  },
  {
    id: 'repair',
    icon: '🛠️',
    titleEn: 'Home Repair & Handyman',
    titleHi: 'घर की मरम्मत (Handyman)',
    descEn: 'Masonry, door hinges, tiles, drill & hang, and immediate general repairs.',
    descHi: 'दरवाजे, खिड़की, टाइलें, ड्रिलिंग और घर की छोटी-बड़ी सभी मरम्मत।',
    featuresEn: ['Wall Drilling & Hanging', 'Hinge & Door Alignment', 'Tile Fixing', 'Quick Handyman'],
    featuresHi: ['दीवार ड्रिल व हैंगिंग', 'दरवाजे व ताला रिपेयर', 'टाइल फिक्सिंग', 'त्वरित कारीगर'],
    startingPriceEn: 'Starts ₹199',
    startingPriceHi: '₹199 से शुरू',
    color: '#2563EB',
    badgeEn: 'Quick Fix',
    badgeHi: 'त्वरित रिपेयर'
  },
  {
    id: 'ac',
    icon: '❄️',
    titleEn: 'AC Service & Repair',
    titleHi: 'एसी सर्विस व रिपेयर',
    descEn: 'Jet pump deep clean, gas refilling, cooling diagnosis and installation.',
    descHi: 'जेट पंप से एसी की सर्विस, गैस रिफिलिंग, कूलिंग समस्या और नई फिटिंग।',
    featuresEn: ['Power Jet Wash', 'Gas Leakage & Top-up', 'PCB & Capacitor Repair', '30-Day Guarantee'],
    featuresHi: ['पावर जेट वॉश', 'गैस लीकेज व रिफिल', 'पीसीबी व मोटर रिपेयर', '30 दिन की गारंटी'],
    startingPriceEn: 'Starts ₹399',
    startingPriceHi: '₹399 से शुरू',
    color: '#14B8A6',
    badgeEn: 'Warranty',
    badgeHi: 'वारंटी सहित'
  },
  {
    id: 'electrician',
    icon: '⚡',
    titleEn: 'Electrician Services',
    titleHi: 'इलेक्ट्रीशियन सेवा',
    descEn: 'Wiring faults, switchboard fixes, ceiling fan installation and inverter repairs.',
    descHi: 'वायरिंग फॉल्ट, स्विचबोर्ड ठीक करना, पंखा लगाना और इन्वर्टर रिपेयर।',
    featuresEn: ['Switchboard & Socket', 'Fan & Light Fitting', 'MCB Tripping Fix', 'Inverter Wiring'],
    featuresHi: ['स्विचबोर्ड व सॉकेट', 'पंखा व लाइट फिटिंग', 'एमसीबी ट्रिपिंग समस्या', 'इन्वर्टर वायरिंग'],
    startingPriceEn: 'Starts ₹149',
    startingPriceHi: '₹149 से शुरू',
    color: '#F59E0B',
    badgeEn: 'Verified',
    badgeHi: 'सत्यापित'
  },
  {
    id: 'plumber',
    icon: '🔧',
    titleEn: 'Plumber Services',
    titleHi: 'प्लंबर सेवा',
    descEn: 'Fix leaking taps, blocked drainage, pipe repairs and water tank cleaning.',
    descHi: 'नल की लीकेज, बंद नाली खोलना, पाइपलाइन रिपेयर और पानी की टंकी की सफाई।',
    featuresEn: ['Tap & Mixer Repair', 'Drainage Blockage Clear', 'Water Tank Cleaning', 'Bathroom Fittings'],
    featuresHi: ['नल व मिक्सर रिपेयर', 'नाली ब्लॉकेज समाधान', 'टंकी की सफाई', 'बाथरूम फिटिंग्स'],
    startingPriceEn: 'Starts ₹149',
    startingPriceHi: '₹149 से शुरू',
    color: '#8B5CF6',
    badgeEn: 'On-Demand',
    badgeHi: 'ऑन-डिमांड'
  }
];

function Services({ onSelectCategory }) {
  const { language, t } = useLanguage();

  return (
    <section className="services-section-grid" id="services">
      <div className="services-container-wrap">
        {/* Section Header */}
        <div className="services-header-center">
          <span className="section-pill-tag">
            {t('Verified Doorstep Services', 'सत्यापित घरेलू सेवाएं')}
          </span>
          <h2 className="services-heading-title">
            {language === 'hi' ? (
              <>हमारी सभी सेवाएं <span className="hindi-title-bracket">(Delhi-NCR)</span></>
            ) : (
              <>Our Verified Services <span className="hindi-title-bracket">(Delhi-NCR)</span></>
            )}
          </h2>
          <p className="services-heading-desc">
            {t(
              'Book verified house maids, cooks, nannies, elderly care, and maintenance technicians with police verification and quality assurance.',
              'विश्वसनीय घरेलू सहायिका, रसोइया, नैनी, बुजुर्ग देखभाल और घर की मरम्मत के लिए सत्यापित विशेषज्ञों को आसानी से बुक करें।'
            )}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="category-cards-grid">
          {servicesList.map((svc) => {
            const title = language === 'hi' ? svc.titleHi : svc.titleEn;
            const desc = language === 'hi' ? svc.descHi : svc.descEn;
            const features = language === 'hi' ? svc.featuresHi : svc.featuresEn;
            const price = language === 'hi' ? svc.startingPriceHi : svc.startingPriceEn;
            const badge = language === 'hi' ? svc.badgeHi : svc.badgeEn;

            return (
              <div 
                key={svc.id} 
                className={`cat-card ${svc.id === 'maid' || svc.id === 'fulltime' ? 'cat-featured' : ''}`}
              >
                <div className="cat-card-top">
                  <div 
                    className="cat-icon-container" 
                    style={{ backgroundColor: svc.color }}
                  >
                    <span className="cat-emoji-symbol">{svc.icon}</span>
                  </div>
                  {badge && (
                    <span className="cat-pill-badge">{badge}</span>
                  )}
                </div>

                <div className="cat-name-block">
                  <h3 className="cat-name-en">{title}</h3>
                </div>

                <p className="cat-desc-text">{desc}</p>

                <div className="cat-features-mini-list">
                  {features.map((feat, i) => (
                    <div key={i} className="feat-chip">
                      <Check size={12} color="#10b981" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="cat-card-footer">
                  <span className="cat-price-tag">{price}</span>
                  <a 
                    href="#contact" 
                    className="cat-book-btn"
                    onClick={() => onSelectCategory && onSelectCategory(svc.titleEn)}
                  >
                    <span>{t('Book Now', 'अभी बुक करें')}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
