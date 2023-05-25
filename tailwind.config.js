/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ms': '320px',
      'mm': '375px',
      'ml': '425px',
      
      'xs': '320px',
      'sm': '640px',
      'md': '960px',
      'lg': '1920px'
    }
  },
  plugins: [],
};
