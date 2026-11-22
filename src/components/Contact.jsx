import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  MessageSquare
} from 'lucide-react';
import './Contact.css';

function Contact({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Delhi-NCR',
    service: prefilledService || 'househelp',
    shift: 'fulltime',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    { value: 'househelp', label: 'House Help (घरेलू सहायक - Maid, Cook, Nanny)' },
    { value: 'repair', label: 'Home Repair (घर की मरम्मत - Handyman & Masonry)' },
    { value: 'cleaning', label: 'Cleaning (सफाई सेवा - Deep Home & Sofa)' },
    { value: 'appliance', label: 'Appliance Repair (उपकरण मरम्मत - Washing Machine, Fridge)' },
    { value: 'electrician', label: 'Electrician (इलेक्ट्रीशियन - Wiring & Fans)' },
    { value: 'plumber', label: 'Plumber (प्लंबर - Leakage & Fittings)' },
    { value: 'carpenter', label: 'Carpenter (कारपेंटर - Furniture & Locks)' },
    { value: 'painter', label: 'Painter (पेंटर - Home Painting & Waterproofing)' },
    { value: 'ac', label: 'AC Service (एसी सर्विस - Jet Clean & Gas Refill)' },
    { value: 'ro', label: 'RO Service (आरओ सर्विस - Filter & Membrane Change)' },
    { value: 'security', label: 'Home Security (घर की सुरक्षा - CCTV & Smart Locks)' },
    { value: 'more', label: 'More Services (अन्य सेवाएं - Pest Control, Movers)' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-booking-section" id="contact">
      <div className="contact-booking-container">
        {/* Left Column */}
        <div className="contact-left-col">
          <span className="contact-pill-tag">Instant Booking & Support</span>
          <h2 className="contact-main-heading">
            Book Your Service Today <span className="hindi-contact-bracket">(तुरंत सेवा बुक करें)</span>
          </h2>
          <p className="contact-desc-paragraph">
            Need a verified maid, urgent plumber, or AC servicing? Fill out the form or reach out
            directly on WhatsApp. Our coordinator will confirm your verified pro within 15 minutes.
          </p>

          <div className="contact-channels-list">
            <div className="channel-item-box">
              <div className="channel-icon-wrap phone-bg">
                <Phone size={20} color="#ff5722" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Call Us Directly</span>
                <a href="tel:+919289328063" className="channel-value">+91 9289328063</a>
                <span className="channel-sub">Mon–Sun: 7:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="channel-item-box">
              <div className="channel-icon-wrap whatsapp-bg">
                <MessageSquare size={20} color="#16a34a" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Instant WhatsApp Booking</span>
                <a
                  href="https://wa.me/919289328063?text=Hi%20eNeedSol,%20I%20want%20to%20book%20a%20service."
                  target="_blank"
                  rel="noreferrer"
                  className="channel-value wa-color"
                >
                  Chat with Coordinator
                </a>
                <span className="channel-sub">Typically replies in 2 minutes</span>
              </div>
            </div>

            <div className="channel-item-box">
              <div className="channel-icon-wrap email-bg">
                <Mail size={20} color="#0284c7" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Email Support</span>
                <a href="mailto:support@eneedsol.in" className="channel-value">support@eneedsol.in</a>
              </div>
            </div>

            <div className="channel-item-box">
              <div className="channel-icon-wrap pin-bg">
                <MapPin size={20} color="#ea580c" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Service Coverage</span>
                <span className="channel-value">Delhi • Noida • Gurugram • Faridabad • Ghaziabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-right-form-wrap">
          <div className="form-card-container">
            <h3 className="form-title">Service Booking Form</h3>
            <p className="form-sub-text">Zero advance booking fee. Pay only after service satisfaction.</p>

            {submitted ? (
              <div className="booking-submitted-card">
                <CheckCircle2 size={48} color="#10b981" />
                <h4>Booking Request Received!</h4>
                <p>Thank you, <b>{formData.name || 'Customer'}</b>. Our Delhi-NCR service coordinator will call you on <b>{formData.phone || 'your number'}</b> within 15 minutes to confirm your technician/helper.</p>
                <button
                  className="btn-book-another"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-booking-form">
                <div className="form-two-fields">
                  <div className="field-group">
                    <label>Full Name (पूरा नाम) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shakti Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="field-group">
                    <label>Phone Number (मोबाइल नंबर) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 92893 28063"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-two-fields">
                  <div className="field-group">
                    <label>City / Location (शहर) *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                      <option value="Delhi">Delhi (South, West, East, North)</option>
                      <option value="Noida">Noida & Greater Noida</option>
                      <option value="Gurugram">Gurugram (DLF, Sohna, Cyber City)</option>
                      <option value="Faridabad">Faridabad (Sectors 15, 21, NIT)</option>
                      <option value="Ghaziabad">Ghaziabad (Indirapuram, Vaishali)</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label>Select Category (सेवा चुनें) *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      {servicesList.map((svc) => (
                        <option key={svc.value} value={svc.value}>
                          {svc.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field-group">
                  <label>Service Duration / Shift (समय / शिफ्ट)</label>
                  <div className="radio-pill-group">
                    {[
                      { id: 'parttime', label: 'Part-time (4-6 Hrs)' },
                      { id: 'fulltime', label: 'Full-time (8-10 Hrs)' },
                      { id: 'livein', label: 'Live-in (24x7)' },
                      { id: 'urgent', label: 'One-Time Instant' }
                    ].map((shift) => (
                      <label
                        key={shift.id}
                        className={`shift-radio-lbl ${formData.shift === shift.id ? 'active-shift' : ''}`}
                      >
                        <input
                          type="radio"
                          name="shift"
                          value={shift.id}
                          checked={formData.shift === shift.id}
                          onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
                        />
                        <span>{shift.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field-group">
                  <label>Address / Society / Landmark</label>
                  <input
                    type="text"
                    placeholder="e.g. Flat 402, Tower B, Sector 62, Noida"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="field-group">
                  <label>Specific Instructions / Notes</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your requirements (e.g., North Indian cooking, 2 BHK deep clean, AC not cooling...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-orange-btn">
                  <span>Submit Booking Request</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
