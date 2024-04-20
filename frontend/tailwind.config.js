/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#09314f',
        'blue-light': '#4ce8fa',
      },
    },
  },
  plugins: [],
}

