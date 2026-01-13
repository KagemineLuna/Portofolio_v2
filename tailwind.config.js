export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "amoled-black": "#000000",
        "amoled-white": "#ffffff",
        "neon-purple": "#a855f7",
        "dark-purple": "#581c87",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
