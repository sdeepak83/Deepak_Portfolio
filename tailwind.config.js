/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Bona Nova SC", "serif"],
        Sevillana: ["Sevillana", "cursive"],
        Libre: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
