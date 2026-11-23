import React from 'react';

export default function Logo({ className = "w-9 h-9", showText = true, subtitle = "INGENIERO EN TI" }) {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer select-none">
      <div className={`relative flex items-center justify-center ${className} transition-transform duration-300 group-hover:scale-105`}>
        {/* Glow suave */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/30 to-indigo-500/30 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300" />
        
        {/* SVG Isotipo Oficial </N */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full p-1.5 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm group-hover:border-sky-400 dark:group-hover:border-sky-500 transition-colors"
        >
          <defs>
            <linearGradient id="cnGradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
          
          {/* C: Bracket < */}
          <path
            d="M 36 28 L 18 50 L 36 72"
            stroke="url(#cnGradLogo)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Barra de sintaxis / */}
          <line
            x1="45"
            y1="73"
            x2="57"
            y2="27"
            stroke="#38BDF8"
            strokeWidth="7"
            strokeLinecap="round"
          />
          
          {/* N */}
          <path
            d="M 66 72 L 66 28 L 86 72 L 86 28"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-800 dark:text-slate-100"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold tracking-tight text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
            CARLOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">NOA</span>
          </span>
          <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 -mt-0.5">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
