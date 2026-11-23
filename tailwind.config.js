/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#070a12',
        cardBg: '#0f172a',
        neonBlue: '#38bdf8',
        neonPurple: '#a855f7',
      },
    },
  },
  plugins: [],
}
