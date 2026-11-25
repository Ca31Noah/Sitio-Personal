import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function IntroSplash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-50 dark:bg-[#0b0f19] overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-sky-400/20 via-indigo-400/15 to-teal-400/10 blur-3xl"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: [0.7, 1.1, 1], opacity: [0, 1, 0.7] }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      />
      <div className="relative text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6"
        >
          <Logo className="w-20 h-20 sm:w-24 sm:h-24" showText={false} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            NOAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-teal-500">DEV</span>
          </div>
          <div className="mt-2 text-sm sm:text-base font-semibold tracking-[0.28em] uppercase text-slate-500 dark:text-slate-400">
            Soluciones IT
          </div>
        </motion.div>

        <motion.div
          className="mt-8 mx-auto h-1 w-40 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-teal-500"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, delay: 0.55, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}