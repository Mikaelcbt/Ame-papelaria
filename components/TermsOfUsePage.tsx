
import React from 'react';
import { FileText, Calendar, AlertCircle } from 'lucide-react';

export const TermsOfUsePage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen">
      {/* Header da Página */}
      <div className="bg-blue-950 py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 transform origin-top" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <FileText className="w-4 h-4" /> Regras do Site
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            Termos de <span className="text-yellow-400">Uso</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-100/60 font-bold text-sm">
            <Calendar className="w-4 h-4" />
            Última atualização: {currentDate}
          </div>
        </div>
      </div>

      {/* Conteúdo dos Termos */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-4">
          <div className="prose prose-slate max-w-none space-y-12">
            <div>
              <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-tight border-b-4 border-yellow-400 inline-block">Aceitação dos Termos</h2>
              <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-slate-200 pl-6">
                Ao acessar e utilizar este site, você concorda em cumprir estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve utilizar este serviço.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">1. Sobre o Site</h3>
              <p className="text-slate-600 leading-relaxed">
                O site da <strong>AME Papelaria</strong> é uma plataforma informativa e de catálogo de produtos. 
                <span className="block mt-4 bg-yellow-50 p-4 border border-yellow-200 rounded-2xl font-bold text-blue-900">
                  Importante: Este site não realiza vendas diretas online (e-commerce). Todas as negociações ocorrem através do nosso canal de atendimento via WhatsApp ou em nossa loja física.
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">2. Uso Permitido</h3>
              <p className="text-slate-600 leading-relaxed">
                O usuário se compromete a utilizar o site apenas para fins lícitos e informativos. É expressamente proibido:
              </p>
              <ul className="grid gap-4">
                <li className="flex gap-3 text-slate-600 font-medium">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" /> Tentar violar a segurança do servidor ou acessar dados privados.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" /> Copiar ou utilizar o conteúdo do site para fins comerciais sem autorização.
                </li>
                <li className="flex gap-3 text-slate-600 font-medium">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" /> Utilizar o catálogo para disseminação de informações falsas ou spam.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">3. Propriedade Intelectual</h3>
              <p className="text-slate-600 leading-relaxed">
                Todo o conteúdo presente neste site — incluindo logotipos, textos, fotografias, layout e elementos gráficos — é de propriedade exclusiva da <strong>AME Papelaria</strong> ou de seus licenciados, estando protegido pelas leis brasileiras de direitos autorais.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">4. Limitação de Responsabilidade</h3>
              <p className="text-slate-600 leading-relaxed">
                A AME Papelaria esforça-se para manter as informações do catálogo atualizadas, porém não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
                <li>Indisponibilidade momentânea de itens no estoque físico.</li>
                <li>Alterações de preços feitas pelos fornecedores sem aviso prévio.</li>
                <li>Falhas técnicas externas que impossibilitem o acesso ao site.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">5. Links Externos</h3>
              <p className="text-slate-600 leading-relaxed">
                Este site contém botões que redirecionam para plataformas externas, como WhatsApp e Google Maps. Não possuímos controle sobre os termos e políticas de privacidade dessas plataformas de terceiros.
              </p>
            </div>

            <div className="bg-slate-900 p-8 md:p-12 rounded-[50px] text-white">
              <h3 className="text-2xl font-black mb-6 text-yellow-400">6. Alterações nos Termos</h3>
              <p className="opacity-80 leading-relaxed">
                Estes Termos de Uso podem ser modificados periodicamente sem aviso prévio. O uso continuado do site após qualquer alteração constitui sua aceitação tácita dos novos termos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
