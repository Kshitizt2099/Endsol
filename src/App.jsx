import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HouseHelpSpotlight from './components/HouseHelpSpotlight';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function MainAppContent() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const handleSelectCategory = (categoryName) => {
    setSelectedServiceForBooking(categoryName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="eneedsol-app-site">
      {/* 1. Header with eNeedSol Official Logo and Language Switcher */}
      <Navbar />

      {/* 2. Hero Section with image headline & search bar */}
      <Hero onSearchCategory={handleSelectCategory} />

      {/* 3. The exact House Help & Home Service Categories requested */}
      <Services onSelectCategory={handleSelectCategory} />

      {/* 4. House Help Spotlight (Maid, Cook, Nanny, Part-time, Full-time, Live-in packages) */}
      <HouseHelpSpotlight />

      {/* 5. How It Works Process */}
      <Process />

      {/* 6. Why Choose eNeedSol (Verified Experts, Safe & Trusted, On-Time Service) */}
      <About />

      {/* 7. Delhi-NCR Customer Testimonials */}
      <Testimonials />

      {/* 8. Doorstep Service Booking & Contact Form */}
      <Contact prefilledService={selectedServiceForBooking} />

      {/* 9. Official Footer with eNeedSol Logo & Links */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
