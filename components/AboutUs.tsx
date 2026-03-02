
import React from 'react';
import { Quote } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="quem-somos" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-blue-900 font-black text-4xl lg:text-5xl">Quem Somos</h2>
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-yellow-400 pl-6">
              "A AME Papelaria reúne variedade e qualidade em produtos escolares e de escritório, oferecendo atendimento próximo e soluções práticas para o dia a dia."
            </p>
            <p className="text-slate-600 leading-relaxed">
              Fundada com o propósito de transformar o ato de comprar materiais em uma experiência de cuidado e afeto, a AME tornou-se referência em Salvador por sua curadoria criteriosa de marcas e um atendimento que entende a necessidade real de cada cliente.
            </p>
            
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

          <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-blue-900/5 relative">
            <div className="absolute -top-6 -right-6 bg-yellow-400 p-4 rounded-2xl text-blue-900 shadow-lg">
              <Quote className="w-8 h-8 fill-blue-900" />
            </div>
            
            <h3 className="text-xl font-bold text-blue-900 mb-8">O que dizem nossos clientes</h3>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500 text-xl">★</span>)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  "Atendimento impecável! Encontrei tudo o que precisava para a lista escolar do meu filho e ainda ganhei desconto no Pix. Super recomendo a AME!"
                </p>
                <p className="font-bold text-blue-900 text-sm">— Maria Clara Santos, Cliente Fiel</p>
              </div>
              
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-500 text-xl">★</span>)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  "Variedade incrível de canetas e itens de papelaria criativa. Minha loja favorita em Salvador."
                </p>
                <p className="font-bold text-blue-900 text-sm">— Ricardo Oliveira, Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
