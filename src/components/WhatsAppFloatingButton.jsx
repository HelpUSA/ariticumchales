import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/5583991182730?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20reservas%20nos%20Chal%C3%A9s."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group animate-bounce-soft"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      
      {/* Pulse Notification Badge */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
      </span>

      {/* Tooltip text on hover */}
      <span className="absolute right-16 bg-[#0A3526] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
        Reserva Rápida no WhatsApp
      </span>
    </a>
  );
}
