import { create } from "@storybook/theming";

const COLOR_PRIMARY = "#0369a1";
const COLOR_DARK = "#0a0a0a";
const COLOR_LIGHT = "#ededed";

export default create({
  base: "dark",

  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "@magnidev-org/ui-react",
  brandUrl: "https://magnideveloper.com/productos/ui-react",
  brandTarget: "_blank",

  colorPrimary: COLOR_PRIMARY,

  appBg: COLOR_DARK,
  appContentBg: COLOR_DARK,
  appPreviewBg: COLOR_DARK,
  appBorderColor: "#262626",
  appBorderRadius: 20,

  textColor: COLOR_LIGHT,

  barBg: COLOR_DARK,
  barSelectedColor: COLOR_PRIMARY,
  barHoverColor: COLOR_PRIMARY,
});
