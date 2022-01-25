module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('pattern.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
