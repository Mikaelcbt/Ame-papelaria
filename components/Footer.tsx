
import React from 'react';
import { Instagram, Facebook, Mail, HelpCircle, Briefcase, CreditCard, QrCode, Banknote } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../constants';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, page: Page, id?: string) => {
    e.preventDefault();
    onNavigate(page);
    if (id) {
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div onClick={() => onNavigate('home')} className="cursor-pointer">
              <Logo variant="light" className="h-12" />
            </div>
            <p className="text-sm leading-relaxed">
              Transformando sua rotina com variedade e carinho. O melhor da papelaria em Salvador desde 1998.
            </p>
            <div className="flex gap-4">
              <a href="#!" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-950 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#!" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-950 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#!" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-950 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">Explorar</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#produtos" onClick={(e) => handleNavClick(e, 'home', 'produtos')} className="hover:text-yellow-400 transition-colors">Produtos</a></li>
              <li><a href="#quem-somos" onClick={(e) => handleNavClick(e, 'home', 'quem-somos')} className="hover:text-yellow-400 transition-colors">Quem Somos</a></li>
              <li><a href="#localizacao" onClick={(e) => handleNavClick(e, 'home', 'localizacao')} className="hover:text-yellow-400 transition-colors">Localização</a></li>
              <li><a href="#contato" onClick={(e) => handleNavClick(e, 'home', 'contato')} className="hover:text-yellow-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">Institucional</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#!" onClick={(e) => handleNavClick(e, 'faq')} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <HelpCircle className="w-4 h-4" /> Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#!" onClick={(e) => handleNavClick(e, 'work')} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Briefcase className="w-4 h-4" /> Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Pagamento</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm font-bold text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-yellow-400" />
                </div>
                Cartão
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <QrCode className="w-4 h-4 text-green-400" />
                </div>
                Pix
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Banknote className="w-4 h-4 text-emerald-400" />
                </div>
                Dinheiro
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Links Institucionais (Conforme imagem de referência) */}
        <div className="flex items-center justify-center gap-4 text-sm font-medium mb-10 py-6 border-t border-white/5">
          <a 
            href="#!" 
            onClick={(e) => handleNavClick(e, 'privacy')} 
            className="text-slate-400 hover:text-white transition-colors"
          >
            Política de Privacidade
          </a>
          <span className="text-white/10 font-thin">|</span>
          <a 
            href="#!" 
            onClick={(e) => handleNavClick(e, 'terms')} 
            className="text-slate-400 hover:text-white transition-colors"
          >
            Termos de Uso
          </a>
        </div>
        
        {/* Rodapé Final com Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
          <p>© {new Date().getFullYear()} AME Papelaria - CNPJ: 07.805.424/0001-72</p>
          <p>Salvador — Bahia</p>
        </div>
      </div>
    </footer>
  );
};
