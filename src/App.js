import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ServicesNote from './components/ServicesNote';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import GalleryPage from "./components/pages/GalleryPage";
import PhysicalTherapyPage from "./components/pages/PhysicalTherapyPage";
import EvaluationPage from "./components/pages/EvaluationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ServicesSection />
                <AboutSection />
                <ServicesNote />
                <ContactCTA />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/physical-therapy" element={<PhysicalTherapyPage />} />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
