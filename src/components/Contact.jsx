import './Contact.css'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Ready to start your project?</h2>
          <p className="contact-text">
            Let's discuss how we can help bring your ideas to life. 
            Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">hello@endsol.com</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@company.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select id="service">
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="cloud">Cloud & DevOps</option>
              <option value="design">UI/UX Design</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="security">Cybersecurity</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Tell us about your project..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary form-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
