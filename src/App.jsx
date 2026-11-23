import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceCalculator from './components/ServiceCalculator';
import Projects from './components/Projects';
import Trajectory from './components/Trajectory';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  // Por defecto inicializamos en modo claro con colores suaves (o según preferencia guardada)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('carlos_noa_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Preferencia inicial: Modo claro suave
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0b0f19] text-slate-100 bg-soft-grid-dark' 
        : 'bg-slate-50 text-slate-800 bg-soft-grid-light'
    }`}>
      {/* Barra de navegación con selector de tema */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Contenido principal */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <ServiceCalculator />
        <Projects />
        <Trajectory />
        <Skills />
        <Contact />
      </main>

      {/* Pie de página oficial */}
      <Footer />

      {/* Botón flotante interactivo para WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
