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
        "polar": {
           100: "#4C566A",
           200: "#434C5E",
           300: "#3B4252",
           400: "#2E3440"
        },
        "frost": {
           100: "#8FBCBB",
           200: "#88C0D0",
           300: "#81A1C1",
           400: "#5E81AC"
        },
        "snow": {
           100: "#ECEFF4",
           200: "#E5E9F0",
           300: "#D8DEE9"
        },
       "red": "#BF6A6A",
       "orange": "#D08770",
       "yellow": "#EBCB8B",
       "green": "#A3BE8C",
       "purple": "#B48EAD" 
     },
    },
  },
}