import { css } from "styled-components";

export function getStep(defaultStep = 1) {
  return ({ step = defaultStep, theme }) => `${step * theme.step}px`;
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

// Added
function getValuesByStep(values = [], theme, defaultStep = 0) {
  const calcStep = getStep(defaultStep);

  return values.map((item) => calcStep({ step: item, theme })).join(" ");
}
