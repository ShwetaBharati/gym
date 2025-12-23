import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}

export default App;
