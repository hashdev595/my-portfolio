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
            dark: '#1a1a1a',
          },
          secondary: "#1f1f1f",
          accent: {
            light: '#2d3748',
            dark: '#e2e8f0',
          }
        }
      },
    },
    plugins: [],
  }
