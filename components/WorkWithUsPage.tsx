
import React from 'react';
import { Target, Eye, Heart, Briefcase, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const WorkWithUsPage: React.FC = () => {
  const values = [
    {
      title: "Missão",
      icon: <Target className="w-8 h-8" />,
      text: "Proporcionar o melhor em materiais de papelaria e escritório com excelência no atendimento, facilitando a rotina criativa e produtiva de nossos clientes.",
      color: "bg-blue-900 text-white"
    },
    {
      title: "Visão",
      icon: <Eye className="w-8 h-8" />,
      text: "Ser a maior e mais amada papelaria de Salvador, reconhecida pelo afeto, variedade incomparável e soluções práticas para todas as idades.",
      color: "bg-yellow-400 text-blue-900"
    },
    {
      title: "Valores",
      icon: <Heart className="w-8 h-8" />,
      text: "Ética inegociável, Qualidade em cada detalhe, Comprometimento com o cliente e Atendimento humanizado acima de tudo.",
      color: "bg-white text-blue-900 border border-slate-100"
    }
  ];

  const whatsappCVLink = `${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Olá, vim pelo site da AME Papelaria e gostaria de enviar meu currículo.")}`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative bg-blue-950 py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 -skew-x-12 transform origin-top" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Trabalhe <span className="text-yellow-400 underline decoration-white/20">Conosco</span>
            </h1>
            <p className="text-blue-100/60 text-xl font-medium leading-relaxed">
              Faça parte de uma equipe apaixonada por organização, criatividade e atendimento de excelência. Estamos sempre em busca de novos talentos.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {values.map((v, i) => (
              <div key={i} className={`p-10 rounded-[50px] shadow-2xl transition-all duration-300 hover:-translate-y-2 ${v.color}`}>
                <div className="mb-6 opacity-80">{v.icon}</div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{v.title}</h3>
                <p className="font-medium leading-relaxed opacity-90">{v.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[60px] p-10 md:p-20 border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-xs font-black uppercase tracking-widest">
                <Briefcase className="w-4 h-4" /> Vagas Abertas
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tight leading-tight">
                Quer fazer parte da <span className="text-blue-600">Família AME</span>?
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                "Buscamos profissionais proativos, que amem o contato com o público e que tenham vontade de crescer junto com a maior papelaria da região."
              </p>
              
              <div className="space-y-6 pt-4">
                <p className="text-blue-900 font-black text-xl flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">1</span>
                  Prepare seu currículo em formato PDF
                </p>
                <p className="text-blue-900 font-black text-xl flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">2</span>
                  Escolha seu canal de preferência abaixo
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a 
                  href={whatsappCVLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-green-500 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  ENVIAR PELO ZAP
                </a>
                <a 
                  href="mailto:curriculo@amepapelaria.com.br"
                  className="px-10 py-5 bg-blue-900 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20"
                >
                  <Mail className="w-6 h-6" />
                  ENVIAR POR E-MAIL
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                alt="Equipe trabalhando" 
                className="relative rounded-[60px] shadow-2xl rotate-2 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
