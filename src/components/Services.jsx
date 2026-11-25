import React from 'react';
import { motion } from 'framer-motion';
import { services, getWhatsAppUrl } from '../data/portfolioData';
import { Code2, Network, Wrench, Cloud, BarChart3, ShieldCheck, CheckCircle2, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from './motion/Reveal';

const iconMap = { Code2, Network, Wrench, Cloud, BarChart3, ShieldCheck };
const colorStyles = {
  sky: { badge: 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/60', iconBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800', hoverBorder: 'hover:border-sky-400 dark:hover:border-sky-500', tag: 'bg-sky-50/80 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/40' },
  indigo: { badge: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60', iconBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800', hoverBorder: 'hover:border-indigo-400 dark:hover:border-indigo-500', tag: 'bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200/60 dark:border-indigo-800/40' },
  emerald: { badge: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60', iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800', hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500', tag: 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/40' },
  amber: { badge: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60', iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800', hoverBorder: 'hover:border-amber-400 dark:hover:border-amber-500', tag: 'bg-amber-50/80 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/40' },
  purple: { badge: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200/80 dark:border-purple-800/60', iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800', hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-500', tag: 'bg-purple-50/80 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/40' },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 border border-sky-200/80 dark:border-sky-800/50 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Servicios de tecnología</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Soluciones diseñadas para generar impacto</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">Servicios integrales de software, infraestructura, datos y seguridad para potenciar la eficiencia y continuidad operativa de tu negocio.</p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            const style = colorStyles[service.accentColor] || colorStyles.sky;
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className={`h-full p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 transition-colors duration-300 ${style.hoverBorder} shadow-sm hover:shadow-xl group flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${style.iconBg} group-hover:scale-110 transition-transform`}><Icon className="w-6 h-6" /></div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${style.badge}`}>{service.badge}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Incluye:</span>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 mr-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 pb-5 border-t border-slate-100 dark:border-slate-800/80">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${style.tag}`}>{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <a href="#cotizador" className="inline-flex items-center text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">
                        <span>Cotizar servicio</span><ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                      <a href={getWhatsAppUrl(`Hola, me interesa el servicio de: ${service.title}`)} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-400 transition" title="Consultar por WhatsApp">
                        <MessageCircle className="w-4 h-4" />
                      </a>
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