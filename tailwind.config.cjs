/* eslint-disable import/no-unused-modules */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {},
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#f8b09f',
      accent: '#ef4f29',
      red: '#ff0000',
      primary: '#496a62',
      secondary: '#f8f8f5',
      gray: '#bdbdbd',
      'gray-dark': '#333',
      'gray-alt': '#bfbfbf',
      'gray-light': '#efeef1',
      black: '#0c0c0c',
      'black-alt': '#222',
      white: '#fff',
    },
    container: {
      center: true,
      screens: {
        sm: '475px',
        md: '720px',
        lg: '920px',
        xl: '1180px',
        xxl: '1180px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
      xxl: '1366px',
    },
    fontFamily: {
      body: ['"Poppins"', 'sans-serif'],
      sans: ['"Arial"', 'sans-serif'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
      '7xl': '4rem',
    },
  },
  plugins: [],
};
