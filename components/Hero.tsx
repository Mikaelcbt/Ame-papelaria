
import React from 'react';
import { ShoppingBag, MessageCircle, Phone, MapPin, Headset } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { trackMetaEvent } from '../services/metaPixelService';

export const Hero: React.FC = () => {
  // Sophisticated minimalist stationery pattern
  const stationeryPattern = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 15l0 20l5 5l5 -5l0 -20z'/%3E%3Cpath d='M55 20c5 0 10 0 10 10l0 15c0 10 -5 10 -10 10c-5 0 -10 0 -10 -10l0 -12c0 -5 5 -5 10 -5c5 0 10 0 10 10'/%3E%3Cpath d='M95 15h12v35h-12zM95 22h4M95 29h6M95 36h4M95 43h6'/%3E%3Cpath d='M15 80h20v30h-20zM10 85h5M10 92h5M10 99h5'/%3E%3Cpath d='M55 80v30l5 5l5 -5v-30zM65 85h5'/%3E%3Cpath d='M95 85h20v25h-20zM95 95h20'/%3E%3C/g%3E%3C/svg%3E")`;
  const heroImageUrl = "https://image2url.com/r2/default/images/1771457886222-2d62a397-a795-47cf-b824-89f6c6daead2.jpeg";

  const handleScrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackMetaEvent('ViewContent');
    const elem = document.getElementById('produtos');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    trackMetaEvent('Lead');
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-blue-950 pt-20">
      
      {/* Background Mobile - Visible only below md */}
      <div className="absolute inset-0 z-0 md:hidden overflow-hidden">
        <style>{`
          @keyframes mobileHeroPan {
            0% { object-position: 0% 30%; }
            50% { object-position: 100% 30%; }
            100% { object-position: 0% 30%; }
          }
          .animate-hero-pan {
            animation: mobileHeroPan 20s ease-in-out infinite;
          }
        `}</style>
        <img 
          src={heroImageUrl} 
          alt="Papelaria Criativa AME" 
          className="w-full h-full object-cover animate-hero-pan scale-[1.1]"
        />
        <div className="absolute inset-0 bg-blue-950/80" />
      </div>

      {/* Background Layer Desktop: Deep Multi-layered Gradient & Organic Shapes - Visible md and up */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {/* Harmonious Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900" />
        
        {/* Subtle Yellow Light Glow */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-yellow-400/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]" />
        
        {/* Organic Diagonal Shapes for Depth */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[120%] bg-blue-900/40 -rotate-12 transform origin-top-right rounded-[100px] border-l border-white/5" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[80%] bg-blue-800/20 rotate-45 transform rounded-[100px]" />
        </div>

        {/* Minimalist Stationery Pattern Layer */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: stationeryPattern }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: Conteúdo Comercial (Centralizado no Mobile, Esquerda no Desktop) */}
          <div className="space-y-12 py-12 text-center md:text-left relative flex flex-col items-center md:items-start">
            {/* Subtle light glow behind text */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="space-y-8 relative">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-yellow-400 text-sm font-black uppercase tracking-[0.2em] shadow-2xl">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                Qualidade & Tradição em Salvador
              </div>

              <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
                Tudo para papelaria, <br/>
                <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]">escritório</span> <br/>
                <span className="text-blue-50/90">& criatividade.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100/60 max-w-xl leading-relaxed font-medium border-l-2 border-yellow-400/30 md:pl-6">
                Encontre variedade premium, marcas líderes e o atendimento especializado que você merece.
              </p>
            </div>

            {/* Bloco Informativo de Televendas */}
            <div className="relative group max-w-xl w-full">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl translate-x-1.5 translate-y-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-blue-950 shrink-0 shadow-lg">
                  <Headset className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg mb-1 uppercase tracking-tight">Atendimento Especializado</h3>
                  <p className="text-blue-100/60 text-sm font-medium leading-relaxed">
                    Nossa equipe de <span className="text-yellow-400">televendas</span> está pronta para te atender com rapidez e atenção total.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons & Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
              <a 
                href="#produtos" 
                onClick={handleScrollToProducts}
                className="w-full sm:w-auto px-12 py-6 bg-yellow-400 text-blue-950 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all shadow-[0_20px_40px_rgba(250,204,21,0.2)] hover:-translate-y-1 active:scale-95"
              >
                <ShoppingBag className="w-6 h-6" />
                VER PRODUTOS
              </a>
              <a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-12 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle className="w-6 h-6 text-green-400" />
                WHATSAPP
              </a>
            </div>

            {/* Contact Footer in Hero */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-8 opacity-60">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold text-white">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold text-white">{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem de Impacto Premium (Escondida no Mobile por já estar no Background) */}
          <div className="relative hidden lg:block h-full py-20">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Complex Geometric Decoration */}
              <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
              
              {/* Main Image Mask - Restored rotate-3 and full width behavior */}
              <div className="relative w-full aspect-square rounded-[80px] overflow-hidden border-[12px] border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] rotate-3 group transition-transform duration-700 ease-out">
                <img 
                  src={heroImageUrl} 
                  alt="Escritório Organizado AME" 
                  className="w-full h-full object-cover object-[center_30%] transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                
                {/* Floating Detail Badge */}
                <div className="absolute top-10 right-10 bg-yellow-400 p-6 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-blue-950 font-black rotate-12 group-hover:rotate-6 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-widest opacity-70">Desde 1998</span>
                  <span className="text-2xl tracking-tighter">PREMIUM</span>
                </div>
              </div>

              {/* Background Glows for the image */}
              <div className="absolute -z-10 w-full h-full bg-blue-600/20 blur-[100px] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
