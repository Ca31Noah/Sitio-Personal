import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { getWhatsAppUrl } from '../data/portfolioData';
import { Menu, X, MessageCircle, Sun, Moon, Sparkles } from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Especialidades', href: '#areas' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Cotizador', href: '#cotizador', highlight: true },
    { name: 'Casos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-[#0b0f19]/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Oficial */}
          <a href="#inicio" className="flex items-center">
            <Logo className="w-9 h-9" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  link.highlight
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border border-sky-200/70 dark:border-sky-800/50 hover:bg-sky-100 dark:hover:bg-sky-900/40 flex items-center gap-1 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-spin-slow" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & WhatsApp CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Theme Switcher */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Cambiar tema de color"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 shadow-sm transition-all hover:scale-105"
              title={isDarkMode ? "Cambiar a Colores Suaves (Modo Claro)" : "Cambiar a Modo Oscuro"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-sm shadow-emerald-500/20 hover:shadow-md hover:shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar WhatsApp</span>
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Cambiar tema de color"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-base font-medium flex items-center justify-between transition ${
                      link.highlight
                        ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.highlight && <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300">Interactivo</span>}
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
