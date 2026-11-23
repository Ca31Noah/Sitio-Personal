import React, { useState } from 'react';
import { experience, education, certifications } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Trajectory() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="trayectoria" className="py-20 md:py-28 relative bg-slate-100/50 dark:bg-[#070b14]/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200/80 dark:border-teal-800/50 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>Trayectoria Comprobada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experiencia Laboral &amp; Formación
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Sólida trayectoria combinando experiencia práctica en campo (telecomunicaciones y soporte TI) con formación académica rigurosa en la ESPOCH y certificaciones internacionales.
          </p>
        </div>

        {/* Pestañas de Navegación Interactivas */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm inline-flex space-x-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'experience'
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experiencia Laboral ({experience.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Formación &amp; Cursos ({certifications.length + 1})</span>
            </button>
          </div>
        </div>

        {/* Contenido Pestaña 1: Experiencia Laboral */}
        {activeTab === 'experience' && (
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {experience.map((job, idx) => (
              <div
                key={job.id}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Marcador de tiempo central */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-sky-400 dark:border-sky-500 flex items-center justify-center z-10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                </div>

                {/* Tarjeta de Contenido */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                }`}>
                  <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition">
                    
                    <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                      idx % 2 === 0 ? 'md:justify-end' : 'justify-start'
                    }`}>
                      <span className="inline-flex items-center text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-md border border-sky-200/60 dark:border-sky-800/40">
                        <Calendar className="w-3 h-3 mr-1" />
                        {job.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                      {job.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                      {job.company}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-left">
                      {job.summary}
                    </p>

                    <div className="space-y-1.5 text-left mb-4">
                      {job.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 mr-2" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 ${
                      idx % 2 === 0 ? 'md:justify-end' : 'justify-start'
                    }`}>
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Contenido Pestaña 2: Formación y Cursos */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            
            {/* Grado Universitario Principal */}
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50/70 via-indigo-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 border border-sky-200 dark:border-slate-800 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-sky-500 text-white shadow-md shadow-sky-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                        {edu.badge}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white">
                        {edu.title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 w-fit">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-sky-500" />
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Grid de Cursos y Certificaciones Oficiales */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                Cursos &amp; Certificaciones Complementarias del CV
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-500 transition group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                        {cert.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {cert.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
