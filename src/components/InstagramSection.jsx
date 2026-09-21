import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Heart, MessageCircle, Play, Film } from 'lucide-react';

const REAL_MEDIA_ITEMS = [
  {
    id: 1,
    type: 'video',
    src: '/midia/snapinsta-1790034147694.mp4',
    poster: '/midia/snapgram.io_175079632579.jpg',
    caption: 'Área da Piscina com vista para as serras e verde do Sítio Araticum 🏊‍♂️🌿',
    likes: '412',
    comments: '38'
  },
  {
    id: 2,
    type: 'video',
    src: '/midia/snapinsta-1790034163448.mp4',
    poster: '/midia/snapgram.io_169006600724.jpg',
    caption: 'Tour pelo Chalé Mezanino: estrutura em 2 níveis super aconchegante! 🏡✨',
    likes: '528',
    comments: '64'
  },
  {
    id: 3,
    type: 'video',
    src: '/midia/snapgram.io_207936811769.mp4',
    poster: '/midia/snapgram.io_175079632579.jpg',
    caption: 'Noites frias e névoa de serra no Ariticum Chalés em Lagoa Seca 🌫️🔥',
    likes: '389',
    comments: '42'
  },
  {
    id: 4,
    type: 'video',
    src: '/midia/snapgram.io_211405166547.mp4',
    poster: '/midia/snapgram.io_169006600724.jpg',
    caption: 'Cozinha gourmet privativa equipada em cada chalé 🍷🍝',
    likes: '310',
    comments: '29'
  }
];

export default function InstagramSection() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="galeria" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow mb-3">
            <Instagram className="w-4 h-4" />
            <span>@ariticum_chales • 19,7 mil seguidores</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3526]">
            {t('instagram.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            {t('instagram.subtitle')}
          </p>
        </div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REAL_MEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-3xl overflow-hidden shadow-xl h-80 bg-black cursor-pointer transform hover:-translate-y-1 transition-all border border-gray-100"
              onClick={() => setActiveVideo(item.src)}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={item.poster}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={item.src} type="video/mp4" />
              </video>

              {/* Play Badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white p-2 rounded-full shadow">
                <Film className="w-4 h-4 text-pink-400" />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <p className="text-xs line-clamp-2 mb-4 font-light leading-relaxed">
                  {item.caption}
                </p>
                <div className="flex items-center justify-between text-xs font-semibold text-pink-300 border-t border-white/10 pt-3">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 fill-current text-pink-500" />
                    <span>{item.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1 text-white/80">
                    <MessageCircle className="w-4 h-4" />
                    <span>{item.comments}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Instagram Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/ariticum_chales/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-semibold text-sm px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
          >
            <Instagram className="w-5 h-5" />
            <span>{t('instagram.followBtn')}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
