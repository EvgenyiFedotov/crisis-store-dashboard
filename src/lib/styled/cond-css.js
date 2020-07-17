import { css } from "styled-components";

export const getHoverStatic = (hoverCss) => css`
  &:hover {
    ${hoverCss}
  }
`;

export const getActiveStatic = (activeCss) => css`
  &:active {
    ${activeCss}
  }
`;

export const getFocusStatic = (focusCss) => css`
  &:focus {
    ${focusCss}
  }
`;

export function getHover(hoverCss, defaultHover = true) {
  return ({ hover = defaultHover }) =>
    hover ? getHoverStatic(hoverCss) : undefined;
}
