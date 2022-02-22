module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: [
          'Helvetica Neue',
          'Arial',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Meiryo',
          'sans-serif',
        ],
      },
      colors: {
        'main-gray': '#e6e6e6',
        'main-black': '#484443',
        'sub-white': '#fcfcfc',
        accent: '#dec2d9',
      },
      screens: {
        'side-iPad': '1150px',
      },
    },
  },
  plugins: [],
};
