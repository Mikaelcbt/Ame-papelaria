
import React from 'react';
import { ShieldCheck, Calendar } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-white min-h-screen">
      {/* Header da Página */}
      <div className="bg-blue-950 py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 transform origin-top" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-blue-900 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" /> Segurança de Dados
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            Política de <span className="text-yellow-400">Privacidade</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-blue-100/60 font-bold text-sm">
            <Calendar className="w-4 h-4" />
            Última atualização: {currentDate}
          </div>
        </div>
      </div>

      {/* Conteúdo da Política */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-4">
          <div className="prose prose-slate max-w-none space-y-12">
            <div>
              <h2 className="text-3xl font-black text-blue-900 mb-6 uppercase tracking-tight border-b-4 border-yellow-400 inline-block">Introdução</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                A <strong>AME Papelaria</strong> está comprometida com a proteção de sua privacidade. Esta Política descreve como coletamos, utilizamos e protegemos seus dados pessoais conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>
            </div>

            <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100">
              <h3 className="text-2xl font-black text-blue-900 mb-6">1. Dados Coletados</h3>
              <p className="text-slate-600 mb-6">Coletamos informações essenciais para fornecer nossos serviços e melhorar sua experiência:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 text-blue-900 font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" /> Nome Completo
                </li>
                <li className="flex items-center gap-3 text-blue-900 font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" /> WhatsApp / Telefone
                </li>
                <li className="flex items-center gap-3 text-blue-900 font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" /> E-mail
                </li>
                <li className="flex items-center gap-3 text-blue-900 font-bold bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" /> Dados de Navegação (Cookies)
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">2. Finalidade da Coleta</h3>
              <p className="text-slate-600 leading-relaxed">Seus dados são utilizados exclusivamente para:</p>
              <div className="grid gap-4">
                <div className="border-l-4 border-blue-900 pl-6 py-2">
                  <h4 className="font-black text-blue-900">Atendimento via WhatsApp</h4>
                  <p className="text-sm text-slate-500">Para responder orçamentos e dúvidas sobre produtos do catálogo.</p>
                </div>
                <div className="border-l-4 border-blue-900 pl-6 py-2">
                  <h4 className="font-black text-blue-900">Melhoria da Experiência</h4>
                  <p className="text-sm text-slate-500">Personalizar o site e entender as necessidades de nossos clientes em Salvador.</p>
                </div>
                <div className="border-l-4 border-blue-900 pl-6 py-2">
                  <h4 className="font-black text-blue-900">Métricas e Análises</h4>
                  <p className="text-sm text-slate-500">Monitorar o desempenho do site e fluxos de navegação.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">3. Compartilhamento de Dados</h3>
              <p className="text-slate-600 leading-relaxed">
                Informamos que <strong>não realizamos a venda de seus dados pessoais</strong>. O compartilhamento ocorre apenas com parceiros essenciais para o funcionamento do site, tais como:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 font-medium">
                <li>Serviços de hospedagem e infraestrutura técnica.</li>
                <li>Ferramentas de análise de tráfego (Google Analytics).</li>
                <li>Serviços de comunicação e integração de chat/WhatsApp.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">4. Segurança da Informação</h3>
              <p className="text-slate-600 leading-relaxed">
                Adotamos medidas técnicas e administrativas avançadas para proteger seus dados contra acessos não autorizados, perdas ou qualquer forma de tratamento inadequado. Utilizamos criptografia e protocolos de segurança em nossas integrações.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">5. Cookies</h3>
              <p className="text-slate-600 leading-relaxed">
                Utilizamos cookies para otimizar sua navegação e coletar métricas anônimas. Você pode configurar seu navegador para recusar cookies, embora isso possa afetar algumas funcionalidades do site.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">6. Direitos do Usuário</h3>
              <p className="text-slate-600 leading-relaxed">
                Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados a qualquer momento. Para exercer esses direitos, entre em contato através do nosso WhatsApp oficial.
              </p>
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex items-center gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-2xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-blue-900 uppercase opacity-60">Contato Encarregado de Dados</p>
                  <p className="text-blue-900 font-bold">(71) 98359-2706</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-blue-900">7. Alterações na Política</h3>
              <p className="text-slate-600 leading-relaxed">
                Esta Política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou por exigências legais. Recomendamos a consulta regular desta página.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
