export function getPadding() {
  return ({ padding = [], theme }) => {
    return padding.map((item) => `${item * theme.step}px`).join(" ");
  };
}

export function getStep(defaultStep = 1) {
  return ({ step = defaultStep, theme }) => {
    return `${step * theme.step}px`;
  };
}

export function getSize(sizes = {}) {
  const { small, large } = sizes;

  return ({ size }) => {
    switch (size) {
      case "small":
        return small;
      case "large":
        return large;
      default:
        return;
    }
  };
}

export function getThemeValue(propName, valueName, defaultValue) {
  return ({ theme }) => theme[propName][valueName] || defaultValue;
}
