import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, Eye, MessageCircle, X, ChevronLeft, ChevronRight, Check, Play, Utensils, Sparkles } from 'lucide-react';

const CHALES_DATA = [
  {
    id: 'mezanino',
    type: 'mezanino',
    title: 'Chalé Mezanino (Destaque)',
    subtitle: 'Estrutura premium em 2 níveis com quarto no mezanino elevado',
    capacity: 'Até 4 Pessoas',
    priceEstimate: 'R$ 380 / noite',
    image: '/midia/snapgram.io_175079632579.jpg',
    video: '/midia/snapinsta-1790034163448.mp4',
    gallery: [
      '/midia/snapgram.io_175079632579.jpg',
      '/midia/snapgram.io_169006600724.jpg'
    ],
    description: 'O Chalé Mezanino é o modelo mais procurado do Ariticum Chalés. Possui mezanino aconchegante para dormir no pavimento superior, sala ampla com sofá no piso térreo, cozinha gourmet privativa totalmente equipada, TV 50", ar-condicionado split e varanda com vista panorâmica.',
    features: [
      'Mezanino Elevar com Cama King',
      'Cozinha Gourmet Privativa com Cooktop',
      'Sala Integrada no Piso Térreo',
      'TV Smart 50"',
      'Ar-condicionado Split',
      'Varanda Privativa com Rede'
    ]
  },
  {
    id: 'duplo',
    type: 'duplo',
    title: 'Chalé Duplo (Casal)',
    subtitle: 'Ideal para casais em busca de romance e clima de serra',
    capacity: 'Até 2 Pessoas',
    priceEstimate: 'R$ 250 / noite',
    image: '/midia/snapgram.io_169006600724.jpg',
    video: '/midia/snapgram.io_207936888261.mp4',
    gallery: [
      '/midia/snapgram.io_169006600724.jpg',
      '/midia/snapgram.io_175079632579.jpg'
    ],
    description: 'Chalé aconchegante totalmente equipado para casais. Possui cama confortável, cozinha gourmet privativa com cooktop, micro-ondas e geladeira/frigobar, TV de 50 polegadas, ar-condicionado split e varanda aconchegante.',
    features: [
      'Cama Casal Confortável',
      'Cozinha Gourmet com Cooktop',
      'TV Smart 50"',
      'Ar-condicionado Split',
      'Varanda Privativa com Rede',
      'Acesso Livre à Piscina'
    ]
  },
  {
    id: 'triplo',
    type: 'triplo',
    title: 'Chalé Triplo',
    subtitle: 'Perfeito para pequenas famílias ou trios de amigos',
    capacity: 'Até 3 Pessoas',
    priceEstimate: 'R$ 320 / noite',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    video: '/midia/snapgram.io_211405166547.mp4',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      '/midia/snapgram.io_175079632579.jpg'
    ],
    description: 'Espaço funcional e extremamente acolhedor. Equipado com cama de casal e solteiro, cozinha gourmet privativa pronta para refeições práticas, TV 50", ar-condicionado split e ambiente super ventilado.',
    features: [
      '1 Cama Casal + 1 Solteiro',
      'Cozinha Gourmet Prática',
      'TV Smart 50"',
      'Ar-condicionado Split',
      'Banheiro Privativo Amplo',
      'Estacionamento ao lado'
    ]
  },
  {
    id: 'quadruplo',
    type: 'quadruplo',
    title: 'Chalé Quádruplo (Família)',
    subtitle: 'Espaçoso e completo para famílias e grupos',
    capacity: 'Até 4 Pessoas',
    priceEstimate: 'R$ 390 / noite',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80',
    video: '/midia/snapgram.io_211405214645.mp4',
    gallery: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
      '/midia/snapgram.io_169006600724.jpg'
    ],
    description: 'Nosso chalé de maior capacidade para grupos de até 4 pessoas. Possui espaço amplo, cozinha gourmet privativa totalmente equipada, mesa de refeições, TV 50", ar-condicionado split e varanda espaçosa.',
    features: [
      'Acomoda até 4 adultos/crianças',
      'Cozinha Gourmet Completa',
      'TV Smart 50"',
      'Ar-condicionado Split',
      'Mesa de Refeições Privativa',
      'Varanda com Vista para a Serra'
    ]
  }
];

export default function AccommodationsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [activeModalChale, setActiveModalChale] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const filteredChales = filter === 'all' 
    ? CHALES_DATA 
    : CHALES_DATA.filter(c => c.type === filter);

  const openGalleryModal = (chale) => {
    setActiveModalChale(chale);
    setModalImageIndex(0);
  };

  return (
    <section id="chalés" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#C85A32] font-semibold text-xs uppercase tracking-widest bg-[#C85A32]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Hospedagem & Conforto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3526]">
            {t('accommodations.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            {t('accommodations.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: t('accommodations.all') },
            { id: 'mezanino', label: t('accommodations.mezanino') },
            { id: 'duplo', label: t('accommodations.double') },
            { id: 'triplo', label: t('accommodations.triple') },
            { id: 'quadruplo', label: t('accommodations.quadruple') },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === item.id
                  ? 'bg-[#0E4733] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-[#F3ECE2] border border-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Chalés Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredChales.map((chale) => (
            <div
              key={chale.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl group"
            >
              {/* Media Container */}
              <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden bg-black">
                {chale.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={chale.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={chale.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={chale.image}
                    alt={chale.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Capacity Tag */}
                <div className="absolute top-4 left-4 bg-[#0A3526]/90 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center space-x-1.5 shadow">
                  <Users className="w-3.5 h-3.5 text-[#E07A54]" />
                  <span>{chale.capacity}</span>
                </div>

                {/* View Photos Quick Trigger */}
                <button
                  onClick={() => openGalleryModal(chale)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#0A3526] text-xs font-semibold px-3 py-1.5 rounded-full shadow flex items-center space-x-1 backdrop-blur transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Ver Fotos</span>
                </button>
              </div>

              {/* Chalé Card Body */}
              <div className="p-6 md:w-1/2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0A3526]">
                      {chale.title}
                    </h3>
                    {chale.id === 'mezanino' && (
                      <span className="bg-[#C85A32] text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
                        Mais Pedido
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#C85A32] font-medium mb-3">
                    {chale.subtitle}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {chale.description}
                  </p>

                  {/* Highlights Bullet Grid */}
                  <div className="space-y-1.5 mb-6">
                    {chale.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#C85A32] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">
                      A partir de
                    </span>
                    <span className="font-serif font-bold text-lg text-[#0E4733]">
                      {chale.priceEstimate}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/5583991182730?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20disponibilidade%20para%20o%20${encodeURIComponent(chale.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-[#C85A32] hover:bg-[#A5421F] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Reservar</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gallery Modal */}
      {activeModalChale && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#0A3526] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-[#0E4733] border-b border-white/10 flex items-center justify-between text-white">
              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  {activeModalChale.title}
                </h3>
                <p className="text-xs text-[#E07A54]">
                  Foto {modalImageIndex + 1} de {activeModalChale.gallery.length}
                </p>
              </div>
              <button
                onClick={() => setActiveModalChale(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Viewer */}
            <div className="relative h-[350px] sm:h-[480px] bg-black">
              <img
                src={activeModalChale.gallery[modalImageIndex]}
                alt={activeModalChale.title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Modal Arrows */}
              <button
                onClick={() => setModalImageIndex((prev) => (prev - 1 + activeModalChale.gallery.length) % activeModalChale.gallery.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#C85A32] text-white backdrop-blur transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setModalImageIndex((prev) => (prev + 1) % activeModalChale.gallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-[#C85A32] text-white backdrop-blur transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Gallery Thumbnails & CTA */}
            <div className="p-4 bg-[#0A3526] flex items-center justify-between gap-4 flex-wrap">
              <div className="flex space-x-2">
                {activeModalChale.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setModalImageIndex(i)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      i === modalImageIndex ? 'border-[#C85A32] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <a
                href={`https://wa.me/5583991182730?text=Ol%C3%A1!%20Vi%20as%20fotos%20do%20${encodeURIComponent(activeModalChale.title)}%20e%20gostaria%20de%20reservar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#C85A32] hover:bg-[#A5421F] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Reservar este Chalé</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
