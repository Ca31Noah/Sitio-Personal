import React from 'react';
import { personalInfo, getWhatsAppUrl } from '../data/portfolioData';
import { 
  ArrowRight, 
  MessageCircle, 
  Calculator, 
  Code2, 
  Network, 
  Wrench, 
  BarChart3, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Download
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Luces y fondos degradados suaves de fondo */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-400/15 via-indigo-400/15 to-purple-400/10 rounded-full soft-blur-glow -z-10 pointer-events-none" />
      <div className="absolute top-48 right-10 w-[300px] h-[300px] bg-emerald-400/10 rounded-full soft-blur-glow -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Presentación y Titulares */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Badge de Disponibilidad y Título Profesional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-200 dark:border-sky-800/60 bg-sky-50/80 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Ingeniero en Tecnologías de la Información · ESPOCH</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Ingeniería en TI &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-600 dark:from-sky-400 dark:via-indigo-400 dark:to-teal-300">
                Soluciones Digitales
              </span>
            </h1>

            {/* Subtítulo / Propuesta de Valor */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hola, soy <strong className="text-slate-900 dark:text-white font-bold">{personalInfo.name}</strong>. 
              Ayudo a empresas, emprendedores y organizaciones a implementar soluciones tecnológicas end-to-end: 
              desde <strong>desarrollo web interactivo</strong> con React y APIs modernas, hasta <strong>infraestructura de redes de fibra óptica</strong>, soporte técnico especializado y analítica con Power BI.
            </p>

            {/* Metadatos rápidos de contacto y ubicación */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Disponibilidad Inmediata
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                Garantía y Soporte Técnico
              </span>
            </div>

            {/* Botones de Acción Interactivos */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#cotizador"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:-translate-y-0.5 group"
              >
                <Calculator className="w-4 h-4" />
                <span>Cotizador de Servicios</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold border border-emerald-300 dark:border-emerald-800/70 bg-emerald-50/80 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Conversar por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-medium border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all"
              >
                <span>Ver Servicios</span>
              </a>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Interactiva de Perfil y Especialidades */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none">
              
              {/* Encabezado de la tarjeta con Monograma */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center space-x-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-md shadow-sky-500/20">
                    <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-[14px] flex items-center justify-center">
                      <span className="font-mono font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                        &lt;/N&gt;
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Ingeniero en TI · ESPOCH
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-medium">
                      ● Listo para trabajar
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Sede</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Orellana, EC</span>
                </div>
              </div>

              {/* Pilares Clave de Competencias */}
              <div className="py-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Áreas de Especialidad Profesional
                </p>

                <div className="space-y-2.5">
                  {[
                    { icon: Code2, title: "Desarrollo Web & Software", desc: "React, JavaScript, Python, PHP", color: "text-sky-500 bg-sky-50 dark:bg-sky-950/40" },
                    { icon: Network, title: "Redes & Fibra Óptica", desc: "Instalación, soporte y mantenimiento (Cocateve)", color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" },
                    { icon: Wrench, title: "Soporte TI & Bases de Datos", desc: "Hardware, servidores y afinamiento SQL", color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40" },
                    { icon: BarChart3, title: "Power BI & Analítica de Datos", desc: "Modelado y dashboards interactivos", color: "text-amber-500 bg-amber-50 dark:bg-amber-950/40" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">{item.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer de la tarjeta con enlaces a GitHub & LinkedIn */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {personalInfo.email}
                </span>
                <div className="flex items-center space-x-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 hover:underline transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
