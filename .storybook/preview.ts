import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../src/assets/styles/styles.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: "black" },
    light: { ...themes.normal, appBg: "white" },
    current: "light",
  },
};

export default preview;
