import React, { useState } from 'react';
import { skillsGrouped, personalInfo } from '../data/portfolioData';
import { 
  Cpu, 
  Sparkles, 
  Check, 
  Languages, 
  HeartHandshake, 
  Lightbulb,
  Terminal
} from 'lucide-react';

export default function Skills() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const categories = Object.keys(skillsGrouped);

  return (
    <section id="habilidades" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Dominio Técnico &amp; Herramientas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Competencias de Ingeniería &amp; Stack
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Habilidades técnicas y personales consolidadas en proyectos académicos y de campo para garantizar entregas limpias y de alto impacto.
          </p>
        </div>

        {/* Grid de Habilidades Técnicas Agrupadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => {
            const items = skillsGrouped[category];
            return (
              <div
                key={category}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      {category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {items.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          skill.highlight
                            ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/40 font-semibold'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección Complementaria: Habilidades Blandas e Idiomas del CV */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-sky-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-[#0f172a] border border-slate-200/90 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Habilidades Blandas */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                <span>Habilidades Profesionales &amp; Enfoque de Trabajo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Compromiso, Comunicación Clara y Adaptabilidad
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Más allá del código y los routers, el éxito de un proyecto TI radica en entender a las personas y resolver las causas raíz de cada desafío con iniciativa propia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {personalInfo.softSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="md:col-span-4 p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 shadow-xs">
              <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-wider mb-4">
                <Languages className="w-4 h-4" />
                <span>Dominio de Idiomas</span>
              </div>

              <div className="space-y-3">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0 last:pb-0">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{lang.name}</span>
                    <span className="text-xs font-semibold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-md border border-sky-200/50 dark:border-sky-800/40">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
