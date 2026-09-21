import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Waves, Flame, Trees, Wifi, ShieldCheck, UtensilsCrossed } from 'lucide-react';

export default function AmenitiesSection() {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Waves,
      title: t('amenities.poolTitle'),
      desc: t('amenities.poolDesc'),
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Flame,
      title: t('amenities.fireTitle'),
      desc: t('amenities.fireDesc'),
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Trees,
      title: t('amenities.natureTitle'),
      desc: t('amenities.natureDesc'),
      color: 'from-emerald-600 to-green-700'
    },
    {
      icon: Wifi,
      title: t('amenities.wifiTitle'),
      desc: t('amenities.wifiDesc'),
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: ShieldCheck,
      title: t('amenities.parkingTitle'),
      desc: t('amenities.parkingDesc'),
      color: 'from-[#0E4733] to-[#0A3526]'
    },
    {
      icon: UtensilsCrossed,
      title: t('amenities.bbqTitle'),
      desc: t('amenities.bbqDesc'),
      color: 'from-[#C85A32] to-[#A5421F]'
    }
  ];

  return (
    <section id="estrutura" className="py-24 bg-[#0A3526] text-white relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0E4733] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E07A54] font-semibold text-xs uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full inline-block mb-3 border border-white/10">
            Experiência & Lazer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t('amenities.title')}
          </h2>
          <p className="text-white/80 text-base sm:text-lg mt-4 font-light leading-relaxed">
            {t('amenities.subtitle')}
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0E4733]/70 backdrop-blur border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0E4733] hover:border-[#C85A32]/40 shadow-xl group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-[#E07A54] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
