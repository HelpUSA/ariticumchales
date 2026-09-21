import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAdmin } from '../context/AdminContext';
import { Clock, MapPin, Phone, Sparkles } from 'lucide-react';

export default function QuickInfoBanner() {
  const { t } = useLanguage();
  const { pricingNotice } = useAdmin();

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Optional Admin Pricing Notice Pill */}
      {pricingNotice && (
        <div className="mb-4 bg-gradient-to-r from-[#C85A32] to-[#A5421F] text-white p-3 rounded-2xl shadow-lg flex items-center justify-center space-x-2 text-xs sm:text-sm font-medium animate-pulse-slow">
          <Sparkles className="w-4 h-4 text-amber-200 flex-shrink-0" />
          <span className="font-semibold uppercase tracking-wider">{t('quickInfo.noticeBadge')}:</span>
          <span>{pricingNotice}</span>
        </div>
      )}

      {/* Main Info Card Bar */}
      <div className="bg-[#FAF7F2] rounded-3xl shadow-xl border border-[#0E4733]/10 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#0E4733]/10">
          
          {/* Item 1: Check-in / Check-out */}
          <div className="flex items-start space-x-4 pt-4 md:pt-0 md:pr-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0E4733] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Clock className="w-6 h-6 text-[#E07A54]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#0A3526]">
                {t('quickInfo.checkinoutTitle')}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {t('quickInfo.checkin')}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {t('quickInfo.checkout')}
              </p>
            </div>
          </div>

          {/* Item 2: Direct Contact / WhatsApp */}
          <div className="flex items-start space-x-4 pt-6 md:pt-0 md:px-6">
            <div className="w-12 h-12 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#0A3526]">
                Reservas & Atendimento
              </h4>
              <p className="text-sm font-semibold text-[#C85A32] mt-1">
                {t('quickInfo.whatsapp')}
              </p>
              <p className="text-xs text-gray-500">
                Atendimento rápido via WhatsApp
              </p>
            </div>
          </div>

          {/* Item 3: Official Location */}
          <div className="flex items-start space-x-4 pt-6 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#0E4733] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <MapPin className="w-6 h-6 text-[#E07A54]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#0A3526]">
                Lagoa Seca – Paraíba
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-snug">
                {t('quickInfo.location')}
              </p>
              <span className="text-[11px] text-[#C85A32] font-semibold mt-1 inline-block">
                ~20min de Campina Grande
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
