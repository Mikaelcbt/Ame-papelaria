
import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[50px] p-8 lg:p-20 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-blue-900 font-black text-4xl lg:text-5xl leading-tight">
              Entre em contato — nossa equipe está pronta para te atender
            </h2>
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-900">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-medium">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-900">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="font-medium">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-green-500">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="font-medium">{CONTACT_INFO.whatsapp}</span>
              </div>
            </div>
            
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-12 py-6 bg-blue-900 text-white rounded-3xl font-black text-xl hover:bg-blue-800 transition-all shadow-2xl shadow-blue-900/30 items-center gap-4"
            >
              <MessageCircle className="w-8 h-8" />
              CHAMAR NO WHATSAPP
            </a>
          </div>
          
          <div className="lg:w-1/3 w-full">
            <img 
              src="https://image2url.com/r2/default/images/1771530134355-c17c5065-3e60-4d6e-b47f-a6daec8404e5.blob" 
              alt="Equipe AME Papelaria" 
              className="rounded-[40px] w-full aspect-square object-cover shadow-2xl rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
