import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { X, Settings, Sparkles, DollarSign, Save } from 'lucide-react';

export default function AdminModal() {
  const { isAdminOpen, setIsAdminOpen, pricingNotice, setPricingNotice, basePricePerNight, setBasePricePerNight } = useAdmin();
  
  const [tempNotice, setTempNotice] = useState(pricingNotice);
  const [tempPrice, setTempPrice] = useState(basePricePerNight);

  if (!isAdminOpen) return null;

  const handleSave = () => {
    setPricingNotice(tempNotice);
    setBasePricePerNight(Number(tempPrice));
    setIsAdminOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#0A3526] rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white shadow-2xl border border-white/20">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center space-x-2 text-[#E07A54]">
            <Settings className="w-6 h-6" />
            <h3 className="font-serif font-bold text-xl text-white">
              Painel de Gestão Rápida
            </h3>
          </div>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6 text-sm">
          
          {/* Promotional Banner Editor */}
          <div>
            <label className="block text-xs font-semibold text-[#E07A54] mb-2 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Aviso Promocional no Banner</span>
            </label>
            <input
              type="text"
              value={tempNotice}
              onChange={(e) => setTempNotice(e.target.value)}
              placeholder="Ex: 10% de desconto de domingo a quinta!"
              className="w-full bg-[#0E4733] border border-white/20 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C85A32]"
            />
            <p className="text-[11px] text-white/60 mt-1">
              Deixe em branco para ocultar o aviso promocional.
            </p>
          </div>

          {/* Base Price Editor */}
          <div>
            <label className="block text-xs font-semibold text-[#E07A54] mb-2 uppercase tracking-wider flex items-center space-x-1.5">
              <DollarSign className="w-4 h-4" />
              <span>Valor Base da Diária (R$)</span>
            </label>
            <input
              type="number"
              value={tempPrice}
              onChange={(e) => setTempPrice(e.target.value)}
              className="w-full bg-[#0E4733] border border-white/20 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C85A32]"
            />
            <p className="text-[11px] text-white/60 mt-1">
              Este valor atualiza dinamicamente o simulador de reservas de chalés.
            </p>
          </div>

        </div>

        <div className="mt-8 flex items-center justify-end space-x-3 pt-4 border-t border-white/10">
          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-4 py-2.5 rounded-full text-xs font-semibold text-white/70 hover:text-white"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-[#C85A32] hover:bg-[#A5421F] text-white font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow flex items-center space-x-1.5"
          >
            <Save className="w-4 h-4" />
            <span>Salvar Alterações</span>
          </button>
        </div>

      </div>
    </div>
  );
}
