
import React, { useState } from 'react';
import { ArrowRight as ArrowIcon, MessageCircle as WAIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES, CONTACT_INFO } from '../constants';
import { Category } from '../types';
import { trackMetaEvent } from '../services/metaPixelService';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % category.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + category.images.length) % category.images.length);
  };

  const setIndex = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex(index);
  };

  const handleWhatsAppClick = () => {
    trackMetaEvent('Lead');
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500">
      {/* Container do Carrossel */}
      <div className="aspect-[16/10] overflow-hidden relative">
        {category.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`${category.name} - ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100 scale-105 group-hover:scale-110' : 'opacity-0'
            }`}
          />
        ))}

        {/* Overlay do Carrossel (Apenas visível se houver mais de uma imagem) */}
        {category.images.length > 1 && (
          <>
            {/* Setas de Navegação */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevImage}
                className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-blue-900 hover:bg-white transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-blue-900 hover:bg-white transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pontinhos Indicadores */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {category.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => setIndex(e, idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'w-6 bg-yellow-400' : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para imagem ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-black text-blue-900 mb-2">{category.name}</h3>
        <p className="text-slate-500 text-sm mb-6">{category.description}</p>
        <a 
          href={`${CONTACT_INFO.whatsappLink}?text=Olá! Vim pelo site da AME Papelaria e quero informações sobre ${category.name}.`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="w-full py-4 bg-white border border-slate-200 text-blue-900 font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all"
        >
          <WAIcon className="w-5 h-5" />
          Solicitar no WhatsApp
        </a>
      </div>
    </div>
  );
};

export const Categories: React.FC = () => {
  const handleCatalogClick = () => {
    trackMetaEvent('ViewContent');
  };

  return (
    <section id="produtos" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-blue-900 font-black text-4xl lg:text-5xl">Categorias em Destaque</h2>
            <p className="text-slate-500 max-w-lg">Explore nossa variety selecionada para atender todas as suas necessidades.</p>
          </div>
          <button 
            type="button"
            onClick={handleCatalogClick}
            className="text-blue-600 font-bold flex items-center gap-2 group"
          >
            Ver Catálogo Completo
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};
