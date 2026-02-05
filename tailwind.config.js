/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gfb: {
          amber: '#FBB03B',
          orange: '#C67E22',
          silver: '#E6E7E8',
          black: '#000000',
        },
        primary: {
          DEFAULT: '#D68C23',
          hover: '#C67E22',
          dark: '#A56D1A',
        },
        secondary: {
          DEFAULT: '#333333',
          hover: '#2D2D2D',
          dark: '#272727',
        },
        text: {
          DEFAULT: '#1A1A1A',
          muted: '#4A4A4A',
          light: '#6B6B6B',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F5F5',
        },
        dark: {
          DEFAULT: '#121212',
          hover: '#0E0E0E',
          border: '#2A2A2A',
        },
        accent: {
          DEFAULT: '#2C3E50',
          hover: '#253445',
          dark: '#1E2A3A',
        },
        navy: {
          900: '#121212', // Dark Charcoal (logo background)
          800: '#1A1A1A',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251, 176, 59, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(251, 176, 59, 0.6)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'bounce-slow': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'layered': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(251, 176, 59, 0.1)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(251, 176, 59, 0.15)',
        'deep': '0 35px 60px -15px rgba(0, 0, 0, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(251, 176, 59, 0.2)',
      }
    },
  },
  plugins: [],
}