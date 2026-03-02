
import React from 'react';
import { CreditCard, QrCode, Banknote, Divide, CheckCircle2 } from 'lucide-react';

export const PaymentMethodsPage: React.FC = () => {
  const methods = [
    {
      title: "Cartão de Crédito",
      icon: <CreditCard className="w-10 h-10 text-blue-900" />,
      description: "Aceitamos as principais bandeiras (Visa, Master, Elo, Hipercard, Amex).",
      features: ["Parcelamento em até 10x*", "Sem juros até 3x", "Aprovação imediata"]
    },
    {
      title: "Pix",
      icon: <QrCode className="w-10 h-10 text-green-600" />,
      description: "A forma mais rápida e prática de pagar com benefícios exclusivos.",
      features: ["Desconto de 5% em toda loja", "Processamento instantâneo", "Segurança total"]
    },
    {
      title: "Dinheiro / Débito",
      icon: <Banknote className="w-10 h-10 text-yellow-600" />,
      description: "Pagamentos presenciais em nossa loja física com total comodidade.",
      features: ["Sem taxas adicionais", "Troco garantido", "Comprovante impresso"]
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-blue-900 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Formas de <span className="text-yellow-400">Pagamento</span>
          </h1>
          <p className="text-blue-100/60 text-xl max-w-2xl mx-auto font-medium">
            Facilitamos suas compras com as melhores condições do mercado. Escolha a que melhor se adapta a você.
          </p>
        </div>
      </div>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {methods.map((method, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-4">{method.title}</h3>
                <p className="text-slate-500 mb-8 font-medium leading-relaxed">{method.description}</p>
                <ul className="space-y-4">
                  {method.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-yellow-400 p-12 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-blue-900 p-6 rounded-full text-yellow-400">
                <Divide className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-blue-900 font-black text-3xl tracking-tighter uppercase">Parcelamento Facilitado</h3>
                <p className="text-blue-900/70 font-bold">Consulte as condições para parcelas mínimas de R$ 50,00.</p>
              </div>
            </div>
            <p className="text-blue-900 text-sm font-black italic opacity-60">*Sujeito a análise de crédito.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
