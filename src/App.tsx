import React from 'react';
import Header from './components/Header';

import HeroSection from './components/HeroSection';


import ArnoldSection from './components/ArnoldSection';
import ChickenBurgerSection from './components/ChickenBurgerSection';
import FlavourSection from './components/FlavourSection';
import CravingSection from './components/CravingSection';
import FuelSection from './components/FuelSection';
import Footer from './components/Footer';
import MenuSection from './components/ProductCards';
// import SnacksSection from './components/SnacksSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MenuSection/>
        {/* <SnacksSection />  */}
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