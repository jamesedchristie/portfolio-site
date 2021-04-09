const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      light: '0 1px 3px 0 rgba(180, 180, 250, 0.2), 0 1px 2px 0 rgba(180, 180, 250, 0.12)',
      none: 'none',
    },
    colors: {
      transparent: 'transparent', 
      current: 'current',
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      lightBlue: colors.lightBlue,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      trueGray: colors.trueGray,
      violet: colors.violet,
      warmGray: colors.warmGray,
      white: colors.white,
      yellow: colors.yellow,
      'layout-primary': 'rgb(233, 228, 215)',
      'layout-secondary': 'rgb(232, 220, 190)',
      'main-primary': 'rgba(232, 220, 190, 0.4)',
      'main-secondary': 'rgba(232, 220, 190, 0.73)',
      'main-accent': 'rgb(220, 177, 90)',
      'main-interact': 'rgb(168, 219, 204)' 
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
