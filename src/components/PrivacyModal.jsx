import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-gray-800 shadow-2xl relative border border-gray-200">
        
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <div className="flex items-center space-x-2 text-[#0E4733]">
            <ShieldCheck className="w-6 h-6 text-[#C85A32]" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0A3526]">
              Política de Privacidade
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            O <strong>Ariticum Chalés</strong> tem o compromisso de respeitar a sua privacidade e garantir a proteção de seus dados pessoais, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h4 className="font-bold text-[#0A3526] text-base pt-2">1. Coleta de Informações</h4>
          <p>
            Coletamos apenas as informações estritamente necessárias fornecidas voluntariamente por você ao solicitar reservas ou simulações (como nome, datas pretendidas e quantidade de hóspedes) via WhatsApp ou formulários de atendimento.
          </p>

          <h4 className="font-bold text-[#0A3526] text-base pt-2">2. Uso dos Dados</h4>
          <p>
            Seus dados são utilizados exclusivamente para responder às suas solicitações de orçamento, confirmar reservas, personalizar o seu atendimento e garantir a sua melhor experiência durante a estadia em Lagoa Seca - PB.
          </p>

          <h4 className="font-bold text-[#0A3526] text-base pt-2">3. Compartilhamento</h4>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing ou publicidade não solicitada.
          </p>

          <h4 className="font-bold text-[#0A3526] text-base pt-2">4. Seus Direitos</h4>
          <p>
            Você pode solicitar a qualquer momento a confirmação, correção ou exclusão dos seus dados pessoais armazenados em nossos canais de atendimento entrando em contato pelo nosso WhatsApp oficial <strong>(83) 99118-2730</strong>.
          </p>
        </div>

        <div className="mt-8 text-right pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="bg-[#0E4733] hover:bg-[#0A3526] text-white font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
}
