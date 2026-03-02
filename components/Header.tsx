
import React, { useState } from 'react';
import { Search, MessageSquare, Instagram, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../constants';
import { Page } from '../App';
import { trackMetaEvent } from '../services/metaPixelService';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Produtos', href: '#produtos', type: 'anchor' },
    { name: 'Quem Somos', href: '#quem-somos', type: 'anchor' },
    { name: 'Localização', href: '#localizacao', type: 'anchor' },
    { name: 'FAQ', page: 'faq', type: 'page' },
  ];

  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    if (item.type === 'page') {
      onNavigate(item.page as Page);
    } else {
      onNavigate('home');
      setTimeout(() => {
        const targetId = item.href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    trackMetaEvent('Lead');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Header sem altura fixa, usando py-4 conforme solicitado para não limitar a logo */}
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Container da Logo com altura de 72px (desktop) e 48px (mobile) */}
        <div onClick={handleLogoClick} className="cursor-pointer flex items-center">
          <Logo className="h-12 md:h-[72px]" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-black uppercase tracking-widest text-blue-900/60">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href || '#'}
              onClick={(e) => handleLinkClick(e, link)}
              className="hover:text-blue-900 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-wider hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>

          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="hidden sm:flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-wider hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
          
          <button 
            type="button"
            className="md:hidden p-2 text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 top-[72px] md:top-[104px] bg-white z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href || '#'}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-3xl font-black text-blue-900 uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4">
            <a 
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-900 text-white p-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 shadow-xl"
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </a>
            <a 
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 text-white p-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 shadow-xl"
            >
              <MessageSquare className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
