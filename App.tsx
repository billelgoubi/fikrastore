
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-amber-50 text-gray-900 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <GallerySection />
        <PricingSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
