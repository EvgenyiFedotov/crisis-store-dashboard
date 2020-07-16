import { css } from "styled-components";

const getHoverCss = (hoverCss) => css`
  &:hover {
    ${hoverCss}
  }
`;

export function getHover(hoverCss, defaultHover = true) {
  return ({ hover = defaultHover }) =>
    hover ? getHoverCss(hoverCss) : undefined;
}
