
import React from 'react';
import { BENEFITS } from '../constants';

export const BenefitsStrip: React.FC = () => {
  return (
    <section className="bg-yellow-400 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-[24px] bg-blue-900 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl shadow-blue-950/20">
                {benefit.icon}
              </div>
              <h3 className="text-blue-900 font-black text-sm uppercase tracking-tight mb-1">{benefit.title}</h3>
              <p className="text-blue-900/60 text-xs font-bold leading-tight">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
