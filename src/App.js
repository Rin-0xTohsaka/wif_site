import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TokenInfo from './components/TokenInfo';
import Story from './components/Story';
import Exchanges from './components/Exchanges';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TokenInfo />
        <Story />
        <Exchanges />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;