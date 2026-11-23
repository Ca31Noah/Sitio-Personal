import React, { useState } from 'react';
import { personalInfo, getWhatsAppUrl, services } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: services[0].title,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quickPrompts = [
    { label: "Página Web en React", msg: "Hola Carlos, me interesa cotizar una página web interactiva con React y estilos modernos." },
    { label: "Redes & Fibra Óptica", msg: "Hola Carlos, requiero asesoría y soporte técnico para infraestructura de redes y fibra óptica." },
    { label: "Soporte TI & Bases de Datos", msg: "Hola Carlos, busco soporte técnico especializado y optimización para mis equipos y bases de datos." },
    { label: "Dashboard Power BI", msg: "Hola Carlos, me gustaría diseñar un dashboard ejecutivo en Power BI para mi negocio." }
  ];

  const handleQuickPrompt = (prompt) => {
    setFormData({
      ...formData,
      message: prompt.msg
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const dispatchToWhatsApp = () => {
    const formattedMsg = `Hola Carlos, te escribo desde tu página web:\n` +
      `• Nombre: ${formData.name || 'Cliente interesado'}\n` +
      `• Correo: ${formData.email || 'No especificado'}\n` +
      `• Servicio de interés: ${formData.service}\n` +
      `• Mensaje: ${formData.message || 'Deseo cotizar servicios de TI.'}`;
    window.open(getWhatsAppUrl(formattedMsg), '_blank');
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative bg-slate-100/60 dark:bg-[#070b14]/70 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Contacto Directo &amp; Contratación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hablemos de tu Próximo Proyecto TI
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            ¿Tienes una necesidad técnica, buscas desarrollo web a medida o requieres soporte especializado? Escríbeme directamente para una atención inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Columna Izquierda: Información de Contacto y Canales Directos */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta de Canales Rápidos */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                Canales de Atención Directa
              </h3>

              {/* Botón WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/50 hover:border-emerald-400 text-emerald-900 dark:text-emerald-200 transition group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-xs group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                      WhatsApp Inmediato
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {personalInfo.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Correo Electrónico */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-800/40 hover:border-sky-400 text-sky-900 dark:text-sky-200 transition group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-500 text-white shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-sky-700 dark:text-sky-400">
                      Correo Electrónico
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Ubicación Física */}
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase">
                    Ubicación y Residencia
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {personalInfo.location}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {personalInfo.address}
                  </div>
                </div>
              </div>

            </div>

            {/* Redes Sociales y Perfiles Profesionales */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                Perfiles Técnicos
              </span>
              <div className="flex items-center space-x-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 text-xs font-mono font-medium transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{personalInfo.githubUser}</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 hover:bg-sky-100 text-xs font-mono font-medium transition"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Atajos Rápidos de Consulta */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Atajos de Cotización Rápida
              </span>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleQuickPrompt(prompt)}
                    className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-sky-950/50 dark:hover:text-sky-300 transition"
                  >
                    + {prompt.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario Interactivo con Enlace Directo a WhatsApp/Correo */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/30 dark:shadow-none">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    ¡Datos Listos para Enviar!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Para asegurar que tu mensaje llegue al instante sin esperas en bandejas de spam, puedes enviarlo directamente a Carlos por WhatsApp con un solo clic.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={dispatchToWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir WhatsApp con este mensaje</span>
                    </button>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Editar formulario
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      Formulario de Consulta
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Completa tus datos o utiliza los botones de contacto directo para una respuesta ágil.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                        Tu Nombre o Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Ing. Roberto Mendoza"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                        Correo de Contacto *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                      Servicio Principal de Interés
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition cursor-pointer"
                    >
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                      Detalles de tu Requerimiento *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe qué solución necesitas, tiempos estimados o cualquier duda técnica..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 transition resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-md shadow-sky-500/20 hover:shadow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Procesar y Enviar Mensaje</span>
                    </button>

                    <button
                      type="button"
                      onClick={dispatchToWhatsApp}
                      className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 transition-all"
                      title="Enviar directamente por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Directo</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
