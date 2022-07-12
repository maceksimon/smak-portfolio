const colors = require('tailwindcss/colors')

const pink = {
  50: "#ffe6f2",
  100: "#ffcde6",
  200: "#ff9acc",
  300: "#ff68b3",
  400: "#ff3599",
  500: "#ff0380",
  600: "#cc0266",
  700: "#99024d",
  800: "#660133",
  900: "#33011a",
};

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone,
        pink: pink
      }
    }
  }
}
