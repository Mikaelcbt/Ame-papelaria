
import React from 'react';
import { BRANDS } from '../constants';

export const PartnerBrands: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-blue-900 font-black text-3xl">Trabalhamos com as melhores marcas</h2>
        <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center gap-12 lg:gap-24">
          {[...BRANDS, ...BRANDS].map((brand, idx) => (
            <span 
              key={idx} 
              className="text-4xl lg:text-5xl font-black text-slate-200 hover:text-blue-900/20 transition-colors cursor-default select-none uppercase tracking-tighter"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
