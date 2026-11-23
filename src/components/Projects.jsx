import React, { useState } from 'react';
import { projects, personalInfo } from '../data/portfolioData';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Code2,
  ArrowRight
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'web', label: 'Web & Deep Learning' },
    { id: 'security', label: 'Ciberseguridad & Python' },
    { id: 'mobile', label: 'Móvil (Kotlin)' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.filterKey === activeFilter);

  return (
    <section id="proyectos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Casos de Estudio &amp; Desarrollo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proyectos de Ingeniería Destacados
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Sistemas reales desarrollados con rigor técnico: algoritmos de visión por computador, optimización de rutas públicas, análisis forense de redes y aplicaciones nativas.
          </p>
        </div>

        {/* Filtros Interactivos */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 scale-105'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 transition-all duration-300 hover:border-sky-400 dark:hover:border-sky-500 hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Cabecera del proyecto */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/40 group-hover:scale-105 transition-transform">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        {project.category}
                      </span>
                      <div className="text-[11px] text-slate-400">
                        {project.badge}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600 transition"
                      title="Ver en GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Título y descripción */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.shortDesc}
                </p>

                {/* Reto e impacto resumido */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 mb-6 space-y-2 text-xs">
                  <div className="flex items-start text-slate-600 dark:text-slate-300">
                    <strong className="text-slate-800 dark:text-slate-200 shrink-0 mr-1.5">Reto:</strong>
                    <span>{project.challenge}</span>
                  </div>
                  <div className="flex items-start text-emerald-700 dark:text-emerald-400 font-medium">
                    <strong className="shrink-0 mr-1.5">Impacto:</strong>
                    <span>{project.impact}</span>
                  </div>
                </div>
              </div>

              {/* Tecnologías y botón de detalle */}
              <div>
                <div className="flex flex-wrap gap-1.5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-sky-200 dark:border-sky-800/70 bg-sky-50/50 dark:bg-sky-950/30 hover:bg-sky-100 dark:hover:bg-sky-900/40 text-sky-800 dark:text-sky-300 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Ver Ficha Técnica Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Interactivo de Ficha Técnica */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 transition"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block mb-1">
                Ficha Técnica · {selectedProject.category}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>
            </div>

            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Descripción General de la Solución
                </h4>
                <p className="leading-relaxed">
                  {selectedProject.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50">
                  <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase mb-1">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Desafío de Ingeniería</span>
                  </div>
                  <p className="text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50">
                  <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Solución e Impacto</span>
                  </div>
                  <p className="text-xs text-emerald-900 dark:text-emerald-200/90 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Stack Tecnológico Empleado
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  <span>Explorar Repositorio en GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:opacity-90 transition"
                >
                  Cerrar Ficha
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
