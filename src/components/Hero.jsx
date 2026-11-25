import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl } from '../data/portfolioData';
import { ArrowRight, MessageCircle, Calculator, Code2, Network, Wrench, BarChart3, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion/Reveal';

const stats = [
  { value: '6', label: 'Áreas de especialidad', icon: Zap },
  { value: 'E2E', label: 'Soluciones end-to-end', icon: CheckCircle2 },
  { value: '24/7', label: 'Enfoque en continuidad', icon: ShieldCheck },
];

const specialties = [
  { icon: Code2, title: 'Desarrollo Web & Software', desc: 'Plataformas modernas, rápidas y escalables', color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/40' },
  { icon: Network, title: 'Redes & Fibra Óptica', desc: 'Conectividad estable y segura para operar', color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' },
  { icon: Wrench, title: 'Soporte TI & Bases de Datos', desc: 'Mantenimiento, optimización y respaldo', color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
  { icon: BarChart3, title: 'Cloud & Analítica', desc: 'Escalabilidad, métricas y decisiones con datos', color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
];

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-sky-400/20 via-indigo-400/15 to-purple-400/10 rounded-full soft-blur-glow -z-10 pointer-events-none"
        animate={reduce ? {} : { scale: [1, 1.08, 1], x: ['-50%', '-48%', '-50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-48 right-10 w-[300px] h-[300px] bg-emerald-400/10 rounded-full soft-blur-glow -z-10 pointer-events-none"
        animate={reduce ? {} : { y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-200 dark:border-sky-800/60 bg-sky-50/80 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Soluciones Tecnológicas Profesionales</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Tecnología que impulsa{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-600 dark:from-sky-400 dark:via-indigo-400 dark:to-teal-300">
                  tu negocio
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Diseñamos e implementamos soluciones digitales end-to-end: <strong className="text-slate-900 dark:text-white">desarrollo web</strong>, <strong className="text-slate-900 dark:text-white">redes y fibra óptica</strong>, <strong className="text-slate-900 dark:text-white">soporte TI</strong>, cloud y analítica. Cada servicio está orientado a rendimiento, seguridad y continuidad operativa.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <motion.a
                  href="#cotizador"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all group"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Cotizar proyecto</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href={getWhatsAppUrl('Hola, quiero asesoría sobre sus servicios de tecnología.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold border border-emerald-300 dark:border-emerald-800/70 bg-emerald-50/80 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hablar por WhatsApp</span>
                </motion.a>
                <motion.a href="#servicios" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-medium border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all">
                  Explorar servicios
                </motion.a>
              </div>
            </Reveal>

            <Stagger className="grid grid-cols-3 gap-3 pt-4 max-w-xl mx-auto lg:mx-0" delay={0.2}>
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <StaggerItem key={s.label}>
                    <div className="p-3 rounded-2xl glass-card text-center lg:text-left">
                      <Icon className="w-4 h-4 text-sky-500 mb-1 mx-auto lg:mx-0" />
                      <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">{s.value}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{s.label}</div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          <Reveal className="lg:col-span-5" delay={0.15} y={30}>
            <motion.div
              className="relative mx-auto max-w-md p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none"
              whileHover={reduce ? {} : { y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-[11px] font-bold shadow-lg">
                Enfoque en resultados
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Áreas de especialidad</p>
              <Stagger className="space-y-2.5" stagger={0.07} delay={0.1}>
                {specialties.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                      <div className={`p-2 rounded-lg ${item.color}`}><item.icon className="w-4 h-4" /></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Orellana, Ecuador · Remoto</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Disponible</span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}