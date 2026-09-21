import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAdmin } from '../context/AdminContext';
import { Calendar, Users, Home, MessageCircle, Calculator, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingSection() {
  const { t } = useLanguage();
  const { basePricePerNight } = useAdmin();

  // Get tomorrow and day after tomorrow dates formatted as YYYY-MM-DD
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

  const formatDateString = (d) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDateString(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDateString(dayAfterTomorrow));
  const [guests, setGuests] = useState(2);
  const [chaleType, setChaleType] = useState('duplo');

  // Chalé price multiplier relative to basePricePerNight
  const chaleMultipliers = {
    duplo: 1.0,
    triplo: 1.28,
    quadruple: 1.56
  };

  const chaleNames = {
    duplo: 'Chalé Duplo (Casal)',
    triplo: 'Chalé Triplo',
    quadruple: 'Chalé Quádruplo'
  };

  // Calculate nights difference
  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const pricePerNight = Math.round(basePricePerNight * (chaleMultipliers[chaleType] || 1.0));
  const totalEstimated = nights * pricePerNight;

  const handleSendWhatsApp = () => {
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const formattedCheckIn = new Date(checkIn).toLocaleDateString('pt-BR');
    const formattedCheckOut = new Date(checkOut).toLocaleDateString('pt-BR');
    const selectedChaleName = chaleNames[chaleType] || 'Chalé';

    const message = `Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20reserva%20no%20*Ariticum%20Chal%C3%A9s*:%0A%0A` +
      `%F0%9F%8F%A1%20*Acomoda%C3%A7%C3%A3o:*%20${encodeURIComponent(selectedChaleName)}%0A` +
      `%F0%9F%93%90%20*Check-in:*%20${encodeURIComponent(formattedCheckIn)}%0A` +
      `%F0%9F%93%90%20*Check-out:*%20${encodeURIComponent(formattedCheckOut)}%0A` +
      `%F0%9F%8D%99%20*Dura%C3%A7%C3%A3o:*%20${nights}%20noite(s)%0A` +
      `%F0%9F%90%A5%20*H%C3%B3spedes:*%20${guests}%20pessoa(s)%0A` +
      `%F0%9F%92%B2%20*Valor%20Estimado:*%20R$%20${totalEstimated}%0A%0A` +
      `Podem%20confirmar%20a%20disponibilidade%20para%20estas%20datas?`;

    window.open(`https://wa.me/5583991182730?text=${message}`, '_blank');
  };

  return (
    <section id="reservas" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0E4733] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Art */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#C85A32]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Description & Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#C85A32] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                <Calculator className="w-4 h-4" />
                <span>Simulador de Diárias</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t('booking.title')}
              </h2>
              
              <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
                {t('booking.subtitle')}
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/90">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
                  <span>Confirmação rápida e direta no atendimento oficial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
                  <span>Sem taxas ocultas de intermediários</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#E07A54] flex-shrink-0" />
                  <span>Pagamento facilitado via PIX ou Cartão</span>
                </div>
              </div>
            </div>

            {/* Right Column: Calculator Form Card */}
            <div className="lg:col-span-7 bg-[#0A3526] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Check-in Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#E07A54] mb-2 uppercase tracking-wider">
                    {t('booking.checkInLabel')}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#0E4733] border border-white/20 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>

                {/* Check-out Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#E07A54] mb-2 uppercase tracking-wider">
                    {t('booking.checkOutLabel')}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#0E4733] border border-white/20 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C85A32]"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Chalé Type */}
                <div>
                  <label className="block text-xs font-semibold text-[#E07A54] mb-2 uppercase tracking-wider">
                    {t('booking.chaleTypeLabel')}
                  </label>
                  <select
                    value={chaleType}
                    onChange={(e) => setChaleType(e.target.value)}
                    className="w-full bg-[#0E4733] border border-white/20 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C85A32]"
                  >
                    <option value="duplo">Chalé Duplo (Casal - 2p)</option>
                    <option value="triplo">Chalé Triplo (3p)</option>
                    <option value="quadruple">Chalé Quádruplo (4p)</option>
                  </select>
                </div>

                {/* Guests Count */}
                <div>
                  <label className="block text-xs font-semibold text-[#E07A54] mb-2 uppercase tracking-wider">
                    {t('booking.guestsLabel')}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#0E4733] border border-white/20 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C85A32]"
                  >
                    <option value={1}>1 Hóspede</option>
                    <option value={2}>2 Hóspedes</option>
                    <option value={3}>3 Hóspedes</option>
                    <option value={4}>4 Hóspedes</option>
                  </select>
                </div>

              </div>

              {/* Price Breakdown Banner */}
              <div className="bg-[#0E4733] rounded-2xl p-5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-white/70 block">
                    {nights} {t('booking.nights')} x R$ {pricePerNight}
                  </span>
                  <span className="text-xs font-medium text-[#E07A54]">
                    {t('booking.totalEstimated')}
                  </span>
                </div>
                <div className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  R$ {totalEstimated}
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-white/60 text-center italic">
                {t('booking.disclaimer')}
              </p>

              {/* WhatsApp Action Button */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full bg-[#C85A32] hover:bg-[#A5421F] text-white font-semibold text-sm uppercase tracking-wider py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t('booking.sendWhatsappBtn')}</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
