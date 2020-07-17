import { css } from "styled-components";
import { tv } from "./theme-value";

export function getStepStatic(step = 1) {
  return ({ theme }) => `${step * theme.step}px`;
}

export function getStep(defaultStep = 1) {
  return ({ step = defaultStep, theme }) => getStepStatic(step)({ theme });
}

export function getPadding(defaultPadding = []) {
  return ({ padding = defaultPadding, theme }) => css`
    padding: ${getValuesByStep(padding, theme)};
  `;
}

export function getMargin(defaultMargin = []) {
  return ({ margin = defaultMargin, theme }) => css`
    margin: ${getValuesByStep(margin, theme)};
  `;
}

export function getFlexPosition(defaultValues = {}) {
  return ({
    justifyContent = defaultValues.justifyContent,
    alignItems = defaultValues.alignItems,
  }) => css`
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
}

export function getOutline(colorPath) {
  return (props) => css`
    box-shadow: 0px 0px 0px 4px ${tv(colorPath)(props)}50;
  `;
}

// Added
function getValuesByStep(values = [], theme, defaultStep = 0) {
  return values.map((item) => getStepStatic(item)({ theme })).join(" ");
}
