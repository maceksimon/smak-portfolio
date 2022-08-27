const colors = require("tailwindcss/colors");

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
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  content: ["content/**/*.{md,yml,json,json5,csv,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.zinc,
        pink: pink,
        blue: colors.sky,
      },
      typography: ({ theme }) => ({
        primary: {
          css: {
            "--tw-prose-body": theme("colors.gray[800]"),
            "--tw-prose-headings": theme("colors.black[900]"),
            "--tw-prose-lead": theme("colors.blue[700]"),
            "--tw-prose-links": theme("colors.blue[900]"),
            "--tw-prose-bold": theme("colors.orange[700]"),
            "--tw-prose-counters": theme("colors.blue[600]"),
            "--tw-prose-bullets": theme("colors.blue[400]"),
            "--tw-prose-hr": theme("colors.blue[300]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.blue[300]"),
            "--tw-prose-captions": theme("colors.gray[700]"),
            "--tw-prose-code": theme("colors.gray[900]"),
            "--tw-prose-pre-code": theme("colors.gray[100]"),
            "--tw-prose-pre-bg": theme("colors.gray[900]"),
            "--tw-prose-th-borders": theme("colors.blue[300]"),
            "--tw-prose-td-borders": theme("colors.blue[200]"),
            "--tw-prose-invert-body": theme("colors.gray[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.blue[300]"),
            "--tw-prose-invert-links": theme("colors.blue[300]"),
            "--tw-prose-invert-bold": theme("colors.orange[300]"),
            "--tw-prose-invert-counters": theme("colors.blue[400]"),
            "--tw-prose-invert-bullets": theme("colors.blue[600]"),
            "--tw-prose-invert-hr": theme("colors.blue[700]"),
            "--tw-prose-invert-quotes": theme("colors.gray[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.blue[700]"),
            "--tw-prose-invert-captions": theme("colors.gray[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.blue[600]"),
            "--tw-prose-invert-td-borders": theme("colors.blue[700]"),
          },
        },
      }),
      animation: {
        shake: "shake 1s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 80%": { transform: "translate3d(2px, 0, 0)" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0, 0)" },
          "40%, 60%": { transform: "translate3d(4px, 0, 0)" },
        },
      },
    },
  },
};
