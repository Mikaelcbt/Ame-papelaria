
import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Location: React.FC = () => {
  // URL codificada para o Google Maps baseada no endereço da constante
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;
  
  // URL de Embed do Google Maps para o endereço específico
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.828854005183!2d-38.48398462414742!3d-13.014732187304104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035c91f9b3b5%3A0x67399895c27f6742!2sAv.%20Vale%20das%20Pedrinhas%2C%20431%20-%20Nordeste%20de%20Amaralina%2C%20Salvador%20-%20BA%2C%2041905-615!5e0!3m2!1spt-BR!2sbr!4v1716382000000!5m2!1spt-BR!2sbr";

  return (
    <section id="localizacao" className="py-20 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Título Grande e Impactante */}
        <h2 className="text-white font-black text-6xl md:text-8xl mb-12 tracking-tighter drop-shadow-sm text-center">
          Localização
        </h2>

        {/* Container do Mapa */}
        <div className="w-full max-w-5xl bg-white p-2 md:p-4 rounded-[32px] md:rounded-[48px] shadow-2xl relative overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full rounded-[24px] md:rounded-[40px] overflow-hidden border border-slate-100">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização AME Papelaria"
              className="grayscale-[0.2] contrast-[1.1]"
            ></iframe>
          </div>
        </div>

        {/* Botão de Ação Inferior */}
        <div className="mt-10 w-full max-w-2xl px-4">
          <a 
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-6 bg-[#0055a4] hover:bg-[#004488] text-white rounded-2xl md:rounded-3xl font-black text-xl md:text-2xl flex items-center justify-center gap-4 shadow-xl transition-all hover:scale-[1.02] active:scale-95 group uppercase tracking-tight"
          >
            <MapPin className="w-6 h-6 md:w-8 md:h-8 group-hover:animate-bounce" />
            Ver no Google Maps
          </a>
        </div>

        {/* Informação Extra do Endereço */}
        <p className="mt-8 text-blue-900/60 font-bold text-center text-sm md:text-base max-w-xl">
          {CONTACT_INFO.address}
        </p>
      </div>
    </section>
  );
};
