
import React, { useState } from 'react';
import { Clock, HelpCircle, ChevronDown, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Quais são as formas de entrega?",
      a: "Realizamos entregas em toda Salvador via motoboy (entrega no mesmo dia para pedidos até as 14h) e enviamos para todo o Brasil através dos Correios."
    },
    {
      q: "Qual o prazo para trocas e devoluções?",
      a: "Você tem até 7 dias corridos após o recebimento para solicitar a troca ou devolução de produtos não utilizados e em embalagem original."
    },
    {
      q: "Vocês fazem listas escolares completas?",
      a: "Sim! Somos especialistas em listas escolares. Você pode nos enviar a foto da lista pelo WhatsApp e fazemos o orçamento completo para você."
    },
    {
      q: "Trabalham com personalização de itens?",
      a: "Atualmente focamos em revenda das melhores marcas, mas temos uma seção de papelaria criativa com itens exclusivos que encantam a todos."
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Banner Horário */}
      <div className="bg-yellow-400 py-16 border-b border-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-blue-900 p-5 rounded-3xl text-yellow-400 shadow-xl">
              <Clock className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-blue-900 font-black text-3xl uppercase tracking-tighter">Horário de Atendimento</h2>
              <p className="text-blue-900/70 font-bold">Estamos prontos para te receber!</p>
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-white/40 flex gap-8">
            <div className="text-center">
              <p className="text-xs font-black text-blue-900 opacity-60 uppercase mb-1">Seg a Sex</p>
              <p className="text-2xl font-black text-blue-900">08:00 — 18:00</p>
            </div>
            <div className="w-px bg-blue-900/10" />
            <div className="text-center">
              <p className="text-xs font-black text-blue-900 opacity-60 uppercase mb-1">Sábados</p>
              <p className="text-2xl font-black text-blue-900">08:00 — 13:00</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
          
          {/* FAQ Accordion */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <HelpCircle className="w-4 h-4" /> Perguntas Comuns
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-12 tracking-tight">Dúvidas <span className="text-yellow-500">Frequentes</span></h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 rounded-[28px] overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className={`w-full p-8 text-left flex items-center justify-between transition-colors ${openIndex === idx ? 'bg-blue-900 text-white' : 'bg-slate-50 text-blue-900'}`}
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-500 overflow-hidden ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="p-8 text-slate-500 font-medium leading-relaxed bg-white">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form de Dúvidas */}
          <div className="bg-slate-50 p-10 lg:p-16 rounded-[60px] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl -mr-10 -mt-10" />
            
            <h3 className="text-3xl font-black text-blue-900 mb-4">Ainda com dúvidas?</h3>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">Envie sua mensagem, dúvida ou sugestão. Respondemos em até 24h úteis.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Seu nome completo" 
                className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
                <input 
                  type="text" 
                  placeholder="WhatsApp (ex: 71 9...)" 
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                />
              </div>
              <textarea 
                rows={4} 
                placeholder="Como podemos te ajudar?" 
                className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium resize-none"
              />
              <button className="w-full py-5 bg-blue-900 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20">
                <Send className="w-5 h-5" />
                ENVIAR MENSAGEM
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
              <p className="text-sm font-bold text-slate-400 mb-4">OU FALE DIRETAMENTE PELO</p>
              <a 
                href={CONTACT_INFO.whatsappLink}
                className="inline-flex items-center gap-2 text-green-600 font-black text-xl hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp Oficial
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
