
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { trackMetaEvent } from '../services/metaPixelService';

export const WhatsAppFloating: React.FC = () => {
  const handleClick = () => {
    trackMetaEvent('Lead');
  };

  return (
    <a 
      href={CONTACT_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl whatsapp-float flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold">
        Atendimento Online
      </span>
    </a>
  );
};
