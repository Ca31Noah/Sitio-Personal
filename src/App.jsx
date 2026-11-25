import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroSplash from './components/IntroSplash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceCalculator from './components/ServiceCalculator';
import Projects from './components/Projects';
import Areas from './components/Areas';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [introDone, setIntroDone] = useState(() => sessionStorage.getItem('noah_intro_seen') === '1');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('carlos_noa_theme');
    if (savedTheme) return savedTheme === 'dark';
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('carlos_noa_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('carlos_noa_theme', 'light');
    }
  }, [isDarkMode]);

  const handleIntroDone = () => {
    sessionStorage.setItem('noah_intro_seen', '1');
    setIntroDone(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode
        ? 'bg-[#0b0f19] text-slate-100 bg-soft-grid-dark'
        : 'bg-slate-50 text-slate-800 bg-soft-grid-light'
    }`}>
      <AnimatePresence>
        {!introDone && <IntroSplash onDone={handleIntroDone} />}
      </AnimatePresence>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Areas />
        <Process />
        <ServiceCalculator />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
