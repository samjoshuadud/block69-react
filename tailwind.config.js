/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fill-coffee': 'fillCoffee 2s ease-in-out infinite', //animation 
      },
      keyframes: {
        fillCoffee: {
          '0%, 100%': { height: '0%' }, // keyframes for the animation
          '50%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
};
