/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      screens: {
        xl: "1080px",
      },
      padding: {
        DEFAULT: "24px",
      },
    },
    extend: {
      fontSize: {
        body: "14px",
      },
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        primary: {
          green: "hsl(163, 72%, 41%)",
          red: "hsl(356, 69%, 56%)",
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          instagram: "linear-gradient:(hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
          youtube: "hsl(348, 97%, 39%)",
        },
        dark: {
          hover: "#333A56",
          "special-bg": "#20222F",
          bg: "#1D2029",
          "top-bg": "hsl(232, 19%, 15%)",
          "card-bg": "hsl(228, 28%, 20%)",
          "main-text": "hsl(228, 34%, 66%)",
          "support-text": "#939CC7",
          toggle: "hsl(228, 28%, 20%)",
        },
        light: {
          "bg-toggle": "hsl(230, 22%, 74%)",
          toggle: "#fff",
          hover: "#E1E3F0",
          bg: "hsl(0, 0%, 100%)",
          "top-bg": "hsl(225, 100%, 98%)",
          "card-bg": "hsl(227, 47%, 96%)",
          "main-text": "hsl(228, 12%, 44%)",
          "support-text": "hsl(228, 12%, 44%)",
        },
      },
    },
  },
  plugins: [],
};
