/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 2s',
        'fade-in-right': 'fade-in-right 2s'
      },
      size: {
        setupInputWidth: "250px",
      },
    },
    colors: {
      // Configure your color palette here
      landing: {
        primary: "#191825",
        secondary: "#865DFF",
        third: "#E384FF",
        fourth: "#E384FF",
      },
      gray: {
        600: "#606064",
        500: "#8B8B8D",
        400: "#A5A5AF",
        300: "#D9D9D9",
        200: "#F1F1F1",
        100: "#F3F3F3",
        20: "#92929261",
      },
      blue: {
        60: "#A5A6F6",
        70: "#5D5FEF",
        80: "#7879F1",
        100: "#5D5FEF",
      },
      green: {
        60: "#57BC90",
        70: "#51AA83",
      },
      white: {
        100: "#fff",
        50: "whitesmoke",
        30: "#f6f6f6",
      },
      violet: {
        20: "rgba(165, 166, 246, 0.5)",
        10: "rgba(165, 166, 246, 0.25)",
        60: "rgba(165, 166, 246, 1)",
      },
    },
  },
  plugins: [],
};
