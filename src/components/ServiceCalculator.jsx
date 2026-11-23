import React, { useState } from 'react';
import { calculatorOptions, getWhatsAppUrl, personalInfo } from '../data/portfolioData';
import { 
  Calculator, 
  Code2, 
  Network, 
  Wrench, 
  Cloud, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Network: Network,
  Wrench: Wrench,
  Cloud: Cloud,
  BarChart3: BarChart3,
  ShieldCheck: ShieldCheck,
};

export default function ServiceCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState(calculatorOptions.services[0].id);
  const [selectedScopeId, setSelectedScopeId] = useState(calculatorOptions.scopes[0].id);
  const [selectedAddons, setSelectedAddons] = useState(['cloudDeploy']);

  // Obtener servicio seleccionado
  const currentService = calculatorOptions.services.find(s => s.id === selectedServiceId) || calculatorOptions.services[0];
  const currentScope = calculatorOptions.scopes.find(s => s.id === selectedScopeId) || calculatorOptions.scopes[0];

  // Calcular precio y días
  const basePrice = currentService.basePrice;
  const baseDays = currentService.baseDays;

  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const addon = calculatorOptions.addons.find(a => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);

  const addonsDays = selectedAddons.reduce((acc, addonId) => {
    const addon = calculatorOptions.addons.find(a => a.id === addonId);
    return acc + (addon ? addon.days : 0);
  }, 0);

  const estimatedPrice = Math.round((basePrice * currentScope.multiplier) + addonsTotal);
  const estimatedDays = Math.max(2, Math.round((baseDays * currentScope.daysMultiplier) + addonsDays));

  // Toggle addon
  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Crear mensaje para WhatsApp
  const addonsNames = selectedAddons
    .map(aId => calculatorOptions.addons.find(a => a.id === aId)?.name)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = `Hola Carlos, utilicé el Cotizador Interactivo de tu página web:\n` +
    `• Servicio: ${currentService.name}\n` +
    `• Alcance: ${currentScope.name}\n` +
    `• Adicionales: ${addonsNames || 'Ninguno'}\n` +
    `• Estimado Referencial: ~$${estimatedPrice} USD (${estimatedDays} días hábiles)\n` +
    `Me gustaría coordinar una reunión o propuesta formal para mi proyecto.`;

  return (
    <section id="cotizador" className="py-20 md:py-28 relative bg-slate-100/60 dark:bg-[#070b14]/70 border-y border-slate-200/80 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cotizador Interactivo de Servicios TI
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Personaliza el tipo de servicio, el alcance requerido y obtén una estimación inmediata de tiempo e inversión referencial para contactar a Carlos con los requerimientos listos.
          </p>
        </div>

        {/* Layout Interactivo: Opciones + Resumen Dinámico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Lado Izquierdo: Selección interactiva */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Paso 1: Seleccionar Servicio */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Paso 1 · Selecciona el Servicio
                </span>
                <span className="text-xs text-slate-400">6 opciones especializadas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {calculatorOptions.services.map((srv) => {
                  const Icon = iconMap[srv.icon] || Code2;
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
                        isSelected
                          ? 'border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 text-slate-900 dark:text-white shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className={`p-2 rounded-lg mt-0.5 ${
                        isSelected
                          ? 'bg-sky-500 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-semibold truncate leading-tight">
                          {srv.name}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                          {srv.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Escala / Alcance del Proyecto */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Paso 2 · Alcance o Escala
                </span>
                <span className="text-xs text-slate-400">Dimensión del requerimiento</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {calculatorOptions.scopes.map((scope) => {
                  const isSelected = selectedScopeId === scope.id;
                  return (
                    <button
                      key={scope.id}
                      type="button"
                      onClick={() => setSelectedScopeId(scope.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 text-slate-900 dark:text-white shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs sm:text-sm font-bold">{scope.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {scope.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 3: Componentes Adicionales / Addons */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Paso 3 · Servicios Complementarios Opcionales
                </span>
                <span className="text-xs text-slate-400">Selección múltiple</span>
              </div>

              <div className="space-y-2.5">
                {calculatorOptions.addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-emerald-500/70 bg-emerald-50/60 dark:bg-emerald-950/30 text-slate-900 dark:text-white'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white/40 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addon.id)}
                          className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
                        />
                        <span className="text-xs sm:text-sm font-medium">{addon.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          +${addon.price} USD
                        </span>
                        {addon.days > 0 && (
                          <span className="text-[10px] text-slate-400 block">+{addon.days} día</span>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Lado Derecho: Tarjeta Dinámica de Cotización Resumida */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Resumen Estimado
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Propuesta Preliminar
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                  <Calculator className="w-6 h-6" />
                </div>
              </div>

              {/* Detalle del servicio configurado */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 text-slate-600 dark:text-slate-300">
                  <span>Servicio Principal:</span>
                  <strong className="text-slate-900 dark:text-white text-right font-semibold">
                    {currentService.name}
                  </strong>
                </div>

                <div className="flex items-center justify-between py-1 text-slate-600 dark:text-slate-300">
                  <span>Alcance / Complejidad:</span>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium text-xs">
                    {currentScope.name}
                  </span>
                </div>

                <div className="flex items-start justify-between py-1 text-slate-600 dark:text-slate-300">
                  <span>Extras Seleccionados:</span>
                  <span className="text-right text-slate-700 dark:text-slate-300 font-medium">
                    {selectedAddons.length > 0 ? `${selectedAddons.length} complementos` : 'Sin extras'}
                  </span>
                </div>
              </div>

              {/* Métricas Estimadas de Inversión y Plazo */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/50 dark:from-slate-800/60 dark:to-slate-800/30 border border-sky-100 dark:border-slate-700/60 grid grid-cols-2 gap-4 text-center">
                <div className="border-r border-slate-200 dark:border-slate-700 pr-2">
                  <div className="flex items-center justify-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Inversión Ref.</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    ${estimatedPrice}
                    <span className="text-xs text-slate-400 font-normal ml-1">USD</span>
                  </div>
                </div>

                <div className="pl-2">
                  <div className="flex items-center justify-center space-x-1 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-sky-500" />
                    <span>Plazo Estimado</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    ~{estimatedDays}
                    <span className="text-xs text-slate-400 font-normal ml-1">días</span>
                  </div>
                </div>
              </div>

              {/* Nota de transparencia */}
              <div className="flex items-start space-x-2 text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl">
                <Info className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  Estimación referencial no vinculante. El valor final se ajusta formalmente tras definir los requerimientos técnicos específicos con Carlos.
                </span>
              </div>

              {/* Botón de Contacto por WhatsApp con datos precargados */}
              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2.5 py-4 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Cotización a WhatsApp</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}?subject=Cotización de Servicios TI - ${encodeURIComponent(currentService.name)}&body=${encodeURIComponent(whatsappMessage)}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                >
                  <span>Enviar por Correo Electrónico</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
