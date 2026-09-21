import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Instagram, Facebook, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenPrivacy }) {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A3526] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] p-1.5 shadow-md flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Ariticum Chalés Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-tight text-white">
                  ariticum
                </span>
                <span className="text-xs uppercase tracking-widest text-[#E07A54] font-semibold">
                  chalés
                </span>
              </div>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/ariticum_chales/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C85A32] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/ariticumhotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C85A32] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-[#E07A54]">
              {t('footer.quickLinksTitle')}
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#home" className="hover:text-[#E07A54] transition-colors">{t('nav.home')}</a>
              </li>
              <li>
                <a href="#chalés" className="hover:text-[#E07A54] transition-colors">{t('nav.accommodations')}</a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-[#E07A54] transition-colors">{t('nav.amenities')}</a>
              </li>
              <li>
                <a href="#gastronomia" className="hover:text-[#E07A54] transition-colors">{t('nav.gastronomy')}</a>
              </li>
              <li>
                <a href="#reservas" className="hover:text-[#E07A54] transition-colors">{t('nav.bookNow')}</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#E07A54] transition-colors">{t('nav.location')}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-[#E07A54]">
              {t('footer.contactTitle')}
            </h4>
            <ul className="space-y-3 text-xs text-white/80">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#C85A32] flex-shrink-0 mt-0.5" />
                <span>(83) 99118-2730 (WhatsApp)</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C85A32] flex-shrink-0 mt-0.5" />
                <span>Sítio Araticum, 591, Zona Rural, Lagoa Seca - PB, CEP 58117-000</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Seal & Policies */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-[#E07A54]">
              Privacidade & Garantia
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Atendimento transparente e direto. Sem taxas de intermediários.
            </p>
            <button
              onClick={onOpenPrivacy}
              className="inline-flex items-center space-x-1.5 text-xs text-[#E07A54] hover:text-white underline"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t('footer.privacyPolicy')}</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar with Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex items-center space-x-1 text-white/70">
            <span>{t('footer.helpusBadge')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
