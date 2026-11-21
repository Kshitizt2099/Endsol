import './About.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">Technology partners you can trust</h2>
          <p className="about-text">
            At Endsol, we believe technology should be a growth engine — not a bottleneck. 
            Our team of engineers, designers, and strategists work together to deliver 
            solutions that are not just technically excellent, but strategically aligned 
            with your business goals.
          </p>
          <p className="about-text">
            With years of experience across industries — from startups to enterprises — 
            we bring the expertise and dedication needed to turn your vision into reality.
          </p>
          <div className="about-values">
            <div className="value">
              <span className="value-icon">⚡</span>
              <div>
                <h4>Agile Delivery</h4>
                <p>Iterative development with transparent communication at every step.</p>
              </div>
            </div>
            <div className="value">
              <span className="value-icon">🎯</span>
              <div>
                <h4>Results Focused</h4>
                <p>Every decision is driven by measurable business outcomes.</p>
              </div>
            </div>
            <div className="value">
              <span className="value-icon">🤝</span>
              <div>
                <h4>True Partnership</h4>
                <p>We succeed when you succeed. Long-term relationships, not transactions.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="visual-card">
            <div className="visual-row">
              <span className="visual-number">8+</span>
              <span className="visual-label">Years of Experience</span>
            </div>
            <div className="visual-row">
              <span className="visual-number">15+</span>
              <span className="visual-label">Industries Served</span>
            </div>
            <div className="visual-row">
              <span className="visual-number">99.9%</span>
              <span className="visual-label">Uptime Guarantee</span>
            </div>
            <div className="visual-row">
              <span className="visual-number">24/7</span>
              <span className="visual-label">Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
