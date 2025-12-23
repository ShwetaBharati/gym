import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServicesSection />
    </div>
  );
}

export default App;
