import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie } from 'lucide-react';

export default function CookieBanner({ onOpenPrivacy }) {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isAccepted = localStorage.getItem('ariticum_cookie_accepted');
    if (!isAccepted) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ariticum_cookie_accepted', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-md z-50 bg-[#0A3526] text-white p-5 rounded-3xl shadow-2xl border border-white/10 animate-fade-in">
      <div className="flex items-start space-x-3 mb-4">
        <Cookie className="w-6 h-6 text-[#E07A54] flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-serif font-bold text-sm text-white">
            Privacidade e Cookies (LGPD)
          </h4>
          <p className="text-xs text-white/80 mt-1 leading-relaxed">
            Utilizamos cookies para melhorar sua experiência de navegação e simulação de reservas.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-3 text-xs">
        <button
          onClick={onOpenPrivacy}
          className="text-white/70 hover:text-white underline font-medium"
        >
          Saber mais
        </button>
        <button
          onClick={handleAccept}
          className="bg-[#C85A32] hover:bg-[#A5421F] text-white font-semibold px-4 py-2 rounded-full shadow transition-colors"
        >
          Aceitar e Continuar
        </button>
      </div>
    </div>
  );
}
