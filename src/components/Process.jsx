import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and challenges through in-depth consultations and research.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'Our team crafts a detailed roadmap and designs intuitive interfaces that align with your brand and user needs.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your solution using industry best practices, with regular check-ins and iterative feedback loops.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'After thorough testing, we deploy your product and provide ongoing support, maintenance, and optimization.',
  },
]

function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <span className="section-badge">How We Work</span>
        <h2 className="section-title">A proven process for success</h2>
        <p className="section-subtitle">
          Our streamlined workflow ensures every project is delivered on time, on budget, and beyond expectations.
        </p>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
