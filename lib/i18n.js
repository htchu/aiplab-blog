import { useState, useEffect, createContext, useContext } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: 'English',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'ar': 'العربية',
  'ja': '日本語'
};

export const defaultLanguage = 'en';

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLanguage = navigator.language || navigator.userLanguage;
      console.log('Detected browser language:', browserLanguage);
      
      if (browserLanguage.startsWith('zh')) {
        if (browserLanguage.includes('TW') || browserLanguage.includes('HK') || browserLanguage.includes('MO') || browserLanguage.includes('Hant')) {
          setCurrentLanguage('zh-TW');
          console.log('Setting language to Traditional Chinese');
        } else {
          setCurrentLanguage('zh-CN');
          console.log('Setting language to Simplified Chinese');
        }
      } else if (browserLanguage.startsWith('ar')) {
        setCurrentLanguage('ar');
        console.log('Setting language to Arabic');
      } else if (browserLanguage.startsWith('ja')) {
        setCurrentLanguage('ja');
        console.log('Setting language to Japanese');
      } else {
        setCurrentLanguage('en');
        console.log('Setting language to English');
      }
    }
  }, []);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages }}>
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

export function useTranslation() {
  const { currentLanguage } = useLanguage();

  const t = (key, params = {}) => {
    try {
      const translations = require(`../translations/${currentLanguage}.json`);
      let result = key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
      
      // Return arrays directly if returnObjects is true
      if (params.returnObjects && Array.isArray(result)) {
        return result;
      }
      
      // Replace parameters in text
      if (typeof result === 'string') {
        Object.keys(params).forEach(param => {
          if (param !== 'returnObjects') {
            result = result.replace(`{${param}}`, params[param]);
          }
        });
      }
      
      return result;
    } catch (error) {
      console.warn(`Translation not found for key: ${key} in language: ${currentLanguage}`);
      return key;
    }
  };

  return { t, currentLanguage };
}