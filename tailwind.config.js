export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#ffffff',
            dark: '#0b1020',
          },
          secondary: "#111827",
          accent: {
            light: '#374151',
            dark: '#e5e7eb',
          },
          brand: {
            pink: '#ec4899',
            purple: '#8b5cf6',
            blue: '#3b82f6',
            cyan: '#22d3ee',
            lime: '#84cc16',
            amber: '#f59e0b',
            orange: '#F4991A',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          blob: {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '100%': { transform: 'translate(0px, 0px) scale(1)' },
          },
        },
        animation: {
          'gradient-x': 'gradient-x 15s ease infinite',
          blob: 'blob 18s ease-in-out infinite',
        }
      },
    },
    plugins: [],
  }
