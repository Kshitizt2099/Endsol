import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-icon">◆</span>
          Endsol
        </a>
        <ul className="navbar-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
