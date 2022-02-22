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
        'main-bg': '#e6e6e6',
        'main-text': '#484443',
        'sub-bg': '#fcfcfc',
        accent: '#dec2d9',
      },
    },
  },
  plugins: [],
};
