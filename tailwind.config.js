module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Customize your colors here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};