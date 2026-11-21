import './Services.css'

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks like React, Next.js, and Vue. Fast, responsive, and SEO-optimized.',
    features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Solutions'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences and high performance.',
    features: ['React Native', 'Flutter', 'iOS & Android Native'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure, CI/CD pipelines, and containerized deployments on AWS, GCP, and Azure.',
    features: ['AWS & GCP', 'Docker & Kubernetes', 'CI/CD Automation'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality. From wireframes to polished interfaces.',
    features: ['Design Systems', 'Prototyping', 'User Research'],
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by AI — from chatbots and recommendation engines to custom ML models.',
    features: ['NLP & Chatbots', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security audits, penetration testing, and compliance solutions.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance & GDPR'],
  },
]

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <span className="section-badge">What We Do</span>
        <h2 className="section-title">Services that power your growth</h2>
        <p className="section-subtitle">
          We offer a comprehensive suite of technology services tailored to meet 
          the unique needs of your business.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
