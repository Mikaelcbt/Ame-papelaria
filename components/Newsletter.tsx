
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Newsletter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de me cadastrar para receber novidades e ofertas da AME Papelaria.\n\n` +
                    `*Nome:* ${formData.name}\n` +
                    `*WhatsApp:* ${formData.whatsapp}\n` +
                    `*E-mail:* ${formData.email}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${CONTACT_INFO.whatsappLink}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Abstract circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full translate-x-1/3 translate-y-1/3 opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 relative text-center">
        <h2 className="text-white font-black text-4xl lg:text-5xl mb-6">Receba nossas novidades e ofertas</h2>
        <p className="text-blue-100/70 text-lg mb-12">Fique por dentro dos lançamentos e promoções exclusivas da AME Papelaria.</p>
        
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Seu nome" 
            className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:bg-white/20"
          />
          <input 
            type="text" 
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            placeholder="WhatsApp" 
            className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:bg-white/20"
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Seu E-mail" 
            className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:bg-white/20"
          />
          <div className="md:col-span-3">
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-yellow-400 text-blue-900 font-black rounded-2xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-3 mx-auto mt-4"
            >
              <Send className="w-5 h-5" />
              QUERO RECEBER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
