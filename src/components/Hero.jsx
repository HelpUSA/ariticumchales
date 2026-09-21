import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Compass, Trees, Waves, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1920&q=80',
    title: 'Chalés Aconchegantes de Serra',
    caption: 'Sinta o aroma da natureza e o ar puro de Lagoa Seca'
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
    title: 'Piscina & Área de Lazer',
    caption: 'Momentos refrescantes com vistas deslumbrantes das colinas'
  },
  {
    url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1920&q=80',
    title: 'Cozinha Gourmet Privativa',
    caption: 'Total autonomia para preparar seus pratos favoritos'
  }
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Slideshow Images */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={img.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={img.url}
            alt={img.title}
            className="w-full h-full object-cover"
          />
          {/* Gradients Overlay for perfect legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A3526] via-[#0E4733]/60 to-[#0A3526]/75" />
        </div>
      ))}

      {/* Carousel Arrow Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-[#C85A32] text-white/80 hover:text-white backdrop-blur transition-all hidden sm:flex items-center justify-center"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-[#C85A32] text-white/80 hover:text-white backdrop-blur transition-all hidden sm:flex items-center justify-center"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Card */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#C85A32]/90 backdrop-blur border border-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg mb-6 animate-fade-in">
          <Trees className="w-4 h-4 text-[#F3ECE2]" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-4xl drop-shadow-md">
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-white/90 font-light max-w-2xl mb-10 leading-relaxed drop-shadow">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="https://wa.me/5583991182730?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20de%20datas%20no%20Ariticum%20Chal%C3%A9s."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#C85A32] hover:bg-[#A5421F] text-white font-semibold text-base px-8 py-4 rounded-full shadow-2xl hover:shadow-orange-950/50 transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t('hero.ctaPrimary')}</span>
          </a>

          <a
            href="#chalés"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full backdrop-blur transition-all hover:border-white"
          >
            <Compass className="w-5 h-5 text-[#E07A54]" />
            <span>{t('hero.ctaSecondary')}</span>
          </a>
        </div>

        {/* Quick Highlights Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          <div className="flex items-center justify-center space-x-3 bg-[#0A3526]/80 backdrop-blur border border-white/10 rounded-2xl p-3.5 text-white/90">
            <Trees className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{t('hero.feature1')}</span>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-[#0A3526]/80 backdrop-blur border border-white/10 rounded-2xl p-3.5 text-white/90">
            <Utensils className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{t('hero.feature2')}</span>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-[#0A3526]/80 backdrop-blur border border-white/10 rounded-2xl p-3.5 text-white/90">
            <Waves className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{t('hero.feature3')}</span>
          </div>
        </div>

      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? 'w-8 bg-[#C85A32]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
