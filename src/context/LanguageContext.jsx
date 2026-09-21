import React, { createContext, useContext, useState } from 'react';
import { pt } from '../locales/pt';
import { en } from '../locales/en';
import { es } from '../locales/es';

const translations = { pt, en, es };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[lang];
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Fallback to PT if translation key missing
        let fallback = translations['pt'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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
