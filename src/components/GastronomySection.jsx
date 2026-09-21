import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Utensils, ShoppingBag, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

export default function GastronomySection() {
  const { t } = useLanguage();

  return (
    <section id="gastronomia" className="py-24 bg-[#F3ECE2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C85A32] font-semibold text-xs uppercase tracking-widest bg-[#C85A32]/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-[#C85A32]/20">
            Gastronomia & Liberdade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3526]">
            {t('gastronomy.title')}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mt-4 leading-relaxed">
            {t('gastronomy.subtitle')}
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Cozinha Gourmet Completa */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-[#0E4733]/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E4733] text-white flex items-center justify-center mb-6 shadow-md">
                <Utensils className="w-6 h-6 text-[#E07A54]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#0A3526] mb-3">
                {t('gastronomy.card1Title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t('gastronomy.card1Desc')}
              </p>
            </div>
            <ul className="space-y-2 text-xs text-gray-700 pt-4 border-t border-gray-100">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                <span>Cooktop elétrico de 2 bocas</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                <span>Micro-ondas e Geladeira / Frigobar</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                <span>Utensílios para preparo de refeições</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Sabores de Lagoa Seca */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-[#0E4733]/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center mb-6 shadow-md">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#0A3526] mb-3">
                {t('gastronomy.card2Title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t('gastronomy.card2Desc')}
              </p>
            </div>
            <ul className="space-y-2 text-xs text-gray-700 pt-4 border-t border-gray-100">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E4733]" />
                <span>Queijos de coalho e manteiga locais</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E4733]" />
                <span>Doces caseiros, cocadas e broas</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E4733]" />
                <span>Feiras e engenhos de serra próximos</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Cestas sob Encomenda */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-[#0E4733]/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E4733] text-white flex items-center justify-center mb-6 shadow-md">
                <Gift className="w-6 h-6 text-[#E07A54]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#0A3526] mb-3">
                {t('gastronomy.card3Title')}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t('gastronomy.card3Desc')}
              </p>
            </div>
            <ul className="space-y-2 text-xs text-gray-700 pt-4 border-t border-gray-100">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                <span>Traga seus insumos favoritos</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                <span>Dicas de fornecedores locais</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#C85A32]" />
                <span>Total privacidade para sua refeição</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Tip Box */}
        <div className="bg-[#0E4733] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#C85A32] rounded-2xl flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-white">
                Dica Ariticum Chalés
              </h4>
              <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                Aproveite a brisa fria da noite na serra para preparar um fondue ou caldo quente na cozinha gourmet do seu chalé!
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5583991182730?text=Ol%C3%A1!%20Gostaria%20de%20dicas%20gastron%C3%B4micas%20para%20minha%20estadia."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C85A32] hover:bg-[#A5421F] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-full shadow text-center flex-shrink-0"
          >
            Tirar Dúvidas no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
