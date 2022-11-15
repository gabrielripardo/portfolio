/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',      

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#c4c4cc',
        100: '#E1E1E6',        
      },

      cyan: {
        300: '#81D8F7',
        500: '#61DAFB'
      },

    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
