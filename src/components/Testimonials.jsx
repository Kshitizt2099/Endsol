import './Testimonials.css'

const testimonials = [
  {
    quote: "Endsol transformed our outdated platform into a modern, scalable solution. Their team was responsive, professional, and delivered ahead of schedule.",
    name: 'Sarah Chen',
    role: 'CTO, TechVentures Inc.',
    avatar: 'SC',
  },
  {
    quote: "Working with Endsol felt like having an in-house team. They understood our vision from day one and executed it flawlessly. Highly recommend!",
    name: 'Michael Torres',
    role: 'Founder, StartupLab',
    avatar: 'MT',
  },
  {
    quote: "The AI solution Endsol built for us reduced our processing time by 70%. Their expertise in machine learning is truly world-class.",
    name: 'Priya Sharma',
    role: 'VP Engineering, DataFlow',
    avatar: 'PS',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <span className="section-badge">Testimonials</span>
        <h2 className="section-title">What our clients say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <span className="author-avatar">{t.avatar}</span>
                <div>
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
