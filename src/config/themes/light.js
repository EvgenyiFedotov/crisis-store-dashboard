import { themeBase } from "./base";

export const themeLight = {
  ...themeBase,
  colors: {
    text: "#14181f",
    background: "#f7faff",
    dividerLine: "#14181f",
    primary: "#009688",
    info: "#00bcd4",
    leftMenuItem: {
      color: "#14181f",
      hover: { background: "#009688", color: "#f7faff" },
      active: { background: "#009688", color: "#f7faff" },
    },
    packageCard: {
      background: "#e7ebf1",
      border: "#dce1e8",
      hover: { background: "#dce1e8" },
    },
  },
};
