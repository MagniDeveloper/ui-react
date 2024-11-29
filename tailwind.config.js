/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: "#0369a1",
        dark: "#0a0a0a",
        light: "#ededed",
        danger: "#A30015",
        warning: "#d97706",
      },
    },
  },
};
