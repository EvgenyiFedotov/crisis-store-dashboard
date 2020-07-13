import { themeBase } from "./base";

export const themeDark = {
  ...themeBase,
  colors: {
    text: "#f7faff",
    background: "#14181f",
    dividerLine: "#f7faff",
    primary: "#009688",
    info: "#00bcd4",
    leftMenuItem: {
      background: "#00968800",
      color: "#f7faff",
      hover: { background: "#009688", color: "#14181f" },
      active: { background: "#009688", color: "#14181f" },
    },
    packageCard: {
      background: "#1e232b",
      border: "#242b33",
      hover: { background: "#242b33" },
    },
  },
};
