import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCards from './components/ProductCards';
import SnacksSection from './components/SnacksSection';
import ArnoldSection from './components/ArnoldSection';
import ChickenBurgerSection from './components/ChickenBurgerSection';
import FlavourSection from './components/FlavourSection';
import CravingSection from './components/CravingSection';
import FuelSection from './components/FuelSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductCards />
        <SnacksSection />
        <ArnoldSection />
        <ChickenBurgerSection />
        <FlavourSection />
        <CravingSection />
        <FuelSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;