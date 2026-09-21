import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAdmin } from '../context/AdminContext';
import { Menu, X, Globe, MessageCircle, Settings, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { setIsAdminOpen } = useAdmin();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#chalés', label: t('nav.accommodations') },
    { href: '#estrutura', label: t('nav.amenities') },
    { href: '#gastronomia', label: t('nav.gastronomy') },
    { href: '#localizacao', label: t('nav.location') },
    { href: '#galeria', label: t('nav.instagram') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0E4733]/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-gradient-to-b from-[#0A3526]/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] p-1.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src="/logo.png" 
                alt="Ariticum Chalés Logo" 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-serif font-bold text-lg text-[#0E4733]">AC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-white group-hover:text-[#E07A54] transition-colors">
                ariticum
              </span>
              <span className="text-xs uppercase tracking-widest text-[#E07A54] font-semibold">
                chalés
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-[#E07A54] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C85A32] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Tools: Language Selector, WhatsApp CTA, Admin button */}
          <div className="hidden lg:flex items-center space-x-4">
            
            {/* Language Switcher */}
            <div className="relative flex items-center bg-[#0A3526]/60 backdrop-blur border border-white/20 rounded-full p-1 text-xs text-white">
              <Globe className="w-3.5 h-3.5 ml-1.5 mr-1 text-[#E07A54]" />
              {['pt', 'en', 'es'].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-0.5 rounded-full uppercase font-bold text-[10px] transition-all ${
                    lang === code 
                      ? 'bg-[#C85A32] text-white shadow-sm' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/5583991182730?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20reservas%20nos%20Chal%C3%A9s."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#C85A32] hover:bg-[#A5421F] text-white font-medium text-xs uppercase tracking-wider px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t('nav.bookNow')}</span>
            </a>

            {/* Admin Config Trigger */}
            <button
              onClick={() => setIsAdminOpen(true)}
              title={t('nav.admin')}
              className="p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A3526] border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-[#E07A54] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col space-y-3">
            <div className="flex items-center justify-between text-xs text-white/80">
              <span className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-[#E07A54]" />
                <span>Idioma:</span>
              </span>
              <div className="flex space-x-1">
                {['pt', 'en', 'es'].map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`px-2.5 py-1 rounded uppercase font-bold text-xs ${
                      lang === code ? 'bg-[#C85A32] text-white' : 'bg-white/10 text-white/70'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/5583991182730?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20reservas%20nos%20Chal%C3%A9s."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#C85A32] hover:bg-[#A5421F] text-white font-medium text-sm py-3 rounded-xl shadow-md flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('nav.bookNow')} (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
