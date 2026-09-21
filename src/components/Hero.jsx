import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Compass, Trees, Waves, Utensils, Play, Pause, Flame } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Real Background HTML5 Video from Instagram Media Folder */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/midia/snapgram.io_175079632579.jpg"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        >
          <source src="/midia/snapinsta-1790034147694.mp4" type="video/mp4" />
          <source src="/midia/snapgram.io_207936811769.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3526] via-[#0E4733]/70 to-[#0A3526]/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#C85A32] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg mb-6 animate-fade-in border border-white/20">
          <Trees className="w-4 h-4 text-[#FAF7F2]" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-4xl drop-shadow-md">
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-white/90 font-light max-w-2xl mb-8 leading-relaxed drop-shadow">
          {t('hero.subtitle')}
        </p>

        {/* Notice Pill: Sem Restaurante / Cozinha Gourmet completa */}
        <div className="mb-10 inline-flex items-center space-x-2 bg-[#0A3526]/90 backdrop-blur border border-[#C85A32]/50 text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-2xl shadow-xl">
          <Utensils className="w-4 h-4 text-[#E07A54] flex-shrink-0" />
          <span><strong>Não temos restaurante:</strong> Todos os chalés possuem cozinha gourmet privativa!</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="https://wa.me/5583991182730?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20di%C3%A1rias%20e%20temporada%20nos%20Chal%C3%A9s."
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
          <div className="flex items-center justify-center space-x-3 bg-[#0A3526]/85 backdrop-blur border border-white/10 rounded-2xl p-3.5 text-white/90">
            <Flame className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{t('hero.feature1')}</span>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-[#0A3526]/85 backdrop-blur border border-white/10 rounded-2xl p-3.5 text-white/90">
            <Utensils className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{t('hero.feature2')}</span>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-[#0A3526]/85 backdrop-blur border border-white/10 rounded-2xl p-3.5 text-white/90">
            <Waves className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{t('hero.feature3')}</span>
          </div>
        </div>

      </div>

    </section>
  );
}
