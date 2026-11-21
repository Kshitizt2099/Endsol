import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-badge">Trusted by 200+ businesses</span>
        <h1 className="hero-title">
          We build digital solutions that <span className="highlight">drive results</span>
        </h1>
        <p className="hero-subtitle">
          From web development to cloud infrastructure, we deliver end-to-end technology 
          services that help businesses scale, innovate, and stay ahead of the competition.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Start Your Project</a>
          <a href="#services" className="btn btn-secondary">Explore Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Team Members</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
