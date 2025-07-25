/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0',
          300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b',
          600: '#475569', 700: '#334155', 800: '#1e293b',
          900: '#0f172a', 950: '#080b14'
        },
        'midnight': {
          50: '#f0f4ff', 100: '#e0e7ff', 200: '#c7d2fe',
          300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1',
          600: '#4f46e5', 700: '#4338ca', 800: '#3730a3',
          900: '#1e1b4b', 950: '#0d0a1f'
        },
        'electric': {
          50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc',
          300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4',
          600: '#0891b2', 700: '#0e7490', 800: '#155e75',
          900: '#164e63', 950: '#083344'
        },
        'amber-glow': {
          400: '#fbbf24', 500: '#f59e0b', 600: '#d97706'
        },
        'emerald-bright': {
          400: '#34d399', 500: '#10b981', 600: '#059669'
        },
        'coral': {
          400: '#f87171', 500: '#ef4444', 600: '#dc2626'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
