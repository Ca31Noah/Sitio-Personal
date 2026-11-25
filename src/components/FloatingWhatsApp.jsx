import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '../data/portfolioData';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 shadow-lg text-xs font-semibold text-slate-700 dark:text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>¿Necesitas una solución TI?</span>
            <button onClick={() => setShowTooltip(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ml-1" aria-label="Cerrar sugerencia"><X className="w-3 h-3" /></button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
