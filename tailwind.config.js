/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',   // telefoni grandi
      md: '768px',   // tablet verticali
      lg: '1200px',  // desktop piccoli (NON più tablet)
      xl: '1440px',  // desktop standard
      '2xl': '1920px', // monitor grandi
    },
    extend: {
      fontFamily: {
        corsivo: ["Qwitcher Grypen", "cursive"],
      },
    },
  },
  plugins: [],
}
