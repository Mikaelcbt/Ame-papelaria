
import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    name: "Daniel Davi",
    text: "Ótima recepção e preços acessíveis!",
    rating: 5,
    time: "há 2 semanas",
    role: "Cliente Local"
  },
  {
    name: "Rogério Dantas",
    text: "Atendimento excelente com materiais de ótima qualidade.",
    rating: 5,
    time: "há 38 semanas",
    role: "Cliente Local"
  },
  {
    name: "Ana Beatriz",
    text: "Melhor papelaria da região, sempre encontro o que preciso com um sorriso no rosto.",
    rating: 5,
    time: "há 1 mês",
    role: "Cliente Local"
  },
  {
    name: "Carlos Eduardo",
    text: "Preços justos e muita variedade. O atendimento pelo WhatsApp também é nota 10.",
    rating: 5,
    time: "há 3 meses",
    role: "Cliente Local"
  },
  {
    name: "Juliana Lima",
    text: "Amo os itens de papelaria criativa! É impossível entrar e não levar nada.",
    rating: 5,
    time: "há 5 meses",
    role: "Entusiasta de Papelaria"
  },
  {
    name: "Marcos Vinícius",
    text: "Loja organizada e equipe muito prestativa. Recomendo para listas escolares.",
    rating: 5,
    time: "há 8 meses",
    role: "Cliente Local"
  }
];

export const AboutUs: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      nextSlide();
      setTouchStart(null);
    } else if (diff < -50) {
      prevSlide();
      setTouchStart(null);
    }
  };

  return (
    <section id="quem-somos" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-blue-900 font-black text-4xl lg:text-5xl">Quem Somos</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-yellow-400 pl-6">
              "A AME Papelaria reúne variedade e qualidade em produtos escolares e de escritório, oferecendo atendimento próximo e soluções práticas para o dia a dia."
            </p>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Fundada com o propósito de transformar o ato de comprar materiais em uma experiência de cuidado e afeto, a AME tornou-se referência em Salvador por sua curadoria criteriosa de marcas e um atendimento que entende a necessidade real de cada cliente.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nossa trajetória é marcada pelo compromisso com a excelência e pela paixão por papelaria, buscando sempre as últimas tendências para inspirar a criatividade e a produtividade de nossos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-4xl font-black text-blue-900">+10k</p>
                <p className="text-sm text-slate-500 font-medium">Clientes Atendidos</p>
              </div>
              <div>
                <p className="text-4xl font-black text-blue-900">+5k</p>
                <p className="text-sm text-slate-500 font-medium">Produtos em Estoque</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-blue-900/5 relative min-h-[450px] flex flex-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="absolute -top-6 -right-6 bg-yellow-400 p-4 rounded-2xl text-blue-900 shadow-lg z-10">
              <Quote className="w-8 h-8 fill-blue-900" />
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-blue-900">O que dizem nossos clientes</h3>
              <span className="text-xs font-black text-blue-900/30 uppercase tracking-widest">
                {currentIndex + 1} / {REVIEWS.length}
              </span>
            </div>
            
            <div className="flex-grow relative min-h-[280px] overflow-hidden">
              {REVIEWS.map((review, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-slate-600 text-lg lg:text-xl leading-relaxed italic font-medium">
                      "{review.text}"
                    </p>
                    
                    <div>
                      <p className="font-black text-blue-900 text-lg uppercase tracking-tight">
                        — {review.name}
                      </p>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                        {review.role} • {review.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-100">
              <div className="flex gap-2">
                {REVIEWS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-blue-900' : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Ir para avaliação ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-xl hover:bg-slate-50 text-blue-900 transition-colors"
                  aria-label="Avaliação anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-xl hover:bg-slate-50 text-blue-900 transition-colors"
                  aria-label="Próxima avaliação"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <a 
                href="https://www.google.com/maps/place/AME+COMERCIAL+DE+MATERIAIS+DE+ESCRIT%C3%93RIO+LTDA/@-13.0081408,-38.4818358,17z/data=!3m1!5s0x7161caa5d0af273:0x1aabecf732467ad9!4m8!3m7!1s0x7161caa5d6fd0b1:0xa93b05ea0391181d!8m2!3d-13.0081408!4d-38.4818358!9m1!1b1!16s%2Fg%2F1ptxlbwxs?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-sm font-black uppercase tracking-wider hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group"
              >
                Ver avaliações no Google
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.google.com/maps/place/AME+COMERCIAL+DE+MATERIAIS+DE+ESCRIT%C3%93RIO+LTDA/@-13.0081408,-38.4818358,17z/data=!3m1!5s0x7161caa5d0af273:0x1aabecf732467ad9!4m8!3m7!1s0x7161caa5d6fd0b1:0xa93b05ea0391181d!8m2!3d-13.0081408!4d-38.4818358!9m1!1b1!16s%2Fg%2F1ptxlbwxs?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-900/60 hover:text-blue-900 transition-colors flex items-center gap-1"
              >
                Nos avalie também <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
