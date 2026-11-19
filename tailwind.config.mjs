/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        iron: {
          950: '#121215', // Background Principal
          900: '#16161a',
          850: '#1C1C21', // Fondo de Tarjetas
          800: '#23232a',
          700: '#2E2E36', // Bordes
          600: '#3f3f4a',
          400: '#71717a',
          300: '#A1A1AA', // Texto Secundario
          100: '#E4E4E7',
          50: '#F4F4F5',  // Texto Principal (Acero claro)
        },
        forge: {
          500: '#EA580C', // Acento Fragua
          400: '#F97316', // Hover
          300: '#FB923C',
          600: '#C2410C',
          900: '#431407',
        },
        cad: {
          cyan: '#38BDF8',
          blue: '#0EA5E9',
          amber: '#F59E0B',
          line: '#3B82F6',
          dim: 'rgba(56, 189, 248, 0.25)',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': 'radial-gradient(rgba(234, 88, 12, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spark': 'spark 2s ease-in-out infinite alternate',
      },
      keyframes: {
        spark: {
          '0%': { filter: 'drop-shadow(0 0 4px rgba(234, 88, 12, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 16px rgba(249, 115, 22, 0.9))' },
        }
      }
    },
  },
  plugins: [],
};
