import { css } from "styled-components";

export function getPadding(defaultPadding = []) {
  return ({ padding = defaultPadding, theme }) => {
    const paddigString = padding
      .map((item) => `${item * theme.step}px`)
      .join(" ");

    return css`
      padding: ${paddigString};
    `;
  };
}

export function getStep(defaultStep = 1) {
  return ({ step = defaultStep, theme }) => {
    return `${step * theme.step}px`;
  };
}

export function getSize(sizes = {}) {
  return ({ size }) => {
    switch (size) {
      case "small":
        return sizes.small;
      case "large":
        return sizes.large;
      default:
        return;
    }
  };
}

export function getThemeValue(arg0, cb = (value) => value) {
  if (typeof arg0 === "function") {
    return ({ theme }) => arg0(theme);
  } else if (typeof arg0 === "string") {
    return ({ theme }) => cb(theme[arg0]);
  }

  return () => {};
}

export function getFlexPosition() {
  return ({ justifyContent, alignItems }) => css`
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
}

export function getColorByType(colors = {}) {
  return ({ type }) => {
    switch (type) {
      case "primary":
        return colors.primary;
      case "info":
        return colors.info;
      default:
        return;
    }
  };
}

export function getMargin(defaultMargin = []) {
  return ({ margin = defaultMargin, theme }) => {
    const marginString = margin
      .map((item) => `${item * theme.step}px`)
      .join(" ");

    return css`
      margin: ${marginString};
    `;
  };
}

export function getHover(hoverCss, defaultHover = true) {
  return ({ hover = defaultHover }) => {
    if (hover) {
      return css`
        &:hover {
          ${hoverCss}
        }
      `;
    }
  };
}
