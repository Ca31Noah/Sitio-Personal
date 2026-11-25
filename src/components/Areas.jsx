import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Network, Database, Cloud, BarChart3, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion/Reveal';

const areas = [
  { icon: Code2, title: 'Ingeniería Web', desc: 'Aplicaciones SPA, sitios corporativos y productos digitales con foco en rendimiento, UX y mantenibilidad.', points: ['React + Vite', 'APIs REST', 'Arquitectura modular'], color: 'from-sky-500/15 to-sky-500/0 text-sky-500' },
  { icon: Network, title: 'Infraestructura & Redes', desc: 'Diseño, diagnóstico y mantenimiento de redes LAN/Wi-Fi y fibra óptica para operación estable.', points: ['FTTH/HFC', 'Routing & Switching', 'Diagnóstico de enlaces'], color: 'from-indigo-500/15 to-indigo-500/0 text-indigo-500' },
  { icon: Database, title: 'Soporte TI & Datos', desc: 'Continuidad operativa con mantenimiento técnico, administración de bases de datos y respaldos.', points: ['SQL / PostgreSQL', 'Backups & contingencia', 'Soporte nivel 1/2'], color: 'from-emerald-500/15 to-emerald-500/0 text-emerald-500' },
  { icon: Cloud, title: 'Cloud & Microservicios', desc: 'Arquitecturas escalables, contenedores y despliegues en nube orientados a disponibilidad.', points: ['Docker', 'AWS / GCP', 'Servicios desacoplados'], color: 'from-cyan-500/15 to-cyan-500/0 text-cyan-500' },
  { icon: BarChart3, title: 'Business Intelligence', desc: 'Dashboards y modelado de datos para convertir información dispersa en decisiones accionables.', points: ['Power BI + DAX', 'KPIs ejecutivos', 'Automatización de reportes'], color: 'from-amber-500/15 to-amber-500/0 text-amber-500' },
  { icon: ShieldCheck, title: 'Ciberseguridad', desc: 'Evaluación preventiva, hardening y buenas prácticas para proteger activos digitales.', points: ['Auditoría básica', 'Políticas de acceso', 'Desarrollo seguro'], color: 'from-purple-500/15 to-purple-500/0 text-purple-500' },
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-[#070b14]/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Áreas de especialidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Capacidades técnicas al servicio de tu operación</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">Dominio transversal de desarrollo, infraestructura, datos y seguridad para resolver necesidades tecnológicas completas.</p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => {
            const Icon = a.icon;
            return (
              <StaggerItem key={a.title}>
                <motion.div whileHover={{ y: -6 }} className="h-full p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-lg transition-all overflow-hidden relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${a.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 ${a.color.split(' ').pop()}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{a.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{a.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {a.points.map((p) => (
                        <span key={p} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">{p}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}