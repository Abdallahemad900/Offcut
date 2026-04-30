/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offcut-primary': '#2D5A27', // Forest Green
        'offcut-secondary': '#4A7C44', // Moss Green
        'offcut-accent': '#A8C69F', // Sage Green
        'offcut-earth': '#8B7355',
        'offcut-sand': '#D2B48C',
        'offcut-denim-light': '#89CFF0',
        'offcut-denim-dark': '#1560BD',
        'offcut-denim-indigo': '#2E5090',
        'offcut-green': '#556B2F',
        'offcut-cream': '#F8F9F5', // Light grey-green tint
        'offcut-dark': '#0D1A0D', // Very dark green
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
