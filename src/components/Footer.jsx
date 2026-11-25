import React from 'react';
import Logo from './Logo';
import { personalInfo, getWhatsAppUrl } from '../data/portfolioData';
import { Github, Linkedin, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-14 bg-white dark:bg-[#080d1a] border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100 dark:border-slate-800/80">
          <div className="md:col-span-5 space-y-4">
            <Logo className="w-10 h-10" />
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Soluciones de tecnología end-to-end: desarrollo web, redes e infraestructura, soporte TI, cloud, analítica y ciberseguridad.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>Orellana, Ecuador · Proyectos locales y remotos</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Navegación</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li><a href="#inicio" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Servicios</a></li>
              <li><a href="#areas" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Especialidades</a></li>
              <li><a href="#proceso" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Proceso</a></li>
              <li><a href="#cotizador" className="hover:text-sky-600 dark:hover:text-sky-400 transition text-sky-600 dark:text-sky-400 font-semibold">Cotizador</a></li>
              <li><a href="#proyectos" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Casos</a></li>
              <li><a href="#contacto" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Contacto & Redes</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Escríbenos para cotizaciones o consultas técnicas.</p>
            <div className="flex items-center space-x-2.5 pt-1">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition" title="WhatsApp"><MessageCircle className="w-4 h-4" /></a>
              <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/60 transition" title="Correo"><Mail className="w-4 h-4" /></a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition" title="GitHub"><Github className="w-4 h-4" /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/60 transition" title="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            </div>
            <div className="text-[11px] text-slate-400 pt-2 font-mono">Tel: {personalInfo.whatsappDisplay}</div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 text-center sm:text-left">
          <div>&copy; {currentYear} <strong>Soluciones IT</strong> · Servicios profesionales de tecnología.</div>
          <div className="flex items-center space-x-1 text-slate-400">
            <span>Stack:</span><span className="font-semibold text-slate-700 dark:text-slate-300">React + Vite + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}