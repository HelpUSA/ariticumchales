import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, Car, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="localizacao" className="py-24 bg-[#F3ECE2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C85A32] font-semibold text-xs uppercase tracking-widest bg-[#C85A32]/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-[#C85A32]/20">
            Localização Privilegiada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3526]">
            {t('location.title')}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mt-4 leading-relaxed">
            {t('location.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Address & Distances */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0E4733] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-[#E07A54]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0A3526]">
                    {t('location.addressTitle')}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {t('location.addressText')}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-4">
                <h4 className="font-serif font-bold text-base text-[#0A3526] flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-[#C85A32]" />
                  <span>{t('location.routesTitle')}</span>
                </h4>

                <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center space-x-3 bg-[#FAF7F2] p-3 rounded-xl border border-gray-100">
                    <Car className="w-4 h-4 text-[#0E4733] flex-shrink-0" />
                    <span>{t('location.cgRoute')}</span>
                  </div>

                  <div className="flex items-center space-x-3 bg-[#FAF7F2] p-3 rounded-xl border border-gray-100">
                    <Car className="w-4 h-4 text-[#0E4733] flex-shrink-0" />
                    <span>{t('location.jpRoute')}</span>
                  </div>

                  <div className="flex items-center space-x-3 bg-[#FAF7F2] p-3 rounded-xl border border-gray-100">
                    <Car className="w-4 h-4 text-[#0E4733] flex-shrink-0" />
                    <span>{t('location.recRoute')}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <a
                href="https://maps.google.com/?q=Sítio+Araticum+591+Lagoa+Seca+PB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#0E4733] hover:bg-[#0A3526] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-2xl shadow transition-colors"
              >
                <span>{t('location.openMapsBtn')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 min-h-[380px] lg:min-h-full">
            <iframe
              title="Ariticum Chalés Lagoa Seca PB Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31644.270997151025!2d-35.8672!3d-7.1685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace8038abf030f%3A0x6b1db94c965c26e1!2sLagoa%20Seca%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
