
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsStrip } from './components/BenefitsStrip';
import { Categories } from './components/Categories';
import { AboutUs } from './components/AboutUs';
import { PartnerBrands } from './components/PartnerBrands';
import { Newsletter } from './components/Newsletter';
import { Location } from './components/Location';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { FAQPage } from './components/FAQPage';
import { WorkWithUsPage } from './components/WorkWithUsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/TermsOfUsePage';

import { trackMetaEvent } from './services/metaPixelService';

export type Page = 'home' | 'faq' | 'work' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    trackMetaEvent('PageView');
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigate={navigateTo} />
      
      {/* Ajustado pt-20 para pt-24 (ou pt-[104px]) para acomodar o header com a logo maior */}
      <main className="flex-grow pt-[104px] md:pt-[104px]">
        {currentPage === 'home' && (
          <>
            <Hero />
            <BenefitsStrip />
            <Categories />
            <AboutUs />
            <PartnerBrands />
            <Newsletter />
            <Location />
            <ContactSection />
          </>
        )}

        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'work' && <WorkWithUsPage />}
        {currentPage === 'privacy' && <PrivacyPolicyPage />}
        {currentPage === 'terms' && <TermsOfUsePage />}
      </main>

      <Footer onNavigate={navigateTo} />
      <WhatsAppFloating />
    </div>
  );
}

export default App;
