import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="logo-icon">◆</span> Endsol
            </a>
            <p className="footer-tagline">
              End-to-end technology solutions for modern businesses.
            </p>
          </div>
          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Development</a></li>
              <li><a href="#services">Cloud & DevOps</a></li>
              <li><a href="#services">AI & ML</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Endsol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
