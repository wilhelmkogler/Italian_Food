/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        piros: "#db2d2a",
        zold: "#0bb244",
      },
      fontFamily: {
        fancy: ['"Fascinate Inline"', 'cursive'],
        nicer: ['"Revalia"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}