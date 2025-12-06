/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#2b2b2b',
          secondary: '#3a3a3a',
          border: '#505050',
        },
        light: {
          primary: '#ffffff',
          secondary: '#a0a0a0',
        },
        accent: {
          blue: '#4a9eff',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
