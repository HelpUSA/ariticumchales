import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const INSTA_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80',
    likes: '142',
    comments: '18',
    caption: 'Manhã radiante com cheiro de serra no Ariticum Chalés 🌿☕'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    likes: '230',
    comments: '34',
    caption: 'Tarde de sol e tranquilidade na nossa piscina. Venha renovar suas energias! 🏊‍♂️✨'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80',
    likes: '189',
    comments: '22',
    caption: 'Cozinha gourmet privativa no chalé para preparar aquele jantar especial 🍷🍝'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    likes: '310',
    comments: '45',
    caption: 'Noites aconchegantes ao redor do fogo de chão na serra de Lagoa Seca 🔥'
  }
];

export default function InstagramSection() {
  const { t } = useLanguage();

  return (
    <section id="galeria" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow mb-3">
            <Instagram className="w-4 h-4" />
            <span>@ariticum_chales</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A3526]">
            {t('instagram.title')}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            {t('instagram.subtitle')}
          </p>
        </div>

        {/* Photo Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INSTA_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/ariticum_chales/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-3xl overflow-hidden shadow-lg h-72 block bg-[#0A3526]"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <p className="text-xs line-clamp-2 mb-4 font-light leading-relaxed">
                  {post.caption}
                </p>
                <div className="flex items-center space-x-4 text-xs font-semibold text-pink-300">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 fill-current" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1 text-white">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </a>
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
