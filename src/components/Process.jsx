import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, Headphones, Sparkles } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion/Reveal';

const steps = [
  { icon: Search, title: 'Diagnóstico', desc: 'Analizamos la necesidad, el contexto técnico y los objetivos del negocio para definir el alcance correcto.', color: 'text-sky-500 bg-sky-500/10 border-sky-200 dark:border-sky-800' },
  { icon: PenTool, title: 'Propuesta & Diseño', desc: 'Diseñamos la solución con arquitectura clara, entregables definidos y estimación transparente.', color: 'text-indigo-500 bg-indigo-500/10 border-indigo-200 dark:border-indigo-800' },
  { icon: Rocket, title: 'Implementación', desc: 'Desarrollo e integración con buenas prácticas, pruebas y comunicación durante todo el proceso.', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-200 dark:border-emerald-800' },
  { icon: Headphones, title: 'Soporte & Evolución', desc: 'Acompañamiento post-entrega, optimización continua y soporte para que la solución siga rindiendo.', color: 'text-amber-500 bg-amber-500/10 border-amber-200 dark:border-amber-800' },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Cómo trabajamos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Un proceso claro, de principio a fin</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">Metodología enfocada en claridad, calidad técnica y resultados medibles en cada etapa del proyecto.</p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title}>
                <motion.div whileHover={{ y: -6 }} className="relative h-full p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${s.color}`}><Icon className="w-5 h-5" /></div>
                    <span className="text-3xl font-black text-slate-100 dark:text-slate-800 select-none">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}