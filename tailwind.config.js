/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "olive": "#A78C2D",
        "olive-silver": "#C4B27B",
        "san-marino": "#4372B1",
        "astronaut": "#2B4971",
        "navy": "#172A44",
      },
      backgroundImage: {
        "homeInit": "url('/homeInit.jpg')",
      },
      fontFamily: {
        "dm-sans": "DM Sans",
      },
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      }
    },
  },
  plugins: [],
}