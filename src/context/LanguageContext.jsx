import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to English ('en'), user can toggle to Hindi ('hi')
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('eneedsol_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('eneedsol_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  /**
   * Helper function t(en, hi):
   * returns hi when language is 'hi', else returns en
   */
  const t = (en, hi) => {
    if (language === 'hi' && hi) return hi;
    return en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
