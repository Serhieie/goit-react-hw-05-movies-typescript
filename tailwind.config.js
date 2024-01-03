/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        headerBgColor: '#3f51b5',
        hoverColor: '#303f9f',
        bgColorOfMainTitle: 'hsla(226, 87%, 66%, 0.2)',
      },
      screens: {
        lg: { min: '767px', max: '1023px' },
        md: { max: '767px' },
        sm: { max: '519px' },
        ssm: { max: '375px' },
        sm2: { min: '520px', max: '767px' },
        largeScreen: { min: '1399px' },
        extraLargeScreen: { min: '1540px' },
      },
      fontFamily: {
        h1Font: 'Marcellus, sans-serif',
        searchP: 'Lemon, serif',
        errorFont: 'Bebas, sans-serif',
        pixel: 'Pixelify Sans, sans-serif',
      },
      boxShadow: {
        shadowIn: 'inset 0 0 8px 6px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
};
