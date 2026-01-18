/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // --- Custom Colors ---
      colors: {
        "amoled-black": "#000000",
        "amoled-white": "#ffffff",
        "neon-purple": "#a855f7",
        "dark-purple": "#581c87",
      },
      // --- Custom Fonts ---
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // --- Animations ---
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'shooting-star': 'shooting-star 2s linear infinite',
      },
      // --- Keyframes ---
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'shooting-star': {
          '0%': { 
            transform: 'rotate(-45deg) translateX(0)', 
            opacity: '1',
            width: '0px' 
          },
          '70%': { 
            opacity: '1' 
          },
          '100%': { 
            transform: 'rotate(-45deg) translateX(-1000px)', 
            opacity: '0',
            width: '150px'},
        },
      },
    },
  },
  plugins: [],
};
