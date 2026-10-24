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
        web3: {
          dark: '#080c14',
          darker: '#04070c',
          card: '#0d1322',
          cardHover: '#131c31',
          cardBorder: '#1c2842',
          borderSubtle: 'rgba(255, 255, 255, 0.08)',
          cyan: '#06b6d4',
          cyanGlow: 'rgba(6, 182, 212, 0.25)',
          violet: '#8b5cf6',
          violetGlow: 'rgba(139, 92, 246, 0.25)',
          emerald: '#10b981',
          emeraldGlow: 'rgba(16, 185, 129, 0.25)',
          amber: '#f59e0b',
          rose: '#f43f5e',
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 40%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
