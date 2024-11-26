import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
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
  plugins: [
    // This plugin is for add the custom animation delay to the classes, because TailwindCSS doesn't have this feature
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),

    // This plugin is for add the custom animation duration to the classes, because TailwindCSS doesn't have this feature
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-duration": (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") }
      );
    }),
  ],
};

export default config;
